import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Página no encontrada | Dr. Willmer Obregón',
  description: 'La página que buscas no existe. Vuelve al inicio para explorar nuestros servicios de medicina interna.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#E1F1F6] to-[#F8FAFC] border-2 border-[#E2E8F0] mb-8">
            <span className="text-6xl font-bold text-[#1080A0]">404</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
          ¡Vaya! Este enlace se ha perdido en el ranking
        </h1>

        <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl mx-auto">
          Parece que la página que buscas no existe o ha sido movida. No te preocupes, aquí te ayudamos a encontrar lo que necesitas.
        </p>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border-2 border-[#E2E8F0] p-8 mb-10">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-4">Opciones disponibles</p>
          <ul className="space-y-3 text-left text-[#475569]">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1080A0] flex-shrink-0"></span>
              <span>Consultas de medicina interna especializada</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1080A0] flex-shrink-0"></span>
              <span>Servicios de cardiología y pruebas diagnósticas</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1080A0] flex-shrink-0"></span>
              <span>Viscosuplementación y tratamientos articulares</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1080A0] flex-shrink-0"></span>
              <span>Información sobre el Dr. Willmer Obregón</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#187495] via-[#1080A0] to-[#187495] text-white font-semibold shadow-md hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <Link
            href="/servicios/consulta-medicina-interna"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#E1F1F6] text-[#1080A0] font-semibold border-2 border-[#E2E8F0] hover:bg-[#D9EDF3] transition-colors"
          >
            Ver Servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-sm text-[#64748B] mt-12">
          ¿Necesitas ayuda? <a href="mailto:consulta@internistamedellin.com" className="text-[#1080A0] font-semibold hover:underline">Contáctanos</a> para más información.
        </p>
      </div>
    </div>
  );
}
