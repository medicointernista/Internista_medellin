import Image from 'next/image';

const services = [
    {
      title: "Consulta de Medicina Interna",
      description: "Enfoque integral y personalizado, con evaluación completa, diagnóstico y plan de seguimiento.",
      image: "/consulta-de-medicina-interna.jpg",
      link: "/servicios/consulta-medicina-interna",
      alt: "Consulta de medicina interna en Medellín con evaluación integral del paciente"
    },
    {
      title: "Viscosuplementación para Rodilla",
    description: "Procedimiento con ácido hialurónico para aliviar dolor y mejorar movilidad en artrosis de rodilla.",
    image: "https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/servicios/viscosuplementacion-para-rodilla",
    alt: "Viscosuplementación de rodilla en Medellín para aliviar dolor articular"
  },
  {
    title: "Electrocardiograma",
    description: "Registro rápido de la actividad eléctrica del corazón para apoyo diagnóstico y control.",
    image: "/Electrocardiograma.jpg",
    link: "/cardiologia/electrocardiograma",
    alt: "Electrocardiograma en Medellín para evaluar ritmo cardíaco"
  },
  {
    title: "Ecocardiograma transtorácico",
    description: "Ultrasonido del corazón para evaluar estructura, función y válvulas (según indicación clínica).",
    image: "/ecocardiograma1.jpg",
    link: "/cardiologia/ecocardiograma-transtoracico",
    alt: "Estudio de ecocardiograma con transductor y pantalla de ultrasonido"
  },
  {
    title: "Holter 24 horas",
    description: "Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar arritmias y correlacionar síntomas.",
    image: "/Holter-24-horas.jpg",
    link: "/cardiologia/holter-24-horas",
    alt: "Paciente con dispositivo Holter en entorno clínico"
  },
  {
    title: "MAPA 24 horas",
    description: "Monitoreo ambulatorio de presión arterial (24h) para diagnóstico y ajuste de tratamiento.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/cardiologia/mapa-24-horas",
    alt: "Paciente con brazalete y monitor portátil para MAPA 24 horas"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative bg-[#F8F9FA]">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-[1280px]">
        <div className="max-w-3xl mb-8">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
            Servicios médicos
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.6] text-[#64748B]">
            Explora los servicios principales y entra a cada uno para ver indicaciones, preparación y preguntas frecuentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <a
                href={service.link}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white/60 backdrop-blur-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
              >
                <figure className="relative h-44 w-full md:h-48">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="empty"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/70 via-transparent to-transparent"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[1.125rem] font-semibold tracking-tight text-[#0F172A] leading-[1.4] transition-colors group-hover:text-[#1080A0]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.6] text-[#64748B] line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex text-[0.875rem] font-semibold text-[#1080A0] transition-opacity hover:opacity-80">
                      Ver detalles
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;