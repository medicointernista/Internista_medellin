"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    ChevronDown,
    Menu,
    X,
    ChevronRight
} from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '@/lib/contact-config';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
        setActiveNestedSubmenu(null);
    };

    const toggleSubmenu = (label: string) => {
        setActiveSubmenu(activeSubmenu === label ? null : label);
        setActiveNestedSubmenu(null);
    };

    const toggleNestedSubmenu = (label: string) => {
        setActiveNestedSubmenu(activeNestedSubmenu === label ? null : label);
    };

    const mainMenu = [
        {
          label: "Inicio",
          url: "/#inicio",
          type: "anchor"
        },
        {
          label: "Sobre mí",
          url: "/sobre-mi",
          type: "page"
        },
        {
          label: "Servicios",
          url: null,
          type: "submenu",
          children: [
            {
              label: "Consulta de Medicina Interna",
              url: "/servicios/consulta-medicina-interna",
              hasSubmenu: true,
              submenuItems: [
                {
                  label: "Enfermedades Endocrinas",
                  url: "/servicios/consulta-medicina-interna/enfermedades-endocrinas"
                },
                {
                  label: "Enfermedades Psiquiátricas",
                  url: "/servicios/consulta-medicina-interna/enfermedades-psiquiatricas"
                },
                {
                  label: "Enfermedades Cardiovasculares",
                  url: "/servicios/consulta-medicina-interna/enfermedades-cardiovasculares"
                },
                {
                  label: "Enfermedades Pulmonares",
                  url: "/servicios/consulta-medicina-interna/enfermedades-pulmonares"
                },
                {
                  label: "Enfermedades Gastrointestinales",
                  url: "/servicios/consulta-medicina-interna/enfermedades-gastrointestinales"
                },
                {
                  label: "Enfermedades Hematológicas",
                  url: "/servicios/consulta-medicina-interna/enfermedades-hematologicas"
                },
                {
                  label: "Manejo Avanzado de Dolor",
                  url: "/servicios/consulta-medicina-interna/manejo-avanzado-dolor"
                }
              ]
            },
            {
              label: "Viscosuplementación para Rodilla",
              url: "/servicios/viscosuplementacion-para-rodilla",
              hasSubmenu: true,
              submenuItems: [
                {
                  label: "Infiltraciones con Corticoides",
                  url: "/servicios/viscosuplementacion-para-rodilla/infiltraciones-corticoides"
                },
                {
                  label: "Infiltraciones con Bioreguladores",
                  url: "/servicios/viscosuplementacion-para-rodilla/infiltraciones-bioreguladores"
                },
                {
                  label: "Viscosuplementación con Ácido Hialurónico",
                  url: "/servicios/viscosuplementacion-para-rodilla/acido-hialuronico"
                },
                {
                  label: "PRP y Lisado de Plaquetas",
                  url: "/servicios/viscosuplementacion-para-rodilla/prp-lisado-plaquetas"
                }
              ]
            }
          ]
        },
        {
          label: "Cardiología",
          url: null,
          type: "submenu",
          children: [
            {
              label: "Electrocardiograma",
              url: "/cardiologia/electrocardiograma",
              hasSubmenu: false
            },
            {
              label: "Ecocardiograma transtorácico",
              url: "/cardiologia/ecocardiograma-transtoracico",
              hasSubmenu: false
            },
            {
              label: "Holter 24 horas",
              url: "/cardiologia/holter-24-horas",
              hasSubmenu: false
            },
            {
              label: "MAPA 24 horas",
              url: "/cardiologia/mapa-24-horas",
              hasSubmenu: false
            }
          ]
        },
        {
          label: "Contacto",
          url: "/contacto",
          type: "page"
        }
    ];

    return (
        <header className="relative w-full z-50">
            {/* Top Bar: Primary Teal Background */}
            <div className="bg-[#1080A0] text-[#F8FAFC]">
                <div className="container mx-auto px-6 py-2 max-w-[1400px]">
                    <div className="text-center">
                        <span className="text-[14px] font-semibold tracking-wide uppercase">
                            Estudios Cardiovasculares en Medellín
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navigation: Sticky Bottom Bar with Glassmorphism */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
                <div className="container mx-auto px-6 py-4 max-w-[1400px]">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link
                            className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]"
                            aria-label="Ir al inicio"
                            href="/"
                        >
                            <Image
                                src="/Wilmer_Obregon_Logo.png"
                                alt="Dr. Willmer Obregón Logo"
                                width={200}
                                height={60}
                                className="h-12 w-auto md:h-14"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation Menu */}
                        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegación principal">
                            {mainMenu.map((item) => (
                                item.type === "submenu" ? (
                                    <div key={item.label} className="relative group">
                                        <button 
                                            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[15px] font-medium transition-colors hover:bg-[#E1F1F6] hover:text-[#1080A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] text-[#1E293B]/90 h-11"
                                        >
                                            {item.label}
                                            <ChevronDown className="h-4 w-4 opacity-80 group-hover:rotate-180 transition-transform" />
                                        </button>
                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] group-hover:pointer-events-auto pointer-events-none">
                                            <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] overflow-visible py-2 before:absolute before:-top-2 before:left-0 before:w-full before:h-2.5 before:content-['']">
                                                {item.children?.map((child) => (
                                                    <div key={child.label} className="relative group/submenu py-0.5 px-2">
                                                        <Link
                                                            href={child.url}
                                                            className="flex items-center justify-between gap-2 px-3 py-2.5 text-[14px] text-[#1E293B] hover:bg-[#F1F5F9] hover:text-[#1080A0] transition-all rounded-lg cursor-pointer group/link"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <ChevronRight className="h-3 w-3 opacity-40 group-hover/link:translate-x-0.5 transition-transform" />
                                                                {child.label}
                                                            </div>
                                                            {child.hasSubmenu && (
                                                                <ChevronRight className="h-3 w-3 opacity-60" />
                                                            )}
                                                        </Link>

                                                        {/* Nested Submenu */}
                                                        {child.hasSubmenu && 'submenuItems' in child && child.submenuItems && (
                                                            <>
                                                                <div className="absolute left-full top-0 -ml-3 w-6 h-full opacity-0 group-hover/submenu:opacity-100 transition-opacity pointer-events-none group-hover/submenu:pointer-events-auto z-[65]" />
                                                                <div className="absolute left-full top-0 ml-0 w-80 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-150 z-[70] pointer-events-none group-hover/submenu:pointer-events-auto">
                                                                    <div className="bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden py-1.5 ml-2">
                                                                    {child.submenuItems.map((subItem: any) => (
                                                                        <Link
                                                                            key={subItem.label}
                                                                            href={subItem.url}
                                                                            className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-[#1E293B] hover:bg-[#F1F5F9] hover:text-[#1080A0] transition-all hover:translate-x-0.5 mx-1 rounded-md"
                                                                        >
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#1080A0]/60 group-hover/link:bg-[#1080A0] transition-colors" />
                                                                            {subItem.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link 
                                        key={item.label}
                                        href={item.url || "/"}
                                        className="rounded-lg px-4 py-2 text-[15px] font-medium transition-colors hover:bg-[#E1F1F6] hover:text-[#1080A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] text-[#1E293B]/90 h-11 flex items-center"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </nav>

                        {/* CTA Button and Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            <a
                                href={getWhatsAppLink()}
                                className="items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hidden md:inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-lg hover:shadow-[#1080A0]/30 hover:scale-[1.02] h-[48px] px-6 py-2"
                            >
                                Agendar por WhatsApp
                            </a>
                            
                            <button 
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0] shadow-sm hover:bg-[#E2E8F0] h-11 w-11 xl:hidden" 
                                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div 
                    className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl z-[100] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <nav className="flex flex-col p-6 gap-2 h-full overflow-y-auto">
                        {mainMenu.map((item) => (
                            <div key={item.label} className="border-b border-slate-100 last:border-0">
                                {item.type === "submenu" ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(item.label)}
                                            className="flex items-center justify-between w-full py-4 text-lg font-semibold text-[#1E293B] hover:text-[#1080A0] hover:bg-[#F1F5F9] px-2 rounded-lg transition-all"
                                        >
                                            {item.label}
                                            <ChevronDown className={`h-5 w-5 opacity-60 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === item.label ? 'max-h-[1000px] pb-4' : 'max-h-0'}`}>
                                            <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#1080A0]/20">
                                                {item.children?.map((child) => (
                                                    <div key={child.label}>
                                                        {child.hasSubmenu ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleNestedSubmenu(child.label)}
                                                                    className="flex items-center justify-between w-full py-3 text-[15px] font-medium text-[#1E293B] hover:text-[#1080A0] hover:bg-[#F1F5F9] rounded-lg px-2 transition-all"
                                                                >
                                                                    {child.label}
                                                                    <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${activeNestedSubmenu === child.label ? 'rotate-180' : ''}`} />
                                                                </button>
                                                                <div className={`overflow-hidden transition-all duration-300 ${activeNestedSubmenu === child.label ? 'max-h-[600px] pb-2' : 'max-h-0'}`}>
                                                                    <div className="flex flex-col gap-1 pl-4 mt-2 border-l-2 border-[#1080A0]/30">
                                                                        {'submenuItems' in child && child.submenuItems?.map((subItem: any) => (
                                                                            <Link
                                                                                key={subItem.label}
                                                                                href={subItem.url}
                                                                                onClick={() => setIsMenuOpen(false)}
                                                                                className="py-2 px-2 text-[14px] text-[#1E293B]/80 hover:text-[#1080A0] hover:bg-[#F1F5F9] rounded-md transition-all"
                                                                            >
                                                                                • {subItem.label}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={child.url}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="py-3 px-2 text-[16px] text-[#1E293B]/80 hover:text-[#1080A0] hover:bg-[#F1F5F9] block rounded-lg transition-all"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link 
                                        href={item.url || "/"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between w-full py-4 text-lg font-semibold text-[#1E293B] hover:text-[#1080A0]"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-6 flex flex-col gap-4 pb-20">
                            <a
                                href={getWhatsAppLink()}
                                className="flex items-center justify-center gap-3 rounded-xl bg-[#1080A0] text-white h-[56px] text-lg font-bold shadow-md hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 transition-opacity"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone className="w-5 h-5" />
                                Agendar por WhatsApp
                            </a>
                            <a
                                href={getPhoneLink()}
                                className="flex items-center justify-center gap-3 rounded-xl bg-[#E1F1F6] text-[#1080A0] h-[56px] text-lg font-bold hover:bg-[#D4EAF1] border border-[#E2E8F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone className="w-5 h-5" />
                                Llamar ahora
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;