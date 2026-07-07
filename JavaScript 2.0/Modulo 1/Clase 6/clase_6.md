# PROMPT PARA IA — Generar material de estudio detallado

## Contexto
Soy estudiante del curso **JavaScript MEAN Mastery**, Módulo M1 Unidad 1: *JavaScript Junior Developer: Web Foundations & Coding Skills*.

Necesito material de estudio **exhaustivo** de una clase de **3 horas de duración** que NO pude ver completa. Tu tarea es generar el contenido como si hubieras impartido tú mismo esa clase de 3 horas, cubriendo TODO lo que normalmente se enseñaría, para que al leerlo yo tenga la confianza de que "vi" la clase completa, no un resumen superficial.

## Datos de la clase
- **Curso:** JavaScript MEAN Mastery
- **Módulo:** M1 Unidad 1
- **Clase:** Clase 6 — CSS avanzado: Flexbox y Grid
- **Duración real:** 3 horas
- **Nivel:** Junior / principiante absoluto
- **Prerrequisito lógico:** Clase 4 (HTML/CSS básico)

## Temas que probablemente se cubrieron (usa esto como mínimo, amplía si falta algo lógico)
- Limitaciones de layouts antiguos (`float`, `inline-block`) que motivan Flexbox/Grid
- Flexbox: `display: flex`, eje principal vs eje cruzado
- Propiedades del contenedor flex: `flex-direction`, `justify-content`, `align-items`, `align-content`, `flex-wrap`
- Propiedades de los ítems flex: `flex-grow`, `flex-shrink`, `flex-basis`, `order`, `align-self`
- Atajo `flex` (flex-grow/shrink/basis combinados)
- Grid: `display: grid`, `grid-template-columns`, `grid-template-rows`
- Unidad `fr` (fracción) en Grid
- `gap`, `row-gap`, `column-gap`
- Posicionamiento de ítems en Grid: `grid-column`, `grid-row`, `grid-area`
- `grid-template-areas` (layout nombrado)
- Diferencia conceptual clave: Flexbox unidimensional vs Grid bidimensional
- Combinación de Flexbox + Grid en un mismo diseño (cuándo usar cada uno)
- Responsive design básico con estas herramientas (mención de mobile-first o media queries si aplica)

## Formato de salida requerido (usa EXACTAMENTE esta estructura)

Para el tema completo de la clase, entrega:

1. **Índice de subtemas** cubiertos en la clase de 3h (lista completa y ordenada)
2. **Explicación detallada por subtema** (no solo definición — explica el "por qué" y "cómo funciona")
3. **Conceptos clave** (glosario con término + definición corta)
4. **¿Para qué sirve cada concepto?** en la práctica real
5. **Ejemplos abstractos** usando notación `[nombre_1]`, `[valor_1]`, indicando cuáles son:
   - Reutilizables/renombrables por el estudiante (nombres de clases/contenedores)
   - Fijos del lenguaje CSS (propiedades como `justify-content`, `grid-template-columns` — no se inventan)
6. **Excepciones y casos especiales** (cómo cambia el significado de `justify-content` según `flex-direction`, cuándo Grid es mejor que Flexbox y viceversa, comportamiento de `flex-shrink` en contenido que no cabe)
7. **Metáfora o ejemplo visual** para cada concepto difícil de imaginar
8. **Errores típicos** que comete un junior en este tema (usar Flexbox para layouts 2D complejos, confundir eje principal/cruzado, olvidar `gap` y usar márgenes manuales)
9. **Preguntas de autoevaluación** (mínimo 8) tipo "¿Puedo explicar...?" para que yo verifique si realmente entendí
10. **Checklist final** de dominio del tema (formato casillas ✅)

## Restricciones
- No inventes propiedades CSS que no existan en el estándar (CSS3 Flexbox/Grid spec)
- Si algo depende de la plataforma/curso específico, acláralo como "esto puede variar según tu plataforma"
- Prioriza profundidad sobre brevedad — el objetivo es que este documento reemplace haber visto la clase de 3 horas
- Todos los ejemplos de código deben ser sintácticamente correctos
