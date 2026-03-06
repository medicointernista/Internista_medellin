import { CircleCheck, Award, Building2, Stethoscope, ClipboardCheck, ShieldCheck, HeartPulse } from 'lucide-react';

const AboutMe = () => {
  const expertiseList = [
    "Obesidad",
    "Diabetes",
    "Hipertensión Arterial",
    "Enfermedades Renales",
    "Enfermedades de Tiroides",
    "Gastritis",
    "Hipotiroidismo",
    "Colon Irritable",
    "Fibromialgia"
  ];

  const features = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Atención experta",
      description: "Valoración clínica detallada y explicaciones claras."
    },
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: "Plan práctico",
      description: "Metas, seguimiento y recomendaciones accionables."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Prevención",
      description: "Enfoque en riesgo cardiovascular y salud metabólica."
    },
    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Acompañamiento",
      description: "Decisiones compartidas y trato humano."
    }
  ];

  return (
    <section id="sobre-mi" className="relative bg-[#F8F9FA]">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#1080A0] uppercase tracking-wider">Conoce al Especialista</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A]">
            Dr. Willmer Obregón: trayectoria y experiencia
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed max-w-2xl">
            El Dr. Willmer Obregón ha diagnosticado y tratado a miles de pacientes con enfermedades crónicas complejas durante sus 15 años de práctica en Medellín. Su enfoque integral y empático lo convierte en especialista de confianza para tu salud.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Column 1: Experience & Expertise */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-6 shadow-sm backdrop-blur-md">
            <div className="rounded-2xl bg-[#E1F1F6] p-5 text-[#1080A0] mb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/40">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold leading-none">15 años</p>
                  <p className="text-xs font-medium uppercase tracking-tight opacity-80 mt-1">Años de experiencia</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Es experto en:</h3>
              <ul className="flex flex-wrap gap-2" aria-label="Lista de experticias">
                {expertiseList.map((item, index) => (
                  <li key={index}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/60 px-3 py-1 text-xs text-[#1E293B] shadow-sm">
                      <CircleCheck className="w-3 h-3 text-[#1080A0]" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Academic Formation */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F1F5F9]">
                <Building2 className="w-6 h-6 text-[#64748B]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-4">Formación Académica</p>
                <div className="space-y-4 text-xs text-[#1F2937]">
                  <div>
                    <p className="font-bold text-[#0F172A] mb-1">PREGRADO</p>
                    <p className="leading-relaxed text-[#475569]">Universidad Del Zulia, Facultad de Medicina (2003-2009)</p>
                    <p className="mt-1.5 font-medium text-[#1080A0]">Médico Cirujano</p>
                  </div>
                  <div className="border-t border-[#E2E8F0] pt-4">
                    <p className="font-bold text-[#0F172A] mb-1">POSTGRADO</p>
                    <p className="leading-relaxed text-[#475569]">Universidad del Zulia, Postgrado de Medicina Interna (2012-2014)</p>
                    <p className="mt-1.5 font-medium text-[#1080A0]">Especialista en Medicina Interna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Memberships & Approach */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F1F5F9]">
                  <Building2 className="w-6 h-6 text-[#64748B]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Miembro de:</p>
                  <div className="space-y-2 text-xs font-medium text-[#1F2937]">
                    <p>Asociación Colombiana de Medicina Interna (ACMI)</p>
                    <p>Colegio Médico Colombiano (CMC)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Mi Enfoque</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Medicina Interna con visión integral: síntomas, hábitos, antecedentes y objetivos. La consulta se centra en entender tu caso y construir un plan realista de tratamiento y prevención.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid Below */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-2xl border border-[#E2E8F0] bg-white/60 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1F1F6] text-[#1080A0] mb-3">
                {feature.icon}
              </div>
              <h4 className="text-sm font-bold text-[#0F172A]">{feature.title}</h4>
              <p className="mt-1 text-xs text-[#64748B] leading-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;