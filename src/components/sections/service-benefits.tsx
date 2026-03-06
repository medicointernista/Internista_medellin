import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceBenefitsProps {
  benefits: string[];
  title?: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  benefits,
  title = "Beneficios principales"
}) => {
  return (
    <section className="mb-12 rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 leading-snug">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-2xl border-2 border-[#E2E8F0] bg-[#F8FAFC]/60 hover:border-[#1080A0] hover:bg-[#E1F1F6]/40 transition-colors duration-200"
          >
            <CheckCircle2 className="h-6 w-6 text-[#1080A0] flex-shrink-0 mt-0.5" />
            <p className="text-[#475569] leading-relaxed font-medium">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBenefits;
