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
  title: "Holter 24 horas - Dr. Willmer Obregón | Medellín",
  description: "Monitoreo continuo del ritmo cardíaco durante 24 horas en Medellín. Detección precisa de arritmias y evaluación integral del corazón.",
};

const faqs = [
  {
    question: "¿Cuánto tiempo dura el procedimiento de Holter en 24 horas?",
    answer: "La instalación del dispositivo toma unos 15 minutos. El monitoreo en sí dura exactamente 24 horas (o el tiempo indicado por el médico), durante las cuales usted realiza sus actividades normales mientras el equipo registra su ritmo cardíaco."
  },
  {
    question: "¿Es doloroso o incómodo usar el Holter?",
    answer: "No es doloroso en absoluto. Es un procedimiento no invasivo. Puede sentir una ligera incomodidad por tener los electrodos adheridos a la piel o por llevar el pequeño grabador portátil, pero es muy ligero y está diseñado para no interferir con su vida diaria."
  },
  {
    question: "¿Necesito prepararme antes del estudio?",
    answer: "Se recomienda bañarse antes de la cita, ya que no podrá mojarse el pecho mientras use el dispositivo. Use ropa cómoda y holgada. En algunos casos, puede ser necesario rasurar una pequeña zona del pecho para asegurar el contacto de los electrodos."
  },
  {
    question: "¿Qué información obtendré de los resultados?",
    answer: "El estudio proporciona un registro detallado de su frecuencia cardíaca, detecta arritmias (ritmos irregulares), pausas cardíacas y permite correlacionar síntomas como palpitaciones o mareos con la actividad eléctrica del corazón en ese momento exacto."
  },
  {
    question: "¿Cuándo debo programar una cita para Holter 24 horas?",
    answer: "Debe programarlo si experimenta palpitaciones frecuentes, desmayos sin causa clara, mareos persistentes o si su médico necesita evaluar la eficacia de un tratamiento para arritmias o el funcionamiento de un marcapasos."
  },
  {
    question: "¿El Holter en 24 horas es seguro?",
    answer: "Es un procedimiento extremadamente seguro. No utiliza radiación ni emite descargas eléctricas; simplemente funciona como un receptor que graba la señal natural de su corazón. No tiene riesgos para la salud."
  }
];

const Holter24HorasPage = () => {
  const benefits = [
    "Monitoreo continuo en actividad diaria",
    "Detección de arritmias esporádicas",
    "Registro completo de 24 horas",
    "No invasivo e indoloro",
    "Dispositivo portátil y ligero",
    "Análisis detallado de ritmo cardíaco"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-4xl mx-auto md:mx-0">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Cardiología</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Holter 24 horas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Monitoreo continuo del ritmo cardíaco mientras realizas tus actividades diarias.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Paciente con dispositivo Holter de 24 horas"
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
              ¿Estás buscando una solución confiable y efectiva para monitorear tu corazón durante 24 horas?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El Holter de 24 horas permite registrar tu ritmo cardíaco de forma continua mientras haces tu vida normal. Es útil cuando los síntomas aparecen de manera intermitente y no se captan en un electrocardiograma puntual.
              </p>
              <h3 className="text-xl font-bold text-[#0F172A] pt-4">Servicio de Holter de 24 horas</h3>
              <p>
                El Holter es un dispositivo portátil que registra la actividad eléctrica del corazón durante 24 horas. Con la información obtenida se pueden detectar irregularidades del ritmo (arritmias), variaciones de la frecuencia cardíaca y cambios relacionados con síntomas.
              </p>
              <p>
                Suele indicarse para estudiar palpitaciones, mareos, episodios de desmayo, dolor torácico, falta de aire o como parte del seguimiento de tratamientos y enfermedades cardiovasculares.
              </p>
              <p>
                El procedimiento es sencillo: se colocan electrodos adhesivos en el pecho conectados al dispositivo. Durante el día, se recomienda llevar un registro de actividades y síntomas para correlacionarlos con el trazado.
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
              Si necesitas monitoreo del ritmo cardíaco durante 24 horas, agenda una valoración. Revisaremos la indicación del estudio y el siguiente paso según tus síntomas y antecedentes.
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

export default Holter24HorasPage;
