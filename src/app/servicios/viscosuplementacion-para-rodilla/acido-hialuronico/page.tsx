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
  title: "Viscosuplementación con Ácido Hialurónico - Rodilla | Dr. Willmer Obregón",
  description: "Viscosuplementación con ácido hialurónico para lubricación articular y alivio del dolor. Tratamiento efectivo para la artrosis en Medellín.",
};

const faqs = [
  {
    question: "¿Para qué indicaciones se utiliza?",
    answer: "La viscosuplementación con ácido hialurónico está indicada para osteoartrosis de rodilla sintomática que persiste a pesar de medidas de base como ejercicio, control de peso y analgesia. Es ideal para pacientes que buscan opciones no quirúrgicas con beneficio potencial de varios meses, así como en casos seleccionados en programas de mantenimiento."
  },
  {
    question: "¿Cuáles son las ventajas del tratamiento?",
    answer: "El ácido hialurónico tiene un perfil de seguridad generalmente favorable, no produce hiperglucemia, y en algunos pacientes el beneficio puede sostenerse por varios meses. Es una alternativa no invasiva que permite mantener la actividad física."
  },
  {
    question: "¿Cuánto tiempo duran los efectos?",
    answer: "La duración es frecuentemente de 3 a 6 meses de mejoría; algunos preparados y pacientes alcanzan 9 a 12 meses. La duración depende del grado de artrosis, peso corporal, alineación articular y adherencia a rehabilitación."
  },
  {
    question: "¿Cuál es la diferencia entre monodosis y multidosis?",
    answer: "Monodosis: una sola aplicación, logística simple y menor número de punciones. Multidosis (2 a 5 aplicaciones): en varios análisis se observa mejor efecto promedio a 3-6 meses. Esquemas con 2-4 dosis muestran mayor eficacia. La elección se debe individualizar según el producto, disponibilidad y fenotipo del paciente."
  },
  {
    question: "¿Cuál es el protocolo de aplicación?",
    answer: "Monodosis: 1 aplicación, repetir a 6-12 meses si hay beneficio. Multidosis: típicamente 1 aplicación por semana durante 3 semanas (según ficha técnica del producto). Mantenimiento anual es habitual si el paciente responde bien al tratamiento."
  },
  {
    question: "¿Cuáles son las complicaciones y contraindicaciones?",
    answer: "Complicaciones: dolor e inflamación transitoria post-inyección, derrame reactivo, hematoma/sangrado e infección (rara). Contraindicaciones: infección local o sospecha de artritis séptica, alergia a componentes del producto, y sinovitis severa/brote inflamatorio marcado (a veces se trata el brote primero)."
  }
];

const AcidoHialuronicoPage = () => {
  const benefits = [
    "Lubricación natural de la articulación",
    "Alivio del dolor sin efectos secundarios",
    "Mejora significativa de la movilidad",
    "Retrasa la progresión de la artrosis",
    "Permite mantener actividad física",
    "Seguimiento oftalmológico incluido"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-3xl text-left">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Viscosuplementación para Rodilla</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Viscosuplementación con Ácido Hialurónico
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Restaura la lubricación natural de la rodilla con ácido hialurónico de alta calidad para alivio duradero.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Viscosuplementación con ácido hialurónico para rodilla"
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
              Viscosuplementación con Ácido Hialurónico (Rodilla)
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                La viscosuplementación consiste en la infiltración intraarticular de ácido hialurónico (AH) en la rodilla para mejorar viscoelasticidad del líquido sinovial, disminuir fricción y modular dolor, con objetivo de mejorar función. Se utiliza principalmente en osteoartrosis de rodilla (OA).
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Qué es?</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                El ácido hialurónico es una sustancia natural presente en las articulaciones que actúa como lubricante y amortiguador. En la viscosuplementación, se inyecta directamente en la cavidad articular de la rodilla para restaurar la lubricación natural, reducir la fricción y mejorar la funcionalidad articular.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Indicaciones</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>OA de rodilla sintomática que persiste pese a medidas de base (ejercicio, control de peso, analgesia/antiinflamatorios según tolerancia)</li>
              <li>Pacientes que buscan opciones no quirúrgicas con potencial beneficio de meses (respuesta variable)</li>
              <li>Casos seleccionados en programas de mantenimiento para mejorar dolor/función</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Ventajas</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Perfil de seguridad generalmente favorable</li>
              <li>No produce hiperglucemia</li>
              <li>En algunos pacientes, el beneficio puede sostenerse por varios meses</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Duración del tratamiento y beneficio</h3>
            <div className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left">
              <p><strong>Frecuente:</strong> 3 a 6 meses de mejoría; algunos preparados/pacientes alcanzan 9 a 12 meses.</p>
              <p><strong>Factores determinantes:</strong> Depende del grado de OA, peso, alineación y adherencia a rehabilitación.</p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Monodosis vs Multidosis</h3>
            <div className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left">
              <p>Hay formulaciones monodosis (1 aplicación) y multidosis (2 a 5 aplicaciones). En algunos análisis, esquemas 2 a 4 dosis muestran mayor efecto promedio; sin embargo, existen monodosis con evidencia de eficacia y seguridad hasta 6 a 12 meses en contextos específicos. La elección debe individualizarse.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Monodosis:</strong> Logística simple, menor número de punciones</li>
                <li><strong>Multidosis:</strong> En varios análisis se observa mejor efecto promedio a 3-6 meses</li>
                <li><strong>Decisión:</strong> Según producto, disponibilidad, fenotipo del paciente y preferencia</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Frecuencia de aplicaciones</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li><strong>Monodosis:</strong> 1 aplicación; repetir a 6-12 meses si hay beneficio</li>
              <li><strong>Multidosis:</strong> 1 por semana x 3 (común) o según ficha técnica</li>
              <li><strong>Mantenimiento anual:</strong> Habitual si el paciente responde</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Contraindicaciones</h3>
            <ul className="text-[#475569] space-y-2 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Infección local o sospecha de artritis séptica</li>
              <li>Alergia a componentes del producto (revisar ficha técnica)</li>
              <li>Sinovitis severa/brote inflamatorio marcado: individualizar (a veces tratar brote primero)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Complicaciones</h3>
            <ul className="text-[#475569] space-y-2 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Dolor e inflamación transitoria post-inyección</li>
              <li>Derrame reactivo</li>
              <li>Hematoma/sangrado</li>
              <li>Infección (rara)</li>
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

export default AcidoHialuronicoPage;
