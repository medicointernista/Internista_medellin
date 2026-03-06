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
  title: "Enfermedades Pulmonares - Dr. Willmer Obregón | Medellín",
  description: "Diagnóstico y tratamiento de asma, EPOC, laringitis, tos crónica y dificultad para respirar en Medellín.",
};

const faqs = [
  {
    question: "¿Cómo se diferencia la causa pulmonar de la cardiaca en una disnea?",
    answer: "Se evalúa historia clínica, factores de riesgo cardiovascular, examen físico, electrocardiograma, radiografía de tórax y en algunos casos ecocardiograma. La disnea cardíaca típicamente se presenta con esfuerzo o en decúbito (acostado), mientras que la pulmonar puede presentar otro patrón. La coordinación con cardiología es importante cuando hay duda."
  },
  {
    question: "¿Cuál es el algoritmo para evaluar tos crónica?",
    answer: "Se evalúa patrón temporal, síntomas asociados (goteo posnasal, reflujo, disnea) y fármacos (IECA). Los diagnósticos más comunes son goteo posnasal, asma variante tos, y reflujo gastroesofágico. Se solicitan radiografía, espirometría y FeNO si está disponible. El tratamiento se dirige a la causa identificada."
  },
  {
    question: "¿Qué es la espirometría y por qué es importante?",
    answer: "Es un estudio que mide la capacidad pulmonar y flujo de aire. Se realiza pre y post-broncodilatador para diferenciar asma (reversible) de EPOC (irreversible) y para evaluar severidad. Es fundamental para diagnóstico, monitoreo de control, y determinación de necesidad de escalonamiento/descenso de tratamiento."
  },
  {
    question: "¿Cuál es el manejo del asma según su control?",
    answer: "Se utiliza terapia inhalada escalonada basada en guías. El paso 1 es beta-2 de rescate; pasos 2-5 incluyen corticoides inhalados (ICS) con formoterol, escalando según necesidad. Se evalúa técnica de inhalador, adherencia, y síntomas. El objetivo es control total con mínima necesidad de rescate."
  },
  {
    question: "¿Por qué es importante la cesación del tabaquismo en EPOC?",
    answer: "El tabaquismo es la causa principal de EPOC y causa deterioro progresivo. Dejar de fumar es la intervención más efectiva para detener o enlentecer la progresión de la enfermedad. Se ofrece apoyo médico, farmacológico y conductual para lograr cesación sostenida."
  },
  {
    question: "¿Qué hacer durante una exacerbación de asma o EPOC?",
    answer: "Usar el inhalador de rescate, mantener calma, sentarse derecho. Si no mejora en minutos, contactar urgencia. Una exacerbación grave requiere oxígeno, corticoides sistémicos y posiblemente broncodilatadores nebulizados. El plan de acción debe estar acordado previamente con el médico."
  }
];

const conditions = [
  "Asma",
  "EPOC (Enfermedad Pulmonar Obstructiva Crónica)",
  "Laringitis",
  "Tos Crónica",
  "Dificultad Para Respirar (Disnea)"
];

const EnfermedadesPulmonaresPage = () => {
  const benefits = ["Control del asma y EPOC", "Diagnóstico de tuberculosis", "Tratamiento de neumonía", "Manejo de insuficiencia respiratoria", "Evaluación de tos crónica", "Prevención de exacerbaciones"];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Pulmonares
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Diagnóstico y tratamiento de asma, EPOC, tos crónica y problemas respiratorios con enfoque integral.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7659577/pexels-photo-7659577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Evaluación y tratamiento de enfermedades respiratorias"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención especializada de enfermedades pulmonares
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece evaluación completa y tratamiento de enfermedades respiratorias como asma, EPOC, tos crónica y dificultad para respirar. Con un enfoque integral, ayuda a controlar síntomas, prevenir exacerbaciones y mejorar tu capacidad respiratoria.
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Resumen del grupo de enfermedades pulmonares</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El objetivo es diferenciar causas pulmonares, cardiacas y extrapulmonares de disnea/tos, identificar exacerbaciones, optimizar control de asma/EPOC con terapia inhalada adecuada, y reducir riesgo mediante tabaquismo, vacunas y rehabilitación pulmonar. Incluye asma, EPOC, tos crónica, disnea y laringitis.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Abordaje en consulta: cómo se estructura la valoración</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica detallada</p>
                    <p className="text-sm text-[#475569] mt-1">Patrón de síntomas, gatillos, exposición a humo/ocupacional, infecciones respiratorias previas, síntomas de reflujo, rinitis, y medicamentos (IECA causan tos)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de severidad y riesgo</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de severidad actual, riesgo de exacerbación, técnica inhalatoria y adherencia a tratamiento previo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Búsqueda de diagnósticos alternativos</p>
                    <p className="text-sm text-[#475569] mt-1">Si la clínica no encaja, se evalúa causa cardíaca (insuficiencia cardíaca), anemia, ansiedad, o exposiciones ocupacionales/ambientales específicas</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes solicitados según caso</h3>
            <div className="space-y-6 mb-10">
              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Panel base sugerido</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>Oximetría de pulso y signos vitales (evaluación de hipoxemia)</li>
                  <li>Examen físico respiratorio completo (auscultación, ruidos anormales)</li>
                  <li>Espirometría pre y post-broncodilatador (asma/EPOC, evaluación de reversibilidad)</li>
                  <li>Radiografía de tórax (tos/disnea persistente, sospecha de infección/complicaciones)</li>
                  <li>Hemograma (búsqueda de eosinófilos en asma, anemia como causa de disnea)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] p-6 bg-white/50">
                <h4 className="font-semibold text-[#0F172A] mb-3">Exámenes según síntomas y comorbilidades</h4>
                <ul className="text-sm text-[#475569] space-y-2 list-disc list-inside">
                  <li>Gasometría arterial (exacerbación grave, sospecha de hipoxemia/hipercapnia)</li>
                  <li>TAC de tórax (seleccionado: tos crónica persistente, sospecha de enfermedad intersticial, complicaciones)</li>
                  <li>FeNO - Óxido nítrico exhalado (fenotipo asmático, inflamación eosinófila)</li>
                  <li>Pruebas de alergia / IgE total (asma alérgica seleccionada, orientación terapéutica)</li>
                  <li>Electrocardiograma y ecocardiograma (disnea de origen incierto, sospecha de causa cardíaca)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos más comunes según diagnóstico</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Asma</p>
                    <p className="text-sm text-[#475569] mt-1">Terapia inhalada escalonada con corticoide inhalado (ICS) y estrategias con formoterol según guías, escalamiento/descenso basado en control, educación en técnica</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">EPOC</p>
                    <p className="text-sm text-[#475569] mt-1">LABA/LAMA (broncodilatadores de larga acción), ICS en fenotipos seleccionados, rehabilitación pulmonar, vacunación, cesación tabáquica intensiva, oxígeno cuando necesario</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Tos crónica</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de goteo posnasal, asma variante tos, reflujo gastroesofágico, y fármacos (IECA), manejo por algoritmo dirigido a causa identificada</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Disnea</p>
                    <p className="text-sm text-[#475569] mt-1">Triage de signos de alarma, diferenciación de causa pulmonar vs cardíaca vs extrapulmonar, coordinación con cardiología/nefrología cuando aplique</p>
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
                    <p className="font-semibold text-[#0F172A]">Historia clínica estructurada</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de gatillos, exposiciones ocupacionales, síntomas asociados (reflujo, rinitis), tabaquismo, y medicamentos que afecten vías respiratorias</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Examen respiratorio completo</p>
                    <p className="text-sm text-[#475569] mt-1">Oximetría, signos vitales, auscultación de campos pulmonares y evaluación de uso de musculatura accesoria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Diferenciación de etiología</p>
                    <p className="text-sm text-[#475569] mt-1">Determinación si causa es pulmonar, cardíaca o extrapulmonar; coordinación con especialistas cuando sea necesario</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Espirometría y evaluación de función pulmonar</p>
                    <p className="text-sm text-[#475569] mt-1">Estudio pre y post-broncodilatador para diagnóstico de asma/EPOC, evaluación de reversibilidad y monitoreo de control</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Educación en técnica de inhaladores</p>
                    <p className="text-sm text-[#475569] mt-1">Demostración y entrenamiento práctica en uso correcto de dispositivos (pMDI, turbuhaler, nebulizadores)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan de tratamiento escalonado</p>
                    <p className="text-sm text-[#475569] mt-1">Terapia individualizada basada en severidad y guías, con medicamentos controladores y rescate, plan de acción escrito</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Evaluación de exacerbaciones</p>
                    <p className="text-sm text-[#475569] mt-1">Identificación de factores precipitantes, prevención mediante vacunación, cesación tabáquica y rehabilitación pulmonar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Seguimiento y monitoreo</p>
                    <p className="text-sm text-[#475569] mt-1">Control de síntomas, evaluación periódica de adherencia, escalamiento/descenso según respuesta, y prevención de complicaciones</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Manejo integral de enfermedades pulmonares</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si presentas asma, EPOC, tos crónica, disnea o laringitis, el Dr. Willmer Obregón ofrece diagnóstico diferencial cuidadoso (pulmonar vs cardíaco vs extrapulmonar), optimización de terapia inhalada, identificación de factores de riesgo y exacerbaciones, y estrategias de prevención mediante vacunas y cesación tabáquica. Un enfoque integral mejora el control de síntomas y la calidad de vida respiratoria a largo plazo.
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

export default EnfermedadesPulmonaresPage;
