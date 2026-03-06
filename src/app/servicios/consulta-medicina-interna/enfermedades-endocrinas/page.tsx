import React from 'react';
import { Metadata } from 'next';
import { MessageSquare, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";
import ServiceBenefits from "@/components/sections/service-benefits";
import { getWhatsAppLink } from '@/lib/contact-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Enfermedades Endocrinas - Dr. Willmer Obregón | Medellín",
  description: "Tratamiento especializado de enfermedades endocrinas: Diabetes tipo 1 y 2, trastornos tiroideos, obesidad y desnutrición en Medellín.",
};

const faqs = [
  {
    question: "¿Qué incluye la historia clínica en consulta endocrina?",
    answer: "Se realiza evaluación completa del tiempo de evolución, síntomas actuales, tratamientos previos, adherencia al tratamiento, antecedentes de hipoglucemias, cambios de peso, y antecedentes familiares de diabetes, tiroides u obesidad."
  },
  {
    question: "¿Qué exámenes se solicitan regularmente?",
    answer: "El panel base incluye: hemograma, glicemia en ayunas y/o HbA1c, perfil lipídico completo, creatinina y eGFR, electrolitos, parcial de orina, enzimas hepáticas (AST/ALT/GGT) y TSH ultrasensible. Se pueden solicitar exámenes adicionales según el caso específico."
  },
  {
    question: "¿Cómo se evalúa la función tiroidea?",
    answer: "Se inicia con TSH ultrasensible. Si hay alteraciones, se miden T4 libre, T3 y anticuerpos tiroideos (anti-TPO, anti-Tg). Se puede solicitar ecografía tiroidea si se detectan nódulos o cambios que requieran evaluación de riesgo."
  },
  {
    question: "¿Qué medicamentos se usan comúnmente en diabetes?",
    answer: "En diabetes tipo 2: metformina como primera línea, iSGLT2 e inhibidores GLP-1 según perfil cardiorrenal, e insulinas cuando sea necesario. En diabetes tipo 1: insulinas múltiples dosis. El tratamiento se ajusta por comorbilidades y respuesta individual."
  },
  {
    question: "¿Incluye la consulta un plan de estilo de vida?",
    answer: "Sí, es fundamental. Se proporciona educación en nutrición, recomendaciones de actividad física, manejo del estrés y mejora del sueño. Se establece un plan escrito con metas medibles y realizables para que puedas implementarlo en tu día a día."
  },
  {
    question: "¿Cómo se maneja la desnutrición?",
    answer: "Se realiza tamizaje nutricional completo, se buscan causas (malabsorción, endocrinas, oncológicas, inflamatorias), se diseña un plan nutricional personalizado y se coordina seguimiento para asegurar recuperación."
  }
];

const conditions = [
  "Diabetes Mellitus tipo 1 y 2",
  "Trastornos Tiroideos (Hipertiroidismo)",
  "Hipotiroidismo",
  "Nódulos Tiroideos",
  "Cáncer de Tiroides",
  "Obesidad",
  "Desnutrición"
];

const EnfermedadesEndocrinasPage = () => {
  const benefits = [
    "Control efectivo de diabetes",
    "Tratamiento de trastornos tiroideos",
    "Manejo integral de la obesidad",
    "Plan nutricional personalizado",
    "Monitoreo continuo de hormonas",
    "Prevención de complicaciones metabólicas"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Endocrinas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Evaluación y tratamiento especializado de trastornos hormonales y metabólicos con enfoque integral.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tratamiento de enfermedades endocrinas y trastornos metabólicos"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Tratamiento especializado de enfermedades endocrinas
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece atención integral para trastornos del sistema endocrino, incluyendo diabetes, problemas de tiroides, obesidad y otros desórdenes metabólicos. Con un enfoque personalizado, te ayudará a controlar estas condiciones y mejorar tu calidad de vida.
            </p>

            {/* Section 1: Understanding Endocrine Diseases */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Condiciones que tratamos</h3>
              <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-6 border border-[#E2E8F0]">
                <ul className="space-y-3">
                  {conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0F172A]">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Resumen del grupo de enfermedades endocrinas</h3>
              <div className="text-[#475569] space-y-4 mb-6 leading-relaxed">
                <p>
                  Este grupo incluye trastornos metabólicos y hormonales de alta prevalencia como diabetes mellitus tipo 1 y 2, trastornos tiroideos, obesidad y desnutrición. El objetivo en consulta es confirmar diagnóstico, estratificar riesgo cardiometabólico, detectar complicaciones tempranas y construir un plan de control sostenible que combine estilo de vida, farmacoterapia y seguimiento personalizado.
                </p>
                <p>
                  El manejo requiere un abordaje integral que considere no solo los valores de laboratorio, sino también los síntomas, hábitos de vida, factores de riesgo cardiovascular y objetivos personales de cada paciente.
                </p>
              </div>
            </div>

            {/* Section 2: Diagnostic & Treatment Approach */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Abordaje en consulta: cómo se estructura la valoración</h3>
              <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-6 border border-[#E2E8F0]">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">Historia clínica enfocada</p>
                      <p className="text-sm text-[#475569] mt-1">Tiempo de evolución, síntomas, tratamiento previo, adherencia, hipoglucemias, cambios de peso y antecedentes familiares</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">Examen físico dirigido</p>
                      <p className="text-sm text-[#475569] mt-1">Evaluación de presión arterial, IMC, perímetro abdominal, tiroides, piel, pies (en diabetes), signos de resistencia a la insulina y estado nutricional</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">Estratificación de riesgo</p>
                      <p className="text-sm text-[#475569] mt-1">Evaluación cardiovascular, renal, hepático (hígado graso) y detección de complicaciones microvasculares</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">Definición de metas individualizadas</p>
                      <p className="text-sm text-[#475569] mt-1">Se establecen objetivos específicos (HbA1c, peso, presión arterial, LDL, función tiroidea) según tu perfil y se define un plan de seguimiento</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Exámenes solicitados según caso</h3>
              <div className="space-y-6 mb-6">
                <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                  <h4 className="font-semibold text-[#0F172A] mb-3">Panel base sugerido</h4>
                  <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                    <li>Hemograma completo</li>
                    <li>Glicemia en ayunas y/o HbA1c (según caso)</li>
                    <li>Perfil lipídico (colesterol total, LDL, HDL, triglicéridos)</li>
                    <li>Creatinina y eGFR para evaluar función renal</li>
                    <li>Electrolitos (sodio, potasio)</li>
                    <li>Parcial de orina y relación albúmina/creatinina (si diabetes o hipertensión)</li>
                    <li>Enzimas hepáticas (AST, ALT, GGT si sospecha hígado graso)</li>
                    <li>TSH ultrasensible (evaluación tiroidea de rutina)</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                  <h4 className="font-semibold text-[#0F172A] mb-3">Exámenes según síntomas y comorbilidades</h4>
                  <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                    <li>T4 libre, T3 (si se sospecha hipertiroidismo)</li>
                    <li>Anticuerpos tiroideos (anti-TPO, anti-Tg, TRAb si enfermedad de Graves)</li>
                    <li>Ecografía tiroidea y PAAF según criterios de riesgo</li>
                    <li>Ferritina, vitamina B12, folato (si astenia, caída de cabello, anemia o malnutrición)</li>
                    <li>Vitamina D según perfil clínico</li>
                    <li>Fondo de ojo y examen de pies (en pacientes diabéticos)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Tratamientos más comunes según diagnóstico</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Educación terapéutica</p>
                    <p className="text-sm text-[#475569] mt-1">Orientación en nutrición, actividad física, sueño y manejo del estrés con plan escrito y metas medibles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Diabetes (DM2)</p>
                    <p className="text-sm text-[#475569] mt-1">Metformina como primera línea, iSGLT2 e agonistas GLP-1 según perfil cardio-renal, insulinas si es necesario</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Diabetes (DM1)</p>
                    <p className="text-sm text-[#475569] mt-1">Esquema de insulinas múltiples dosis con educación en automonitoreo y ajuste según necesidad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Obesidad</p>
                    <p className="text-sm text-[#475569] mt-1">Intervención intensiva de estilo de vida, farmacoterapia con agonistas GLP-1 cuando esté indicada, manejo de hígado graso y apnea del sueño</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Hipotiroidismo</p>
                    <p className="text-sm text-[#475569] mt-1">Levotiroxina con ajuste de dosis según respuesta clínica y laboratorial</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Hipertiroidismo</p>
                    <p className="text-sm text-[#475569] mt-1">Antitiroideos, betabloqueo si es necesario, y evaluación para ablación o cirugía según etiología</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Desnutrición</p>
                    <p className="text-sm text-[#475569] mt-1">Tamizaje nutricional, plan alimentario personalizado y búsqueda de causas subyacentes</p>
                  </div>
                </li>
              </ul>
            </div>
            </div>

            {/* Section 3: What's Included */}
            <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica detallada</p>
                    <p className="text-sm text-[#475569] mt-1">Revisión completa de tu evolución, síntomas actuales, tratamientos previos, adherencia y antecedentes familiares</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Examen físico completo</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación dirigida incluyendo presión arterial, peso, perímetro abdominal, tiroides, examen de pies (en diabéticos) y signos de complicaciones</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Solicitud y análisis de exámenes</p>
                    <p className="text-sm text-[#475569] mt-1">Orden de panel de laboratorio base e imagen si es necesaria, con interpretación detallada de resultados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Estratificación de riesgo</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación personalizada de riesgo cardiovascular, renal y otras complicaciones según tu condición</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan de tratamiento personalizado</p>
                    <p className="text-sm text-[#475569] mt-1">Prescripción ajustada a tu perfil, con explicación clara de medicamentos, dosis y efectos esperados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Educación en estilo de vida</p>
                    <p className="text-sm text-[#475569] mt-1">Recomendaciones prácticas en nutrición, actividad física, manejo del estrés y sueño con metas alcanzables</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan de seguimiento</p>
                    <p className="text-sm text-[#475569] mt-1">Definición de metas claras, intervalos de evaluación y ajuste de tratamiento según respuesta</p>
                  </div>
                </li>
              </ul>
            </div>

            </div>

            {/* Section 4: Conclusion & Support */}
            <div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-4">Manejo integral con seguimiento personalizado</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si presentas problemas de tiroides, diabetes tipo 1 o 2, obesidad, desnutrición o cualquier otro trastorno endocrino, el Dr. Willmer Obregón está listo para ayudarte. Nuestro enfoque integral se basa en evaluación completa, estratificación de riesgo, tratamiento farmacológico optimizado, educación terapéutica y seguimiento continuado para lograr un control sostenible de tu condición y mejor calidad de vida.
            </p>

            <h3 className="text-lg font-bold text-[#0F172A] mb-6">Preguntas frecuentes</h3>
            <div className="mb-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[#E2E8F0]">
                    <AccordionTrigger className="text-left font-medium text-[#1E293B] hover:text-[#1080A0] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            </div>
          </article>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#0F172A] mb-6">Contáctanos</h4>
              <div className="space-y-3 mb-8">
                <a
                  href={getWhatsAppLink(0)}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#187495] via-[#11A9D0] to-[#187495] py-4 px-6 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="h-5 w-5" />
                  Enviar WhatsApp
                </a>
                <a
                  href="tel:+573011505174"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#E7F5F9] py-4 px-6 text-sm font-bold text-[#0F172A] hover:bg-[#D9EDF3] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Llamar por teléfono
                </a>
                <a
                  href="mailto:consulta@internistamedellin.com"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl border-2 border-[#E2E8F0] bg-white/80 backdrop-blur-sm py-4 px-6 text-sm font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Enviar correo
                </a>
              </div>

              <div className="rounded-2xl border-2 border-[#E2E8F0] bg-[#F8FAFC]/60 p-6 mb-6">
                <p className="font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1080A0]" />
                  Ubicación
                </p>
                <a
                  href="https://maps.app.goo.gl/GJFsDZyaeVA79HVCA"
                  className="text-sm text-[#475569] leading-relaxed hover:text-[#1080A0] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia
                </a>
              </div>

              <div className="flex gap-3 text-sm text-[#475569]">
                <Clock className="h-5 w-5 flex-shrink-0 text-[#1080A0]" />
                <div className="space-y-1">
                  <p>Lunes a viernes: 8am a 5pm</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <CtaBanner />
    </div>
  );
};

export default EnfermedadesEndocrinasPage;
