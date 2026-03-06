import { ContentChunk } from './types';
import { extractSemanticMetadata } from './semantic-extractor';

const DEFAULT_CHUNK_SIZE = 512;
const TOKEN_RATIO = 0.25;

export class ContentChunker {
  private chunkSize: number;

  constructor(chunkSize: number = DEFAULT_CHUNK_SIZE) {
    this.chunkSize = chunkSize;
  }

  estimateTokens(text: string): number {
    return Math.ceil(text.split(/\s+/).length * TOKEN_RATIO);
  }

  chunkByParagraphs(text: string, metadata?: { heading?: string; section?: string }): ContentChunk[] {
    const paragraphs = text
      .split(/\n\n+/)
      .filter(p => p.trim().length > 0);

    const chunks: ContentChunk[] = [];
    let currentIndex = 0;
    let chunkId = 0;

    for (const paragraph of paragraphs) {
      const tokens = this.estimateTokens(paragraph);
      const startIndex = currentIndex;
      const endIndex = currentIndex + paragraph.length;

      const semantic = extractSemanticMetadata(paragraph, metadata?.heading);

      const chunk: ContentChunk = {
        id: `chunk_${chunkId}`,
        content: paragraph.trim(),
        startIndex,
        endIndex,
        tokens,
        entities: semantic.entities,
        triples: semantic.triples,
        metadata: {
          heading: metadata?.heading,
          section: metadata?.section,
          type: 'paragraph',
        },
      };

      chunks.push(chunk);
      currentIndex = endIndex;
      chunkId++;
    }

    return chunks;
  }

  chunkBySentences(text: string, metadata?: { heading?: string; section?: string }): ContentChunk[] {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const chunks: ContentChunk[] = [];
    let buffer = '';
    let bufferTokens = 0;
    let currentIndex = 0;
    let chunkId = 0;

    for (const sentence of sentences) {
      const tokens = this.estimateTokens(sentence);

      if (bufferTokens + tokens > this.chunkSize && buffer.length > 0) {
        const semantic = extractSemanticMetadata(buffer, metadata?.heading);

        chunks.push({
          id: `chunk_${chunkId}`,
          content: buffer.trim(),
          startIndex: currentIndex - buffer.length,
          endIndex: currentIndex,
          tokens: bufferTokens,
          entities: semantic.entities,
          triples: semantic.triples,
          metadata: {
            heading: metadata?.heading,
            section: metadata?.section,
            type: 'paragraph',
          },
        });

        buffer = '';
        bufferTokens = 0;
        chunkId++;
      }

      buffer += sentence;
      bufferTokens += tokens;
      currentIndex += sentence.length;
    }

    if (buffer.length > 0) {
      const semantic = extractSemanticMetadata(buffer, metadata?.heading);

      chunks.push({
        id: `chunk_${chunkId}`,
        content: buffer.trim(),
        startIndex: currentIndex - buffer.length,
        endIndex: currentIndex,
        tokens: bufferTokens,
        entities: semantic.entities,
        triples: semantic.triples,
        metadata: {
          heading: metadata?.heading,
          section: metadata?.section,
          type: 'paragraph',
        },
      });
    }

    return chunks;
  }

  chunkByStructure(
    content: {
      heading?: string;
      body: string;
      subSections?: Array<{ heading: string; content: string }>;
    },
    options?: { strategy?: 'sentences' | 'paragraphs'; includeHeadings?: boolean }
  ): ContentChunk[] {
    const strategy = options?.strategy || 'paragraphs';
    const chunks: ContentChunk[] = [];

    if (options?.includeHeadings && content.heading) {
      const headingTokens = this.estimateTokens(content.heading);
      chunks.push({
        id: 'chunk_heading',
        content: content.heading,
        startIndex: 0,
        endIndex: content.heading.length,
        tokens: headingTokens,
        entities: [],
        triples: [],
        metadata: {
          heading: content.heading,
          type: 'heading',
        },
      });
    }

    const bodyChunks =
      strategy === 'sentences'
        ? this.chunkBySentences(content.body, {
            heading: content.heading,
            section: 'body',
          })
        : this.chunkByParagraphs(content.body, {
            heading: content.heading,
            section: 'body',
          });

    chunks.push(...bodyChunks);

    if (content.subSections) {
      for (const subSection of content.subSections) {
        const subChunks =
          strategy === 'sentences'
            ? this.chunkBySentences(subSection.content, {
                heading: subSection.heading,
                section: 'subsection',
              })
            : this.chunkByParagraphs(subSection.content, {
                heading: subSection.heading,
                section: 'subsection',
              });

        chunks.push(...subChunks);
      }
    }

    return chunks;
  }

  mergeChunks(chunks: ContentChunk[], maxTokens: number = 1024): ContentChunk[] {
    const merged: ContentChunk[] = [];
    let buffer: ContentChunk[] = [];
    let bufferTokens = 0;

    for (const chunk of chunks) {
      if (bufferTokens + chunk.tokens > maxTokens && buffer.length > 0) {
        merged.push(this.combineChunks(buffer));
        buffer = [];
        bufferTokens = 0;
      }

      buffer.push(chunk);
      bufferTokens += chunk.tokens;
    }

    if (buffer.length > 0) {
      merged.push(this.combineChunks(buffer));
    }

    return merged;
  }

  private combineChunks(chunks: ContentChunk[]): ContentChunk {
    const content = chunks.map(c => c.content).join(' ');
    const entities = Array.from(
      new Map(chunks.flatMap(c => c.entities).map(e => [e.id, e])).values()
    );
    const triples = chunks.flatMap(c => c.triples);

    return {
      id: chunks[0].id.replace(/chunk_\d+/, 'merged'),
      content: content.substring(0, 10000),
      startIndex: chunks[0].startIndex,
      endIndex: chunks[chunks.length - 1].endIndex,
      tokens: chunks.reduce((sum, c) => sum + c.tokens, 0),
      entities,
      triples,
      metadata: {
        heading: chunks[0].metadata?.heading,
        section: chunks[0].metadata?.section,
        type: 'merged',
      },
    };
  }
}

export function createContentChunks(
  text: string,
  options?: {
    strategy?: 'sentences' | 'paragraphs';
    chunkSize?: number;
    heading?: string;
  }
): ContentChunk[] {
  const chunker = new ContentChunker(options?.chunkSize);
  const strategy = options?.strategy || 'paragraphs';

  if (strategy === 'sentences') {
    return chunker.chunkBySentences(text, { heading: options?.heading });
  } else {
    return chunker.chunkByParagraphs(text, { heading: options?.heading });
  }
}
