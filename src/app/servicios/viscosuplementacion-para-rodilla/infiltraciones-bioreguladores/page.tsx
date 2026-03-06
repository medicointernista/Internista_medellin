import React from 'react';
import { Metadata } from 'next';
import { MessageSquare, Phone, MapPin, Clock, CircleCheck as CheckCircle2 } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";
import ServiceBenefits from "@/components/sections/service-benefits";
import ComparisonTable from "@/components/sections/comparison-table";
import { getWhatsAppLink } from '@/lib/contact-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Infiltraciones con Bioreguladores - Rodilla | Dr. Willmer Obregón",
  description: "Infiltraciones con bioreguladores para regeneración y recuperación articular. Tratamiento avanzado en Medellín.",
};

const faqs = [
  {
    question: "¿Cuáles son las indicaciones frecuentes?",
    answer: "Los bioreguladores de Heel (Traumeel®/Zeel®) son especialmente indicados para osteoartrosis de rodilla con dolor crónico moderado, dolor osteomuscular con componente inflamatorio leve a moderado, y en pacientes con comorbilidades en quienes se desea limitar la exposición repetida a corticoides."
  },
  {
    question: "¿Qué son Traumeel® S y Zeel® T?",
    answer: "Traumeel® S y Zeel® T son medicamentos complejos de Heel utilizados en infiltraciones intraarticulares. Traumeel® S es conocido por sus propiedades antiinflamatorias naturales, mientras que Zeel® T contiene componentes que favorecen la regeneración del cartílago y la estructura articular."
  },
  {
    question: "¿Cuál es la ventaja sobre corticoides?",
    answer: "Los bioreguladores Traumeel®/Zeel® muestran alivio del dolor superior a placebo con un perfil de seguridad muy benigno. No se asocian a hiperglucemia ni efectos sistémicos típicos de corticoides, lo cual es relevante especialmente en pacientes diabéticos."
  },
  {
    question: "¿Cuál es el protocolo de aplicación?",
    answer: "Para rodilla, el protocolo común consiste en una serie de 3 infiltraciones intraarticulares, espaciadas una por semana. Los refuerzos se individualizan según la respuesta del paciente, usualmente no antes de varias semanas o meses."
  },
  {
    question: "¿Cuáles son las complicaciones posibles?",
    answer: "Las complicaciones son similares a otras infiltraciones: dolor o inflamación local transitoria, hematoma o sangrado leve, infección (rara) y reacción alérgica (infrecuente). Estas complicaciones son generalmente menores y se resuelven espontáneamente."
  },
  {
    question: "¿Qué contraindicaciones tiene?",
    answer: "No debe aplicarse en caso de infección local o sistémica no controlada, alergia conocida a componentes del medicamento, trastorno severo de coagulación no corregido, o durante embarazo/lactancia (debe individualizarse según cada caso)."
  }
];

const InfiltracionesBioreguladores = () => {
  const benefits = [
    "Estimula regeneración celular",
    "Efectos duraderos",
    "Sin supresión del sistema inmune",
    "Recuperación gradual y natural",
    "Mejora la funcionalidad articular",
    "Ideal para artrosis temprana"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-3xl text-left">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Viscosuplementación para Rodilla</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Infiltraciones con Bioreguladores
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Tratamiento que estimula la regeneración natural de los tejidos articulares mediante sustancias biológicas.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Infiltraciones con bioreguladores para regeneración articular"
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
              Infiltraciones con Bioreguladores (Heel)
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                Los bioreguladores de Heel son medicamentos complejos utilizados por algunos equipos clínicos como terapia coadyuvante en dolor osteomuscular. En infiltraciones, la evidencia clínica más estudiada se centra principalmente en la combinación intraarticular Traumeel®/Zeel® para osteoartrosis de rodilla. Para Coenzyme compositum y Ubichinon compositum, el uso suele ser adyuvante con protocolos variables según la práctica.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Indicaciones frecuentes</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Osteoartrosis de rodilla (dolor crónico moderado) con protocolos de Traumeel®/Zeel®</li>
              <li>Dolor osteomuscular con componente inflamatorio leve a moderado (adyuvante en algunos esquemas)</li>
              <li>Pacientes con comorbilidades en quienes se desea limitar exposición repetida a corticoides (decisión individual)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Ventajas potenciales sobre corticoides</h3>
            <div className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left">
              <p>En estudios, Traumeel®/Zeel® mostró alivio del dolor superior a placebo con perfil de seguridad benigno.</p>
              <p>No se asocia a hiperglucemia o efectos sistémicos típicos de corticoides (relevante en diabéticos).</p>
              <p>Puede ser alternativa o coadyuvante cuando se busca un enfoque de modulación sintomática y acompañar rehabilitación.</p>
              <p className="italic text-[#64748B]">Nota: La evidencia es más limitada y heterogénea que la de corticoides; la respuesta es variable y debe individualizarse.</p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Frecuencia de aplicación</h3>
            <div className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left">
              <p><strong>Rodilla (Traumeel®/Zeel®):</strong> Series de 3 infiltraciones intraarticulares, una por semana (protocolos de ensayos).</p>
              <p><strong>Refuerzos:</strong> Individualizados según respuesta, usualmente no antes de varias semanas/meses.</p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Sitios de colocación</h3>
            <div className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left">
              <p>Principalmente articulación de rodilla (protocolos publicados).</p>
              <p>Otros sitios: individualizar según diagnóstico y criterio del especialista.</p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Complicaciones</h3>
            <ul className="text-[#475569] space-y-2 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Dolor o inflamación local transitoria</li>
              <li>Hematoma/sangrado leve</li>
              <li>Infección (rara)</li>
              <li>Reacción alérgica (infrecuente)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Contraindicaciones</h3>
            <ul className="text-[#475569] space-y-2 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Infección local o sistémica no controlada</li>
              <li>Alergia conocida a componentes</li>
              <li>Trastorno severo de coagulación no corregido</li>
              <li>Embarazo/lactancia: individualizar</li>
            </ul>

            {/* Comparison Table */}
            <ComparisonTable title="Comparativa de Tratamientos: Costo vs Beneficio" />

            {/* FAQs */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes</h3>
            <div className="mb-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[#E2E8F0]">
                    <AccordionTrigger className="text-left font-medium text-[#1E293B] hover:text-[#1080A0] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] leading-relaxed pb-6 text-left">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#0F172A] mb-6">Contáctanos</h4>
              <div className="space-y-3 mb-8">
                <a
                  href={getWhatsAppLink(1)}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#187495] via-[#11A9D0] to-[#187495] py-4 px-6 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="h-5 w-5" />
                  Enviar WhatsApp
                </a>
                <a
                  href="tel:+573009895852"
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

export default InfiltracionesBioreguladores;
