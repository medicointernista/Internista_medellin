export interface SemanticTriple {
  subject: string;
  predicate: string;
  object: string;
  confidence: number;
  entityTypes?: {
    subject: string[];
    object: string[];
  };
}

export interface Entity {
  id: string;
  label: string;
  types: string[];
  aliases?: string[];
  description?: string;
  properties?: Record<string, unknown>;
}

export interface EntityRelation {
  entity1: string;
  entity2: string;
  relation: string;
  context?: string;
  weight?: number;
}

export interface ContentChunk {
  id: string;
  content: string;
  startIndex: number;
  endIndex: number;
  tokens: number;
  entities: Entity[];
  triples: SemanticTriple[];
  metadata?: {
    heading?: string;
    section?: string;
    type?: 'paragraph' | 'heading' | 'list' | 'table' | 'merged';
  };
}

export interface SchemaMarkupValidation {
  isValid: boolean;
  type: string;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  completeness: number;
}

export interface ValidationError {
  field: string;
  message: string;
  severity: 'critical' | 'high' | 'medium';
}

export interface ValidationWarning {
  field: string;
  message: string;
  recommendation: string;
}

export interface AEOMetadata {
  entities: Entity[];
  relations: EntityRelation[];
  chunks: ContentChunk[];
  schemaValidation: SchemaMarkupValidation;
  readability: {
    fleschKincaid: number;
    sentences: number;
    words: number;
    avgWordsPerSentence: number;
  };
}

export interface MedicalServiceData {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  conditions: string[];
  benefits: string[];
  relatedServices: string[];
  keywords: string[];
  url: string;
  image?: string;
  duration?: string;
  price?: string;
}
