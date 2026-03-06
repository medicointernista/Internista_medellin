import { MedicalServiceData } from './types';
import { LOCATION, getPhoneNumber } from '@/lib/contact-config';

interface SchemaContext {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export class SchemaGenerator {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://drwillmerobregon.com') {
    this.baseUrl = baseUrl;
  }

  generateLocalBusiness(): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${this.baseUrl}/#organization`,
      name: 'Dr. Willmer Obregón - Medicina Interna',
      description:
        'Servicio de medicina interna especializado en enfermedades crónicas, cardiología y procedimientos diagnosticos.',
      image: `${this.baseUrl}/image.png`,
      telephone: getPhoneNumber(0),
      email: 'contacto@drwillmerobregon.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Biencrecer Cra 81 #27-17 Consultorio 1',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        postalCode: '050000',
        addressCountry: 'CO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.2518,
        longitude: -75.5636,
      },
      openingHours: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/drwillmerobregon',
        'https://www.instagram.com/drwillmerobregon',
      ],
      areaServed: {
        '@type': 'City',
        name: 'Medellín',
      },
      priceRange: '$$',
      medicalSpecialty: [
        'Internal Medicine',
        'Cardiology',
        'Rheumatology',
      ],
    };
  }

  generateMedicalBusiness(): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': `${this.baseUrl}/#business`,
      name: 'Dr. Willmer Obregón',
      medicalSpecialty: [
        'Internal Medicine',
        'Cardiology',
        'Rheumatology',
      ],
      knowsAbout: [
        'Diabetes',
        'Presión Alta',
        'Enfermedades del Corazón',
        'Sobrepeso y Obesidad',
        'Problemas de Tiroides',
        'Enfermedades de los Riñones',
        'Dolor Crónico',
        'Enfermedades Pulmonares',
      ],
      areaServed: 'Medellín, Antioquia, Colombia',
      telephone: getPhoneNumber(0),
      availableLanguage: ['es'],
      url: this.baseUrl,
    };
  }

  generateServiceSchema(service: MedicalServiceData): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalService',
      '@id': `${this.baseUrl}${service.url}#service`,
      name: service.name,
      description: service.longDescription || service.description,
      url: `${this.baseUrl}${service.url}`,
      image: service.image || `${this.baseUrl}/image.png`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Dr. Willmer Obregón',
        url: this.baseUrl,
        telephone: getPhoneNumber(0),
      },
      medicalCondition: service.conditions.map((condition) => ({
        '@type': 'MedicalCondition',
        name: condition,
      })),
      procedureType:
        service.id.includes('infiltr') ||
        service.id.includes('ecocard') ||
        service.id.includes('electro')
          ? 'Therapeutic'
          : 'Diagnostic',
    };
  }

  generateBreadcrumb(items: Array<{ name: string; url: string }>): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http')
          ? item.url
          : `${this.baseUrl}${item.url}`,
      })),
    };
  }

  generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
  ): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  generateArticleSchema(article: {
    headline: string;
    description: string;
    content: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
  }): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      image: article.image || `${this.baseUrl}/image.png`,
      datePublished: article.datePublished || new Date().toISOString(),
      dateModified: article.dateModified || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: article.author || 'Dr. Willmer Obregón',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dr. Willmer Obregón',
        logo: {
          '@type': 'ImageObject',
          url: `${this.baseUrl}/image.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${this.baseUrl}/articles`,
      },
    };
  }

  generateAggregateRating(
    name: string,
    ratingValue: number,
    reviewCount: number
  ): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name,
      },
      ratingValue: Math.min(5, Math.max(1, ratingValue)),
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  generateReviewSchema(review: {
    author: string;
    rating: number;
    content: string;
    datePublished?: string;
  }): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: Math.min(5, Math.max(1, review.rating)),
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.content,
      datePublished: review.datePublished || new Date().toISOString(),
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Dr. Willmer Obregón',
      },
    };
  }

  generateOrganizationSchema(): SchemaContext {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.baseUrl}/#organization`,
      name: 'Dr. Willmer Obregón - Medicina Interna y Cardiología',
      url: this.baseUrl,
      logo: `${this.baseUrl}/image.png`,
      description:
        'Centro médico especializado en medicina interna, cardiología y procedimientos de viscosuplementación.',
      sameAs: [
        'https://www.facebook.com/drwillmerobregon',
        'https://www.instagram.com/drwillmerobregon',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Biencrecer Cra 81 #27-17 Consultorio 1',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: getPhoneNumber(0),
        email: 'contacto@drwillmerobregon.com',
        availableLanguage: ['es'],
      },
    };
  }
}

export function createSchemaGenerator(
  baseUrl?: string
): SchemaGenerator {
  return new SchemaGenerator(baseUrl);
}
