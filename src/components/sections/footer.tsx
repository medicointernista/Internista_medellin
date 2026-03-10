"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ChevronUp } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { PHONE_NUMBERS } from '@/lib/contact-config';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E1F1F6]/30 pt-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {/* Doctor Info Column */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/Wilmer_Obregon_Logo.png"
                  alt="Dr. Willmer Obregón Logo"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </Link>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              Especialista en Medicina Interna en Medellín, con enfoque personalizado y comprensivo hacia el cuidado de la salud. Acompañamiento en condiciones cardiovasculares y metabólicas con tratamiento basado en evidencia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/tu.internista.favorito/"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/tu_internista_favorito/"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@tuinternistafavorito"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@tuinternistafavorito"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
            <h3 className="text-lg font-bold text-[#1E293B] mb-6">Información de contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[#1080A0]">
                  <MapPin size={20} />
                </div>
                <p className="text-sm text-[#64748B]">
                  Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia
                </p>
              </li>
              {PHONE_NUMBERS.map((phone, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 text-[#1080A0]">
                    <Phone size={20} />
                  </div>
                  <a href={`tel:${phone.numberClean}`} className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email and Hours Column */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
            <h3 className="text-lg font-bold text-[#1E293B] mb-6">Correo y horarios</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Mail size={20} />
                </div>
                <a href="mailto:consulta@internistamedellin.com" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  consulta@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Mail size={20} />
                </div>
                <a href="mailto:asistente@internistamedellin.com" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  asistente@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Mail size={20} />
                </div>
                <a href="mailto:estudios@internistamedellin.com" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  estudios@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Mail size={20} />
                </div>
                <a href="mailto:procedimientos@internistamedellin.com" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  procedimientos@internistamedellin.com
                </a>
              </li>
              <li className="flex flex-col gap-1 pt-2">
                <div className="flex items-center gap-2 text-[#64748B] mb-2">
                  <Clock size={18} className="text-[#1080A0]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Horario de atención</span>
                </div>
                <p className="text-sm text-[#64748B] pl-7">Lunes a viernes: 8am a 5pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-[#E2E8F0] gap-6">
          <p className="text-sm text-[#64748B] text-center md:text-left md:flex-1">
            2026 <a href="https://localrank.com.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors">LocalRank</a>. Todos los derechos reservados.
          </p>
          
          <div className="flex justify-center md:flex-1">
            <span className="flex flex-col leading-tight opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-bold text-[#0F172A] tracking-tight">Dr. Willmer Obregón</span>
              <span className="text-[10px] font-medium text-[#1080A0] uppercase tracking-widest">Medicina Interna</span>
            </span>
          </div>

          <div className="md:flex-1 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#1080A0] transition-colors group"
            >
              Volver arriba
              <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;