import React from 'react';
import { Metadata } from 'next';
import { MessageSquare, Phone, Mail, MapPin, Clock, CircleCheck as CheckCircle2 } from 'lucide-react';
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
  title: "Consulta de Medicina Interna - Dr. Willmer Obregón | Medellín",
  description: "Servicio de consulta de medicina interna de alta calidad en Medellín. Diagnóstico, tratamiento y manejo integral de enfermedades internas.",
};

const faqs = [
  {
    question: "¿Necesito una referencia para programar una consulta de medicina interna?",
    answer: "No, como consulta particular puedes agendar directamente sin necesidad de una remisión previa de otro médico o entidad."
  },
  {
    question: "¿Cuánto tiempo dura una consulta de medicina interna?",
    answer: "La consulta inicial suele durar entre 30 y 45 minutos, permitiendo una evaluación exhaustiva de tu historial médico, síntomas actuales y un examen físico detallado."
  },
  {
    question: "¿Cuáles son las condiciones médicas que se tratan en consulta?",
    answer: "Se tratan diversas condiciones del adulto como hipertensión, diabetes, obesidad, problemas de tiroides, enfermedades renales, cardiovasculares y metabólicas, además de síntomas generales que requieran diagnóstico integral."
  },
  {
    question: "¿Se ofrecen servicios de telemedicina?",
    answer: "Sí, contamos con opción de teleconsulta para seguimientos, revisión de resultados de exámenes o casos que no requieran necesariamente un examen físico presencial inmediato."
  },
  {
    question: "¿Cómo puedo programar una consulta de medicina interna?",
    answer: "Puedes agendar tu cita fácilmente haciendo clic en el botón de WhatsApp en este sitio o llamando directamente a nuestras líneas de contacto."
  }
];

const ConsultaMedicinaInternaPage = () => {
  const benefits = [
    "Evaluación integral y personalizada",
    "Diagnóstico preciso de enfermedades",
    "Plan de tratamiento completo",
    "Seguimiento preventivo continuo",
    "Especialista altamente capacitado",
    "Atención con enfoque humano"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Consulta de Medicina Interna
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Evaluación integral, diagnóstico y plan de tratamiento con enfoque preventivo.
          </p>
        </header>

        {/* Hero Image */}
          <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
            <img
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Consulta de medicina interna en Medellín con evaluación integral del paciente"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </figure>

          {/* Benefits Section */}
          <ServiceBenefits benefits={benefits} />

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Article */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Consulta Completa de Medicina Interna
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ha diagnosticado y tratado miles de pacientes con enfermedades crónicas durante sus 15 años de práctica. Realiza consultas profundas que duran 60 minutos, mucho más que las consultas típicas de 15-20 minutos.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Por qué elegir consulta de medicina interna?</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El Dr. Obregón diagnostica y trata enfermedades del corazón, riñones, páncreas, hígado, tiroides y otros órganos vitales. Identifica problemas que otros especialistas pasan por alto.
              </p>
              <p>
                Cada consulta incluye: historia clínica detallada, examen físico completo, interpretación de tus análisis previos y un plan de tratamiento personalizado basado en tus necesidades reales.
              </p>
              <p>
                Muchos pacientes llegan al Dr. Obregón después de visitar múltiples especialistas sin mejoría. Su enfoque integral busca entender tu caso completo: síntomas, antecedentes, hábitos y objetivos de salud.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Duración de 60 minutos</p>
                    <p className="text-sm text-[#475569] mt-1">En ningún otro consultorio te ofrecerán ese tiempo de consulta</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Múltiples motivos de consulta</p>
                    <p className="text-sm text-[#475569] mt-1">Puedes explicarle todos tus problemas al doctor durante la consulta, sin limitarte a un solo motivo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Examen físico detallado</p>
                    <p className="text-sm text-[#475569] mt-1">Conversación profunda sobre tus síntomas, antecedentes y medicamentos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Recomendaciones personalizadas</p>
                    <p className="text-sm text-[#475569] mt-1">Dieta y ejercicio acorde a cada paciente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica completa</p>
                    <p className="text-sm text-[#475569] mt-1">Incluye envío de Historia Electrónica e Impresa durante la atención presencial</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Estudios previos incluidos</p>
                    <p className="text-sm text-[#475569] mt-1">Electrocardiograma + bioimpedancia antes de la atención</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Consulta de control sin costo</p>
                    <p className="text-sm text-[#475569] mt-1">Para revisión de cualquier examen solicitado adicional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Seguimiento por WhatsApp</p>
                    <p className="text-sm text-[#475569] mt-1">Desde el teléfono personal del doctor sin costo adicional</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Qué puedes esperar en tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">1</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-endocrinas" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Endocrinas
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">2</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-psiquiatricas" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Psiquiátricas
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">3</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-cardiovasculares" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Cardiovasculares
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">4</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-pulmonares" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Pulmonares
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">5</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-gastrointestinales" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Gastrointestinales
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">6</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/enfermedades-hematologicas" className="text-[#1080A0] font-medium hover:underline">
                      Enfermedades Hematológicas
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-sm font-bold">7</span>
                  <div>
                    <a href="/servicios/consulta-medicina-interna/manejo-avanzado-dolor" className="text-[#1080A0] font-medium hover:underline">
                      Manejo Avanzado de Dolor
                    </a>
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Conclusión</h3>
            <p className="text-[#475569] leading-relaxed mb-12">
              Si estás buscando una consulta de medicina interna con un especialista confiable y experimentado, el Dr. Willmer Obregón es una excelente elección. Con su experiencia y enfoque integral, brinda atención médica de alta calidad y se preocupa por el bienestar de sus pacientes.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes sobre Consulta de medicina interna</h3>
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

          {/* Sidebar */}
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

              {/* Location Card */}
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

              {/* Working Hours */}
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

      {/* CTA Banner Section */}
      <CtaBanner />
    </div>
  );
};

export default ConsultaMedicinaInternaPage;
