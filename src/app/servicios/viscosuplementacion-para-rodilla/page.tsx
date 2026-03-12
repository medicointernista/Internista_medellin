import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Phone, MapPin, Clock, CircleCheck as CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";
import ComparisonTable from "@/components/sections/comparison-table";
import { getWhatsAppLink } from '@/lib/contact-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Infiltraciones Médicas - Visco Suplementación y Dolor Crónico | Dr. Willmer Obregón",
  description: "Infiltraciones mínimamente invasivas para dolor crónico, visco suplementación y manejo articular. Procedimientos ambulatorios seguros en Medellín.",
};

const faqs = [
  {
    question: "¿Qué son las infiltraciones y viscosuplementación?",
    answer: "Son procedimientos mínimamente invasivos que consisten en la colocación de un anestésico junto con una sustancia adicional (corticoide, bioreguladores, ácido hialurónico o plasma rico en plaquetas) directamente en el punto crítico del dolor o dentro de la articulación. El objetivo es calmar el dolor de forma inmediata y mediata, permitiendo que el paciente inicie terapias físicas de rehabilitación."
  },
  {
    question: "¿Cuáles son los principales puntos donde se aplican infiltraciones?",
    answer: "Se pueden aplicar en tendones y articulaciones de: hombro, codo, muñeca, rodilla, músculos, tobillo, talón y fascia plantar. Cada punto se selecciona según la evaluación clínica y los síntomas del paciente."
  },
  {
    question: "¿Cuántas sesiones se requieren?",
    answer: "Depende de la condición y el tipo de infiltración. Algunos casos requieren una sola aplicación, mientras que otros necesitan un ciclo de 2 a 5 inyecciones espaciadas semanalmente o cada dos semanas. Se determina en la consulta inicial."
  },
  {
    question: "¿Cuánto tiempo duran los efectos?",
    answer: "Generalmente, los efectos se pueden sentir inmediatamente y persisten durante varios meses (entre 3 y 12 meses según el tipo de sustancia y la condición). Se realiza seguimiento para evaluar necesidad de reinfiltración."
  },
  {
    question: "¿Es un procedimiento doloroso?",
    answer: "Es generalmente bien tolerado. El anestésico local minimiza molestias durante la inyección. Muchos pacientes refieren sensación de presión más que dolor. El procedimiento es rápido, durando solo algunos minutos."
  },
  {
    question: "¿Cuáles son los beneficios de las infiltraciones?",
    answer: "Alivio inmediato y prolongado del dolor, reducción de inflamación, mejora de la movilidad articular, evita o retrasa cirugía, permite iniciar rehabilitación física efectiva, y es un procedimiento ambulatorio con mínimo tiempo de recuperación."
  },
  {
    question: "¿Hay contraindicaciones?",
    answer: "Se evalúa en cada caso, pero generalmente se evita con infecciones activas en la zona, ciertos trastornos de coagulación, alergia a componentes, embarazo o lactancia. Se hace evaluación completa antes del procedimiento."
  },
  {
    question: "¿Cuál es el tiempo de recuperación?",
    answer: "Es mínimo. Puede retornarse a actividades normales el mismo día, aunque se recomienda evitar actividades intensas las primeras 24-48 horas. La mayoría de pacientes mejoran progresivamente en los días siguientes."
  }
];

const ViscosuplementacionRodillaPage = () => {
  const infiltrationSites = [
    { area: "Hombro", icon: "💪" },
    { area: "Codo", icon: "🏃" },
    { area: "Muñeca", icon: "🖐️" },
    { area: "Rodilla", icon: "🦵" },
    { area: "Tobillo", icon: "🦶" },
    { area: "Talón", icon: "👠" },
    { area: "Fascia Plantar", icon: "🌊" },
    { area: "Tendones y Músculos", icon: "💪" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-3xl text-left">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Infiltraciones Médicas e Injertos de Tejidos
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Procedimientos mínimamente invasivos para el manejo efectivo del dolor crónico, visco suplementación y dolor articular.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="/vizcosuplementacion-rodillas.jpg"
            alt="Infiltraciones médicas para dolor crónico en Medellín"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Article */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              ¿Qué son las infiltraciones médicas?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                Las infiltraciones son inyecciones especiales que alivian el dolor articular. El doctor inyecta un anestésico (medicamento que duerme la zona) junto con una sustancia curativa directamente donde duele.
              </p>
              <p>
                Ofrecemos 4 tipos de sustancias terapéuticas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Corticoides:</strong> Medicinas antiinflamatorias para alivio rápido</li>
                <li><strong>Bioreguladores:</strong> Sustancias que estimulan la reparación natural de tu articulación</li>
                <li><strong>Ácido hialurónico:</strong> Sustancia que lubrica la articulación como si fuera "aceite para una puerta"</li>
                <li><strong>PRP (Plasma Rico en Plaquetas):</strong> Terapia con células de tu propia sangre que promueven curación</li>
              </ul>
              <p>
                El procedimiento dura 5-10 minutos. Se realiza en el consultorio, es seguro y muchos pacientes sienten alivio el mismo día. Después puedes volver a casa y continuar con ejercicios de fortalecimiento.
              </p>
            </div>

            {/* Infiltration Sites */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Zonas donde realizamos infiltraciones</h3>
            <div className="grid gap-2 sm:grid-cols-2 mb-10">
              {infiltrationSites.map((site, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg bg-[#E7F5F9]/30 p-3 border border-[#1080A0]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#0F172A]">{site.area}</span>
                </div>
              ))}
            </div>

            {/* Treatment Types */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tipos de infiltraciones disponibles</h3>
            <p className="text-[#475569] mb-6">
              Ofrecemos diferentes tipos de infiltraciones según su condición y necesidades específicas. Conoce más sobre cada tratamiento:
            </p>
            <div className="grid gap-4 mb-10">
              <Link
                href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-corticoides"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    Infiltraciones con Corticoides
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Antiinflamatorios potentes para alivio rápido del dolor
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-bioreguladores"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    Infiltraciones con Bioreguladores
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Estimulación natural del proceso de reparación
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/acido-hialuronico"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    Viscosuplementación con Ácido Hialurónico
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Lubricación articular para mejorar movilidad
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/prp-lisado-plaquetas"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    PRP y Lisado de Plaquetas
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Medicina regenerativa con factores de crecimiento
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Cómo funciona el procedimiento?</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                El procedimiento se realiza en consultorio de forma ambulatoria. Se limpia y desinfecta la piel en la zona a tratar, y luego se inyecta la sustancia terapéutica directamente en el punto de dolor o dentro de la articulación con una aguja fina y precisa.
              </p>
              <p>
                El procedimiento es rápido (suele durar solo algunos minutos) y utiliza anestésico local para minimizar molestias. La sustancia actúa como lubricante, antiinflamatorio o regenerador según el caso, reduciendo el dolor y mejorando la función articular.
              </p>
            </div>

            {/* Comparison Table */}
            <ComparisonTable title="Comparativa de Tratamientos: Costo vs Beneficio" />

            {/* FAQs */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes sobre infiltraciones e inyecciones articulares</h3>
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Conclusión</h3>
            <p className="text-[#475569] leading-relaxed text-left">
              La viscosuplementación para rodillas es una alternativa efectiva y segura para aliviar síntomas de artrosis de rodilla en pacientes seleccionados. Agenda una valoración para determinar si este tratamiento es adecuado para ti.
            </p>
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

export default ViscosuplementacionRodillaPage;
