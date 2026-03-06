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
  title: "Enfermedades Hematológicas - Dr. Willmer Obregón | Medellín",
  description: "Diagnóstico y tratamiento de anemias, deficiencias de vitaminas, trastornos de plaquetas y coagulación en Medellín.",
};

const faqs = [
  {
    question: "¿Cuáles son los síntomas comunes de la anemia?",
    answer: "Los síntomas incluyen fatiga persistente, debilidad, palidez, mareos, dificultad para respirar con actividad leve, palpitaciones, dolor de cabeza y dificultad para concentrarse. La gravedad de los síntomas depende del grado de anemia y la rapidez con que se desarrolló."
  },
  {
    question: "¿Cómo diferencias los tipos de anemia?",
    answer: "La clasificación inicial se basa en el hemograma: anemias microcíticas (glóbulos rojos pequeños, típicamente por deficiencia de hierro), normocíticas (glóbulos rojos de tamaño normal, pueden ser por hemólisis o sangrado activo), y macrocíticas (glóbulos rojos grandes, por deficiencia de vitamina B12 o ácido fólico). El frotis de sangre periférica y estudios específicos (hierro, B12, folato, reticulocitos) confirman el diagnóstico."
  },
  {
    question: "¿Cuándo debo preocuparme por los moretones y sangrados?",
    answer: "Consulta si aparecen moretones sin traumatismo, si son múltiples o grandes, si hay sangrados de encías o nariz sin causa aparente, si tienes petequias (puntos rojos pequeños) o púrpura (áreas más grandes). Estos signos pueden indicar trastornos plaquetarios o de coagulación que requieren evaluación urgente con TP/INR y TTPa."
  },
  {
    question: "¿Qué es importante saber sobre la deficiencia de vitamina B12?",
    answer: "La B12 es crucial para la formación de glóbulos rojos y la función neurológica. Su deficiencia causa anemia macrocítica pero también síntomas neurológicos: hormigueo, entumecimiento en manos/pies, debilidad, problemas de memoria y dificultad para caminar. El diagnóstico temprano es vital porque el daño neurológico puede volverse irreversible si no se trata a tiempo."
  },
  {
    question: "¿Qué son las alteraciones de leucocitos?",
    answer: "Son cambios en el número de glóbulos blancos. Elevación (leucocitosis) puede indicar infecciones, inflamación o enfermedades hematológicas. Disminución (leucopenia) puede ser por medicamentos, infecciones virales o problemas de médula ósea. Se requiere evaluación del contexto clínico y, en casos con signos de alarma, estudios adicionales como frotis periférico o estudios de médula ósea en coordinación con hematología."
  },
  {
    question: "¿Cómo se evalúa la ferropenia?",
    answer: "Se evalúa con hemograma (anemia microcítica), ferritina y hierro sérico/TIBC. Si se confirma, es crucial identificar la causa: en mujeres premenopáusicas, evaluar sangrado menstrual excesivo; en todos, descartar sangrado gastrointestinal o ginecológico con historia clínica, examen y, si aplica, estudios de sangre oculta en heces o endoscopia según edad y clínica."
  }
];

const conditions = [
  "Anemias (por deficiencia de hierro, vitaminas, crónicas)",
  "Deficiencias de Vitaminas (B12, ácido fólico, hierro)",
  "Trastornos de Plaquetas",
  "Trastornos de Coagulación",
  "Alteraciones de Leucocitos"
];

const EnfermedadesHematologicasPage = () => {
  const benefits = ["Diagnóstico de anemia", "Manejo de trastornos de coagulación", "Tratamiento de hemofilia", "Control de presión arterial en pacientes", "Evaluación de leucemia", "Seguimiento de pacientes con cáncer"];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Enfermedades Hematológicas
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Evaluación y tratamiento de trastornos de la sangre, anemias, deficiencias vitamínicas y alteraciones de coagulación.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="https://images.pexels.com/photos/8460165/pexels-photo-8460165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Análisis de laboratorio para diagnóstico hematológico"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención especializada de enfermedades hematológicas
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece evaluación y tratamiento de enfermedades de la sangre, incluyendo anemias, deficiencias vitamínicas, trastornos de plaquetas y coagulación. Con un enfoque diagnóstico preciso, identifica la causa subyacente y desarrolla planes de tratamiento efectivos.
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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Abordaje estructurado en consulta</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Historia clínica dirigida</p>
                <p>Evaluación detallada de síntomas de sangrado o anemia, dieta (especialmente hierro, B12, folato), síntomas constitucionales (fiebre, pérdida de peso), infecciones recurrentes, medicamentos (AINEs, anticoagulantes, metotrexato), y antecedentes familiares de trastornos hematológicos o coagulopatías.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Examen físico orientado</p>
                <p>Búsqueda de signos clave: palidez (anemia), ictericia (hemólisis), petequias o púrpura (trastornos plaquetarios), adenopatías (malignidad, infección), esplenomegalia (hemólisis, inflamación), y signos activos de sangrado (encías, moretones, sangrado mucoso).</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Clasificación y priorización</p>
                <p>El hemograma completo con índices eritrocitarios es el punto de partida y permite tipificar inmediatamente: microcítica, normocítica o macrocítica, identificando urgencias como hemólisis, sangrado activo o trombosis que requieren manejo inmediato.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes según protocolo</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Panel base (todos los casos)</p>
                <p className="text-sm">Hemograma completo con índices eritrocitarios, frotis de sangre periférica, ferritina, hierro sérico y TIBC, vitamina B12 y folato, reticulocitos, TP/INR y TTPa, creatinina/eGFR.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Estudios adicionales según sospecha</p>
                <p className="text-sm">Pruebas de hemólisis (LDH, bilirrubina indirecta, haptoglobina, Coombs directo) si hay microcitosis con reticulocitos elevados; sangre oculta en heces y evaluación GI si ferropenia; estudios de médula ósea en casos seleccionados con coordinación hematológica.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos según diagnóstico</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Anemia ferropénica</p>
                <p className="text-sm">Hierro oral (sulfato ferroso) como primera línea; hierro IV en caso de intolerancia digestiva o mal cumplimiento. Crítico: identificar y tratar la fuente de sangrado (gastrointestinal, ginecológico o mixto) para prevenir recurrencia.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Deficiencia B12 y folato</p>
                <p className="text-sm">Reemplazo según deficiencia (IM, oral o sublingual para B12); identificar causa subyacente (malabsorción, dieta vegetariana, enfermedad gástrica, uso crónico de inhibidores de bomba protónica). En deficiencia B12, tratar agresivamente para prevenir daño neurológico irreversible.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Trastornos plaquetarios y coagulación</p>
                <p className="text-sm">Estratificación del riesgo hemorrágico vs. trombótico; manejo periprocedimiento individualizado; derivación a hematología para trastornos primarios o complejos.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Alteraciones leucocitarias</p>
                <p className="text-sm">Descartar infección activa, inflamación o fármacos causales; criterios de derivación por sospecha hematológica (ej: blastosis, linfocitosis atípica).</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Historia clínica dirigida y examen físico</p>
                    <p className="text-sm text-[#475569] mt-1">Evaluación de síntomas, exposiciones, medicamentos, antecedentes familiares y búsqueda de signos clave como palidez, ictericia, petequias o sangrados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Clasificación inmediata por hemograma</p>
                    <p className="text-sm text-[#475569] mt-1">Tipificación de anemia (microcítica, normocítica, macrocítica) e identificación de urgencias hemorrágicas o trombóticas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Panel de laboratorios específicos</p>
                    <p className="text-sm text-[#475569] mt-1">Incluye hierro, ferritina, B12, folato, reticulocitos, estudios de coagulación y función renal según el diagnóstico diferencial</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Diagnóstico etiológico y plan de tratamiento</p>
                    <p className="text-sm text-[#475569] mt-1">Identificación de causa reversible (deficiencia nutricional, sangrado oculto, enfermedad renal, inflamación) con tratamiento específico</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Coordinación y derivación cuando aplique</p>
                    <p className="text-sm text-[#475569] mt-1">Derivación a hematología para estudios de médula ósea, trastornos primarios complejos o sospecha de malignidad</p>
                  </div>
                </li>
              </ul>
            </div>

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

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Por qué importa un diagnóstico preciso</h3>
            <div className="text-[#475569] space-y-4 leading-relaxed">
              <p>
                Las enfermedades hematológicas pueden parecer similares en síntomas pero tienen causas y tratamientos completamente diferentes. Una anemia microcítica puede ser por deficiencia de hierro, talasemia, o enfermedad crónica—cada una requiere enfoque distinto. Tratar una anemia con hierro cuando la causa es otra es no solo inefectivo, sino potencialmente perjudicial.
              </p>
              <p>
                La deficiencia de vitamina B12 es especialmente crítica: sus síntomas iniciales pueden ser leves (fatiga, debilidad), pero sin tratamiento oportuno causa daño neurológico irreversible (neuropatía periférica, problemas cognitivos). En cambio, la deficiencia de folato tiene presentación similar pero daño neurológico es reversible si se trata a tiempo.
              </p>
              <p>
                Los trastornos de plaquetas y coagulación pueden ser asintomáticos hasta producir complicaciones graves (sangrado interno, trombosis). Su evaluación requiere metodología específica y, frecuentemente, coordinación con especialista en hematología.
              </p>
              <p>
                Si presentas fatiga persistente, palidez, moretones frecuentes, sangrados anormales o alteraciones en tus exámenes de sangre, el Dr. Willmer Obregón ofrece evaluación completa, diagnóstico preciso e identificación de causas reversibles para tratamiento efectivo y prevención de complicaciones.
              </p>
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

export default EnfermedadesHematologicasPage;
