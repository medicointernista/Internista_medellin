import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { getPhoneLink } from '@/lib/contact-config';

/**
 * StickySocialSidebar Component
 * 
 * A vertical sticky sidebar located on the right side of the screen.
 * Contains call-to-action buttons for quick access to communication channels.
 * Matches the "Medical Modern" aesthetic with soft shadows and the primary teal color.
 */
const StickySocialSidebar = () => {
    const socialLinks = [
      {
        label: 'Llamar',
        icon: <Phone size={18} />,
        href: getPhoneLink(),
      },
      {
        label: 'Ubicación',
        icon: <MapPin size={18} />,
        href: 'https://maps.app.goo.gl/vPPJWHtXDQ42kEBk7',
      },
    {
      label: 'Facebook',
      icon: <Facebook size={18} />,
      href: 'https://www.facebook.com/tu.internista.favorito/',
    },
    {
      label: 'Instagram',
      icon: <Instagram size={18} />,
      href: 'https://www.instagram.com/tu_internista_favorito/',
    },
    {
      label: 'YouTube',
      icon: <Youtube size={18} />,
      href: 'https://www.youtube.com/@tuinternistafavorito',
    },
    {
      label: 'TikTok',
      icon: <FaTiktok size={18} />,
      href: 'https://www.tiktok.com/@tuinternistafavorito',
    },
  ];

    return (
      <div className="fixed right-0 top-1/2 z-[100] hidden -translate-y-1/2 flex-col gap-[2px] xl:flex" suppressHydrationWarning>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label !== 'Llamar' && link.label !== 'Ubicación' ? '_blank' : undefined}
          rel={link.label !== 'Llamar' && link.label !== 'Ubicación' ? 'noopener noreferrer' : undefined}
          className="group relative flex h-[44px] w-[110px] items-center justify-end overflow-hidden border-y border-l border-[#1080A0]/20 bg-[#1080A0] pr-3 text-white transition-all duration-300 hover:w-[130px] hover:bg-[#0D6E8A] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 first:rounded-tl-[8px] last:rounded-bl-[8px]"
          aria-label={link.label}
        >
          <span className="mr-auto pl-4 text-[13px] font-medium opacity-100 transition-opacity duration-300">
            {link.label}
          </span>
          <span className="flex h-5 w-5 items-center justify-center">
            {link.icon}
          </span>

          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
};

export default StickySocialSidebar;