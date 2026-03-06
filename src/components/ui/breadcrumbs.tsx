"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 text-sm mb-6", className)}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {/* Home link */}
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[#64748B] hover:text-[#1080A0] transition-colors"
            aria-label="Inicio"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Inicio</span>
          </Link>
          {items.length > 0 && (
            <ChevronRight className="w-4 h-4 text-[#CBD5E1]" aria-hidden="true" />
          )}
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span
                  className="text-[#0F172A] font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-[#64748B] hover:text-[#1080A0] transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-[#CBD5E1]" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  let currentPath = '';

  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;

    // Generate label from segment
    let label = segments[i]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Custom labels for better UX
    const labelMap: Record<string, string> = {
      'servicios': 'Servicios',
      'consulta-medicina-interna': 'Medicina Interna',
      'viscosuplementacion-para-rodilla': 'Viscosuplementación',
      'cardiologia': 'Cardiología',
      'enfermedades-endocrinas': 'Enfermedades Endocrinas',
      'enfermedades-psiquiatricas': 'Enfermedades Psiquiátricas',
      'enfermedades-cardiovasculares': 'Enfermedades Cardiovasculares',
      'enfermedades-pulmonares': 'Enfermedades Pulmonares',
      'enfermedades-gastrointestinales': 'Enfermedades Gastrointestinales',
      'enfermedades-hematologicas': 'Enfermedades Hematológicas',
      'manejo-avanzado-dolor': 'Manejo Avanzado de Dolor',
      'infiltraciones-corticoides': 'Infiltraciones con Corticoides',
      'infiltraciones-bioreguladores': 'Infiltraciones con Bioreguladores',
      'acido-hialuronico': 'Ácido Hialurónico',
      'prp-lisado-plaquetas': 'PRP y Lisado de Plaquetas',
      'electrocardiograma': 'Electrocardiograma',
      'ecocardiograma-transtoracico': 'Ecocardiograma Transtorácico',
      'holter-24-horas': 'Holter 24 Horas',
      'mapa-24-horas': 'MAPA 24 Horas',
      'sobre-mi': 'Sobre Mí',
      'contacto': 'Contacto',
    };

    label = labelMap[segments[i]] || label;

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  }

  return breadcrumbs;
}
