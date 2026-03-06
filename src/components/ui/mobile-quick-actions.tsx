"use client";

import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '@/lib/contact-config';

/**
 * MobileQuickActions Component
 * 
 * Provides a fixed bottom bar on mobile devices for quick access to 
 * primary contact actions (WhatsApp, Call, Location).
 */
const MobileQuickActions = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[110] xl:hidden bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-4 py-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]" suppressHydrationWarning>
            <div className="grid grid-cols-3 gap-2">
                <a
                    href={getWhatsAppLink()}
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#25D366] text-white py-2.5 active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 transition-all h-[54px] min-h-[44px]"
                    aria-label="Enviar mensaje por WhatsApp"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
                </a>
                <a
                    href={getPhoneLink()}
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#1080A0] text-white py-2.5 active:scale-95 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 transition-all h-[54px] min-h-[44px]"
                    aria-label="Llamar al consultorio"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Llamar</span>
                </a>
                <a
                    href="https://maps.app.goo.gl/vPPJWHtXDQ42kEBk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#E1F1F6] text-[#1080A0] py-2.5 active:scale-95 hover:bg-[#D4EAF1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 transition-all h-[54px] min-h-[44px] border border-[#E2E8F0]"
                    aria-label="Abrir ubicación en Maps"
                >
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Ubicación</span>
                </a>
            </div>
        </div>
    );
};

export default MobileQuickActions;