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
  title: "Ecocardiograma transtorácico - Dr. Willmer Obregón | Medellín",
  description: "Estudio con ultrasonido para evaluar estructuras y función del corazón de forma no invasiva en Medellín. Diagnóstico preciso y atención integral.",
};

const faqs = [
  {
    question: "¿Qué debo esperar durante el procedimiento del ecocardiograma transtorácico?",
    answer: "Durante el estudio, se le pedirá que se descubra el pecho y se recueste de lado. Se aplicará un gel conductor frío y el especialista deslizará un transductor sobre la piel para obtener imágenes del corazón. Es un procedimiento indoloro que suele durar entre 20 y 30 minutos."
  },
  {
    question: "¿Puedo continuar con mis actividades normales después del ecocardiograma?",
    answer: "Sí, absolutamente. Al ser una prueba no invasiva y sin sedación, puede retomar sus actividades diarias, trabajar o conducir inmediatamente después de finalizar el examen."
  },
  {
    question: "¿Qué tipos de afecciones cardíacas puede detectar el ecocardiograma transtorácico?",
    answer: "Permite detectar anomalías en las válvulas cardíacas, medir el tamaño de las cavidades del corazón, evaluar la fuerza de bombeo (fracción de eyección), identificar soplos, derrames pericárdicos y cardiopatías congénitas."
  },
  {
    question: "¿Es necesario realizar un seguimiento después del ecocardiograma transtorácico?",
    answer: "El seguimiento dependerá de los hallazgos del estudio. Si se detecta alguna condición que requiera monitoreo, el Dr. Willmer Obregón le indicará la frecuencia necesaria para sus controles según su historial clínico."
  },
  {
    question: "¿Los niños pueden someterse a un ecocardiograma transtorácico?",
    answer: "Sí, es una prueba totalmente segura para pacientes de todas las edades, incluidos niños y mujeres embarazadas, ya que utiliza ondas de ultrasonido y no emite ningún tipo de radiación."
  },
  {
    question: "¿Qué debo hacer si siento ansiedad o nerviosismo antes del procedimiento?",
    answer: "Es normal sentir curiosidad o nervios, pero la prueba es muy tranquila. El personal le explicará cada paso y puede estar acompañado si lo requiere. No hay agujas ni dolor involucrado, lo que suele brindar mucha tranquilidad a los pacientes."
  }
];

const EcocardiogramaTranstoracicoPage = () => {
  const benefits = [
    "Evaluación detallada de estructuras cardíacas",
    "Sin radiación ni invasividad",
    "Resultados inmediatos y claros",
    "Seguro para todas las edades",
    "Detecta valvulopatías y anomalías",
    "Guía el tratamiento cardíaco"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-4xl mx-auto md:mx-0">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Cardiología</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Ecocardiograma transtorácico
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Estudio con ultrasonido para evaluar estructuras y función del corazón de forma no invasiva.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Procedimiento de ecocardiograma transtorácico"
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
              ¿Estás buscando un servicio de ecocardiograma transtorácico confiable y de calidad?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El Dr. Willmer Obregón ofrece ecocardiograma transtorácico como apoyo diagnóstico en la evaluación de tu salud cardiovascular, con orientación clara y un enfoque clínico integral.
              </p>
              <h3 className="text-xl font-bold text-[#0F172A] pt-4">Servicio de Ecocardiograma transtorácico</h3>
              <p>
                El ecocardiograma transtorácico utiliza ultrasonido para visualizar el corazón en tiempo real. Permite evaluar estructuras, función de bombeo, válvulas y posibles alteraciones, de manera indolora y no invasiva.
              </p>
              <p>
                Durante el procedimiento se aplica un gel conductor en el pecho y se desliza un transductor para obtener imágenes. Con estos hallazgos se orienta el diagnóstico y el plan de seguimiento según el caso.
              </p>
              <p>
                Suele ser útil para estudiar síntomas (como falta de aire, dolor torácico o palpitaciones) y para el control de condiciones como valvulopatías, insuficiencia cardíaca o cardiopatías congénitas, según indicación médica.
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
              Si necesitas un ecocardiograma transtorácico, agenda una valoración. Revisaremos tus síntomas, antecedentes y la indicación del estudio para definir los siguientes pasos.
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

export default EcocardiogramaTranstoracicoPage;
