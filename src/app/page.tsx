import Script from "next/script";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutMe from "@/components/sections/about-me";
import CtaBanner from "@/components/sections/cta-banner";
import BenefitsSection from "@/components/sections/benefits";
import FAQSection from "@/components/sections/faq";

export default function Home() {
  const medicineSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drwillmerobregon.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios de Medicina Interna",
        "item": "https://drwillmerobregon.com/servicios/consulta-medicina-interna"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Consulta de Medicina Interna",
    "description": "Evaluación integral de salud con diagnóstico y tratamiento personalizado",
    "areaServed": "Medellín, Colombia",
    "availableLanguage": ["es"],
    "knowsAbout": [
      "Diabetes",
      "Presión Alta",
      "Enfermedades del Corazón",
      "Sobrepeso y Obesidad",
      "Problemas de Tiroides",
      "Enfermedades de los Riñones",
      "Dolor Crónico",
      "Enfermedades Pulmonares"
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicineSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <AboutMe />
      <FAQSection />
      <CtaBanner />
    </>
  );
}
