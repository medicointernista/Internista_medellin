import { useMemo } from 'react';
import {
  SchemaGenerator,
  SchemaValidator,
  ContentChunker,
  SemanticExtractor,
  type MedicalServiceData,
  type SchemaMarkupValidation,
  type ContentChunk,
  type SemanticTriple,
  type Entity,
} from '@/lib/aeo';

export function useSchemaGenerator(baseUrl?: string) {
  return useMemo(() => new SchemaGenerator(baseUrl), [baseUrl]);
}

export function useSchemaValidator() {
  return useMemo(() => new SchemaValidator(), []);
}

export function useContentChunker(chunkSize?: number) {
  return useMemo(() => new ContentChunker(chunkSize), [chunkSize]);
}

export function useSemanticExtractor() {
  return useMemo(() => new SemanticExtractor(), []);
}

export function useServiceSchema(service: MedicalServiceData) {
  const generator = useSchemaGenerator();

  return useMemo(() => generator.generateServiceSchema(service), [service, generator]);
}

export function useBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  const generator = useSchemaGenerator();

  return useMemo(() => generator.generateBreadcrumb(items), [items, generator]);
}

export function useSemanticAnalysis(text: string) {
  const extractor = useSemanticExtractor();

  return useMemo(
    () => ({
      entities: extractor.extractEntities(text),
      graph: extractor.generateSemanticGraph(text),
    }),
    [text, extractor]
  );
}

export function useContentChunking(
  text: string,
  options?: { strategy?: 'sentences' | 'paragraphs'; heading?: string }
) {
  const chunker = useContentChunker();

  return useMemo(
    () =>
      options?.strategy === 'sentences'
        ? chunker.chunkBySentences(text, { heading: options?.heading })
        : chunker.chunkByParagraphs(text, { heading: options?.heading }),
    [text, options, chunker]
  );
}

export function useValidateSchema(schema: Record<string, unknown>) {
  const validator = useSchemaValidator();

  return useMemo(() => validator.validate(schema), [schema, validator]);
}
