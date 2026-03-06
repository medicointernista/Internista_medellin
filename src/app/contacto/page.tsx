import React from 'react';
import { Metadata } from 'next';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBERS, getWhatsAppLink, getPhoneLink, LOCATION } from '@/lib/contact-config';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Contacto y agenda de citas con médico internista en Medellín",
  description: "Agenda tu cita con el Dr. Willmer Obregón en Medellín. Contacto directo por WhatsApp y teléfono para consultas de medicina interna y estudios cardiológicos.",
};

const ContactPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Willmer Obregón - Medicina Interna",
    "description": "Consulta de medicina interna y estudios cardiológicos en Medellín",
    "url": "https://drwillmerobregon.com",
    "telephone": "+573005555555",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Medellín, Colombia",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "postalCode": "050021",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.2285033",
      "longitude": "-75.6047618"
    },
    "sameAs": [],
    "image": "https://drwillmerobregon.com/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Dr. Willmer Obregón",
      "jobTitle": "Especialista en Medicina Interna"
    },
    "medicalSpecialty": ["Medicina Interna", "Cardiología"],
    "knowsAbout": [
      "Diabetes",
      "Presión Alta",
      "Enfermedades del Corazón",
      "Problemas de Tiroides",
      "Enfermedades de los Riñones",
      "Dolor Crónico"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Script
        id="medical-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Contacto y agenda de citas con médico internista en Medellín
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Agenda tu cita o solicita información por WhatsApp o llamada.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Contact Card */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Contáctanos para agendar tu cita</h2>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#1080A0]" />
              Agenda por WhatsApp o teléfono
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              <a
                href={getWhatsAppLink()}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#187495] via-[#11A9D0] to-[#187495] py-4 px-6 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
              >
                <MessageSquare className="h-5 w-5" />
                Enviar WhatsApp
              </a>
              <a
                href={getPhoneLink()}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#E7F5F9] py-4 px-6 text-sm font-bold text-[#0F172A] hover:bg-[#D9EDF3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 border border-[#E2E8F0]"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#1080A0]" />
                  Ubicación del consultorio en Medellín
                </h3>
                <a
                  href="https://maps.app.goo.gl/vPPJWHtXDQ42kEBk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#1080A0] hover:text-[#0D6E8A] transition-colors underline"
                >
                  Abrir en Maps
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/vPPJWHtXDQ42kEBk7"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl border-2 border-[#E2E8F0] bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] hover:border-[#CBD5E1] transition-colors aspect-video"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#1080A0] mx-auto mb-3" />
                    <p className="text-sm font-semibold text-[#0F172A] mb-2">Ver en Google Maps</p>
                    <p className="text-xs text-[#475569]">Cra 50A #64-45, Medellín</p>
                  </div>
                </div>
              </a>
              <p className="text-sm text-[#475569]">
                Haz clic en "Abrir en Maps" para ver indicaciones y navegación en tiempo real.
              </p>
            </div>
          </article>

          {/* Sidebar Info */}
          <aside className="space-y-6">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/60 p-8 md:p-10 shadow-sm backdrop-blur-sm h-full">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Información de contacto</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B]">Dirección</h3>
                    <a
                      href={LOCATION.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#1080A0] transition-colors leading-relaxed"
                    >
                      {LOCATION.address}
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B]">Teléfonos</h3>
                    <div className="flex flex-col gap-1">
                      {PHONE_NUMBERS.map((phone, index) => (
                        <a key={index} href={`tel:${phone.numberClean}`} className="text-[#475569] hover:text-[#1080A0] transition-colors">
                          {phone.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 text-[#475569]">
                    <h3 className="font-bold text-[#1E293B] text-base">Horarios de atención</h3>
                    <p>Lunes a viernes: 8am a 5pm</p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
