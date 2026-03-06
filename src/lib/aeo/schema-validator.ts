import {
  SchemaMarkupValidation,
  ValidationError,
  ValidationWarning,
} from './types';

interface SchemaObject {
  '@context'?: string;
  '@type'?: string;
  [key: string]: unknown;
}

const SCHEMA_REQUIREMENTS: Record<string, Record<string, string>> = {
  LocalBusiness: {
    name: 'required',
    address: 'required',
    telephone: 'required',
    image: 'recommended',
    url: 'recommended',
  },
  MedicalBusiness: {
    name: 'required',
    medicalSpecialty: 'recommended',
    knowsAbout: 'recommended',
    areaServed: 'recommended',
  },
  Service: {
    name: 'required',
    description: 'required',
    provider: 'recommended',
    aggregateRating: 'recommended',
  },
  FAQPage: {
    mainEntity: 'required',
  },
  FAQSchema: {
    name: 'required',
    acceptedAnswer: 'required',
  },
  BreadcrumbList: {
    itemListElement: 'required',
  },
  Review: {
    author: 'required',
    reviewRating: 'required',
    reviewBody: 'required',
  },
  AggregateRating: {
    ratingValue: 'required',
    reviewCount: 'required',
  },
  Article: {
    headline: 'required',
    datePublished: 'required',
    author: 'recommended',
    image: 'recommended',
  },
};

export class SchemaValidator {
  validate(schema: SchemaObject): SchemaMarkupValidation {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    const type = schema['@type'] as string;
    const context = schema['@context'] as string;

    if (!context) {
      errors.push({
        field: '@context',
        message: 'Missing @context. Should be "https://schema.org"',
        severity: 'critical',
      });
    }

    if (!type) {
      errors.push({
        field: '@type',
        message: 'Missing @type. Schema type must be specified',
        severity: 'critical',
      });
      return this.buildValidation(false, type || 'Unknown', errors, warnings);
    }

    const requirements = SCHEMA_REQUIREMENTS[type];

    if (requirements) {
      for (const [field, requirement] of Object.entries(requirements)) {
        const hasField = field in schema && schema[field] !== undefined;

        if (!hasField && requirement === 'required') {
          errors.push({
            field,
            message: `Required field "${field}" is missing`,
            severity: 'high',
          });
        } else if (!hasField && requirement === 'recommended') {
          warnings.push({
            field,
            message: `Recommended field "${field}" is missing`,
            recommendation: `Add "${field}" to improve schema completeness and SEO visibility`,
          });
        }
      }
    }

    this.validateFieldTypes(schema, type, errors);

    const completeness = this.calculateCompleteness(schema, type);

    return this.buildValidation(errors.length === 0, type, errors, warnings, completeness);
  }

  validateMultiple(schemas: SchemaObject[]): SchemaMarkupValidation[] {
    return schemas.map(schema => this.validate(schema));
  }

  validateStructuredData(html: string): SchemaMarkupValidation[] {
    const jsonLdRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
    const validations: SchemaMarkupValidation[] = [];

    let match;
    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const schema = JSON.parse(match[1]);
        validations.push(this.validate(schema));
      } catch (e) {
        validations.push({
          isValid: false,
          type: 'Invalid JSON',
          errors: [
            {
              field: 'JSON',
              message: `Invalid JSON-LD: ${e instanceof Error ? e.message : 'Unknown error'}`,
              severity: 'critical',
            },
          ],
          warnings: [],
          completeness: 0,
        });
      }
    }

    return validations;
  }

  private validateFieldTypes(
    schema: SchemaObject,
    type: string,
    errors: ValidationError[]
  ): void {
    const typeValidations: Record<string, (value: unknown) => boolean> = {
      name: (v) => typeof v === 'string',
      description: (v) => typeof v === 'string',
      telephone: (v) => typeof v === 'string',
      email: (v) => typeof v === 'string',
      url: (v) => typeof v === 'string',
      image: (v) => typeof v === 'string' || (typeof v === 'object' && v !== null),
      address: (v) => typeof v === 'object' && v !== null,
      itemListElement: (v) => Array.isArray(v),
      ratingValue: (v) => typeof v === 'number' || typeof v === 'string',
      reviewCount: (v) => typeof v === 'number',
    };

    for (const [field, validator] of Object.entries(typeValidations)) {
      if (field in schema && !validator(schema[field])) {
        errors.push({
          field,
          message: `Field "${field}" has invalid type. Expected proper format.`,
          severity: 'high',
        });
      }
    }
  }

  private calculateCompleteness(schema: SchemaObject, type: string): number {
    const requirements = SCHEMA_REQUIREMENTS[type];
    if (!requirements) return 100;

    const total = Object.keys(requirements).length;
    const present = Object.keys(requirements).filter(
      (field) => field in schema && schema[field] !== undefined
    ).length;

    return Math.round((present / total) * 100);
  }

  private buildValidation(
    isValid: boolean,
    type: string,
    errors: ValidationError[],
    warnings: ValidationWarning[],
    completeness: number = 0
  ): SchemaMarkupValidation {
    return {
      isValid,
      type,
      errors,
      warnings,
      completeness,
    };
  }

  generateReport(validations: SchemaMarkupValidation[]): string {
    let report = '# Schema Markup Validation Report\n\n';
    report += `Total Schemas: ${validations.length}\n`;
    report += `Valid: ${validations.filter(v => v.isValid).length}\n`;
    report += `Invalid: ${validations.filter(v => !v.isValid).length}\n`;
    report += `Average Completeness: ${Math.round(validations.reduce((sum, v) => sum + v.completeness, 0) / validations.length)}%\n\n`;

    for (const validation of validations) {
      report += `## ${validation.type}\n`;
      report += `Status: ${validation.isValid ? '✅ Valid' : '❌ Invalid'}\n`;
      report += `Completeness: ${validation.completeness}%\n`;

      if (validation.errors.length > 0) {
        report += `\n### Errors (${validation.errors.length})\n`;
        for (const error of validation.errors) {
          report += `- [${error.severity.toUpperCase()}] ${error.field}: ${error.message}\n`;
        }
      }

      if (validation.warnings.length > 0) {
        report += `\n### Warnings (${validation.warnings.length})\n`;
        for (const warning of validation.warnings) {
          report += `- ${warning.field}: ${warning.message}\n`;
          report += `  → ${warning.recommendation}\n`;
        }
      }

      report += '\n';
    }

    return report;
  }
}

export function validateSchema(schema: SchemaObject): SchemaMarkupValidation {
  const validator = new SchemaValidator();
  return validator.validate(schema);
}

export function validateSchemaArray(schemas: SchemaObject[]): SchemaMarkupValidation[] {
  const validator = new SchemaValidator();
  return validator.validateMultiple(schemas);
}

export function validateHTML(html: string): SchemaMarkupValidation[] {
  const validator = new SchemaValidator();
  return validator.validateStructuredData(html);
}
