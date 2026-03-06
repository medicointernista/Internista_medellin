# Google Tag Manager - Guía Rápida para Desarrolladores

## Inicio Rápido

### 1. Verificar que GTM está funcionando

Abre la consola de tu navegador (F12) y ejecuta:

```javascript
window.dataLayer
// Debe retornar un array de eventos
```

### 2. Ver eventos en desarrollo

En desarrollo, verás un botón "GTM" en la esquina inferior derecha que muestra los eventos en tiempo real.

### 3. Rastrear un evento personalizado

```typescript
import { useGTM } from '@/hooks/use-gtm';

export function MiComponente() {
  const { trackEvent } = useGTM();

  const handleClic = () => {
    trackEvent('mi_evento', {
      accion: 'algo_sucedio',
      valor: 123
    });
  };

  return <button onClick={handleClic}>Haz clic</button>;
}
```

---

## Archivos Clave

### 📁 Componentes

```
src/components/
├── providers/
│   ├── GTMProvider.tsx        ← Inicializa dataLayer
│   └── RouteTracker.tsx       ← Rastreo automático de rutas
└── debug/
    └── GTMDebugger.tsx        ← Panel de debug (desarrollo)
```

### 🪝 Hooks

```
src/hooks/
└── use-gtm.ts                 ← Hooks para rastreo de eventos
```

### 🔌 Integración Principal

```
src/app/layout.tsx             ← Layout raíz (GTM inyectado aquí)
```

---

## Funcionalidades

### Rastreo Automático

Cada vez que navegas a una página diferente:
- Se dispara automáticamente un evento `page_view`
- Se incluyen `page_path` y `page_title`

### Rastreo Manual

Usar el hook `useGTM()` para eventos personalizados:

```typescript
const { trackEvent, trackPageView, pushEvent } = useGTM();

// Rastrear evento con parámetros
trackEvent('evento_nombre', {
  param1: 'valor1',
  param2: 'valor2'
});

// Rastrear vista de página manual
trackPageView('/ruta', 'Título de página');

// Empujar dato directo a dataLayer
pushEvent({
  event: 'custom',
  custom_data: 'algún dato'
});
```

---

## Ejemplos Comunes

### Rastrear clic en botón CTA

```typescript
<button onClick={() => {
  trackEvent('cta_click', {
    button_text: 'Agendar cita',
    section: 'hero'
  });
}}>
  Agendar cita
</button>
```

### Rastrear envío de formulario

```typescript
const handleSubmit = (data) => {
  trackEvent('form_submitted', {
    form_id: 'contact',
    fields_completed: Object.keys(data).length
  });
  // ... enviar formulario
};
```

### Rastrear enlace externo

```typescript
<a href="https://ejemplo.com" onClick={() => {
  trackEvent('external_link_click', {
    url: 'https://ejemplo.com',
    text: 'Ir a ejemplo'
  });
}}>
  Ir a ejemplo
</a>
```

---

## Verificación en GTM Console

1. Ve a **Google Tag Manager** (GTM-MTRKGD87)
2. Click en **Preview**
3. Abre tu sitio en `http://localhost:3000`
4. En la ventana de preview, verás los eventos en tiempo real

---

## Datos en Google Analytics

Una vez que los eventos llegan a Google Analytics:

1. Ve a **Analytics**
2. **Real-time** → **Overview**
3. Navega por tu sitio
4. Deberías ver sessiones activas

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| No ves eventos en preview GTM | Limpia caché (Ctrl+Shift+Delete) y recarga |
| `window.dataLayer` undefined | Recarga la página completamente |
| Botón GTM no aparece en desarrollo | Verifica que `NODE_ENV === 'development'` |
| Errores en consola sobre GTM | Abre un issue en GitHub |

---

## Documentación Completa

Para más detalles, consulta:

- **GTM_IMPLEMENTATION.md** - Detalles técnicos
- **GTM_ARCHITECTURE.md** - Flujos y diagramas
- **GTM_TESTING_GUIDE.md** - Cómo hacer testing
- **GTM_USAGE_EXAMPLES.md** - 7 ejemplos prácticos
- **GTM_SUMMARY.md** - Resumen ejecutivo

---

## Contribuir

Si quieres agregar nuevo rastreo:

1. Importa `useGTM` en tu componente
2. Dispara eventos con `trackEvent()`
3. Verifica en GTMDebugger que el evento se envía
4. Configura la etiqueta en Google Tag Manager

---

**¿Preguntas?** Revisa los archivos de documentación o consulta GTM_TESTING_GUIDE.md.
