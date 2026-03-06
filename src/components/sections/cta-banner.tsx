import { PhoneCall } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '@/lib/contact-config';

const CtaBanner = () => {
  return (
    <section className="container py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/60 p-6 md:p-12 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-xl font-semibold tracking-tight text-[#0F172A] md:text-3xl lg:text-4xl">
                ¿Buscas un médico internista en Medellín?
              </h2>
            <p className="mt-3 text-sm text-[#64748B] md:text-lg">
              No te quedes sin tu cita. Escríbenos o llama y te ayudamos a agendar.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <a
              href={getWhatsAppLink()}
              className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-8 text-sm font-medium text-white shadow-[0_0_15px_rgba(16,128,160,0.2)] transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 sm:h-12 sm:w-64 sm:text-base"
            >
              Enviar WhatsApp
            </a>
            <a
              href={getPhoneLink()}
              className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#E1F1F6] px-8 text-sm font-medium text-[#1080A0] transition-colors hover:bg-[#D1E9F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 sm:h-12 sm:w-64 sm:text-base"
            >
              <PhoneCall className="h-4 w-4" />
              Llamar por teléfono
            </a>
          </div>
        </div>

        {/* Subtle decorative elements matching the visual style */}
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#1080A0]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#E1F1F6]/40 blur-3xl" />
      </div>
    </section>
  );
};

export default CtaBanner;
