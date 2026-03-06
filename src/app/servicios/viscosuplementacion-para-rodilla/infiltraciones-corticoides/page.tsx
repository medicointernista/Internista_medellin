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
  title: "Infiltraciones con Corticoides - Rodilla | Dr. Willmer Obregón",
  description: "Infiltraciones con corticoides para aliviar dolor articular y reducir inflamación en la rodilla. Procedimiento rápido y efectivo en Medellín.",
};

const faqs = [
  {
    question: "¿Cómo funcionan los corticoides en las infiltraciones?",
    answer: "Los glucocorticoides actúan reduciendo significativamente la respuesta inflamatoria local en la articulación. Al inyectar directamente el corticoide en el sitio del dolor, se logra una concentración alta del medicamento donde se necesita, proporcionando alivio potente del dolor y la inflamación con mínimos efectos sistémicos."
  },
  {
    question: "¿Cuánto tiempo tarda en hacer efecto?",
    answer: "Muchos pacientes sienten alivio inmediato o dentro de las primeras 24-48 horas. El efecto antiinflamatorio máximo se alcanza generalmente en 3-5 días. El alivio del dolor es más marcado en las semanas iniciales."
  },
  {
    question: "¿Cuánto duran los efectos?",
    answer: "El efecto analgésico típicamente dura de 3 a 6 meses, aunque algunos pacientes pueden experimentar alivio más prolongado. Esto depende de la gravedad de la inflamación, el tipo de corticoide utilizado y la actividad del paciente."
  },
  {
    question: "¿Con qué frecuencia se pueden aplicar?",
    answer: "Se recomienda seguir una regla prudente clínica: no más de 3-4 infiltraciones por año en la misma articulación. Esto minimiza riesgos mientras se optimizan beneficios. La frecuencia exacta debe individualizarse según la evaluación riesgo/beneficio."
  },
  {
    question: "¿Cuáles son los glucocorticoides más utilizados?",
    answer: "Los medicamentos más comúnmente usados incluyen triamcinolona acetonida, metilprednisolona acetato, betametasona y dexametasona. La selección depende del tejido objetivo, la farmacocinética del preparado y la experiencia del especialista."
  },
  {
    question: "¿Hay contraindicaciones?",
    answer: "Sí. No se debe infiltrar si hay infección local, sospecha de artritis séptica, bacteriemia, alergia al medicamento, trastornos severos de coagulación no corregidos o control glucémico muy pobre sin plan de ajuste. Se evalúa individualmente cada caso."
  },
  {
    question: "¿Cuáles son los posibles efectos adversos?",
    answer: "Pueden incluir dolor post-infiltración transitorio o 'flare' inflamatorio, hematoma local, infección (rara pero grave), reacción vasovagal, hiperglucemia transitoria en diabéticos, aumento de presión arterial o atrofia cutánea si la inyección es superficial."
  },
  {
    question: "¿Es importante evitar infiltración intratendinosa?",
    answer: "Sí, es crítico. Las infiltraciones intratendón tienen riesgo de lesionar el tendón. Por eso se realiza valoración clínica cuidadosa y, cuando es apropiado, se utiliza guía por ecografía para asegurar la colocación correcta del medicamento."
  }
];

const InfiltracionesCorticodesPage = () => {
  const benefits = [
    "Alivio rápido del dolor inflamatorio",
    "Efecto antiinflamatorio potente",
    "Procedimiento minimamente invasivo",
    "Sin necesidad de hospitalización",
    "Retorno inmediato a actividades",
    "Mejora significativa de movilidad"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-3xl text-left">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Viscosuplementación para Rodilla</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Infiltraciones con Corticoides
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Tratamiento antiinflamatorio potente para reducir el dolor articular y mejorar la funcionalidad de la rodilla.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Infiltraciones con corticoides para dolor de rodilla"
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
              ¿Qué son las infiltraciones con corticoides?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                Las infiltraciones con corticoides consisten en la aplicación local controlada de un glucocorticoide (frecuentemente combinado con anestésico local) directamente en una articulación o en los tejidos que la rodean. Este procedimiento busca disminuir inflamación, dolor y rigidez articular.
              </p>
              <p>
                Su mayor utilidad es en escenarios inflamatorios o en exacerbaciones ("brotes") de dolor, buscando proporcionar alivio principalmente de corto a mediano plazo. Los corticoides actúan suprimiendo rápidamente la respuesta inflamatoria local, lo que facilita el alivio del dolor y mejora significativa de la movilidad articular.
              </p>
            </div>

            {/* Indicaciones */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Indicaciones frecuentes</h3>
            <div className="grid gap-3 sm:grid-cols-2 mb-10">
              {[
                "Osteoartrosis sintomática con dolor inflamatorio",
                "Bursitis (subacromial, trocantérica)",
                "Tendinopatías seleccionadas",
                "Sinovitis / derrame articular doloroso",
                "Capsulitis adhesiva",
                "Dolor periarticular con componente inflamatorio"
              ].map((indication, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg bg-[#E7F5F9]/30 p-3 border border-[#1080A0]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#0F172A]">{indication}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Sitios de colocación en el cuerpo</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                Las infiltraciones pueden realizarse en múltiples articulaciones según el diagnóstico clínico:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Rodilla:</strong> inyección intraarticular o periarticular (según hallazgos clínicos)</li>
                <li><strong>Hombro:</strong> subacromial, glenohumeral, acromioclavicular</li>
                <li><strong>Cadera:</strong> intraarticular preferiblemente guiada por ecografía</li>
                <li><strong>Tobillo, codo, muñeca:</strong> según indicación y valoración clínica</li>
                <li><strong>Articulaciones pequeñas:</strong> manos y pies según necesidad</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Proceso del procedimiento</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                El procedimiento se realiza en la clínica sin necesidad de hospitalización bajo condiciones estériles. Se limpia y desinfecta la piel en la zona a tratar, se aplica anestesia local, y luego se inyecta el glucocorticoide con precisión. Todo el proceso toma solo algunos minutos.
              </p>
              <p>
                En casos donde se requiere mayor precisión, especialmente en cadera u otras articulaciones profundas, se puede utilizar guía por ecografía para asegurar la colocación correcta. Después del procedimiento, el paciente puede regresar a casa inmediatamente. Se recomienda descanso relativo las primeras 24-48 horas, aunque muchos pacientes mejoran progresivamente en los días siguientes.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Consideraciones importantes sobre seguridad</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                <strong>Frecuencia recomendada:</strong> Se aconseja evitar aplicaciones muy repetidas en la misma articulación. La regla clínica prudente es no exceder 3-4 infiltraciones por año en una misma articulación, individualizando siempre el análisis riesgo/beneficio para cada paciente.
              </p>
              <p>
                <strong>Monitoreo en diabéticos:</strong> Si padece diabetes, es importante informar al especialista, ya que puede haber hiperglucemia transitoria después del procedimiento. Se requiere eventual ajuste de medicamentos hipoglucemiantes.
              </p>
              <p>
                <strong>Descanso posterior:</strong> Aunque puede retomar actividades normales rápidamente, se recomienda evitar actividades intensas las primeras 24-48 horas para permitir que la inflamación local disminuya optimalmente.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">¿Por qué elegir este tratamiento?</h3>
            <p className="text-[#475569] leading-relaxed text-left mb-10">
              Las infiltraciones con corticoides ofrecen alivio rápido y significativo del dolor inflamatorio, permitiendo que los pacientes mejoren su calidad de vida sin necesidad de cirugía. Es una opción segura y ampliamente probada cuando se administra correctamente por un especialista con experiencia. Resulta especialmente útil en exacerbaciones de dolor o cuando otros tratamientos conservadores no han sido suficientemente efectivos.
            </p>

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

export default InfiltracionesCorticodesPage;
