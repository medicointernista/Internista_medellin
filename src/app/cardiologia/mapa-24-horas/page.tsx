import React from 'react';
import { Metadata } from 'next';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
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
  title: "MAPA 24 horas - Dr. Willmer Obregón | Medellín",
  description: "Monitoreo Ambulatorio de Presión Arterial (MAPA) durante 24 horas en Medellín. Control preciso de la hipertensión y evaluación cardiovascular integral.",
};

const faqs = [
  {
    question: "¿Es incómodo llevar el dispositivo durante 24 horas?",
    answer: "El brazalete se infla periódicamente (generalmente cada 15-20 minutos durante el día y cada 30-60 minutos en la noche), lo cual puede ser un poco molesto. Sin embargo, la mayoría de los pacientes lo toleran bien y es fundamental para obtener un perfil real de su presión arterial fuera del entorno clínico."
  },
  {
    question: "¿Cómo debo prepararme para el MAPA 24 horas?",
    answer: "Use ropa con mangas holgadas o una camisa que no apriete para que el brazalete quepa cómodamente. Se recomienda bañarse justo antes de la cita, ya que no podrá retirar el equipo ni mojarlo durante las 24 horas que dura el estudio."
  },
  {
    question: "¿Puedo bañarme o hacer ejercicio con el equipo?",
    answer: "No. Durante el monitoreo no debe bañarse, ducharse ni nadar, ya que el monitor electrónico no es sumergible. Tampoco se recomienda realizar ejercicio intenso que provoque sudoración excesiva o movimientos bruscos que puedan descolocar el brazalete o generar lecturas erróneas."
  },
  {
    question: "¿Para qué sirve el MAPA si mi presión es normal en consulta?",
    answer: "El MAPA permite detectar la 'hipertensión enmascarada' (presión normal en el consultorio pero alta en la vida diaria) o evaluar el comportamiento de la presión durante el sueño (patrón 'non-dipper'), lo cual es un indicador clave de riesgo cardiovascular que no se ve en una toma única."
  },
  {
    question: "¿Cuándo están listos los resultados?",
    answer: "Una vez retirado el equipo, los datos se descargan en un software especializado para su análisis. Generalmente, el informe detallado está listo en 24 a 48 horas hábiles para ser revisado por el especialista en la consulta de seguimiento."
  },
  {
    question: "¿El MAPA 24 horas reemplaza una consulta médica?",
    answer: "No. El MAPA es una herramienta diagnóstica complementaria de gran valor. Los resultados deben ser interpretados por su médico internista o cardiólogo en el contexto de su historia clínica para realizar ajustes en el tratamiento o confirmar un diagnóstico de hipertensión."
  }
];

const Mapa24HorasPage = () => {
  const benefits = [
    "Detección de hipertensión enmascarada",
    "Monitoreo en vida diaria real",
    "Datos día y noche diferenciados",
    "Evalúa patrones de presión arterial",
    "Guía el ajuste de medicamentos",
    "Predicción de riesgo cardiovascular"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-4xl mx-auto md:mx-0">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Cardiología</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            MAPA 24 horas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Monitoreo ambulatorio de presión arterial durante el día y la noche para un control más preciso.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Paciente realizándose un estudio de MAPA 24 horas"
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
              ¿Necesitas un seguimiento detallado de tu presión arterial?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El MAPA de 24 horas (Monitoreo Ambulatorio de Presión Arterial) registra tu presión durante el día y la noche. Es especialmente útil para confirmar diagnósticos y ajustar tratamientos con datos reales de tu rutina.
              </p>
              <h3 className="text-xl font-bold text-[#0F172A] pt-4">¿En qué consiste el MAPA 24 horas?</h3>
              <p>
                El MAPA 24 horas utiliza un brazalete en el brazo conectado a un monitor portátil que toma mediciones automáticas a intervalos. Con esto se obtienen promedios diurnos y nocturnos, variabilidad y patrones relevantes para tu salud cardiovascular.
              </p>
              <p>
                Puede ayudar a detectar hipertensión de bata blanca, hipertensión enmascarada, elevación nocturna de la presión arterial y valorar la respuesta a medicamentos.
              </p>
              <p>
                El procedimiento es ambulatorio: se instala el equipo y continúas tu día normal. Se recomienda llevar un registro de actividades/síntomas y mantener el brazo quieto durante cada medición.
              </p>
            </div>

            {/* FAQs */}
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Conclusión</h3>
            <p className="text-[#475569] leading-relaxed">
              Si necesitas evaluar tu presión arterial con mayor precisión, el MAPA 24 horas es una herramienta clave. Agenda una valoración para definir indicación, preparación y el plan según tus resultados.
            </p>
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

export default Mapa24HorasPage;
