# Google Tag Manager (GTM) - Implementación y Documentación

## Estado: Configuración Completa y Funcional

### 1. Verificación de Inyección

✅ **Script GTM en el Head del Layout Raíz**
- Ubicación: `src/app/layout.tsx` (línea 36)
- Estrategia: `afterInteractive` (se carga después de la interacción del usuario para no bloquear el renderizado)
- ID de contenedor: `GTM-MTRKGD87`
- El script se ejecuta automáticamente en todas las páginas

✅ **Fallback NoScript**
- Ubicación: `src/app/layout.tsx` (línea 45-48)
- Proporciona rastreo en navegadores sin JavaScript

### 2. Consistencia en Rutas

✅ **Herencia Global**
- Todas las páginas heredan el script GTM del layout raíz de Next.js
- Incluye:
  - Página de inicio (`/`)
  - Servicios dinámicos (`/servicios/*`, `/cardiologia/*`)
  - Página 404 (`/not-found`)
  - Páginas adicionales (`/contacto`, `/sobre-mi`)

✅ **Rastreo Automático de Rutas**
- Componente: `RouteTracker` (`src/components/providers/RouteTracker.tsx`)
- Se ejecuta en el body y detecta automáticamente cambios de ruta usando `usePathname()`
- Empuja eventos `page_view` a dataLayer en cada navegación
- Funciona en Next.js App Router sin bloqueos de enrutamiento

### 3. Capa de Datos (DataLayer)

✅ **Inicialización Segura**
- Componente: `GTMProvider` (`src/components/providers/GTMProvider.tsx`)
- Inicializa `window.dataLayer` como array antes de que GTM se cargue
- Evita errores de referencia nula
- Incluye tipos TypeScript para `Window.dataLayer`

✅ **Orden de Ejecución**
```
1. GTMProvider se renderiza (inicializa dataLayer)
2. RouteTracker se renderiza (disponible para rastreo)
3. Script de GTM se carga (afterInteractive)
4. Script de noscript como fallback
```

## Características de la Implementación

### Hooks Disponibles

#### `useGTM()`
```typescript
const { pushEvent, trackPageView, trackEvent } = useGTM();

// Rastrear vista de página manual
trackPageView('/servicios/consulta', 'Consulta de Medicina Interna');

// Rastrear evento personalizado
trackEvent('button_click', {
  button_id: 'contact-cta',
  section: 'hero'
});

// Empujar dato personalizado a dataLayer
pushEvent({
  event: 'custom_event',
  user_action: 'consulta_iniciada'
});
```

#### `useGTMPageTracking(pathname, title?)`
Se usa automáticamente en RouteTracker. Puede usarse en componentes específicos para rastreo adicional.

### Componentes Provider

#### GTMProvider
- Inicializa window.dataLayer
- Se ejecuta en el lado del cliente
- Se debe renderizar al inicio del body

#### RouteTracker
- Detecta cambios de ruta automáticamente
- Envía eventos page_view a GTM
- Funciona con el App Router de Next.js

## Pruebas y Validación

### Verificar que GTM funciona:

1. **En el navegador (Chrome/Firefox/Safari):**
   - Abre Developer Tools (F12)
   - Ve a Console
   - Ejecuta: `window.dataLayer` (debe ser un array)
   - Ejecuta: `window.google_tag_manager` (debe existir)

2. **Validar con Google Tag Manager Preview:**
   - Ve a tu contenedor en GTM
   - Click en "Preview"
   - Abre tu sitio en otra pestaña
   - La vista previa mostrará eventos en tiempo real

3. **Verificar página 404:**
   - Navega a una URL que no existe: `/pagina-inexistente`
   - Confirma que se dispara un evento page_view
   - El título debe ser "404 - Página no encontrada..."

### Eventos que se están rastreando:

```
event: "page_view"
- page_path: URL de la página
- page_title: Título de la página
- Timestamp automático de GTM
```

## Rutas Cubiertas

- ✅ Página principal (`/`)
- ✅ Servicios (`/servicios/*`)
- ✅ Cardiología (`/cardiologia/*`)
- ✅ Contacto (`/contacto`)
- ✅ Sobre mí (`/sobre-mi`)
- ✅ Página 404 (`/not-found`)
- ✅ Sitemap XML (`/sitemap.xml`)

## Consideraciones de Rendimiento

- Script GTM se carga con estrategia `afterInteractive`
- No bloquea el renderizado inicial (FCP/LCP no afectados)
- dataLayer se inicializa antes de que GTM se cargue
- Los cambios de ruta se sincronizan automáticamente

## Próximos Pasos (Opcional)

Para mejorar aún más:

1. **Agregar conversiones específicas:**
   ```typescript
   trackEvent('form_submitted', {
     form_id: 'contact_form',
     service_type: 'medicina-interna'
   });
   ```

2. **Rastrear interacciones de usuario:**
   ```typescript
   trackEvent('cta_clicked', {
     cta_text: 'Agendar cita',
     section: 'hero'
   });
   ```

3. **Configurar objetivos en Google Analytics:**
   - Crear objetivos basados en page_view
   - Configurar eventos de conversión personalizados

---

**Última revisión:** 2026-03-02
**Estado:** Completamente funcional y listo para producción
