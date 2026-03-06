import { Clock, UserCheck, Stethoscope, Apple, FileText, Activity, ClipboardCheck, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Duración de 60 minutos",
    text: "En ningún otro consultorio te ofrecerán ese tiempo de consulta",
  },
  {
    icon: UserCheck,
    title: "Múltiples motivos de consulta",
    text: "Puedes explicarle todos tus problemas al doctor sin limitarte a un solo motivo",
  },
  {
    icon: Stethoscope,
    title: "Examen físico detallado",
    text: "Con interrogatorio exhaustivo del paciente",
  },
  {
    icon: Apple,
    title: "Recomendaciones personalizadas",
    text: "Dieta y ejercicio acorde a cada paciente",
  },
  {
    icon: FileText,
    title: "Historia clínica completa",
    text: "Incluye envío de Historia Electrónica e Impresa durante la atención presencial",
  },
  {
    icon: Activity,
    title: "Estudios previos incluidos",
    text: "Electrocardiograma + bioimpedancia antes de la atención",
  },
  {
    icon: ClipboardCheck,
    title: "Consulta de control sin costo",
    text: "Para revisión de cualquier examen solicitado adicional",
  },
  {
    icon: MessageSquare,
    title: "Seguimiento por WhatsApp",
    text: "Desde el teléfono personal del doctor sin costo adicional",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="relative bg-white py-12 md:py-20 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            ¿Qué incluye tu consulta?
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Una experiencia médica completa y personalizada diseñada para tu bienestar integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-3 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[1rem] font-bold leading-[1.4] text-[#0F172A] mb-1">
                  {benefit.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.5] text-[#64748B]">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
