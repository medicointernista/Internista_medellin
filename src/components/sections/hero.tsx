import { Sparkles, PhoneCall } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '@/lib/contact-config';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F8F9FA]">
      {/* Background radial glow effect */}
      <div 
        className="hero-glow pointer-events-none absolute inset-0 opacity-40" 
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(16, 128, 160, 0.15), transparent 60%)'
        }}
      />
      
        <div className="container relative mx-auto px-6 py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            
            {/* Left Column: Content */}
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                  <Sparkles className="h-4 w-4" />
                </span>
                Comprometido con tu salud y bienestar
              </div>
  
              {/* Headline */}
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl">
                Medicina interna en Medellín con el <span className="text-[#1080A0]">Dr. Willmer Obregón</span>
              </h1>
  
              {/* Description */}
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg">
                Enfoque integral y actualizado en Medicina Interna con atención humana, evaluación completa y plan de seguimiento claro.
              </p>
  
              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppLink()}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-base font-medium text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
                >
                  Agenda tu cita por WhatsApp
                </a>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-base font-medium text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 border border-[#E2E8F0]"
                >
                  <PhoneCall className="h-4 w-4" />
                  Llama para una cita
                </a>
              </div>
  
              {/* Mini Cards */}
              <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: 'Atención', value: 'Personalizada' },
                  { label: 'Enfoque', value: 'Integral' },
                  { label: 'Ubicación', value: 'Medellín' },
                ].map((item, idx) => (
                  <div key={idx} className={idx === 2 ? "col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm" : "rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm"}>
                    <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">{item.label}</dt>
                    <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            {/* Right Column: Imagery */}
            <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
              {/* Pulsing blue glow background */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src="/Consulta_medica_personalizada_con_el_Dr._Willmer_Obregon_especialista_en_medicina_interna_en_Medellin._(1) copy copy.jpg"
                    alt="Dr. Willmer Obregón médico internista en consultorio de Medellín"
                    className="h-[350px] w-full object-cover md:h-[500px]"
                    loading="eager"
                  />

              {/* Floating Name Card Over Image */}
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/75 p-5 shadow-lg blur-none backdrop-blur-xl border border-white/20">
                  <p className="text-base font-semibold text-[#1E293B]">Dr. Willmer Obregón</p>
                  <p className="mt-0.5 text-xs font-medium text-[#1080A0] uppercase tracking-wide">Medicina Interna</p>
                </div>
              </figcaption>
            </figure>

            {/* Small decorative floaters */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;