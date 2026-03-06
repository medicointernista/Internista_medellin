# AEO (Advanced Entity Optimization) Implementation Guide

## Overview

AEO (Advanced Entity Optimization) es un sistema completo de optimización semántica para aplicaciones médicas que combina:

1. **Tripletas Semánticas** - Extracción automática de entidades, predicados y objetos
2. **Chunking de Contenido** - Fragmentación inteligente para IA generativa
3. **Schema Markup Validation** - Validación y generación de datos estructurados
4. **Semantic Extraction** - Análisis de relaciones y contexto médico

---

## 1. Arquitectura del Sistema

### Componentes Principales

```
src/lib/aeo/
├── types.ts                 # Tipos e interfaces
├── semantic-extractor.ts    # Extracción de entidades y relaciones
├── content-chunker.ts       # Fragmentación de contenido
├── schema-validator.ts      # Validación de Schema Markup
├── schema-generator.ts      # Generación de Schema Markup
├── services-data.ts         # Base de datos de servicios médicos
└── index.ts                 # Exportaciones públicas
```

### Tipos de Datos

#### SemanticTriple
```typescript
interface SemanticTriple {
  subject: string;        // Entidad sujeto (e.g., "Diabetes")
  predicate: string;      // Relación (e.g., "treats")
  object: string;         // Entidad objeto (e.g., "Medicina Interna")
  confidence: number;     // Confianza de la extracción (0-1)
  entityTypes?: {
    subject: string[];
    object: string[];
  };
}
```

#### ContentChunk
```typescript
interface ContentChunk {
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
    type?: 'paragraph' | 'heading' | 'list' | 'table';
  };
}
```

#### SchemaMarkupValidation
```typescript
interface SchemaMarkupValidation {
  isValid: boolean;
  type: string;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  completeness: number;  // Porcentaje (0-100)
}
```

---

## 2. Extracción de Tripletas Semánticas

### Uso Básico

```typescript
import { SemanticExtractor } from '@/lib/aeo';

const extractor = new SemanticExtractor();

const text = "La diabetes se trata con insulina y cambios en el estilo de vida.";

// Extraer entidades
const entities = extractor.extractEntities(text);
// Resultado:
// [
//   { id: "entity_diabetes", label: "Diabetes", types: ["CONDITIONS"] },
//   { id: "entity_insulina", label: "insulina", types: ["CONDITIONS"] }
// ]

// Extraer tripletas semánticas
const graph = extractor.generateSemanticGraph(text);
// Resultado:
// {
//   entities: [...],
//   relations: [...],
//   triples: [
//     {
//       subject: "Diabetes",
//       predicate: "treats",
//       object: "Insulina",
//       confidence: 0.8,
//       entityTypes: { subject: ["CONDITIONS"], object: ["PROCEDURES"] }
//     }
//   ]
// }
```

### Hook en React

```typescript
import { useSemanticAnalysis } from '@/hooks/use-aeo';

export function ConditionAnalyzer({ text }: { text: string }) {
  const { entities, graph } = useSemanticAnalysis(text);

  return (
    <div>
      <h3>Entidades Encontradas: {entities.length}</h3>
      <ul>
        {entities.map(entity => (
          <li key={entity.id}>
            {entity.label} - {entity.types.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Entidades Médicas Soportadas

- **CONDITIONS**: Diabetes, Presión Alta, Hipertensión, Enfermedades del Corazón, etc.
- **PROCEDURES**: Consulta, Evaluación, Diagnóstico, Ecocardiograma, etc.
- **BODY_PARTS**: Corazón, Pulmones, Riñones, Rodilla, etc.
- **MEDICAL_PROFESSIONALS**: Cardiólogo, Internista, Médico, etc.

---

## 3. Chunking de Contenido para IA Generativa

### Estrategias de Chunking

#### Por Párrafos (Defecto)

```typescript
import { ContentChunker } from '@/lib/aeo';

const chunker = new ContentChunker(512); // tokens aproximados

const chunks = chunker.chunkByParagraphs(
  "Párrafo 1...\n\nPárrafo 2...",
  { heading: "Sección Principal", section: "body" }
);
// Resultado: Array de ContentChunk con entidades semánticas
```

#### Por Oraciones

```typescript
const chunks = chunker.chunkBySentences(
  "Primera oración. Segunda oración. Tercera oración.",
  { heading: "Mi Título" }
);
```

#### Por Estructura (Recomendado)

```typescript
const chunks = chunker.chunkByStructure(
  {
    heading: "Diabetes Mellitus",
    body: "La diabetes es una enfermedad endocrina...",
    subSections: [
      {
        heading: "Síntomas",
        content: "Los síntomas incluyen..."
      },
      {
        heading: "Tratamiento",
        content: "El tratamiento depende del tipo..."
      }
    ]
  },
  { strategy: 'sentences', includeHeadings: true }
);
```

### Hook en React

```typescript
import { useContentChunking } from '@/hooks/use-aeo';

export function ContentAnalyzer({ content }: { content: string }) {
  const chunks = useContentChunking(content, {
    strategy: 'paragraphs',
    heading: 'Mi Contenido'
  });

  return (
    <div>
      {chunks.map(chunk => (
        <div key={chunk.id} className="chunk">
          <p>{chunk.content}</p>
          <small>Tokens: {chunk.tokens}</small>
          <small>Entidades: {chunk.entities.length}</small>
        </div>
      ))}
    </div>
  );
}
```

### Estimación de Tokens

```typescript
const chunker = new ContentChunker();

const text = "Este es un ejemplo de texto con varias palabras.";
const estimatedTokens = chunker.estimateTokens(text);
// Resultado: ~2 (25% de palabras)
```

### Merge de Chunks

Para combinar chunks pequeños en chunks más grandes:

```typescript
const smallChunks = chunker.chunkByParagraphs(text);
const mergedChunks = chunker.mergeChunks(smallChunks, 1024); // max 1024 tokens
```

---

## 4. Validación de Schema Markup

### Validar un Schema Individual

```typescript
import { SchemaValidator } from '@/lib/aeo';

const validator = new SchemaValidator();

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dr. Willmer Obregón",
  // ... rest of schema
};

const validation = validator.validate(schema);
// Resultado:
// {
//   isValid: true,
//   type: "LocalBusiness",
//   errors: [],
//   warnings: [{ field: "image", message: "...", recommendation: "..." }],
//   completeness: 85
// }
```

### Validar Múltiples Schemas

```typescript
const schemas = [schema1, schema2, schema3];
const validations = validator.validateMultiple(schemas);

// Generar reporte
const report = validator.generateReport(validations);
console.log(report);
```

### Validar HTML

```typescript
const htmlContent = `
  <script type="application/ld+json">
    ${JSON.stringify(schema)}
  </script>
`;

const validations = validator.validateStructuredData(htmlContent);
```

### Hook en React

```typescript
import { useValidateSchema } from '@/hooks/use-aeo';

export function SchemaValidator({ schema }) {
  const validation = useValidateSchema(schema);

  return (
    <div>
      <h3>Status: {validation.isValid ? '✅ Valid' : '❌ Invalid'}</h3>
      <p>Completeness: {validation.completeness}%</p>
      {validation.errors.map(error => (
        <div key={error.field} className="error">
          [{error.severity}] {error.field}: {error.message}
        </div>
      ))}
    </div>
  );
}
```

---

## 5. Generación Automática de Schema Markup

### Tipos de Schema Soportados

#### LocalBusiness

```typescript
import { SchemaGenerator } from '@/lib/aeo';

const generator = new SchemaGenerator('https://drwillmerobregon.com');

const localBusinessSchema = generator.generateLocalBusiness();
// Genera: Nombre, dirección, teléfono, horarios, ubicación geográfica
```

#### Service Schema

```typescript
import { getServiceById } from '@/lib/aeo';

const service = getServiceById('consulta-medicina-interna');
const serviceSchema = generator.generateServiceSchema(service);
// Genera: Nombre, descripción, proveedor, condiciones médicas tratadas
```

#### Breadcrumb Navigation

```typescript
const breadcrumbSchema = generator.generateBreadcrumb([
  { name: 'Home', url: '/' },
  { name: 'Servicios', url: '/servicios' },
  { name: 'Medicina Interna', url: '/servicios/consulta-medicina-interna' }
]);
```

#### FAQ Page

```typescript
const faqSchema = generator.generateFAQSchema([
  {
    question: "¿Qué es la diabetes?",
    answer: "La diabetes es una enfermedad endocrina..."
  },
  {
    question: "¿Cómo se trata?",
    answer: "El tratamiento incluye..."
  }
]);
```

#### Article Schema

```typescript
const articleSchema = generator.generateArticleSchema({
  headline: "Guía Completa de Diabetes",
  description: "Todo lo que necesitas saber sobre diabetes",
  content: "El contenido del artículo...",
  author: "Dr. Willmer Obregón",
  datePublished: new Date().toISOString(),
  image: "https://example.com/image.jpg"
});
```

#### Review/Rating Schema

```typescript
const reviewSchema = generator.generateReviewSchema({
  author: "Paciente Anónimo",
  rating: 5,
  content: "Excelente servicio médico, muy profesional.",
  datePublished: new Date().toISOString()
});

const aggregateRatingSchema = generator.generateAggregateRating(
  "Dr. Willmer Obregón",
  4.8,
  150 // número de reseñas
);
```

---

## 6. Servicios Médicos Centralizados

### Estructura de Datos

```typescript
import { getServiceById, getRelatedServices, MEDICAL_SERVICES } from '@/lib/aeo';

interface MedicalServiceData {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  conditions: string[];  // Condiciones que trata
  benefits: string[];
  relatedServices: string[];  // IDs de servicios relacionados
  keywords: string[];
  url: string;
  image?: string;
  duration?: string;
  price?: string;
}
```

### Funciones Helper

```typescript
// Obtener un servicio por ID
const service = getServiceById('consulta-medicina-interna');

// Obtener múltiples servicios
const services = getServicesByIds(['consulta-medicina-interna', 'cardiologia']);

// Obtener servicios por condición
const services = getServicesByCondition('Diabetes');

// Obtener servicios relacionados
const related = getRelatedServices('consulta-medicina-interna', 3);
```

---

## 7. Casos de Uso Prácticos

### 1. Página de Servicio Completa con Schema

```typescript
import Script from 'next/script';
import { getServiceById, createSchemaGenerator } from '@/lib/aeo';

export default function ServicePage() {
  const service = getServiceById('consulta-medicina-interna');
  const generator = createSchemaGenerator();

  const serviceSchema = generator.generateServiceSchema(service);
  const breadcrumbSchema = generator.generateBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Servicios', url: '/servicios' },
    { name: service.name, url: service.url }
  ]);

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Contenido de la página */}
    </>
  );
}
```

### 2. Análisis Semántico de Contenido

```typescript
import { useSemanticAnalysis, useContentChunking } from '@/hooks/use-aeo';

export function ContentOptimizer({ content }: { content: string }) {
  const { entities, graph } = useSemanticAnalysis(content);
  const chunks = useContentChunking(content, { strategy: 'sentences' });

  return (
    <div>
      <section>
        <h3>Análisis Semántico</h3>
        <p>Entidades encontradas: {entities.length}</p>
        <p>Relaciones identificadas: {graph.relations.length}</p>
        <p>Tripletas semánticas: {graph.triples.length}</p>
      </section>

      <section>
        <h3>Chunks para IA Generativa</h3>
        <p>Total de chunks: {chunks.length}</p>
        <p>Tokens totales: {chunks.reduce((sum, c) => sum + c.tokens, 0)}</p>
        {chunks.map(chunk => (
          <div key={chunk.id}>
            <p>{chunk.content.substring(0, 100)}...</p>
            <small>Tokens: {chunk.tokens} | Entidades: {chunk.entities.length}</small>
          </div>
        ))}
      </section>
    </div>
  );
}
```

### 3. Validación y Reporte de Schema

```typescript
import { SchemaValidator } from '@/lib/aeo';

const validator = new SchemaValidator();

const schemas = [
  generator.generateLocalBusiness(),
  generator.generateServiceSchema(service),
  generator.generateBreadcrumb([...])
];

const validations = validator.validateMultiple(schemas);
const report = validator.generateReport(validations);

// Guardar reporte
fs.writeFileSync('schema-report.md', report);
```

---

## 8. Mejores Prácticas

### ✅ Hacer

- **Validar schemas antes de publicar** - Usa SchemaValidator
- **Usar tripletas semánticas para contexto** - Mejora la comprensión por IA
- **Chunking estratégico** - Preserva contexto en cada fragmento
- **Centralizad datos de servicios** - Usa services-data.ts
- **Generar schema automáticamente** - Usa SchemaGenerator
- **Incluir metadatos en chunks** - Heading, section, type

### ❌ Evitar

- **Hardcodear schemas en cada página** - Usa generador
- **Ignorar validación de schema** - Afecta SEO y visibilidad
- **Chunks muy grandes** - Difíciles para IA procesar
- **Chunks muy pequeños** - Pierden contexto importante
- **Entidades duplicadas sin resolver** - Confunde relaciones
- **Schema incompleto** - Reduce completeness y visibilidad

---

## 9. Integración con Componentes React

### ServiceCard con Schema

```typescript
import { useServiceSchema } from '@/hooks/use-aeo';
import Script from 'next/script';

export function ServiceCard({ service }) {
  const schema = useServiceSchema(service);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="service-card">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul>
          {service.benefits.map(benefit => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

### Breadcrumb con Schema

```typescript
import { useBreadcrumbSchema } from '@/hooks/use-aeo';
import Script from 'next/script';

export function Breadcrumb({ items }) {
  const schema = useBreadcrumbSchema(items);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav>
        {items.map((item, idx) => (
          <span key={item.url}>
            <a href={item.url}>{item.name}</a>
            {idx < items.length - 1 && ' / '}
          </span>
        ))}
      </nav>
    </>
  );
}
```

---

## 10. Performance

### Caching

Los hooks usan `useMemo` para evitar recálculos innecesarios:

```typescript
const generator = useSchemaGenerator(); // Solo se crea una vez
const schema = useServiceSchema(service); // Se memoriza
```

### Lazy Loading para Grandes Contenidos

```typescript
import { useCallback, useState } from 'react';
import { ContentChunker } from '@/lib/aeo';

export function LazyContentAnalyzer({ content }: { content: string }) {
  const [chunks, setChunks] = useState([]);

  const analyzeContent = useCallback(() => {
    const chunker = new ContentChunker();
    const result = chunker.chunkByParagraphs(content);
    setChunks(result);
  }, [content]);

  return (
    <>
      <button onClick={analyzeContent}>Analizar Contenido</button>
      {/* Mostrar chunks */}
    </>
  );
}
```

---

## 11. Referencias Útiles

- [Schema.org](https://schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Semantic Web](https://www.w3.org/standards/semanticweb/)
- [JSON-LD Specification](https://www.w3.org/TR/json-ld/)

---

## 12. Troubleshooting

| Problema | Solución |
|----------|----------|
| Schema no valida | Usa SchemaValidator.generateReport() |
| Entidades no se extraen | Verifica si están en MEDICAL_ENTITIES |
| Chunks muy grandes | Reduce chunkSize o usa mergeChunks |
| Schema incompleto | Agrega campos recomendados |

