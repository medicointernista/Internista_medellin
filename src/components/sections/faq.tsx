"use client";
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "¿Cómo puedo agendar una cita?",
    answer: "Contáctanos por WhatsApp o llama. Disponemos de citas el mismo día o próxima semana según tu disponibilidad.",
  },
  {
    id: "item-2",
    question: "¿Qué tratamientos ofrece el Dr. Obregón?",
    answer: "Trata diabetes, presión alta, problemas del corazón, sobrepeso, problemas de tiroides, dolor crónico y otras enfermedades crónicas.",
  },
  {
    id: "item-3",
    question: "¿Qué debo llevar a mi primera consulta?",
    answer: "Trae tus informes médicos previos, resultados de laboratorio, lista de medicamentos actuales e identificación.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left Column: Title & Info */}
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F1F6] px-4 py-2 text-sm font-medium text-[#1080A0] mb-6">
              <HelpCircle className="w-4 h-4" />
              Resolviendo Tus Dudas
            </div>
            <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B]">
              Encuentra respuestas a las preguntas más comunes sobre la consulta y los servicios médicos del Dr. Willmer Obregón.
            </p>
          </div>

          {/* Right Column: FAQ List with Accordion */}
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="rounded-[1.5rem] border border-[#E2E8F0] bg-white px-6 transition-all duration-300 hover:border-[#1080A0] hover:shadow-md data-[state=open]:border-[#1080A0] data-[state=open]:shadow-md border-b-0"
                >
                  <AccordionTrigger className="text-[1.125rem] font-semibold tracking-tight text-[#1E293B] hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[1rem] leading-[1.6] text-[#64748B] pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
