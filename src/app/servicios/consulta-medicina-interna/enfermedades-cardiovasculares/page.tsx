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
  title: "Enfermedades Cardiovasculares - Dr. Willmer Obregón | Medellín",
  description: "Manejo especializado de hipertensión, arritmias cardiacas, cardiopatías, insuficiencia renal y pacientes en diálisis en Medellín.",
};

const faqs = [
  {
    question: "¿Cómo se confirma el diagnóstico de hipertensión arterial?",
    answer: "Se requiere técnica correcta de medición de presión arterial, mediciones repetidas en consulta, y monitoreo ambulatorio (MAPA) o domiciliario para confirmar diagnóstico y caracterizar el patrón de presión arterial antes de iniciar tratamiento."
  },
  {
    question: "¿Qué es la HTA resistente y cómo se evalúa?",
    answer: "Es HTA no controlada con tres o más medicamentos. Se evalúa adherencia a medicamentos, se identifica si hay fármacos que elevan presión arterial (AINES, simpaticomiméticos), se excluye apnea del sueño, y se descartan causas endocrinas y renovasculares."
  },
  {
    question: "¿Cuál es la importancia de la integración cardio-renal?",
    answer: "Se evalúan simultáneamente función renal (eGFR), presencia de albuminuria, presión arterial y función cardíaca. Estos parámetros se relacionan entre sí y permiten tomar mejores decisiones terapéuticas para proteger órganos blanco."
  },
  {
    question: "¿Cómo se detectan y manejan las arritmias cardiacas?",
    answer: "Se realiza historia de palpitaciones/síncope, electrocardiograma 12 derivaciones, Holter 24-48h o monitor de eventos para documentar alteraciones del ritmo. Según hallazgos se indica anticoagulación en fibrilación auricular, control de frecuencia/ritmo y coordinación con cardiología."
  },
  {
    question: "¿Qué significa monitoreo domiciliario de presión arterial?",
    answer: "Es la medición estructurada de presión arterial en casa, que permite detectar hipertensión de bata blanca, hipertensión enmascarada, y variabilidad de presión. Proporciona información más confiable para toma de decisiones terapéuticas."
  },
  {
    question: "¿Cómo se maneja la insuficiencia renal en medicina interna?",
    answer: "Incluye control de volumen, ajuste de medicamentos según función renal (eGFR), manejo de anemia, prevención de enfermedad óseo-mineral (PTH, calcio, fósforo), y coordinación con nefrología. Se optimiza presión arterial y se protege función renal con IECA/ARA-II e iSGLT2 cuando indicado."
  }
];

const conditions = [
  "HTA de difícil manejo",
  "Arritmias Cardiacas",
  "Cardiopatías Múltiples",
  "Hipotensión",
  "Insuficiencia Renal",
  "Pacientes en Diálisis"
];

const EnfermedadesCardiovascularesPage = () => {
  const benefits = [
    "Control de hipertensión compleja",
    "Manejo de arritmias cardiacas",
    "Tratamiento de insuficiencia renal",
    "Seguimiento de pacientes en diálisis",
    "Prevención de complicaciones",
    "Evaluación de riesgo cardiovascular"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Cardiovasculares
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Manejo integral de hipertensión, arritmias, cardiopatías, insuficiencia renal y pacientes en diálisis.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7659666/pexels-photo-7659666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Evaluación cardiovascular y control de presión arterial"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención especializada de enfermedades cardiovasculares y renales
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece manejo integral de enfermedades cardiovasculares complejas, incluyendo hipertensión de difícil control, arritmias, cardiopatías múltiples e insuficiencia renal. Con un enfoque personalizado, ayuda a controlar estas condiciones y prevenir complicaciones.
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Resumen del grupo de enfermedades cardiovasculares y renales</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                Se aborda mediante estratificación de riesgo, búsqueda de causas secundarias cuando corresponde, y optimización terapéutica basada en objetivos. Incluye integración cardio-renal (albuminuria/TFG) y monitoreo domiciliario (presión arterial, síntomas) para decisiones más finas. Comprende hipertensión difícil manejo, arritmias, cardiopatías, hipotensión, insuficiencia renal y manejo de pacientes en diálisis.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Abordaje en consulta: cómo se estructura la valoración</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Confirmación diagnóstica</p>
                    <p className="text-sm text-[#475569] mt-1">Técnica correcta de presión arterial, mediciones repetidas, MAPA (monitoreo ambulatorio 24h) y/o monitoreo domiciliario para caracterizar patrón de PA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Estratificación de riesgo</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de riesgo cardiovascular y renal incluyendo albuminuria, eGFR (función renal) e historia de enfermedad cardiovascular</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de HTA resistente</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de adherencia, fármacos que elevan PA, apnea del sueño, y descartar causas endocrinas/renovasculares en casos seleccionados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de arritmias</p>
                    <p className="text-sm text-[#475569] mt-1">Historia de palpitaciones/síncope, electrocardiograma, Holter/monitor de eventos; determinación de necesidad de anticoagulación según riesgo tromboembólico/hemorrágico</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">En ERC/diálisis</p>
                    <p className="text-sm text-[#475569] mt-1">Control de volumen, manejo de anemia, minerales óseos (PTH, calcio, fósforo), y ajuste de fármacos según función renal, coordinación con nefrología</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes solicitados según caso</h3>
            <div className="space-y-6 mb-10">
              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Panel base sugerido</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>Hemograma (descartar anemia)</li>
                  <li>Creatinina, eGFR (función renal), BUN, electrolitos (Na, K)</li>
                  <li>Perfil lipídico (evaluación de riesgo cardiovascular)</li>
                  <li>Glicemia/HbA1c (según caso)</li>
                  <li>Parcial de orina + relación albúmina/creatinina (evaluación cardio-renal)</li>
                  <li>Electrocardiograma 12 derivaciones</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Exámenes según síntomas y comorbilidades</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>MAPA 24h / AMPA (monitoreo domiciliario estructurado) en HTA resistente/dilemática</li>
                  <li>Ecocardiograma Doppler (evaluación de función cardíaca)</li>
                  <li>Holter 24-48h / monitor de eventos (palpitaciones/síncope)</li>
                  <li>BNP/NT-proBNP (disnea/insuficiencia cardíaca)</li>
                  <li>Causas secundarias: aldosterona/renina, metanefrinas, Doppler arterias renales (seleccionado)</li>
                  <li>En ERC: PTH, calcio, fósforo, vitamina D (según estadio y protocolos)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos más comunes según diagnóstico</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Hipertensión arterial</p>
                    <p className="text-sm text-[#475569] mt-1">Cambios intensivos de estilo de vida + farmacoterapia escalonada, con combinación en una tableta cuando sea posible para mejorar adherencia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">ERC/albuminuria</p>
                    <p className="text-sm text-[#475569] mt-1">IECA/ARA-II cuando indicado, inhibidores SGLT2 (iSGLT2) en perfil elegible, ajuste de dosis según eGFR para protección renal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Arritmias</p>
                    <p className="text-sm text-[#475569] mt-1">Manejo de factores precipitantes (tiroides, electrolitos), control de frecuencia/ritmo según caso, anticoagulación en fibrilación auricular según scores de riesgo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Hipotensión</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de medicamentos causantes, optimización de hidratación/volumen, manejo de disautonomía, plan no farmacológico y opciones terapéuticas seleccionadas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Diálisis</p>
                    <p className="text-sm text-[#475569] mt-1">Coordinación con nefrología, metas de volumen corporal, control de anemia, manejo de fósforo/calcio, y protección cardiovascular integral</p>
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
                    <p className="font-semibold text-[#0F172A]">Medición de presión arterial correcta</p>
                    <p className="text-sm text-[#475569] mt-1">Técnica adecuada en consulta, con mediciones repetidas y evaluación de monitoreo domiciliario para diagnóstico y seguimiento</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación cardio-renal integrada</p>
                    <p className="text-sm text-[#475569] mt-1">Valoración simultánea de función cardíaca y renal incluyendo albuminuria, eGFR, electrocardiograma y riesgo cardiovascular</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Identificación de causas secundarias</p>
                    <p className="text-sm text-[#475569] mt-1">Búsqueda de apnea del sueño, causas endocrinas, renales o vasculares en HTA resistente y otros casos complejos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Documentación de arritmias</p>
                    <p className="text-sm text-[#475569] mt-1">Electrocardiograma, Holter de 24-48 horas o monitor de eventos para correlacionar síntomas con alteraciones del ritmo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Optimización terapéutica basada en objetivos</p>
                    <p className="text-sm text-[#475569] mt-1">Ajuste personalizado de medicamentos, priorización de fármacos cardio-protectores y renoprotectores, y búsqueda de combinaciones en una tableta</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Manejo de complicaciones</p>
                    <p className="text-sm text-[#475569] mt-1">En ERC/diálisis: control de volumen, anemia, minerales óseos, y coordinación con nefrología para terapia de reemplazo renal óptima</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Seguimiento y coordinación</p>
                    <p className="text-sm text-[#475569] mt-1">Monitoreo cercano de evolución, ajuste según respuesta, y coordinación con cardiología, nefrología y otros especialistas cuando sea necesario</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Manejo integral con visión cardio-renal</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si presentas hipertensión difícil manejo, arritmias, cardiopatías, insuficiencia renal o requieres manejo de diálisis, el Dr. Willmer Obregón ofrece evaluación estratificada de riesgo, búsqueda de causas secundarias, optimización terapéutica basada en objetivos, y monitoreo domiciliario para decisiones más precisas. Este enfoque integral protege tanto corazón como riñones y previene complicaciones a largo plazo.
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

export default EnfermedadesCardiovascularesPage;
