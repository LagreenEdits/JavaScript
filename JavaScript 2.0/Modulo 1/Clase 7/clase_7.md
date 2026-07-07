# PROMPT PARA IA — Generar material de estudio detallado

## Contexto
Soy estudiante del curso **JavaScript MEAN Mastery**, Módulo M1 Unidad 1: *JavaScript Junior Developer: Web Foundations & Coding Skills*.

Necesito material de estudio **exhaustivo** de una clase de **3 horas de duración** que NO pude ver completa. Tu tarea es generar el contenido como si hubieras impartido tú mismo esa clase de 3 horas, cubriendo TODO lo que normalmente se enseñaría, para que al leerlo yo tenga la confianza de que "vi" la clase completa, no un resumen superficial.

## Datos de la clase
- **Curso:** JavaScript MEAN Mastery
- **Módulo:** M1 Unidad 1
- **Clase:** Clase 7 — Fundamentos de TypeScript: Tipado y clases
- **Duración real:** 3 horas
- **Nivel:** Junior / principiante absoluto
- **Prerrequisito lógico:** Clase 2 (JS fundamentos)

## Temas que probablemente se cubrieron (usa esto como mínimo, amplía si falta algo lógico)
- Qué es TypeScript y por qué existe (superset de JS, tipado estático opcional)
- Instalación/compilación básica: `tsc`, archivo `tsconfig.json` (mención introductoria)
- Tipos básicos: `string`, `number`, `boolean`, `any`, `unknown`, `void`, `never`
- Arrays tipados: `number[]`, `Array<string>`
- Tuplas
- `enum`
- Tipado de funciones: parámetros tipados, tipo de retorno, parámetros opcionales (`?`)
- Interfaces (`interface`) para definir la forma de un objeto
- Type aliases (`type`) y diferencia con `interface`
- Clases: `class`, `constructor`, propiedades, métodos
- Modificadores de acceso: `public`, `private`, `protected`
- Herencia de clases: `extends`, `super()`
- Propiedades readonly
- Genéricos (introducción básica, `<T>`) si el nivel de la clase lo alcanza
- Diferencia entre tipado estructural de TS vs tipado nominal de otros lenguajes (mención conceptual)
- Compilación de TS a JS (que el navegador nunca ejecuta `.ts` directamente)

## Formato de salida requerido (usa EXACTAMENTE esta estructura)

Para el tema completo de la clase, entrega:

1. **Índice de subtemas** cubiertos en la clase de 3h (lista completa y ordenada)
2. **Explicación detallada por subtema** (no solo definición — explica el "por qué" y "cómo funciona")
3. **Conceptos clave** (glosario con término + definición corta)
4. **¿Para qué sirve cada concepto?** en la práctica real
5. **Ejemplos abstractos** usando notación `[Clase_1]`, `[propiedad_1]`, `[tipo_1]`, indicando cuáles son:
   - Reutilizables/renombrables por el estudiante
   - Fijos del lenguaje (`class`, `constructor`, `extends`, `private` — no se inventan)
6. **Excepciones y casos especiales** (diferencia `private` vs `protected`, cuándo usar `interface` vs `type`, comportamiento de `any` que "desactiva" el tipado)
7. **Metáfora o ejemplo visual** para cada concepto difícil de imaginar
8. **Errores típicos** que comete un junior en este tema (abusar de `any`, confundir interface con type, olvidar tipar el retorno de una función, no usar `super()` al heredar)
9. **Preguntas de autoevaluación** (mínimo 8) tipo "¿Puedo explicar...?" para que yo verifique si realmente entendí
10. **Checklist final** de dominio del tema (formato casillas ✅)

## Restricciones
- No inventes sintaxis que no exista en TypeScript estándar actual
- Si algo depende de la plataforma/curso específico, acláralo como "esto puede variar según tu plataforma"
- Prioriza profundidad sobre brevedad — el objetivo es que este documento reemplace haber visto la clase de 3 horas
- Todos los ejemplos de código deben ser sintácticamente correctos y compilables
