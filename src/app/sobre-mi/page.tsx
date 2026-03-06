import { Metadata } from 'next';
import { CircleCheck, Award, Building2, Stethoscope, ClipboardCheck, ShieldCheck, HeartPulse, Star, MapPin } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Sobre el Dr. Willmer Obregón, médico internista en Medellín",
  description: "Conoce la trayectoria y experiencia del Dr. Willmer Obregón, especialista en Medicina Interna con más de 15 años de experiencia en Medellín.",
};

const SobreMiPage = () => {
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

  const googleReviews = [
    {
      name: "María González",
      rating: 5,
      date: "Hace 2 semanas",
      text: "Excelente profesional, muy dedicado y atento. Se toma el tiempo necesario para explicar todo detalladamente."
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      date: "Hace 1 mes",
      text: "El Dr. Obregón es muy profesional. La consulta fue muy completa y me sentí muy bien atendido."
    },
    {
      name: "Ana Martínez",
      rating: 5,
      date: "Hace 2 meses",
      text: "Un médico excepcional. Su atención es personalizada y se nota su amplia experiencia."
    },
    {
      name: "Jorge Pérez",
      rating: 5,
      date: "Hace 3 meses",
      text: "Recomendado 100%. Muy profesional, explica todo con claridad y paciencia."
    },
    {
      name: "Luz Hernández",
      rating: 5,
      date: "Hace 1 semana",
      text: "El Dr. Obregón me ayudó a controlar mis problemas de salud con un plan muy claro. Excelente diagnóstico y seguimiento."
    },
    {
      name: "David Sánchez",
      rating: 5,
      date: "Hace 10 días",
      text: "Después de visitar varios médicos, el Dr. Obregón fue quien realmente entendió mi caso. Muy recomendado."
    }
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <main>
        {/* Gallery Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="/Consulta_medica_personalizada_con_el_Dr._Willmer_Obregon_especialista_en_medicina_interna_en_Medellin._(1).jpg" alt="Consulta médica" className="rounded-lg w-full h-96 object-cover shadow-md" />
              <img src="/Dr.-Willmer-Obregon,-medico-internista-en-Medellin,-explicando-un-diagnostico-medico-en-pizarron-a-su-paciente. copy copy copy.jpg" alt="Diagnóstico médico" className="rounded-lg w-full h-96 object-cover shadow-md" />
            </div>
          </div>
        </section>

        {/* Page Header */}
          <section className="container pt-12 pb-6 md:pt-16 md:pb-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Conoce al Especialista</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-3">
                Sobre el Dr. Willmer Obregón
              </h1>
              <p className="text-base text-[#475569] leading-relaxed">
                Especialista en Medicina Interna con más de 15 años de experiencia. Mi enfoque integral se centra en entender tu caso completo y construir un plan realista de tratamiento y prevención.
              </p>
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="container pb-12 md:pb-16">
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              {/* Left Column: Bio & Features */}
              <article className="space-y-4">
                {/* Features Section Header */}
                <h2 className="text-lg font-bold text-[#0F172A] mb-4">Por qué elegir mi atención médica</h2>

                {/* Features Grid - More Compact */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="rounded-xl border border-[#E2E8F0] bg-white/60 p-4 hover:shadow-md transition-all">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E7F5F9] text-[#1080A0] mb-2">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-[#0F172A] mb-1 text-sm">{feature.title}</h3>
                      <p className="text-xs text-[#475569] leading-tight">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Expertise Tags - Compact */}
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <h2 className="text-sm font-bold text-[#0F172A] mb-3">Especialidades y patologías</h2>
                  <ul className="flex flex-wrap gap-2">
                    {expertiseList.map((item, index) => (
                      <li key={index}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1080A0]/30 bg-white px-3 py-1 text-xs text-[#0F172A] hover:bg-[#E7F5F9] transition-colors">
                          <CircleCheck className="w-3 h-3 text-[#1080A0]" />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits - Compact */}
                <div className="rounded-xl border border-[#E2E8F0] bg-gradient-to-br from-[#E7F5F9]/20 to-white p-5">
                  <h3 className="text-sm font-bold text-[#0F172A] mb-3">Mi compromiso contigo</h3>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-4 h-4 text-[#1080A0] flex-shrink-0 mt-0.5" />
                      <span>Consultas sin prisa que respeten tu tiempo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-4 h-4 text-[#1080A0] flex-shrink-0 mt-0.5" />
                      <span>Seguimiento continuo y educación sobre tu condición</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-4 h-4 text-[#1080A0] flex-shrink-0 mt-0.5" />
                      <span>Coordinación con especialistas cuando lo necesites</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* Right Column: Experience & Info */}
              <aside className="space-y-4">
                {/* Experience Highlight */}
                <div className="rounded-xl bg-gradient-to-br from-[#E7F5F9] to-[#F0FAFB] p-5 border border-[#1080A0]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/70 text-[#1080A0]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#0F172A]">15</p>
                      <p className="text-xs text-[#1080A0] font-semibold">Años de experiencia</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-xs text-[#475569]">
                    <div>
                      <p className="font-bold text-[#0F172A] mb-1">Pregrado</p>
                      <p className="leading-tight">Universidad Del Zulia, Facultad de Medicina (2003-2009)</p>
                      <p className="text-[#1080A0] font-semibold mt-1">Médico Cirujano</p>
                    </div>
                    <div className="pt-2 border-t border-[#1080A0]/20">
                      <p className="font-bold text-[#0F172A] mb-1">Postgrado</p>
                      <p className="leading-tight">Universidad del Zulia, Postgrado de Medicina Interna (2012-2014)</p>
                      <p className="text-[#1080A0] font-semibold mt-1">Especialista en Medicina Interna</p>
                    </div>
                  </div>
                </div>

                {/* Memberships Card */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E7F5F9] text-[#1080A0] flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#0F172A] mb-2 text-sm">Miembro de:</p>
                      <ul className="text-xs text-[#475569] space-y-1.5">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#1080A0]"></span>
                          <span>ACMI</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#1080A0]"></span>
                          <span>CMC</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image Banner */}
                <div className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden hover:shadow-md transition-all">
                  <div className="flex h-28">
                    <div className="w-2/5 relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Dr. Willmer Obregón"
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-3/5 p-4 flex flex-col justify-center bg-gradient-to-r from-[#E7F5F9]/30 to-white">
                      <p className="text-[#1080A0] text-[9px] font-bold uppercase tracking-wide mb-1">Compromiso</p>
                      <p className="text-xs font-bold text-[#0F172A] leading-tight">Salud y bienestar integral para nuestros pacientes.</p>
                    </div>
                  </div>
                </div>
              </aside>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="container py-12 md:py-16">
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 md:gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2">
                  Lo que dicen mis pacientes
                </h2>
                <p className="text-sm text-[#475569]">
                  Calificaciones verificadas en Google
                </p>
              </div>

              {/* Rating Badge - Compact */}
              <a
                href="https://www.google.com/maps/place/Dr.+Willmer+Obregon+-+Estudios+cardiovasculares+en+Medell%C3%ADn/@6.2285033,-75.6047618,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44298a0e6b0361:0xe08de41456aec32b!8m2!3d6.228498!4d-75.6021869!16s%2Fg%2F11kpt5270s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 rounded-xl bg-white border border-[#E2E8F0] p-4 hover:shadow-md hover:border-[#1080A0]/30 transition-all duration-300 w-fit sm:w-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#4285F4] to-[#1A73E8] text-white">
                    <Star className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-lg font-bold text-[#0F172A]">4.9</p>
                      <p className="text-xs text-[#475569]">/ 5</p>
                    </div>
                    <p className="text-[10px] text-[#1080A0] font-semibold">231 reseñas</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Reviews Grid - Simple & Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {googleReviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#E2E8F0] bg-white p-5 hover:shadow-md hover:border-[#1080A0]/20 transition-all duration-300 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= review.rating
                            ? "fill-[#FBBC04] text-[#FBBC04]"
                            : "fill-[#E2E8F0] text-[#E2E8F0]"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4 flex-1">
                    "{review.text}"
                  </p>
                  <div className="border-t border-[#E2E8F0] pt-4">
                    <p className="font-bold text-[#0F172A] text-sm">{review.name}</p>
                    <p className="text-xs text-[#475569] mt-1">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center pt-2">
              <a
                href="https://www.google.com/maps/place/Dr.+Willmer+Obregon+-+Estudios+cardiovasculares+en+Medell%C3%ADn/@6.2285033,-75.6047618,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44298a0e6b0361:0xe08de41456aec32b!8m2!3d6.228498!4d-75.6021869!16s%2Fg%2F11kpt5270s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1080A0] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0D6680] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Ver más reseñas
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <CtaBanner />
      </main>
    </div>
  );
};

export default SobreMiPage;
