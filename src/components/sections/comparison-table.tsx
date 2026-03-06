"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Treatment {
  name: string;
  cost: string;
  duration: string;
  type: string;
  dosage: string;
  frequency: string;
  description: string;
}

interface ComparisonTableProps {
  treatments?: Treatment[];
  title?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  treatments,
  title = "Comparativa de Tratamientos"
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const defaultTreatments: Treatment[] = [
    {
      name: "Corticoides",
      cost: "Bajo–Medio",
      duration: "2–6 semanas",
      type: "Brote agudo",
      dosage: "Monodosis",
      frequency: "≤3–4 veces/año",
      description: "Excelente para inflamación aguda. Acción rápida pero efecto temporal. Ideal en exacerbaciones de dolor."
    },
    {
      name: "Bioreguladores Heel",
      cost: "Medio",
      duration: "Semanas–meses",
      type: "Crónico",
      dosage: "Multidosis (3 semanales)",
      frequency: "Series; refuerzo según respuesta",
      description: "Estimula regeneración natural. Mejor para artrosis crónica. Perfil de seguridad muy favorable."
    },
    {
      name: "Ácido Hialurónico",
      cost: "Medio–Alto",
      duration: "3–6 meses",
      type: "Crónico",
      dosage: "Mono o multidosis",
      frequency: "Repetir cada 6–12 meses",
      description: "Restaura lubricación articular. Duración variable según paciente. Excelente tolerancia."
    },
    {
      name: "PRP (Plasma Rico en Plaquetas)",
      cost: "Alto",
      duration: "3–12 meses",
      type: "Crónico",
      dosage: "2–3 dosis",
      frequency: "Cada 2–4 semanas; refuerzo 6–12 meses",
      description: "Máxima regeneración con factores de crecimiento autólogos. Mayor inversión pero resultados duraderos."
    },
    {
      name: "Lisado de Plaquetas",
      cost: "Alto",
      duration: "Meses (variable)",
      type: "Crónico",
      dosage: "3 dosis",
      frequency: "Cada 3–4 semanas; refuerzo individual",
      description: "Alternativa emergente con factores de crecimiento. Perfil inflamatorio optimizado."
    }
  ];

  const treatmentList = treatments || defaultTreatments;

  const getCostColor = (cost: string) => {
    if (cost.includes("Bajo")) return "text-green-600 bg-green-50";
    if (cost.includes("Medio") && !cost.includes("Alto")) return "text-blue-600 bg-blue-50";
    if (cost.includes("Alto")) return "text-orange-600 bg-orange-50";
    return "text-gray-600 bg-gray-50";
  };

  const getDurationColor = (duration: string) => {
    if (duration.includes("2–6") || duration.includes("Semanas")) return "bg-amber-50 text-amber-700";
    if (duration.includes("3–6") || duration.includes("meses")) return "bg-cyan-50 text-cyan-700";
    return "bg-indigo-50 text-indigo-700";
  };

  return (
    <section className="mb-12 rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
      <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 leading-snug">
        {title}
      </h3>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-[#E2E8F0]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-[#E1F1F6] to-[#F0F9FC] border-b-2 border-[#1080A0]/20">
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Intervención</th>
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Costo Relativo</th>
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Duración</th>
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Indicación</th>
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Esquema</th>
              <th className="px-4 py-4 text-left font-bold text-[#0F172A]">Frecuencia</th>
            </tr>
          </thead>
          <tbody>
            {treatmentList.map((treatment, idx) => (
              <tr
                key={idx}
                className={`border-b border-[#E2E8F0] transition-colors hover:bg-[#F8FAFC]/50 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]/30'
                }`}
              >
                <td className="px-4 py-4 font-semibold text-[#0F172A]">{treatment.name}</td>
                <td className={`px-4 py-4 font-medium rounded-lg ${getCostColor(treatment.cost)}`}>
                  {treatment.cost}
                </td>
                <td className={`px-4 py-4 font-medium rounded-lg ${getDurationColor(treatment.duration)}`}>
                  {treatment.duration}
                </td>
                <td className="px-4 py-4 text-[#475569]">{treatment.type}</td>
                <td className="px-4 py-4 text-[#475569]">{treatment.dosage}</td>
                <td className="px-4 py-4 text-[#475569] text-xs">{treatment.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {treatmentList.map((treatment, idx) => (
          <div
            key={idx}
            className="rounded-xl border-2 border-[#E2E8F0] bg-white/70 overflow-hidden transition-all"
          >
            <button
              onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}
              className="w-full px-4 py-4 flex items-start justify-between hover:bg-[#F1F5F9] transition-colors"
            >
              <div className="text-left">
                <h4 className="font-bold text-[#0F172A] mb-2">{treatment.name}</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCostColor(treatment.cost)}`}>
                      {treatment.cost}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569]">{treatment.duration}</p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-[#1080A0] transition-transform flex-shrink-0 mt-1 ${
                  expandedRow === idx ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedRow === idx && (
              <div className="border-t border-[#E2E8F0] px-4 py-4 bg-[#F8FAFC]/50 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-[#1080A0] uppercase mb-1">Indicación</p>
                  <p className="text-sm text-[#475569]">{treatment.type}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1080A0] uppercase mb-1">Esquema de Dosis</p>
                  <p className="text-sm text-[#475569]">{treatment.dosage}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1080A0] uppercase mb-1">Frecuencia Típica</p>
                  <p className="text-sm text-[#475569]">{treatment.frequency}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1080A0] uppercase mb-1">Características</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{treatment.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Information Note */}
      <div className="mt-8 p-4 rounded-lg bg-[#E1F1F6]/40 border border-[#1080A0]/20">
        <p className="text-sm text-[#475569] leading-relaxed">
          <span className="font-semibold text-[#0F172A]">Nota importante:</span> Los costos relativos, duración del beneficio y frecuencia de aplicación son aproximaciones basadas en la práctica clínica. La selección del tratamiento debe individualizarse según el diagnóstico, grado de enfermedad, respuesta anterior y preferencias del paciente.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
