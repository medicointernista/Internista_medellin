import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import StickySocialSidebar from "@/components/ui/sticky-social-sidebar";
import MobileQuickActions from "@/components/ui/mobile-quick-actions";
import { GTMProvider } from "@/components/providers/GTMProvider";
import { RouteTracker } from "@/components/providers/RouteTracker";
import { GTMDebugger } from "@/components/debug/GTMDebugger";

export const metadata: Metadata = {
  title: "Medicina interna en Medellín | Dr. Willmer Obregón, médico internista",
  description: "Consulta con el Dr. Willmer Obregón, médico internista en Medellín. Evaluación integral de hipertensión, diabetes, obesidad y enfermedades crónicas, con seguimiento cercano y humano.",
  alternates: {
    canonical: "https://internistamedellin.lovable.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es-CO" suppressHydrationWarning>
        <head>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`}
          </Script>
          <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dr. Willmer Obregón - Medicina Interna",
              "image": "https://drwillmerobregon.com/logo.png",
              "description": "Consulta de medicina interna integral en Medellín. Especialista en tratamiento de enfermedades crónicas, diabetes, presión alta y problemas cardiovasculares.",
              "url": "https://drwillmerobregon.com",
              "telephone": "+573005555555",
              "email": "contacto@drwillmerobregon.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Medellín",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "postalCode": "050021",
                "addressCountry": "CO"
              },
              "areaServed": {
                "@type": "City",
                "name": "Medellín",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "CO"
                }
              },
              "priceRange": "$$",
              "sameAs": [],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            })}
          </Script>
        </head>
        <body className="antialiased pb-20 xl:pb-0 bg-white text-slate-900" suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <GTMProvider />
        <RouteTracker />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="3bd7761f-7de4-4e6e-bddb-fceabf0be6ea"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <StickySocialSidebar />
        <MobileQuickActions />
        <VisualEditsMessenger />
        <GTMDebugger />
      </body>
    </html>
  );
}
