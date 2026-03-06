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
  title: "Enfermedades Gastrointestinales - Dr. Willmer Obregón | Medellín",
  description: "Tratamiento de constipación, diarrea, colon irritable, gastritis, reflujo y disbiosis intestinal en Medellín.",
};

const faqs = [
  {
    question: "¿Cómo se define el patrón clínico de mi enfermedad gastrointestinal?",
    answer: "En la consulta inicial se analiza detalladamente: tipo de síntomas (dolor, cambios de hábito, sangrado), duración de los síntomas, relación con comidas o estrés, medicamentos que toma, antecedentes de viajes o uso de antibióticos, y antecedentes familiares. Se identifican signos de alarma como sangrado, anemia, pérdida de peso o fiebre que podrían indicar causas orgánicas graves."
  },
  {
    question: "¿Qué exámenes de laboratorio se solicitan inicialmente?",
    answer: "El panel base incluye hemograma, PCR (proteína C reactiva) y/o VSG para inflamación. En casos de diarrea con sospecha de enfermedad inflamatoria intestinal se solicita calprotectina fecal. Si hay síntomas compatibles con celiaquía se piden anticuerpos anti-TTG IgA. Se puede solicitar coprológico según el contexto clínico. Los exámenes se adaptan a los síntomas específicos de cada paciente."
  },
  {
    question: "¿Cuándo se necesitan exámenes más avanzados?",
    answer: "Si hay signos de alarma (sangrado persistente, anemia, pérdida de peso, fiebre, inicio después de los 50 años o historia familiar de cáncer), se considera colonoscopia o endoscopia alta. En diarrea aguda con factores de riesgo se solicita coprocultivo y toxina C. difficile. El reflujo refractario al tratamiento inicial puede requerir pH-impedancia o manometría esofágica."
  },
  {
    question: "¿Cuál es el tratamiento para el síndrome de intestino irritable (SII)?",
    answer: "El tratamiento incluye educación sobre la condición, dieta baja en FODMAPs con posterior reintroducción de alimentos, fibra soluble, y medicamentos específicos según el subtipo (estreñimiento, diarrea o mixto). En casos seleccionados se utiliza neuromodulación. El enfoque es escalonado, comenzando con medidas no farmacológicas."
  },
  {
    question: "¿Cómo se maneja la disbiosis intestinal?",
    answer: "Se identifican y corrigen los factores predisponentes (uso de antibióticos, dieta pobre en fibra, estrés). Se optimiza la alimentación con alimentos ricos en fibra y fermentados. Los probióticos se indican de forma selectiva y fundamentada en evidencia clínica clara, no de manera rutinaria. Es importante evitar prometer resultados absolutos."
  }
];

const conditions = [
  "Constipación",
  "Diarrea",
  "Colon Irritable",
  "Gastritis",
  "Reflujo Gastroesofágico",
  "Disbiosis intestinal"
];

const EnfermedadesGastrointestinalesPage = () => {
  const benefits = ["Diagnóstico de gastritis y úlceras", "Manejo de reflujo gastroesofágico", "Tratamiento de síndrome del colon irritable", "Evaluación de diarrea crónica", "Control de enfermedad inflamatoria intestinal", "Seguimiento postquirúrgico"];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Gastrointestinales
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Diagnóstico y tratamiento integral de trastornos digestivos con enfoque en causas y soluciones efectivas.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Evaluación y tratamiento de problemas digestivos"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención especializada de enfermedades gastrointestinales
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece evaluación y tratamiento de trastornos digestivos como constipación, diarrea, síndrome de intestino irritable, gastritis, reflujo y disbiosis intestinal. Con un enfoque integral, identifica las causas subyacentes y desarrolla planes de tratamiento efectivos.
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Resumen del abordaje integral</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                En consulta se define el patrón clínico exacto, la duración de los síntomas y se identifican banderas rojas que sugieran causas orgánicas. Se descartan sistemáticamente condiciones como inflamación, infección, celiaquía, anemia, pérdida de peso y otras causas graves. Una vez descartadas las causas orgánicas, se formula un plan escalonado: modificaciones dietéticas, tratamiento farmacológico cuando es necesario, y pruebas dirigidas según la clínica.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Cómo se estructura la valoración</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica detallada</p>
                    <p className="text-sm text-[#475569] mt-1">Tipo de síntomas, relación con comidas y estrés, medicamentos, antecedentes de viajes o antibióticos, sangrado, pérdida de peso, antecedentes familiares de cáncer o enfermedad inflamatoria intestinal</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Examen físico abdominal</p>
                    <p className="text-sm text-[#475569] mt-1">Palpación cuidadosa del abdomen y evaluación perianal según sea necesario para identificar signos de alarma</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Identificación de banderas rojas</p>
                    <p className="text-sm text-[#475569] mt-1">Sangrado activo, anemia, pérdida de peso involuntaria, fiebre, síntomas iniciados después de los 50 años, o historia familiar de cáncer gastrointestinal o IBD</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes dirigidos según diagnóstico</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-[#0F172A] mb-3">Panel base (según caso)</p>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Hemograma completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>PCR y/o VSG para evaluar inflamación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Calprotectina fecal (si hay diarrea y sospecha de IBD vs SII)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Serología celíaca (anti-TTG IgA + IgA total) en casos compatibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Coprológico según contexto</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-3">Según síntomas y signos de alarma</p>
                  <ul className="space-y-2 text-sm text-[#475569]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Coprocultivo / toxina C. difficile (diarrea aguda con factores de riesgo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Colonoscopia (edad, signos de alarma)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>Endoscopia alta (síntomas de alarma, refractarios, sospecha de complicaciones)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1080A0] font-bold">•</span>
                      <span>pH-impedancia/manometría (ERGE refractaria seleccionada)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos según diagnóstico</h3>
            <div className="space-y-4 text-[#475569] mb-10 leading-relaxed">
              <div className="rounded-2xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-2">Síndrome de intestino irritable (SII)</p>
                <p className="text-sm">Educación sobre la condición, dieta baja en FODMAPs con reintroducción sistemática, fibra soluble, fármacos según subtipo (SII-C, SII-D, SII mixto), y neuromodulación en casos seleccionados.</p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-2">Constipación crónica</p>
                <p className="text-sm">Fibra, laxantes osmóticos, estimulantes si es necesario, con escalamiento a fármacos específicos en casos refractarios siguiendo guías actuales.</p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-2">Reflujo gastroesofágico (ERGE)</p>
                <p className="text-sm">Medidas antirreflujo (postura, dieta, horarios), inhibidores de bomba de protones durante 8 semanas en síntomas típicos sin alarma. En refractarios se realiza evaluación adicional.</p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-2">Diarrea crónica</p>
                <p className="text-sm">Enfoque sindromático y por banderas rojas, hidratación adecuada, identificación de etiología, tratamiento dirigido según la causa.</p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 border border-[#E2E8F0]">
                <p className="font-semibold text-[#0F172A] mb-2">Disbiosis intestinal</p>
                <p className="text-sm">Corrección de factores predisponentes, evitando promesas absolutas. Probióticos solo cuando existe evidencia clara y el contexto clínico lo justifica.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Definición clara del patrón clínico</p>
                    <p className="text-sm text-[#475569] mt-1">Análisis detallado del tipo, duración y factores desencadenantes de tus síntomas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Descarte de causas orgánicas</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación sistemática para descartar inflamación, infección, celiaquía, anemia y otras causas graves</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Exámenes dirigidos apropiados</p>
                    <p className="text-sm text-[#475569] mt-1">Solicitud de pruebas específicas basadas en tu clínica y signos de alarma</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan escalonado y personalizado</p>
                    <p className="text-sm text-[#475569] mt-1">Recomendaciones dietéticas, tratamiento farmacológico cuando sea necesario, y seguimiento</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Un enfoque clínico basado en evidencia</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si presentas constipación, diarrea, síndrome de intestino irritable, gastritis, reflujo gastroesofágico o disbiosis intestinal, el Dr. Willmer Obregón te ayudará con un diagnóstico preciso. Se evalúan todas las posibilidades, se descartan las causas orgánicas importantes, y se formula un plan escalonado efectivo que comienza con modificaciones dietéticas y progresa según sea necesario. El objetivo es identificar exactamente qué está sucediendo y resolver el problema de forma integral.
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

export default EnfermedadesGastrointestinalesPage;
