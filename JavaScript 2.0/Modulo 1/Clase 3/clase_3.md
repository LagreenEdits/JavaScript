# PROMPT PARA IA — Generar material de estudio detallado

## Contexto
Soy estudiante del curso **JavaScript MEAN Mastery**, Módulo M1 Unidad 1: *JavaScript Junior Developer: Web Foundations & Coding Skills*.

Necesito material de estudio **exhaustivo** de una clase de **3 horas de duración** que NO pude ver completa. Tu tarea es generar el contenido como si hubieras impartido tú mismo esa clase de 3 horas, cubriendo TODO lo que normalmente se enseñaría, para que al leerlo yo tenga la confianza de que "vi" la clase completa, no un resumen superficial.

## Datos de la clase
- **Curso:** JavaScript MEAN Mastery
- **Módulo:** M1 Unidad 1
- **Clase:** Clase 3 — Estructuras de control y bucles en JavaScript
- **Duración real:** 3 horas
- **Nivel:** Junior / principiante absoluto
- **Prerrequisito lógico:** Clase 2 (variables, tipos, operadores)

## Temas que probablemente se cubrieron (usa esto como mínimo, amplía si falta algo lógico)
- Condicional `if`, `else if`, `else`
- Operador ternario (`condicion ? valorSiTrue : valorSiFalse`)
- `switch` / `case` / `default` / `break` y el problema del fall-through
- Bucle `for` clásico (inicialización, condición, incremento)
- Bucle `while`
- Bucle `do...while` y su diferencia clave con `while`
- `for...of` (iterar arrays/iterables)
- `for...in` (iterar propiedades de objetos) y por qué no se recomienda para arrays
- Palabras clave `break` y `continue` dentro de bucles
- Bucles anidados (bucle dentro de bucle)
- Bucles infinitos: causas comunes y cómo evitarlos
- Buenas prácticas: cuándo usar cada tipo de bucle según el caso
- Operadores lógicos aplicados a condiciones compuestas (`&&`, `||`, `!`) en contexto de control de flujo
- Short-circuit evaluation (evaluación de cortocircuito) en condicionales

## Formato de salida requerido (usa EXACTAMENTE esta estructura)

Para el tema completo de la clase, entrega:

1. **Índice de subtemas** cubiertos en la clase de 3h (lista completa y ordenada)
2. **Explicación detallada por subtema** (no solo definición — explica el "por qué" y "cómo funciona")
3. **Conceptos clave** (glosario con término + definición corta)
4. **¿Para qué sirve cada concepto?** en la práctica real
5. **Ejemplos abstractos** usando notación `[nombre_1]`, `[valor_1]`, indicando cuáles son:
   - Reutilizables/renombrables por el estudiante
   - Fijos/reservados del lenguaje (palabras clave, símbolos de cierre `{ }`, sintaxis obligatoria)
6. **Excepciones y casos especiales** (fall-through en switch, diferencia while vs do-while, bucles infinitos, cuándo `for...in` da resultados inesperados)
7. **Metáfora o ejemplo visual** para cada concepto difícil de imaginar
8. **Errores típicos** que comete un junior en este tema (olvidar `break` en switch, condición de bucle mal planteada, confundir `for...in` con `for...of`)
9. **Preguntas de autoevaluación** (mínimo 8) tipo "¿Puedo explicar...?" para que yo verifique si realmente entendí
10. **Checklist final** de dominio del tema (formato casillas ✅)

## Restricciones
- No inventes sintaxis que no exista en JavaScript estándar (ES6+)
- Si algo depende de la plataforma/curso específico, acláralo como "esto puede variar según tu plataforma"
- Prioriza profundidad sobre brevedad — el objetivo es que este documento reemplace haber visto la clase de 3 horas
- Todos los ejemplos de código deben ser sintácticamente correctos y ejecutables
