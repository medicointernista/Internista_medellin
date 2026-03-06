# Guía de Testing para Google Tag Manager

## Verificación Rápida en el Navegador

### 1. Verificar DataLayer

Abre la consola del navegador (F12 → Console) y ejecuta:

```javascript
// Ver si dataLayer existe
window.dataLayer

// Debe retornar un array con eventos como:
// [
//   {event: "gtm.js", "gtm.start": 1704067200000},
//   {event: "page_view", page_path: "/", page_title: "..."}
// ]
```

### 2. Verificar GTM está cargado

```javascript
// Ver si Google Tag Manager está en la página
window.google_tag_manager

// Debe retornar un objeto con la configuración de GTM
```

### 3. Ver eventos en tiempo real

Ejecuta en la consola para monitorear nuevos eventos:

```javascript
// Esto mostrará en la consola cada evento que se empuje a dataLayer
const originalPush = window.dataLayer.push;
window.dataLayer.push = function(...args) {
  console.log('GTM Event:', args[0]);
  return originalPush.apply(this, args);
};
```

## Testing con GTM Preview

### Paso 1: Habilitar Preview en GTM

1. Ve a tu contenedor en Google Tag Manager (GTM-MTRKGD87)
2. Click en **Preview**
3. GTM te mostrará un código de vista previa

### Paso 2: Cargar el sitio en Preview

1. En la barra de Preview, pega tu URL: `http://localhost:3000`
2. Se abrirá una nueva ventana con tu sitio
3. En la ventana de Preview, podrás ver los eventos en tiempo real

### Paso 3: Verificar eventos específicos

- Recarga la página → Debe mostrar evento `page_view`
- Navega a `/servicios/consulta-medicina-interna` → Nuevo `page_view`
- Navega a una URL inexistente → Evento `page_view` con título 404
- Abre DevTools y verifica el script GTM en Network (gtm.js)

## Pruebas Específicas por Ruta

### Test 1: Página Principal
```
URL: http://localhost:3000
Evento esperado: page_view
page_path: /
page_title: "Medicina interna en Medellín..."
```

### Test 2: Servicios de Medicina Interna
```
URL: http://localhost:3000/servicios/consulta-medicina-interna
Evento esperado: page_view
page_path: /servicios/consulta-medicina-interna
page_title: Título de la página
```

### Test 3: Cardiología
```
URL: http://localhost:3000/cardiologia/electrocardiograma
Evento esperado: page_view
page_path: /cardiologia/electrocardiograma
page_title: Título de la página
```

### Test 4: Página 404
```
URL: http://localhost:3000/pagina-que-no-existe
Evento esperado: page_view
page_path: /pagina-que-no-existe
page_title: "404 - Página no encontrada..."
```

### Test 5: Navegación entre páginas
1. Carga página principal
2. Click en enlace de servicio
3. Verifica que se genera nuevo evento `page_view`
4. Repite con varias páginas

## Debug en Desarrollo

### Usar el GTMDebugger

Cuando estés en desarrollo (`npm run dev`), verás un botón "GTM" en la esquina inferior derecha.

1. **Abierto**: Muestra los últimos 10 eventos capturados
2. **Contador**: Indica cuántos eventos se han enviado
3. **Cada evento muestra:**
   - Nombre del evento (event)
   - Todos los parámetros asociados
   - Timestamp

### Ejemplo de lo que deberías ver:

```
GTM (5)

[DEBUGGER BUTTON]

Eventos capturados:
1. gtm.js (timestamp: 1704067200000)
2. page_view {page_path: "/", page_title: "..."}
3. page_view {page_path: "/servicios/...", page_title: "..."}
```

## Verificación en Google Analytics

Una vez que GTM esté confirmado, validar en Google Analytics:

1. Ve a Google Analytics para tu propiedad
2. Real-time → Overview
3. Navega por tu sitio
4. Deberías ver sesiones y usuarios activos

## Checklist de Validación

- [ ] `window.dataLayer` existe y es un array
- [ ] `window.google_tag_manager` está definido
- [ ] El script `gtm.js` se carga (ver en Network tab)
- [ ] Eventos `page_view` se generan al cambiar de página
- [ ] El evento `page_view` incluye `page_path` y `page_title`
- [ ] Página 404 genera evento `page_view` correcto
- [ ] GTMDebugger muestra eventos en desarrollo
- [ ] Google Analytics recibe datos en tiempo real
- [ ] No hay errores en la consola relacionados a GTM

## Troubleshooting

### Problema: dataLayer no inicializa
**Solución:** Verifica que `GTMProvider` se renderiza antes del script GTM en `layout.tsx`

### Problema: No ves eventos en GTM Preview
**Solución:**
- Asegúrate de estar usando `http://localhost:3000` (no HTTPS en local)
- Limpia caché del navegador (Ctrl+Shift+Delete)
- Recarga la página completamente (Ctrl+F5)

### Problema: page_view no se genera al cambiar de ruta
**Solución:** Verifica que `RouteTracker` está en el body del layout

### Problema: Script GTM no aparece en el código fuente
**Solución:**
- Verifica que la estrategia sea `afterInteractive`
- Abre DevTools → Network → busca por "gtm"
- Comprueba que el ID de contenedor sea `GTM-MTRKGD87`

## Monitoreo en Producción

Recomendaciones:

1. **Habilitar Google Analytics 4**
   - Configurar objetivos de conversión
   - Monitorear eventos de página
   - Rastrear interacciones de usuario

2. **Configurar alertas**
   - Si las sesiones caen bruscamente
   - Si los eventos dejan de llegar

3. **Revisar periódicamente**
   - Semanal: Volumen de eventos
   - Mensual: Patrones de comportamiento
   - Trimestral: ROI y conversiones

---

**Nota:** Si en algún momento tienes dudas, consulta el archivo `GTM_IMPLEMENTATION.md` para información detallada sobre la arquitectura.
