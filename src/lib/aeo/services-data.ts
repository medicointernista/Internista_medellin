import { MedicalServiceData } from './types';

export const MEDICAL_SERVICES: MedicalServiceData[] = [
  {
    id: 'consulta-medicina-interna',
    name: 'Consulta de Medicina Interna',
    description:
      'Evaluación integral de salud con diagnóstico y tratamiento personalizado',
    longDescription:
      'Consulta especializada en medicina interna que ofrece evaluación exhaustiva del estado de salud, diagnóstico preciso y planes de tratamiento personalizados para todas las condiciones crónicas y agudas.',
    conditions: [
      'Diabetes',
      'Presión Alta',
      'Enfermedades del Corazón',
      'Sobrepeso y Obesidad',
      'Problemas de Tiroides',
      'Enfermedades de los Riñones',
      'Dolor Crónico',
      'Enfermedades Pulmonares',
    ],
    benefits: [
      'Evaluación integral personalizada',
      'Diagnóstico preciso',
      'Plan de tratamiento adaptado',
      'Seguimiento médico continuo',
      'Coordinación con especialistas',
    ],
    relatedServices: [
      'electrocardiograma',
      'ecocardiograma-transtoracico',
      'consulta-medicina-interna/enfermedades-cardiovasculares',
    ],
    keywords: [
      'medicina interna',
      'consulta médica',
      'evaluación de salud',
      'tratamiento personalizado',
      'médico internista',
    ],
    url: '/servicios/consulta-medicina-interna',
    duration: '45-60 minutos',
    price: 'Consultar',
  },
  {
    id: 'cardiologia',
    name: 'Cardiología',
    description:
      'Evaluación y tratamiento de enfermedades cardiovasculares con tecnología avanzada',
    longDescription:
      'Servicio de cardiología especializado en el diagnóstico y tratamiento de todas las enfermedades del corazón mediante técnicas avanzadas como ecocardiograma, electrocardiograma y monitoreo continuo.',
    conditions: [
      'Enfermedades del Corazón',
      'Presión Alta',
      'Arritmias',
      'Insuficiencia Cardíaca',
      'Enfermedad Valvular',
    ],
    benefits: [
      'Diagnóstico cardíaco preciso',
      'Monitoreo continuo del corazón',
      'Planes de tratamiento especializados',
      'Prevención de complicaciones',
      'Rehabilitación cardíaca',
    ],
    relatedServices: [
      'electrocardiograma',
      'ecocardiograma-transtoracico',
      'holter-24-horas',
      'mapa-24-horas',
    ],
    keywords: [
      'cardiología',
      'enfermedad del corazón',
      'evaluación cardíaca',
      'cardiólogo',
      'tratamiento cardíaco',
    ],
    url: '/cardiologia',
  },
  {
    id: 'viscosuplementacion-rodilla',
    name: 'Viscosuplementación para Rodilla',
    description:
      'Tratamiento inyectable para aliviar el dolor y mejorar la función articular',
    longDescription:
      'Opciones de tratamiento inyectable avanzado para la artritis de rodilla, incluyendo ácido hialurónico, PRP, bioreguladores y corticoides, adaptados a cada caso específico.',
    conditions: [
      'Artrosis de Rodilla',
      'Artritis',
      'Dolor de Rodilla',
      'Degeneración Cartilaginosa',
      'Inflamación Articular',
    ],
    benefits: [
      'Alivio del dolor articular',
      'Mejora de la movilidad',
      'Retraso de la cirugía',
      'Regeneración de cartílago',
      'Resultados duraderos',
    ],
    relatedServices: [
      'infiltraciones-corticoides',
      'acido-hialuronico',
      'prp-lisado-plaquetas',
      'infiltraciones-bioreguladores',
    ],
    keywords: [
      'viscosuplementación',
      'rodilla',
      'artritis',
      'artrosis',
      'ácido hialurónico',
      'PRP',
    ],
    url: '/servicios/viscosuplementacion-para-rodilla',
  },
  {
    id: 'electrocardiograma',
    name: 'Electrocardiograma',
    description:
      'Registro de la actividad eléctrica del corazón para diagnóstico cardiovascular',
    conditions: [
      'Arritmias',
      'Infarto',
      'Presión Alta',
      'Enfermedad Coronaria',
    ],
    benefits: [
      'Detección de arritmias',
      'Diagnóstico de infarto',
      'Evaluación de presión arterial',
      'Procedimiento rápido y no invasivo',
    ],
    relatedServices: ['cardiologia', 'ecocardiograma-transtoracico', 'holter-24-horas'],
    keywords: [
      'electrocardiograma',
      'ECG',
      'corazón',
      'ritmo cardíaco',
      'prueba cardíaca',
    ],
    url: '/cardiologia/electrocardiograma',
    duration: '10-15 minutos',
  },
  {
    id: 'ecocardiograma',
    name: 'Ecocardiograma Transtoracico',
    description:
      'Ultrasonido del corazón para evaluación de estructura y función cardíaca',
    conditions: [
      'Enfermedad Valvular',
      'Insuficiencia Cardíaca',
      'Cardiomiopatía',
      'Derrame Pericárdico',
    ],
    benefits: [
      'Visualización clara del corazón',
      'Evaluación de función cardíaca',
      'Detección de anomalías estructurales',
      'Procedimiento no invasivo',
    ],
    relatedServices: ['cardiologia', 'electrocardiograma', 'mapa-24-horas'],
    keywords: [
      'ecocardiograma',
      'ultrasonido cardíaco',
      'estructura del corazón',
      'evaluación cardíaca',
    ],
    url: '/cardiologia/ecocardiograma-transtoracico',
    duration: '30-45 minutos',
  },
];

export function getServiceById(id: string): MedicalServiceData | undefined {
  return MEDICAL_SERVICES.find(
    (service) => service.id === id || service.url === id
  );
}

export function getServicesByIds(ids: string[]): MedicalServiceData[] {
  return ids
    .map((id) => getServiceById(id))
    .filter((service) => service !== undefined) as MedicalServiceData[];
}

export function getServicesByCondition(condition: string): MedicalServiceData[] {
  return MEDICAL_SERVICES.filter((service) =>
    service.conditions.some(
      (c) => c.toLowerCase() === condition.toLowerCase()
    )
  );
}

export function getRelatedServices(
  serviceId: string,
  limit?: number
): MedicalServiceData[] {
  const service = getServiceById(serviceId);
  if (!service) return [];

  const related = getServicesByIds(service.relatedServices);
  return limit ? related.slice(0, limit) : related;
}
