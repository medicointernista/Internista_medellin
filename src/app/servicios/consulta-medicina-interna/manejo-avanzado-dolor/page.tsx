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
  title: "Manejo Avanzado de Dolor - Dr. Willmer Obregón | Medellín",
  description: "Tratamiento especializado de fibromialgia, sarcopenia, osteoartrosis, artritis con infiltraciones y diagnóstico de enfermedades difíciles en Medellín.",
};

const faqs = [
  {
    question: "¿Cómo se caracteriza el dolor para un tratamiento efectivo?",
    answer: "La evaluación comienza identificando el tipo de dolor: nociceptivo (articular, inflamatorio), neuropático (nervio comprimido, quemante), o nociplástico (sensibilización central como en fibromialgia). Cada tipo requiere enfoque diferente. También se evalúa intensidad (escala del dolor), impacto en función (movilidad, trabajo, sueño), duración, factores que lo agravan o alivian, y presencia de banderas rojas (pérdida de peso, fiebre, debilidad progresiva) que requieren investigación urgente."
  },
  {
    question: "¿Qué es la fibromialgia y cómo se trata?",
    answer: "Es dolor crónico generalizado, musculoesquelético, acompañado de fatiga, problemas de sueño, y alteraciones cognitivas (niebla mental). Se diagnostica clínicamente después de descartar otras condiciones. El tratamiento es multimodal: educación sobre la condición, ejercicio graduado y progresivo, mejora de higiene del sueño, técnicas de reducción de estrés (mindfulness, TCC), medicamentos seleccionados (duloxetina, pregabalina, amitriptilina en dosis bajas) y manejo de condiciones coexistentes como depresión o ansiedad."
  },
  {
    question: "¿Qué es la sarcopenia y por qué importa?",
    answer: "Es la pérdida progresiva de masa muscular y fuerza, típicamente con envejecimiento pero también por enfermedad crónica, inmovilidad o desnutrición. Se detecta clínicamente (debilidad, lentitud en marcha) y confirma con herramientas como SARC-F o medidas de composición corporal (DXA, bioimpedancia). Causa dolor, debilidad, riesgo elevado de caídas, fracturas y pérdida de independencia. Manejo: proteína adecuada (1.2 g/kg/día), ejercicio de resistencia supervisado, corrección de deficiencias (B12, vitamina D), y prevención de caídas."
  },
  {
    question: "¿Cuál es el tratamiento para artrosis versus artritis inflamatoria?",
    answer: "Artrosis (osteoartrosis): es degeneración del cartílago sin inflamación significativa. Manejo: ejercicio/fortalecimiento (crucial), pérdida de peso si aplica, AINEs tópicos o sistémicos según riesgo, duloxetina en casos seleccionados, infiltraciones con corticoides o ácido hialurónico cuando indicado. Artritis inflamatoria (autoinmune, infecciosa, por cristales): requiere referencia temprana a reumatología para DMARDs (fármacos modificadores), control de inflamación (PCR/VSG), y vigilancia de complicaciones. Diagnóstico diferencial es crítico porque los tratamientos son opuestos."
  },
  {
    question: "¿Cómo funcionan las infiltraciones articulares guiadas?",
    answer: "Son inyecciones de medicamentos directamente en la articulación afectada, realizadas en consultorio usando ecografía o guía para precisión. Se usan en artrosis, artritis, tendinitis, bursitis, esguinces. Tipos: corticoides (alivio rápido pero efecto limitado), ácido hialurónico (efecto más duradero en artrosis), anestésicos locales. Ventajas: alivio directo, evitan medicación sistémica, precisión. Limitaciones: beneficio temporal, requieren integración con rehabilitación/ejercicio. Selección de paciente y expectativas realistas son clave para éxito."
  },
  {
    question: "¿Cómo se diagnostican enfermedades musculoesqueléticas complejas?",
    answer: "Mediante enfoque sistemático: historia exhaustiva (inicio, evolución, antecedentes familiares, síntomas constitucionales), examen musculoesquelético detallado (rango de movimiento, fuerza, simetrías), medición funcional (escalas de dolor, capacidad de actividades), laboratorios dirigidos (PCR/VSG, FR, anti-CCP para sospecha autoinmune), y estudios de imagen (radiografías, ecografía MSK, RM si lesión compleja). Banderas rojas (fiebre, pérdida de peso, inflamación simétrica, rigidez matutina prolongada) guían urgencia de investigación y derivación."
  }
];

const conditions = [
  "Fibromialgia",
  "Sarcopenia",
  "Osteoartrosis",
  "Artritis (múltiples tipos)",
  "Infiltraciones articulares",
  "Diagnóstico de Enfermedades Difíciles"
];

const ManejoAvanzadoDolorPage = () => {
  const benefits = ["Evaluación integral del dolor", "Manejo farmacológico personalizado", "Técnicas no invasivas de alivio", "Seguimiento del dolor crónico", "Coordinación con especialistas", "Mejora de calidad de vida"];

  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Medicina Interna</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Manejo Avanzado de Dolor
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Tratamiento especializado de dolor crónico, fibromialgia, osteoartrosis, artritis con infiltraciones y diagnóstico de enfermedades complejas.
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm">
          <img
            src="/Tratamiento-avanzado-dolor.jpg"
            alt="Manejo especializado de dolor y enfermedades articulares"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </figure>

        <ServiceBenefits benefits={benefits} />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Atención especializada en manejo de dolor y enfermedades complejas
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              El Dr. Willmer Obregón ofrece tratamiento integral del dolor crónico, incluyendo fibromialgia, sarcopenia, osteoartrosis y artritis. Con procedimientos como infiltraciones articulares y un enfoque diagnóstico exhaustivo, ayuda a pacientes con condiciones dolorosas complejas a mejorar su calidad de vida.
            </p>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Condiciones y procedimientos</h3>
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
                <p className="font-semibold text-[#0F172A] mb-2">Historia del dolor dirigida</p>
                <p>Caracterización completa: localización, irradiación, duración, triggers (qué lo empeora), alivio (qué lo mejora). Evaluación de síntomas sistémicos: rigidez matutina (sugiere inflamación), fiebre o pérdida de peso (banderas rojas), impacto en sueño, ánimo, funcionalidad laboral/vida diaria. Antecedentes de traumatismos previos, ocupación, actividades físicas.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Examen musculoesquelético sistémico</p>
                <p>Evaluación de rango de movimiento articular, fuerza muscular, presencia de inflamación (calor, tumefacción, eritema), signos de neuropatía (parestesias, reflejos alterados), marcha, simetrías. Búsqueda de puntos gatillo (fibromialgia) o puntos dolorosos específicos (tendinitis, bursitis). Evaluación nutricional y funcional.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Tipificación del dolor y priorización</p>
                <p>Clasificación como nociceptivo (articular, inflamatorio), neuropático (nervio comprimido, quemante), o nociplástico (sensibilización central). Identificación de urgencias: inflamación simétrica y progresiva (sospecha artritis autoinmune), signos de alerta sistémica, limitación funcional severa.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Exámenes según protocolo</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Panel base (todos los casos)</p>
                <p className="text-sm">Hemograma, PCR y VSG (inflamación), creatinina/eGFR (seguridad analgésica), vitamina D y calcio/fósforo (salud ósea, sarcopenia), TSH y B12/folato (fatiga, mialgias, neuropatía).</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Estudios complementarios según sospecha</p>
                <p className="text-sm">Radiografías o ecografía musculoesquelética para patología articular/tendinosa; RM si sospecha lesión estructural compleja. DXA o bioimpedancia para evaluación de sarcopenia y composición corporal. FR, anti-CCP, ANA si sospecha artritis autoinmune. SARC-F o evaluar con pruebas de fuerza si sarcopenia probable.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tratamientos multimodales</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Osteoartrosis</p>
                <p className="text-sm">Ejercicio y fortalecimiento muscular (clave para estabilidad), pérdida de peso si sobrepeso, AINEs tópicos (primera línea si localizada) u orales según tolerancia y riesgo cardiovascular/gastrointestinal, duloxetina en casos seleccionados. Infiltraciones con corticoides o ácido hialurónico cuando hay efusión o inflamación local, con guía ecográfica. Integración crítica con rehabilitación.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Artritis inflamatoria</p>
                <p className="text-sm">Referencia temprana a reumatología para diagnóstico y DMARDs (fármacos modificadores de enfermedad). Control de dolor e inflamación aguda. Educación sobre importancia de DMARDs para prevenir daño articular irreversible. Vigilancia de PCR/VSG y monitorización de comorbilidades.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Fibromialgia</p>
                <p className="text-sm">Enfoque multimodal: educación sobre la condición (normalizar síntomas, explicar sensibilización central), ejercicio aeróbico graduado y progresivo, mejora de higiene del sueño, técnicas de mindfulness o TCC. Medicamentos seleccionados (duloxetina, pregabalina, amitriptilina en dosis bajas) con expectativas realistas. Manejo de comorbilidades (depresión, ansiedad).</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Sarcopenia</p>
                <p className="text-sm">Proteína adecuada (1.2 g/kg/día o más), ejercicio de resistencia supervisado adaptado a capacidad, corrección de deficiencias (vitamina D, B12, nutrientes), manejo de causas subyacentes (enfermedad crónica, hormonal), evaluación nutricional completa, prevención de caídas.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Infiltraciones articulares guiadas</p>
                <p className="text-sm">Selección cuidadosa de pacientes (criterios clínicos e imagenológicos). Uso de ecografía para precisión y visualización en tiempo real. Corticoides para alivio rápido en artritis/inflamación, ácido hialurónico para efecto duradero en artrosis. Integración con rehabilitación y ejercicio para máximo beneficio. Expectativas realistas sobre duración del beneficio (semanas a meses).</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6">¿Qué incluye tu consulta?</h3>
            <div className="rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] p-6 mb-10 border border-[#E2E8F0]">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Caracterización completa del dolor</p>
                    <p className="text-sm text-[#475569] mt-1">Tipificación (nociceptivo, neuropático, nociplástico), evaluación de banderas rojas, medición de intensidad y impacto funcional</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Examen musculoesquelético sistémico</p>
                    <p className="text-sm text-[#475569] mt-1">Rango de movimiento, fuerza, inflamación, simetrías, marcha, búsqueda de signos neuropáticos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Laboratorios y estudios dirigidos</p>
                    <p className="text-sm text-[#475569] mt-1">Panel base (inflamación, función renal, vitaminas), imagenología según sospecha clínica, evaluación de sarcopenia si indicada</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Plan multimodal personalizado</p>
                    <p className="text-sm text-[#475569] mt-1">Combinación de ejercicio, educación, farmacoterapia específica según diagnóstico, procedimientos cuando indicados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0F172A]">Infiltraciones articulares guiadas</p>
                    <p className="text-sm text-[#475569] mt-1">Procedimientos en consultorio con ecografía, selección cuidadosa de pacientes, integración con rehabilitación</p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Por qué importa el diagnóstico y tratamiento preciso del dolor</h3>
            <div className="text-[#475569] space-y-4 leading-relaxed">
              <p>
                El dolor crónico es más que una sensación: afecta el sueño, el ánimo, la función, la independencia y la calidad de vida general. Un tratamiento inefectivo no solo no alivia, sino que puede alimentar frustración, depresión y discapacidad progresiva. Por eso el diagnóstico preciso es crítico.
              </p>
              <p>
                La fibromialgia, por ejemplo, es frecuentemente mal diagnosticada o minimizada. Pacientes buscan múltiples opiniones sin respuesta clara. El reconocimiento correcto permite educación apropiada, tratamiento multimodal realista (no "cura" pero control significativo) y prevención de medicación excesiva e inapropiada.
              </p>
              <p>
                La diferencia entre artrosis e inflamación activa es fundamental: una requiere ejercicio y cuidado mecánico; la otra requiere medicamentos que modifiquen la enfermedad para evitar daño articular permanente. Confundir estos diagnósticos puede llevar a tratamiento inefectivo o daño progresivo irreversible.
              </p>
              <p>
                La sarcopenia es frecuentemente pasada por alto pero es clave en dolor, debilidad, caídas y pérdida de independencia. Su identificación permite intervención nutricional y de ejercicio que revierte o estabiliza la pérdida funcional.
              </p>
              <p>
                Si sufres de dolor crónico, fibromialgia, problemas articulares, debilidad, o has tenido dificultad para obtener un diagnóstico claro, el Dr. Willmer Obregón ofrece evaluación completa, diagnóstico preciso, tratamiento multimodal integrado e infiltraciones articulares guiadas para recuperar funcionalidad y calidad de vida.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-6 mt-12">Preguntas frecuentes</h3>
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

export default ManejoAvanzadoDolorPage;
