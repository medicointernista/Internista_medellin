# Ejemplos Prácticos de Uso de Google Tag Manager

## 1. Rastrear Clics en Botones CTA

### Problema
Quiero saber cuántas personas hacen clic en el botón "Agendar Cita"

### Solución

```typescript
'use client';

import { useGTM } from '@/hooks/use-gtm';
import { Button } from '@/components/ui/button';

export function AgendarCitaButton() {
  const { trackEvent } = useGTM();

  const handleClick = () => {
    // Rastrear el clic
    trackEvent('cta_button_click', {
      button_text: 'Agendar Cita',
      section: 'hero',
      service_type: 'medicina-interna',
      timestamp: new Date().toISOString()
    });

    // Luego hacer lo que corresponda
    window.location.href = '/contacto';
  };

  return (
    <Button onClick={handleClick} size="lg">
      Agendar Cita
    </Button>
  );
}
```

### En Google Analytics verás:
```
Evento: cta_button_click
Parámetros:
  - button_text: "Agendar Cita"
  - section: "hero"
  - service_type: "medicina-interna"
  - timestamp: "2026-03-02T10:30:00.000Z"
```

---

## 2. Rastrear Envío de Formularios

### Problema
Necesito saber cuando alguien completa el formulario de contacto

### Solución

```typescript
'use client';

import { useGTM } from '@/hooks/use-gtm';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function ContactForm() {
  const { handleSubmit, register } = useForm<ContactFormData>();
  const { trackEvent } = useGTM();

  const onSubmit = async (data: ContactFormData) => {
    // Rastrear envío del formulario
    trackEvent('contact_form_submitted', {
      form_id: 'contact_form',
      service_selected: data.service,
      has_phone: !!data.phone,
      message_length: data.message.length,
      source: 'contact_page'
    });

    // Enviar datos al servidor
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (response.ok) {
      trackEvent('contact_form_success', {
        form_id: 'contact_form'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Nombre" />
      <input {...register('email')} type="email" placeholder="Email" />
      <input {...register('phone')} placeholder="Teléfono" />
      <select {...register('service')}>
        <option value="">Selecciona servicio</option>
        <option value="medicina-interna">Medicina Interna</option>
        <option value="cardiologia">Cardiología</option>
        <option value="viscosuplementacion">Viscosuplementación</option>
      </select>
      <textarea {...register('message')} placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### En Google Analytics verás:
```
Evento: contact_form_submitted
Parámetros:
  - form_id: "contact_form"
  - service_selected: "medicina-interna"
  - has_phone: true
  - message_length: 250
  - source: "contact_page"

Evento: contact_form_success
Parámetros:
  - form_id: "contact_form"
```

---

## 3. Rastrear Vistas de Secciones (Scroll)

### Problema
Quiero saber si las personas ven la sección de beneficios o FAQ

### Solución

```typescript
'use client';

import { useEffect } from 'react';
import { useGTM } from '@/hooks/use-gtm';

interface ScrollTrackingProps {
  sectionId: string;
  sectionName: string;
  children: React.ReactNode;
}

export function ScrollTracker({
  sectionId,
  sectionName,
  children
}: ScrollTrackingProps) {
  const { trackEvent } = useGTM();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sección se hace visible en viewport
          trackEvent('section_viewed', {
            section_id: sectionId,
            section_name: sectionName,
            percentage_scrolled: Math.round(
              (window.scrollY / document.documentElement.scrollHeight) * 100
            )
          });

          // Dejar de observar después del primer evento
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger cuando 50% es visible
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionId, sectionName, trackEvent]);

  return (
    <section id={sectionId}>
      {children}
    </section>
  );
}

// Uso en una página:
export function HomePage() {
  return (
    <>
      <HeroSection />

      <ScrollTracker
        sectionId="benefits"
        sectionName="Beneficios"
      >
        <BenefitsSection />
      </ScrollTracker>

      <ScrollTracker
        sectionId="services"
        sectionName="Servicios"
      >
        <ServicesSection />
      </ScrollTracker>

      <ScrollTracker
        sectionId="faq"
        sectionName="Preguntas Frecuentes"
      >
        <FAQSection />
      </ScrollTracker>
    </>
  );
}
```

### En Google Analytics verás:
```
Evento: section_viewed
Parámetros:
  - section_id: "benefits"
  - section_name: "Beneficios"
  - percentage_scrolled: 45

Evento: section_viewed
Parámetros:
  - section_id: "services"
  - section_name: "Servicios"
  - percentage_scrolled: 60
```

---

## 4. Rastrear Expansión de Acordeones/Tabs

### Problema
Quiero saber cuáles preguntas frecuentes son las más consultadas

### Solución

```typescript
'use client';

import { useGTM } from '@/hooks/use-gtm';

interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function AccordionItem({ id, title, content }: AccordionItemProps) {
  const { trackEvent } = useGTM();

  const handleToggle = (isOpen: boolean) => {
    if (isOpen) {
      trackEvent('accordion_opened', {
        accordion_id: id,
        accordion_title: title,
        category: 'faq' // o lo que corresponda
      });
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          const isOpen = e.currentTarget.parentElement?.querySelector('[role="region"]')?.getAttribute('aria-hidden') === 'false';
          handleToggle(!isOpen);
        }}
      >
        {title}
      </button>
      {content}
    </div>
  );
}
```

### En Google Analytics verás:
```
Evento: accordion_opened
Parámetros:
  - accordion_id: "faq_1"
  - accordion_title: "¿Qué es medicina interna?"
  - category: "faq"

Evento: accordion_opened
Parámetros:
  - accordion_id: "faq_3"
  - accordion_title: "¿Cuál es el costo de una consulta?"
  - category: "faq"
```

---

## 5. Rastrear Navegación Entre Servicios

### Problema
Quiero saber qué servicios son más consultados

### Solución

```typescript
'use client';

import { useGTM } from '@/hooks/use-gtm';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function ServiceCard({
  id,
  title,
  description,
  href,
  icon
}: ServiceCardProps) {
  const { trackEvent } = useGTM();

  const handleClick = () => {
    trackEvent('service_card_clicked', {
      service_id: id,
      service_name: title,
      section: 'services_grid'
    });
  };

  return (
    <Link href={href} onClick={handleClick}>
      <div className="service-card">
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
```

### En Google Analytics verás:
```
Evento: service_card_clicked
Parámetros:
  - service_id: "medicina_interna"
  - service_name: "Consulta Medicina Interna"
  - section: "services_grid"

Evento: service_card_clicked
Parámetros:
  - service_id: "cardiologia"
  - service_name: "Consulta Cardiología"
  - section: "services_grid"

Evento: service_card_clicked
Parámetros:
  - service_id: "viscosuplementacion"
  - service_name: "Viscosuplementación"
  - section: "services_grid"
```

---

## 6. Rastrear Descargas o Links Externos

### Problema
Quiero saber si las personas descargan documentos o acceden a información externa

### Solución

```typescript
'use client';

import { useGTM } from '@/hooks/use-gtm';

interface DownloadLinkProps {
  href: string;
  fileName: string;
  fileType: string;
  category: string;
  children: React.ReactNode;
}

export function DownloadLink({
  href,
  fileName,
  fileType,
  category,
  children
}: DownloadLinkProps) {
  const { trackEvent } = useGTM();

  const handleClick = () => {
    trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
      file_category: category,
      download_url: href
    });
  };

  return (
    <a href={href} onClick={handleClick} download>
      {children}
    </a>
  );
}

// Uso:
export function DocumentsSection() {
  return (
    <div>
      <DownloadLink
        href="/docs/guia-hipertension.pdf"
        fileName="guia-hipertension"
        fileType="pdf"
        category="educational"
      >
        Descargar Guía de Hipertensión
      </DownloadLink>
    </div>
  );
}
```

### En Google Analytics verás:
```
Evento: file_download
Parámetros:
  - file_name: "guia-hipertension"
  - file_type: "pdf"
  - file_category: "educational"
  - download_url: "/docs/guia-hipertension.pdf"
```

---

## 7. Rastrear Cambios de Tema (Luz/Oscuro)

### Problema
Quiero saber si las personas usan el modo oscuro

### Solución

```typescript
'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useGTM } from '@/hooks/use-gtm';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { trackEvent } = useGTM();

  const handleThemeChange = (newTheme: string) => {
    trackEvent('theme_changed', {
      new_theme: newTheme,
      previous_theme: theme,
      timestamp: new Date().toISOString()
    });

    setTheme(newTheme);
  };

  return (
    <div>
      <button onClick={() => handleThemeChange('light')}>
        Modo Claro
      </button>
      <button onClick={() => handleThemeChange('dark')}>
        Modo Oscuro
      </button>
    </div>
  );
}
```

### En Google Analytics verás:
```
Evento: theme_changed
Parámetros:
  - new_theme: "dark"
  - previous_theme: "light"
  - timestamp: "2026-03-02T10:30:00.000Z"
```

---

## Resumen de Patrones Comunes

| Acción | Evento | Parámetros Clave |
|--------|--------|------------------|
| Clic en botón CTA | `cta_button_click` | button_text, section, service_type |
| Envío de formulario | `form_submitted` | form_id, fields_count, source |
| Vista de sección | `section_viewed` | section_id, section_name, scroll_depth |
| Acordeón expandido | `accordion_opened` | accordion_id, accordion_title, category |
| Servicio seleccionado | `service_clicked` | service_id, service_name, section |
| Descarga de archivo | `file_download` | file_name, file_type, file_category |
| Cambio de tema | `theme_changed` | new_theme, previous_theme |
| Error en página | `page_error` | error_type, error_message, page_path |

---

## Mejores Prácticas

✅ **Hacer:**
- Usar nombres de eventos consistentes y descriptivos
- Incluir contexto en parámetros (section, category, etc.)
- Rastrear conversiones importantes
- Usar timestamps para análisis temporal

❌ **Evitar:**
- Eventos sin parámetros descriptivos
- Rastrear datos sensibles (contraseñas, datos médicos privados)
- Demasiados eventos (cause ruido en datos)
- Cambiar nombres de eventos sin documentar

---

**Para más información:** Ver `GTM_IMPLEMENTATION.md` y `GTM_ARCHITECTURE.md`
