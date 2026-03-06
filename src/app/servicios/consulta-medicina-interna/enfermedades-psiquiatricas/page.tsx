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
  title: "Enfermedades Psiquiátricas - Dr. Willmer Obregón | Medellín",
  description: "Manejo integral de trastornos del sueño, ansiedad, depresión y trastornos de la alimentación en Medellín.",
};

const faqs = [
  {
    question: "¿Qué se evalúa en la historia clínica de consulta psiquiátrica?",
    answer: "Se realiza evaluación completa del inicio y duración de síntomas, factores precipitantes, funcionalidad laboral y social, consumo de cafeína/alcohol, medicamentos actuales, comorbilidades médicas, y antecedentes familiares psiquiátricos."
  },
  {
    question: "¿Qué tamizajes se utilizan en la consulta?",
    answer: "Se usan escalas validadas como PHQ-9 para depresión, GAD-7 para ansiedad, ISI para insomnio, y STOP-BANG para apnea del sueño. Estos cuestionarios permiten cuantificar severidad y monitorear respuesta al tratamiento."
  },
  {
    question: "¿Cómo se evalúa el riesgo de ideación suicida?",
    answer: "Se realiza evaluación estructurada de riesgo incluyendo presencia de ideación suicida, plan específico, intento previo, acceso a medios, y factores de protección. Este es un aspecto crítico de la consulta que se maneja con seriedad."
  },
  {
    question: "¿Qué exámenes se solicitan para descartar causas médicas?",
    answer: "Panel base: hemograma (anemia), TSH (disfunción tiroidea), ferritina/B12 (fatiga), glicemia/HbA1c (si hay comorbilidad). Si hay sospecha de apnea: polisomnografía o poligrafía respiratoria domiciliaria. Evaluación especializada si síntomas complejos."
  },
  {
    question: "¿Cuál es el tratamiento de primera línea para el insomnio?",
    answer: "La terapia cognitivo-conductual para el insomnio (CBT-I) es la primera línea, incluyendo higiene del sueño y técnicas conductuales. Medicación se utiliza solo cuando está indicado y de forma corta plazo, considerando riesgos y beneficios individuales."
  },
  {
    question: "¿Cómo se maneja la apnea obstructiva del sueño?",
    answer: "Incluye pérdida de peso cuando aplica, CPAP o autoPAP como tratamiento principal, dispositivos de avance mandibular en casos seleccionados, manejo de rinitis/obstrucción nasal, y coordinación con neumología si es necesario."
  }
];

const conditions = [
  "Insomnio Conciliatorio",
  "Insomnio de Mantenimiento",
  "Apnea del Sueño",
  "Trastorno de Ansiedad",
  "Trastornos Depresivos",
  "Trastornos de la Alimentación"
];

const EnfermedadesPsiquiatricasPage = () => {
  const benefits = [
    "Manejo integral del insomnio",
    "Tratamiento de trastornos de ansiedad",
    "Control efectivo de depresión",
    "Diagnóstico de apnea del sueño",
    "Terapia conductual del sueño",
    "Enfoque médico holístico"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Psiquiátricas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Manejo integral de trastornos del sueño, ansiedad, depresión y trastornos alimentarios con enfoque médico.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tratamiento de trastornos del sueño y salud mental"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención integral de trastornos psiquiátricos y del sueño
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece evaluación y tratamiento de trastornos del sueño, ansiedad, depresión y trastornos de la alimentación desde una perspectiva médica integral, considerando factores físicos y emocionales que afectan tu bienestar.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Condiciones que tratamos</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-3">
                {conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                    <span className="text-[#0F172A]">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Resumen del grupo de enfermedades psiquiátricas y del sueño</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                Este grupo impacta fuertemente la calidad de vida y el riesgo cardiometabólico. Incluye insomnio, apnea del sueño, ansiedad, depresión y trastornos de la alimentación. En consulta se prioriza el tamizaje estructurado, descartar causas orgánicas, evaluar comorbilidades (apnea, hipotiroidismo, anemia, uso de sustancias/medicamentos) y ofrecer un plan escalonado con seguimiento cercano.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Abordaje en consulta: cómo se estructura la valoración</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica detallada</p>
                    <p className="text-sm text-[#475569] mt-1">Inicio y duración de síntomas, factores precipitantes, funcionalidad laboral/social, consumo de cafeína/alcohol, medicamentos actuales y comorbilidades médicas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Tamizajes recomendables</p>
                    <p className="text-sm text-[#475569] mt-1">PHQ-9 (depresión), GAD-7 (ansiedad), ISI (insomnio), STOP-BANG o similares (apnea) para cuantificar severidad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de riesgo</p>
                    <p className="text-sm text-[#475569] mt-1">Detección de ideación suicida, abuso de sustancias, somnolencia diurna y evaluación de riesgo ocupacional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan escalonado</p>
                    <p className="text-sm text-[#475569] mt-1">Intervenciones conductuales primero cuando aplica, y farmacoterapia/derivación según severidad y presentación clínica</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes solicitados según caso</h3>
            <div className="space-y-6 mb-10">
              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Panel base sugerido</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>Hemograma (descartar anemia como causa de fatiga/depresión)</li>
                  <li>TSH (descartar disfunción tiroidea)</li>
                  <li>Ferritina y vitamina B12 (si fatiga, parestesias, síndrome de piernas inquietas)</li>
                  <li>Glicemia/HbA1c y perfil lipídico (si comorbilidad cardiometabólica)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Exámenes según síntomas y comorbilidades</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>Polisomnografía o poligrafía respiratoria domiciliaria (si sospecha apnea obstructiva)</li>
                  <li>Oximetría nocturna (seleccionada según caso)</li>
                  <li>Perfil metabólico completo si hay obesidad/hipertensión/diabetes asociada</li>
                  <li>Evaluación psiquiátrica/psicológica especializada (trastornos complejos o refractarios)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos más comunes según diagnóstico</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Insomnio</p>
                    <p className="text-sm text-[#475569] mt-1">CBT-I (terapia cognitivo-conductual) como primera línea, higiene del sueño, farmacoterapia corta plazo cuando esté indicada, individualizando riesgo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Apnea obstructiva del sueño</p>
                    <p className="text-sm text-[#475569] mt-1">Pérdida de peso, CPAP/autoPAP, dispositivos de avance mandibular en casos seleccionados, manejo de rinitis/obstrucción nasal, coordinación con neumología/otorrino</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Ansiedad y depresión</p>
                    <p className="text-sm text-[#475569] mt-1">Psicoterapia basada en evidencia (TCC), ISRS/IRSN cuando indicado, manejo de comorbilidades médicas, seguimiento de respuesta y efectos adversos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Trastornos de la alimentación</p>
                    <p className="text-sm text-[#475569] mt-1">Enfoque multidisciplinario (nutrición + salud mental + medicina interna), tamizaje de complicaciones médicas y evaluación de riesgo</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica enfocada</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación del inicio, duración, síntomas específicos, funcionalidad, consumo de sustancias, medicamentos e historia médica relevante</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Tamizaje estructurado</p>
                    <p className="text-sm text-[#475569] mt-1">Aplicación de escalas validadas (PHQ-9, GAD-7, ISI, STOP-BANG) para cuantificar severidad y monitorear evolución</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de riesgo</p>
                    <p className="text-sm text-[#475569] mt-1">Cribado de ideación suicida, abuso de sustancias, somnolencia diurna y otros riesgos importantes para tu seguridad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Descarte de causas orgánicas</p>
                    <p className="text-sm text-[#475569] mt-1">Examen físico completo y solicitud de exámenes de laboratorio para descartar condiciones médicas subyacentes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan escalonado personalizado</p>
                    <p className="text-sm text-[#475569] mt-1">Propuesta de tratamiento que prioriza intervenciones conductuales, con medicación y especialistas según severidad y necesidad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Coordinación multidisciplinaria</p>
                    <p className="text-sm text-[#475569] mt-1">Referencia a psiquiatría, psicología, neumología u otros especialistas cuando sea necesario para tu bienestar integral</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Seguimiento cercano</p>
                    <p className="text-sm text-[#475569] mt-1">Monitoreo regular de evolución, ajuste de tratamiento según respuesta, y evaluación de efectos adversos o complicaciones</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Atención integral con enfoque médico-psiquiátrico</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si presentas insomnio, apnea del sueño, ansiedad, depresión o trastornos de la alimentación, el Dr. Willmer Obregón te ofrece evaluación estructurada que descarta causas médicas, cuantifica severidad mediante tamizajes validados, evalúa riesgos y propone un plan escalonado personalizado. Este enfoque integral considera tanto aspectos médicos como psicológicos para lograr tu bienestar y mejorar tu calidad de vida.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes</h3>
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

export default EnfermedadesPsiquiatricasPage;
