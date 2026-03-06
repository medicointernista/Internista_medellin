"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
  className?: string;
}

export default function RelatedServices({
  services,
  title = "Servicios relacionados",
  className = ""
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className={`rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-br from-[#E7F5F9]/30 to-white p-8 md:p-10 ${className}`}>
      <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-6">
        {title}
      </h3>
      <p className="text-[#64748B] mb-6">
        También podría interesarte:
      </p>
      <div className="grid gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group flex items-start justify-between gap-4 p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/40 transition-all hover:shadow-md"
          >
            <div className="flex-1">
              <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors mb-1">
                {service.title}
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {service.description}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
