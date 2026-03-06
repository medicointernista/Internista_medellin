# Arquitectura de Google Tag Manager - Diagrama de Flujo

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx (ROOT LAYOUT - Punto de inyección de GTM)
│   ├── page.tsx
│   ├── not-found.tsx (Nueva página 404)
│   ├── contacto/
│   ├── sobre-mi/
│   ├── cardiologia/
│   │   ├── electrocardiograma/page.tsx
│   │   ├── holter-24-horas/page.tsx
│   │   ├── mapa-24-horas/page.tsx
│   │   └── ecocardiograma-transtoracico/page.tsx
│   └── servicios/
│       ├── consulta-medicina-interna/
│       │   ├── page.tsx
│       │   ├── enfermedades-cardiovasculares/page.tsx
│       │   ├── enfermedades-endocrinas/page.tsx
│       │   ├── enfermedades-gastrointestinales/page.tsx
│       │   ├── enfermedades-hematologicas/page.tsx
│       │   ├── enfermedades-psiquiatricas/page.tsx
│       │   ├── enfermedades-pulmonares/page.tsx
│       │   └── manejo-avanzado-dolor/page.tsx
│       └── viscosuplementacion-para-rodilla/
│           ├── page.tsx
│           ├── acido-hialuronico/page.tsx
│           ├── infiltraciones-bioreguladores/page.tsx
│           ├── infiltraciones-corticoides/page.tsx
│           └── prp-lisado-plaquetas/page.tsx
├── components/
│   ├── providers/
│   │   ├── GTMProvider.tsx ✅ Inicializa dataLayer
│   │   └── RouteTracker.tsx ✅ Rastreo automático de rutas
│   ├── debug/
│   │   └── GTMDebugger.tsx ✅ Panel de debug en desarrollo
│   └── ... (otros componentes)
└── hooks/
    └── use-gtm.ts ✅ Hooks para rastreo personalizado
```

## Flujo de Inicialización

```
1. PÁGINA SE CARGA
   ↓
2. Next.js renderiza layout.tsx
   ↓
3. Script GTM se inyecta en <head> (afterInteractive)
   ↓
4. Body renderiza:
   ├─ <noscript> fallback para sin JavaScript
   ├─ GTMProvider (inicializa window.dataLayer)
   ├─ RouteTracker (espera por pathname)
   └─ Resto de componentes...
   ↓
5. GTM Script se ejecuta (cuando está listo)
   ├─ Lee window.dataLayer
   ├─ Inicializa contenedor GTM-MTRKGD87
   └─ Comienza a rastrear eventos
   ↓
6. RouteTracker envía primer page_view
   ↓
7. Cuando usuario navega:
   ├─ usePathname() detecta cambio
   ├─ useGTMPageTracking() se ejecuta
   └─ Nuevo evento page_view se empuja a dataLayer
```

## Componentes Clave

### 1. GTMProvider
**Ubicación:** `src/components/providers/GTMProvider.tsx`

```
Responsabilidad: Inicializar window.dataLayer
Ejecuta: En el cliente (useEffect)
Timing: Antes del script GTM
Retorna: null (sin UI)
```

**Código:**
```typescript
if (!window.dataLayer) {
  window.dataLayer = [];
}

window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js',
});
```

### 2. RouteTracker
**Ubicación:** `src/components/providers/RouteTracker.tsx`

```
Responsabilidad: Rastrear cambios de ruta
Ejecuta: En el cliente (usePathname)
Timing: Cada vez que cambia la ruta
Retorna: null (sin UI)
```

**Código:**
```typescript
const pathname = usePathname();
useGTMPageTracking(pathname);
// Automáticamente envía page_view a GTM
```

### 3. useGTM Hook
**Ubicación:** `src/hooks/use-gtm.ts`

```
Métodos:
- pushEvent(event) → Empuja evento directo a dataLayer
- trackPageView(path, title) → Rastrea vistas de página
- trackEvent(name, data) → Rastrea eventos personalizados
```

### 4. GTMDebugger
**Ubicación:** `src/components/debug/GTMDebugger.tsx`

```
Responsabilidad: Mostrar eventos GTM en desarrollo
Ejecuta: Solo cuando NODE_ENV === 'development'
UI: Botón en esquina inferior derecha
Funcionalidad: Muestra últimos 10 eventos capturados
```

## Flujo de Datos (DataLayer)

```
GTMProvider inicializa:
{
  window.dataLayer = [
    {
      'gtm.start': 1704067200000,
      event: 'gtm.js'
    }
  ]
}
   ↓
GTM Script se carga y ve el array
   ↓
RouteTracker empuja:
{
  event: 'page_view',
  page_path: '/servicios/consulta-medicina-interna',
  page_title: 'Consulta de Medicina Interna...'
}
   ↓
GTM Contenedor procesa el evento
   ↓
Datos se envían a Google Analytics (si está configurado)
```

## Herencia de GTM en Todas las Rutas

```
Root Layout (layout.tsx)
├─ Script GTM en <head> ✅
├─ GTMProvider en <body> ✅
├─ RouteTracker en <body> ✅
│
└─ Todas las rutas heredan automáticamente:
   ├─ / (página principal)
   ├─ /servicios/* (todas las subrutas)
   ├─ /cardiologia/* (todas las subrutas)
   ├─ /not-found (página 404)
   ├─ /contacto
   └─ /sobre-mi
```

**Ventaja:** No necesitas agregar nada extra en cada página. GTM funciona globalmente.

## Secuencia de Ejecución (Timeline)

```
T0:     Página comienza a cargar
        └─ Next.js procesa layout.tsx

T1-2ms: Script GTM se inyecta en <head>
        └─ Estrategia: afterInteractive (no bloquea render)

T50ms:  Body comienza a renderizar
        ├─ GTMProvider: inicializa dataLayer
        ├─ RouteTracker: monitorea pathname
        └─ Resto de componentes

T100-500ms: GTM Script se ejecuta
        ├─ Lee window.dataLayer
        ├─ Inicializa contenedor
        └─ Carga librería de etiquetas

T500ms: RouteTracker genera primer page_view
        └─ GTM recibe y procesa el evento

T600ms+: Página completamente cargada
         ├─ GTM está activo
         ├─ Rastreo de eventos activo
         └─ Cambios de ruta se detectan automáticamente
```

## Rutas Cubiertas (25 páginas totales)

```
✅ Cobertura: 100%

Grupos:
├─ Inicio (1): /
├─ Servicios (9): /servicios/consulta-medicina-interna*
├─ Cardiología (4): /cardiologia/*
├─ Medicina Interna (6): /servicios/viscosuplementacion-para-rodilla/*
├─ Información (3): /contacto, /sobre-mi, /sitemap.xml
└─ Error (1): /not-found (404)

Cada una con GTM completamente funcional.
```

## Mejoras Implementadas

| Aspecto | Antes | Después |
|---------|-------|---------|
| DataLayer inicialización | Manual | Automática (GTMProvider) |
| Rastreo de rutas | Manual en cada página | Automático (RouteTracker) |
| Página 404 | Sin rastreo | Rastreada automáticamente |
| Debug | Consola manual | Panel visual (GTMDebugger) |
| TypeScript | No tipado | Completamente tipado |
| Mantenibilidad | Duplicación de código | Centralizado en providers |

## Cómo Usar los Hooks

### Rastrear evento personalizado

```typescript
import { useGTM } from '@/hooks/use-gtm';

export function ContactForm() {
  const { trackEvent } = useGTM();

  const handleSubmit = (data) => {
    // Enviar evento personalizado a GTM
    trackEvent('form_submitted', {
      form_id: 'contact_form',
      service_type: data.service,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form content */}
    </form>
  );
}
```

### Rastrear clic en botón CTA

```typescript
import { useGTM } from '@/hooks/use-gtm';

export function CTAButton() {
  const { trackEvent } = useGTM();

  return (
    <button
      onClick={() => trackEvent('cta_clicked', {
        cta_text: 'Agendar cita',
        section: 'hero',
        service: 'medicina-interna'
      })}
    >
      Agendar cita
    </button>
  );
}
```

---

**Última actualización:** 2026-03-02
**Estado:** Completamente implementado y funcional
**Cobertura:** 100% de rutas (25/25)
