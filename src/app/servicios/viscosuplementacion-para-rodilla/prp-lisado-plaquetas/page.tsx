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
  title: "PRP y Lisado de Plaquetas - Rodilla | Dr. Willmer Obregón",
  description: "Plasma Rico en Plaquetas (PRP) y Lisado de Plaquetas para regeneración articular avanzada. Tratamiento biológico en Medellín.",
};

const faqs = [
  {
    question: "¿Qué es el PRP?",
    answer: "El PRP es un hemoderivado autólogo (del propio paciente) obtenido por centrifugación, con concentración de plaquetas y factores de crecimiento. Se usa para modular dolor y apoyar reparación tisular en lesiones seleccionadas. Su efecto depende de la preparación (leucocitario vs leucopobre), activación, volumen y protocolo."
  },
  {
    question: "¿Cuáles son las ventajas del PRP?",
    answer: "Es autólogo (baja probabilidad de alergia). En OA de rodilla, varios metaanálisis muestran mejoría de dolor/función comparado con ácido hialurónico en múltiples escenarios. Puede ser coadyuvante en lesiones crónicas (tendinopatías/entesopatías seleccionadas) según criterio clínico."
  },
  {
    question: "¿Cuáles son las desventajas del PRP?",
    answer: "Alta variabilidad entre productos y protocolos. Posible reacción inflamatoria post-aplicación (más con PRP rico en leucocitos). Mayor costo y necesidad de equipos/proceso. Evidencia heterogénea por falta de estandarización."
  },
  {
    question: "¿Dónde se puede aplicar el PRP?",
    answer: "Intraarticular: rodilla (OA) y otras articulaciones seleccionadas. Peritendinoso/entesis: epicóndilo lateral, rotuliano, Aquiles (evitar intratendinoso). Fascia plantar (seleccionado)."
  },
  {
    question: "¿Cuáles son las contraindicaciones del PRP?",
    answer: "Infección activa local o sistémica. Plaquetopenia significativa o coagulopatía importante. Anticoagulación no manejable/alto riesgo hemorrágico (individualizar). Neoplasia activa en área de aplicación (individualizar)."
  },
  {
    question: "¿Cuáles son las complicaciones del PRP?",
    answer: "Dolor/inflamación transitoria post-inyección. Hematoma/sangrado local. Infección (rara). Reacción vasovagal."
  },
  {
    question: "¿Cuál es la diferencia entre PRP leucocitario y leucopobre?",
    answer: "PRP leucocitario: más probabilidad de inflamación post-procedimiento. PRP leucopobre: mejor tolerancia en varios reportes; frecuentemente preferido en OA. El PRP leucopobre es generalmente mejor tolerado con menos reacción inflamatoria local."
  },
  {
    question: "¿Qué es el Lisado de Plaquetas (PL)?",
    answer: "El lisado de plaquetas implica ruptura de plaquetas y liberación de factores de crecimiento. Se propone como alternativa con evidencia emergente en OA de rodilla, potencialmente mitigando algunos aspectos inflamatorios asociados a PRP en ciertos protocolos, aunque se requieren más estudios comparativos robustos."
  }
];

const PRPLisadoPlaquetasPage = () => {
  const benefits = [
    "Estimula regeneración profunda",
    "Utiliza factores de crecimiento naturales",
    "Efectos duraderos y progresivos",
    "Sin rechazo (sangre autógena)",
    "Recuperación total de tejidos",
    "Ideal para daño articular severo"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-3xl text-left">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Viscosuplementación para Rodilla</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            PRP y Lisado de Plaquetas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Tratamiento regenerativo avanzado utilizando factores de crecimiento de las propias plaquetas del paciente.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="PRP y Lisado de Plaquetas para regeneración articular"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} title="Beneficios principales" />

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Article */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Plasma Rico en Plaquetas (PRP) y Lisado de Plaquetas (PL)
            </h2>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Qué es PRP?</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                El PRP es un hemoderivado autólogo (del propio paciente) obtenido por centrifugación, con concentración de plaquetas y factores de crecimiento. Se usa para modular dolor y apoyar reparación tisular en lesiones seleccionadas. Su efecto depende de la preparación (leucocitario vs leucopobre), activación, volumen y protocolo.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Ventajas</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Autólogo: baja probabilidad de alergia</li>
              <li>En OA de rodilla, varios metaanálisis muestran mejoría de dolor/función comparado con ácido hialurónico en múltiples escenarios</li>
              <li>Puede ser coadyuvante en lesiones crónicas (tendinopatías/entesopatías seleccionadas) según criterio clínico</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Desventajas</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Alta variabilidad entre productos y protocolos</li>
              <li>Posible reacción inflamatoria post-aplicación (más con PRP rico en leucocitos)</li>
              <li>Costo mayor y necesidad de equipos/proceso</li>
              <li>Evidencia heterogénea por falta de estandarización</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Sitios de colocación</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li><strong>Intraarticular:</strong> rodilla (OA) y otras articulaciones seleccionadas</li>
              <li><strong>Peritendinoso/entesis:</strong> epicóndilo lateral, rotuliano, Aquiles (evitar intratendinoso)</li>
              <li><strong>Fascia plantar:</strong> seleccionado</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Contraindicaciones</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Infección activa local o sistémica</li>
              <li>Plaquetopenia significativa o coagulopatía importante</li>
              <li>Anticoagulación no manejable / alto riesgo hemorrágico (individualizar)</li>
              <li>Neoplasia activa en área de aplicación (individualizar)</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Complicaciones</h3>
            <ul className="text-[#475569] space-y-3 mb-10 leading-relaxed text-left list-disc list-inside">
              <li>Dolor/inflamación transitoria post-inyección</li>
              <li>Hematoma/sangrado local</li>
              <li>Infección (rara)</li>
              <li>Reacción vasovagal</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">PRP Leucocitario vs Leucopobre: Comportamiento Inflamatorio</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                En términos prácticos, PRP obtenido por centrifugación puede contener diferente carga de leucocitos. Preparaciones con más leucocitos tienden a inducir más respuesta inflamatoria local (dolor/edema transitorio). El lisado de plaquetas (PL) implica ruptura de plaquetas y liberación de factores de crecimiento; se propone como alternativa con evidencia emergente en OA de rodilla, potencialmente mitigando algunos aspectos inflamatorios asociados a PRP en ciertos protocolos, aunque se requieren más estudios comparativos robustos.
              </p>
              <div className="bg-[#E7F5F9]/30 p-6 rounded-lg border border-[#1080A0]/20">
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>PRP leucocitario:</strong> más probabilidad de inflamación post-procedimiento</li>
                  <li><strong>PRP leucopobre:</strong> mejor tolerancia en varios reportes y síntesis; frecuentemente preferido en OA</li>
                  <li><strong>PL (Lisado de Plaquetas):</strong> evidencia emergente; revisiones sugieren seguridad y mejoría, pero la base de estudios aún es limitada</li>
                </ul>
              </div>
            </div>

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

export default PRPLisadoPlaquetasPage;
