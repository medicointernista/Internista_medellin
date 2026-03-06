import {
  SemanticTriple,
  Entity,
  EntityRelation,
  ContentChunk,
} from './types';

const MEDICAL_ENTITIES: Record<string, string[]> = {
  CONDITIONS: [
    'Diabetes',
    'Presión Alta',
    'Hipertensión',
    'Enfermedades del Corazón',
    'Cardiopatía',
    'Sobrepeso',
    'Obesidad',
    'Problemas de Tiroides',
    'Hipotiroidismo',
    'Hipertiroidismo',
    'Enfermedades de los Riñones',
    'Insuficiencia Renal',
    'Dolor Crónico',
    'Migrañas',
    'Enfermedades Pulmonares',
    'EPOC',
    'Asma',
    'Artritis',
    'Artrosis',
    'Osteoporosis',
    'Gastritis',
    'Reflujo',
    'Anemia',
    'Leucemia',
    'Linfoma',
    'Depresión',
    'Ansiedad',
    'Trastorno Bipolar',
    'Esquizofrenia',
  ],
  PROCEDURES: [
    'Consulta',
    'Evaluación',
    'Diagnóstico',
    'Tratamiento',
    'Ecocardiograma',
    'Electrocardiograma',
    'Holter',
    'MAPA',
    'Infiltración',
    'Viscosuplementación',
    'Ácido Hialurónico',
    'PRP',
    'Bioreguladores',
    'Corticoides',
  ],
  BODY_PARTS: [
    'Corazón',
    'Pulmones',
    'Riñones',
    'Hígado',
    'Páncreas',
    'Estómago',
    'Intestinos',
    'Tiroides',
    'Rodilla',
    'Cadera',
    'Columna',
    'Cerebro',
    'Sangre',
    'Articulaciones',
  ],
  MEDICAL_PROFESSIONALS: [
    'Cardiólogo',
    'Internista',
    'Neumólogo',
    'Gastroenterólogo',
    'Reumatólogo',
    'Psiquiatra',
    'Endocrinólogo',
    'Hematólogo',
    'Doctor',
    'Médico',
  ],
};

const RELATION_PATTERNS: Array<{ pattern: RegExp; relation: string }> = [
  {
    pattern: /trata(?:miento)?.*(?:de|para)\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'treats',
  },
  {
    pattern: /diagnóstico.*(?:de|para)\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'diagnoses',
  },
  {
    pattern: /síntomas?\s+(?:de|para)\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'has_symptom',
  },
  {
    pattern: /causa(?:das?)?\s+por\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'caused_by',
  },
  {
    pattern: /afecta\s+(?:a|los?)\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'affects',
  },
  {
    pattern: /relacionada?(?:\s+con)?\s+(.+?)(?:\.|,|;|y|$)/i,
    relation: 'related_to',
  },
];

export class SemanticExtractor {
  private entityIndex: Map<string, Entity> = new Map();
  private relationIndex: Map<string, EntityRelation[]> = new Map();

  extractEntities(text: string): Entity[] {
    const entities: Entity[] = [];
    const processedLabels = new Set<string>();

    for (const [type, terms] of Object.entries(MEDICAL_ENTITIES)) {
      for (const term of terms) {
        const regex = new RegExp(`\\b${term}s?\\b`, 'gi');
        let match;

        while ((match = regex.exec(text)) !== null) {
          const label = text.substring(match.index, match.index + match[0].length);

          if (!processedLabels.has(label.toLowerCase())) {
            const entity: Entity = {
              id: this.generateEntityId(label),
              label: label,
              types: [type],
              description: this.getEntityDescription(label, type),
            };

            entities.push(entity);
            processedLabels.add(label.toLowerCase());
            this.entityIndex.set(entity.id, entity);
          }
        }
      }
    }

    return entities;
  }

  extractRelations(text: string, entities: Entity[]): EntityRelation[] {
    const relations: EntityRelation[] = [];
    const entityLabels = entities.map(e => e.label.toLowerCase());

    for (const { pattern, relation } of RELATION_PATTERNS) {
      const matches = text.matchAll(pattern);

      for (const match of matches) {
        for (const entity of entities) {
          if (entity.label.toLowerCase() === entityLabels[0]) {
            relations.push({
              entity1: entity.id,
              entity2: match[1] || 'unknown',
              relation,
              context: match[0],
              weight: 0.8,
            });
          }
        }
      }
    }

    return relations;
  }

  extractTriples(text: string, entities: Entity[]): SemanticTriple[] {
    const triples: SemanticTriple[] = [];
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

    for (const sentence of sentences) {
      for (const entity of entities) {
        const entityRegex = new RegExp(`\\b${entity.label}\\b`, 'gi');

        if (entityRegex.test(sentence)) {
          for (const relation of this.relationIndex.get(entity.id) || []) {
            triples.push({
              subject: entity.label,
              predicate: relation.relation,
              object: relation.entity2,
              confidence: relation.weight || 0.7,
              entityTypes: {
                subject: entity.types,
                object: [],
              },
            });
          }
        }
      }
    }

    return triples;
  }

  generateSemanticGraph(text: string) {
    const entities = this.extractEntities(text);
    const relations = this.extractRelations(text, entities);
    const triples = this.extractTriples(text, entities);

    return {
      entities,
      relations,
      triples,
    };
  }

  private generateEntityId(label: string): string {
    return `entity_${label.toLowerCase().replace(/\s+/g, '_')}`;
  }

  private getEntityDescription(label: string, type: string): string {
    const descriptions: Record<string, Record<string, string>> = {
      CONDITIONS: {
        diabetes: 'Enfermedad endocrina caracterizada por niveles altos de glucosa',
        presión_alta:
          'Aumento de la presión arterial sistémica, también conocida como hipertensión',
        'enfermedades del corazón':
          'Conjunto de trastornos que afectan la estructura y función cardíaca',
        obesidad: 'Acumulación excesiva de grasa corporal que afecta la salud',
      },
      PROCEDURES: {
        consulta: 'Evaluación médica integral por un especialista',
        ecocardiograma: 'Ultrasonido del corazón para evaluar estructura y función',
        electrocardiograma: 'Registro de la actividad eléctrica del corazón',
        infiltración:
          'Inyección terapéutica en una articulación o tejido específico',
      },
      BODY_PARTS: {
        corazón: 'Órgano vital responsable de bombear sangre',
        pulmones: 'Órganos responsables del intercambio gaseoso',
        riñones: 'Órganos que filtran desechos y producen orina',
        rodilla: 'Articulación principal de la extremidad inferior',
      },
    };

    return (
      descriptions[type]?.[label.toLowerCase()] ||
      `Entidad médica: ${label}`
    );
  }
}

export function extractSemanticMetadata(text: string, heading?: string) {
  const extractor = new SemanticExtractor();
  const entities = extractor.extractEntities(text);
  const relations = extractor.extractRelations(text, entities);
  const triples = extractor.extractTriples(text, entities);

  return {
    entities,
    relations,
    triples,
    heading,
  };
}
