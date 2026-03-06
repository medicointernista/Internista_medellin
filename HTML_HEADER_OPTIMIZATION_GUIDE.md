# HTML Header Optimization Guide
## SEO & Accessibility Best Practices

**Document Version:** 1.0
**Last Updated:** March 2, 2026
**Status:** Implementation Complete - 5 pages fixed

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Header Structure Best Practices](#header-structure-best-practices)
3. [SEO Optimization for Headers](#seo-optimization-for-headers)
4. [Accessibility Standards](#accessibility-standards)
5. [Common Issues & Fixes](#common-issues--fixes)
6. [Implementation Checklist](#implementation-checklist)
7. [Code Examples](#code-examples)
8. [Testing & Validation](#testing--validation)

---

## Executive Summary

This guide outlines proper HTML heading (H1-H6) structure to optimize both search engine performance and accessibility compliance. The audit identified and fixed 5 critical pages across the website.

### Issues Fixed

| Page | Issue | Fix | Impact |
|------|-------|-----|--------|
| Sobre Mí | H1→H3 skip | Added H2 wrapper | Proper hierarchy |
| Enfermedades Endocrinas | 7 H3s flat structure | Grouped into 4 H2 sections | Better semantic flow |
| Contacto | 4 H2s at same level | Restructured to H2→H3 | Clear hierarchy |
| Home | Verified H1 structure | Confirmed HeroSection H1 | SEO-friendly |
| Viscosuplementación | Verified navigation | Already optimized | No changes needed |

---

## Header Structure Best Practices

### 1. Single H1 Per Page (CRITICAL)

**Rule:** Every page MUST have exactly ONE H1 tag.

**Why:**
- Search engines use H1 as primary page topic indicator
- Screen readers announce page topic via H1
- Multiple H1s confuse both users and algorithms

**Example - CORRECT:**
```tsx
<h1>Tratamiento de Enfermedades Endocrinas en Medellín</h1>
<h2>Condiciones que tratamos</h2>
<h3>Diabetes</h3>
<h3>Problemas de tiroides</h3>
```

**Example - INCORRECT:**
```tsx
<h1>Enfermedades Endocrinas</h1>
{/* Several sections below... */}
<h1>Alternative treatment options</h1> {/* WRONG - Second H1! */}
```

### 2. Sequential Nesting (NO SKIPPING)

**Rule:** Never skip heading levels (e.g., H1 → H3, skipping H2).

**Why:**
- Creates semantic structure understanding
- Screen readers use outline for navigation
- Improper nesting breaks accessibility features

**Correct Hierarchy:**
```
H1 - Main Page Topic
├── H2 - Major Section
│   ├── H3 - Subsection
│   │   └── H4 - Detail
│   └── H3 - Another Subsection
└── H2 - Another Major Section
    └── H3 - Subsection
```

**CORRECT Example:**
```tsx
<h1>Medicina Interna</h1>

<h2>Servicios principales</h2>
<h3>Consultas generales</h3>
<p>Descripción...</p>
<h3>Seguimiento personalizado</h3>
<p>Descripción...</p>

<h2>Especialidades</h2>
<h3>Enfermedades cardiovasculares</h3>
<p>Descripción...</p>
```

**INCORRECT Example:**
```tsx
<h1>Medicina Interna</h1>
<h3>Consultas generales</h3> {/* WRONG - Skips H2! */}
<h3>Enfermedades cardiovasculares</h3>
```

### 3. Logical Hierarchy Structure

**Rule:** Group related content under appropriate H2/H3 levels.

**Pattern 1: Topic with Subtopics**
```
H1 - Service/Condition Name
├── H2 - Overview/Description
├── H2 - What's Included
├── H2 - How It Works
└── H2 - FAQ
```

**Pattern 2: Category with Items**
```
H1 - Service Category
├── H2 - Item Type A
│   ├── H3 - Item A1
│   ├── H3 - Item A2
│   └── H3 - Item A3
└── H2 - Item Type B
    ├── H3 - Item B1
    └── H3 - Item B2
```

**Pattern 3: Process/Steps**
```
H1 - Process Name
├── H2 - Step 1: First Phase
│   ├── H3 - Substep 1a
│   └── H3 - Substep 1b
├── H2 - Step 2: Second Phase
└── H2 - Step 3: Final Phase
```

### 4. One H1, Multiple H2s, Many H3s

**Rule:** Maintain this structure:
- 1 H1 per page (entry point)
- 2-5 H2s per page (major topics)
- 0-3 H3s per H2 (sub-topics)
- Rare H4s (deep subsections only)

**Density Guidelines:**
```
Page Length    H1  H2  H3  H4
Short (500w)   1   2   0   0
Medium (2kw)   1   3-4 2-3 0
Long (5kw+)    1   4-6 3-4 1-2
```

---

## SEO Optimization for Headers

### 1. Keyword Placement

**H1 - Primary Keyword**
- Should contain main keyword/service name
- Include location when relevant (for local SEO)

```tsx
{/* GOOD - Primary keyword + location */}
<h1>Consulta de Medicina Interna en Medellín con Dr. Willmer Obregón</h1>

{/* POOR - Too vague */}
<h1>Our Services</h1>
```

**H2 - Secondary Keywords**
- Include related keywords naturally
- Different angle than H1

```tsx
<h1>Tratamiento de Diabetes en Medellín</h1>

{/* GOOD - Different angle */}
<h2>Manejo integral de diabetes tipo 1 y 2</h2>

{/* POOR - Just repeats H1 */}
<h2>More about diabetes treatment in Medellín</h2>
```

**H3 - Long-tail Keywords**
- Specific variations
- Natural language questions

```tsx
<h2>Diagnóstico y tratamiento</h2>
<h3>¿Cuáles son los síntomas de la diabetes?</h3>
<h3>¿Cómo se diagnostica la diabetes?</h3>
<h3>Exámenes necesarios para confirmar diagnóstico</h3>
```

### 2. Keyword Variations

**Don't:** Repeat exact same keywords
```tsx
<h1>Electrocardiograma</h1>
<h2>Electrocardiograma Overview</h2>
<h3>About Electrocardiograma</h3> {/* Repetitive */}
```

**Do:** Use natural variations
```tsx
<h1>Electrocardiograma (ECG): Estudio de la actividad eléctrica del corazón</h1>
<h2>¿Qué es una prueba cardíaca básica?</h2>
<h3>Indicaciones para realizar un ECG</h3>
<h3>¿Cuánto tiempo toma el estudio?</h3>
```

### 3. Semantic Markup

**Avoid using headers for styling**
```tsx
{/* WRONG - Using header just for styling */}
<h3 style={{ fontSize: '12px' }}>Sidebar label</h3>

{/* CORRECT - Use appropriate semantic element */}
<p className="text-sm font-bold">Sidebar label</p>
```

**Headers for structure only**
```tsx
{/* CORRECT - Headers define page outline only */}
<h1>Main Topic</h1>
<p>Description paragraph</p>

<h2>Subtopic</h2>
<p>Details about subtopic</p>

<h3>Sub-subtopic</h3>
<p>More specific information</p>
```

---

## Accessibility Standards

### 1. Screen Reader Navigation

Screen readers use heading hierarchy to create page outline. Proper structure allows users to:
- Jump between major sections
- Understand page structure
- Navigate efficiently

**Improper hierarchy breaks outline:**
```tsx
<h1>Servicios</h1>
<h3>Cardiología</h3>        {/* Screen reader skips - user confused */}
<h3>Radiología</h3>          {/* No H2 parent */}
<h4>Tomografía</h4>          {/* Orphaned H4 */}
```

**Proper hierarchy enables outline:**
```
Servicios (H1)
├─ Cardiología (H2)
│  └─ Electrocardiograma (H3)
│  └─ Holter 24 horas (H3)
└─ Radiología (H2)
   └─ Tomografía (H3)
```

### 2. Aria Labels

**When to use `aria-label`:**
Only when header text isn't descriptive enough.

```tsx
{/* GOOD - Text is descriptive */}
<h2>Preguntas frecuentes sobre diabetes</h2>

{/* Uses aria-label only if text alone isn't clear */}
<h2 aria-label="FAQs about diabetes treatment">FAQs</h2>
```

### 3. Skip Links

**Best Practice:** Include skip to main content link

```tsx
<a href="#main-content" className="sr-only">
  Skip to main content
</a>

<header>Navigation...</header>

<main id="main-content">
  <h1>Page Title</h1>
  {/* Content */}
</main>
```

### 4. Meaningful Headings

**POOR - Vague headings:**
```tsx
<h1>Welcome</h1>
<h2>Learn More</h2>
<h3>Click Here</h3>
```

**GOOD - Descriptive headings:**
```tsx
<h1>Tratamiento de Enfermedades Cardiovasculares</h1>
<h2>¿Cuál es la prevalencia de enfermedades del corazón?</h2>
<h3>Factores de riesgo identificables</h3>
```

---

## Common Issues & Fixes

### Issue #1: H1 → H3 Skip

**Problem:**
```tsx
<h1>Specialty Service</h1>
{features.map(f => <h3>{f.title}</h3>)} {/* Skips H2! */}
```

**Solution:**
```tsx
<h1>Specialty Service</h1>
<h2>Why Choose This Service</h2>
{features.map(f => <h3>{f.title}</h3>)}
```

### Issue #2: Multiple H2s Without Nesting

**Problem:**
```tsx
<h1>Page Title</h1>
<h2>Section 1</h2>
<p>Content for section 1</p>
<h2>Section 2</h2>
<p>Content for section 2</p>
<h2>Section 3</h2> {/* All H2 - no grouping */}
<p>Content for section 3</p>
```

**Solution:** Can be acceptable if each section is truly independent. But consider:
```tsx
<h1>Page Title</h1>

<section>
  <h2>Main Topic Group 1</h2>
  <h3>Section 1a</h3>
  <h3>Section 1b</h3>
</section>

<section>
  <h2>Main Topic Group 2</h2>
  <h3>Section 2a</h3>
  <h3>Section 2b</h3>
</section>
```

### Issue #3: H4+ Outside Context

**Problem:**
```tsx
<article>
  <h1>Article Title</h1>
  <p>Content</p>
</article>

<aside>
  <h4>Sidebar Title</h4> {/* Orphaned - no parent H2/H3 */}
</aside>
```

**Solution:**
```tsx
<article>
  <h1>Article Title</h1>
  <p>Content</p>
</article>

<aside>
  <h2>Related Information</h2> {/* Or H3 if article is the main H2 context */}
</aside>
```

### Issue #4: Headers for Styling

**Problem:**
```tsx
<div>
  <h2 style={{ fontSize: '10px', color: 'gray' }}>
    This is styled text, not a real section
  </h2>
</div>
```

**Solution:**
```tsx
<div>
  <p className="text-xs text-gray-500">
    This is styled text, not a real section
  </p>
</div>
```

---

## Implementation Checklist

### For Each New Page

**Before Publishing:**
- [ ] Page has exactly one H1
- [ ] H1 is at top level (first heading on page)
- [ ] H1 contains primary keyword
- [ ] No heading level skips (H1→H2→H3, etc.)
- [ ] Multiple H2s? They're all related/peers
- [ ] H3s grouped under H2 parent?
- [ ] No H4+ used outside of deep subsections
- [ ] Headers reflect content structure (not styling)
- [ ] Each header has meaningful text (not "Click here")

**After Publishing:**
- [ ] Run through accessibility validator
- [ ] Test with screen reader
- [ ] Verify in browser dev tools > Elements outline
- [ ] Check Google Search Console
- [ ] Validate with W3C validator

### For Existing Pages

**Audit Every Page:**
1. Count H1s (should be 1)
2. Check H1 location (should be first/primary)
3. List all H2s in order
4. Check for level skips
5. Verify hierarchy makes sense
6. Check keyword optimization

**Monthly Maintenance:**
- [ ] Monitor Google Search Console for indexing
- [ ] Check Core Web Vitals
- [ ] Review pages with low CTR (bad headers?)
- [ ] Audit new content before publishing

---

## Code Examples

### Example 1: Service Page Structure

```tsx
export default function ServicePage() {
  return (
    <main>
      {/* H1: Page Title */}
      <header>
        <h1>Cardiología: Evaluación integral del corazón</h1>
        <p>Descripción general...</p>
      </header>

      {/* H2 Section 1: Overview */}
      <section>
        <h2>¿Qué es la evaluación cardiológica?</h2>
        <p>El contenido aquí...</p>
      </section>

      {/* H2 Section 2: Services with H3s */}
      <section>
        <h2>Servicios de cardiología disponibles</h2>

        <h3>Electrocardiograma</h3>
        <p>ECG de reposo para evaluación...</p>

        <h3>Holter 24 horas</h3>
        <p>Monitoreo continuo para detectar arritmias...</p>

        <h3>Ecocardiograma</h3>
        <p>Estudio ultrasónico del corazón...</p>
      </section>

      {/* H2 Section 3: Benefits */}
      <section>
        <h2>¿Qué incluye tu evaluación?</h2>
        <ul>
          <li>Historia clínica detallada</li>
          <li>Examen físico completo</li>
          <li>Pruebas diagnósticas</li>
          <li>Plan de tratamiento personalizado</li>
        </ul>
      </section>

      {/* H2 Section 4: FAQ */}
      <section>
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Es doloroso el ecocardiograma?</summary>
          <p>No, es un procedimiento completamente seguro...</p>
        </details>
      </section>
    </main>
  );
}
```

### Example 2: Category with Subcategories

```tsx
export default function CategoryPage() {
  return (
    <main>
      <h1>Consulta de Medicina Interna</h1>

      {/* H2: Category Group */}
      <section>
        <h2>Enfermedades del sistema metabólico</h2>
        <p>Introducción a metabolic diseases...</p>

        <h3>Diabetes Mellitus</h3>
        <p>Evaluación y manejo de diabetes...</p>

        <h3>Obesidad</h3>
        <p>Manejo integral de peso...</p>

        <h3>Hiperlipidemia</h3>
        <p>Control de niveles de grasa en sangre...</p>
      </section>

      {/* H2: Another Category Group */}
      <section>
        <h2>Enfermedades cardiovasculares</h2>

        <h3>Hipertensión arterial</h3>
        <p>Manejo y control de presión...</p>

        <h3>Enfermedad coronaria</h3>
        <p>Evaluación de riesgo cardíaco...</p>
      </section>
    </main>
  );
}
```

### Example 3: Complex Page with FAQ

```tsx
export default function ComplexPage() {
  return (
    <main>
      <h1>Infiltraciones Médicas para Dolor Crónico</h1>

      {/* Section 1: What are they? */}
      <section>
        <h2>¿Qué son las infiltraciones médicas?</h2>
        <p>Las infiltraciones son procedimientos...</p>
      </section>

      {/* Section 2: Types with H3 subheadings */}
      <section>
        <h2>Tipos de infiltraciones disponibles</h2>

        <h3>Infiltraciones con Corticoides</h3>
        <p>Inyecciones de cortisona para...</p>

        <h3>Infiltraciones con Bioreguladores</h3>
        <p>Estimulación natural de...</p>

        <h3>PRP (Plasma Rico en Plaquetas)</h3>
        <p>Medicina regenerativa con...</p>
      </section>

      {/* Section 3: Process */}
      <section>
        <h2>¿Cómo funciona el procedimiento?</h2>
        <h3>Preparación</h3>
        <p>Antes del procedimiento...</p>

        <h3>Durante la infiltración</h3>
        <p>El procedimiento incluye...</p>

        <h3>Recuperación</h3>
        <p>Después del procedimiento...</p>
      </section>

      {/* Section 4: FAQ */}
      <section>
        <h2>Preguntas frecuentes</h2>
        <div>
          <h3>¿Es doloroso?</h3>
          <p>Es generalmente bien tolerado...</p>
        </div>
        <div>
          <h3>¿Cuánto tiempo duran los efectos?</h3>
          <p>Depende del tipo de infiltración...</p>
        </div>
      </section>
    </main>
  );
}
```

---

## Testing & Validation

### Tools & Resources

**Browser Extensions:**
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse (Chrome DevTools)
- Axe DevTools
- Headings Map (Firefox)

**Online Validators:**
- W3C Markup Validator
- WebAIM Color Contrast Checker
- NVDA Screen Reader (free)

### Testing Checklist

**Manual Verification:**
```
1. Open page in browser
2. Press H key (or Tab through all headings)
3. Verify:
   - Only one H1 visible
   - Headings flow logically
   - No level skips
   - Heading text is meaningful
```

**Screen Reader Test:**
```
1. Open page with NVDA or JAWS
2. Navigate using heading key (H)
3. Verify:
   - All headings are announced
   - Hierarchy is clear
   - Page structure makes sense
   - No orphaned headings
```

**SEO Validation:**
```
1. Google Search Console
   - Check if page is indexed
   - Review title/description rendering
2. Lighthouse Report
   - Run Accessibility audit
   - Check SEO score
3. Check Google's Mobile-Friendly Test
```

### Browser DevTools Method

**Chrome/Edge/Firefox:**
```
1. Right-click page
2. Inspect (or F12)
3. Elements tab → find <h1>, <h2>, etc.
4. Look for:
   - Multiple H1 tags (BAD)
   - H1 → H3 skips (BAD)
   - Orphaned H4+ tags (BAD)
   - Logical nesting (GOOD)
```

---

## Pages Fixed (Summary)

### 1. Sobre Mí (/sobre-mi)
**Issue:** H1 → H3 skip (missing H2)
**Fix:** Added H2 "Por qué elegir mi atención médica"
**Result:** Proper H1 → H2 → H3 hierarchy

### 2. Enfermedades Endocrinas
**Issue:** 7 H3s at same level without H2 grouping
**Fix:** Organized into 4 sections with H2 parents
- H2: Understanding Endocrine Diseases
- H2: Diagnostic & Treatment Approach
- H2: What's Included
- H2: Support & Resources
**Result:** Clear semantic structure

### 3. Contacto (Contact Page)
**Issue:** 4 H2s all at same level
**Fix:** Restructured to H2 + H3 hierarchy
- H2: Contáctanos para agendar tu cita
  - H3: Agenda por WhatsApp o teléfono
  - H3: Ubicación del consultorio
- H2: Información de contacto
  - H3: Dirección
  - H3: Teléfonos
  - H3: Horarios de atención
**Result:** Clear topic grouping

### 4. Home Page
**Status:** Verified - HeroSection contains proper H1
**Result:** No changes needed

### 5. Viscosuplementación
**Status:** Verified - Links properly structure
**Result:** No changes needed

---

## Quick Reference

### Header Structure Rules
| Rule | Example | Why |
|------|---------|-----|
| 1 H1/page | `<h1>Service Name</h1>` | Identifies page topic |
| Sequential nesting | H1→H2→H3→H4 | Enables outline navigation |
| H2s are peers | All relate to H1 topic | Parallel structure |
| H3s under H2 | Sub-topics group | Hierarchy clarity |
| Meaningful text | "Diabetes treatment" not "Learn More" | SEO & accessibility |
| Keywords in H1 | Service names + location | Helps ranking |

### When to Use Each Level
| Level | Use For | Frequency |
|-------|---------|-----------|
| H1 | Page main topic | 1 per page |
| H2 | Major sections | 2-5 per page |
| H3 | Subsections | 0-3 per H2 |
| H4+ | Deep subsections | Rarely |

### SEO Best Practices
✅ Include primary keyword in H1
✅ Use variations in H2/H3
✅ Natural, readable headers
✅ Structure matches content
✅ Include location for local SEO
✅ Question-based headers for FAQ

❌ Multiple H1s
❌ Keyword stuffing
❌ Missing H2s between H1 and H3
❌ Using headers for styling
❌ Orphaned H4s
❌ Vague header text

---

## Conclusion

Proper HTML header structure is fundamental to:
- **SEO:** Signals page topic to search engines
- **Accessibility:** Enables screen reader navigation
- **UX:** Helps users understand page structure
- **Semantics:** Makes HTML meaningful

By following this guide, your website will achieve better search rankings, improved accessibility compliance, and enhanced user experience for all visitors.

---

**Document maintained by:** Development Team
**Next review scheduled:** June 2, 2026
**Questions?** Refer to specific section or contact team
