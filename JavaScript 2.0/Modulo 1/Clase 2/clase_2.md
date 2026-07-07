# PROMPT PARA IA — Generar material de estudio detallado

## Contexto
Soy estudiante del curso **JavaScript MEAN Mastery**, Módulo M1 Unidad 1: *JavaScript Junior Developer: Web Foundations & Coding Skills*.

Necesito material de estudio **exhaustivo** de una clase de **3 horas de duración** que NO pude ver completa. Tu tarea es generar el contenido como si hubieras impartido tú mismo esa clase de 3 horas, cubriendo TODO lo que normalmente se enseñaría, para que al leerlo yo tenga la confianza de que "vi" la clase completa, no un resumen superficial.

## Datos de la clase
- **Curso:** JavaScript MEAN Mastery
- **Módulo:** M1 Unidad 1
- **Clase:** Clase 2 — Fundamentos de JavaScript: Variables, tipos de datos, operadores y funciones básicas
- **Duración real:** 3 horas
- **Nivel:** Junior / principiante absoluto

## Temas que probablemente se cubrieron (usa esto como mínimo, amplía si falta algo lógico)
- Declaración de variables: `var`, `let`, `const` — diferencias de scope y reasignación
- Hoisting (al menos mención básica)
- Tipos de datos primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- Tipos de datos por referencia: `object`, `array`, `function`
- Diferencia entre tipado dinámico de JS vs tipado estático (contraste con lo que viene en TS más adelante)
- Operador `typeof`
- Operadores aritméticos (`+ - * / % **`)
- Operadores de asignación (`= += -= *= /=`)
- Operadores de comparación (`== === != !==`) y por qué se prefiere `===`
- Operadores lógicos (`&& || !`)
- Concatenación de strings vs template literals (`` `${}` ``)
- Coerción de tipos (type coercion) — ejemplos donde JS "adivina" el tipo
- Declaración de funciones: function declaration, function expression, arrow function
- Parámetros, argumentos, valores por defecto
- `return` y funciones sin retorno explícito (retornan `undefined`)
- Scope de variables (global vs local/función vs bloque)
- Comentarios en el código (`//` y `/* */`)

## Formato de salida requerido (usa EXACTAMENTE esta estructura)

Para el tema completo de la clase, entrega:

1. **Índice de subtemas** cubiertos en la clase de 3h (lista completa y ordenada)
2. **Explicación detallada por subtema** (no solo definición — explica el "por qué" y "cómo funciona")
3. **Conceptos clave** (glosario con término + definición corta)
4. **¿Para qué sirve cada concepto?** en la práctica real
5. **Ejemplos abstractos** usando notación `[nombre_1]`, `[valor_1]`, indicando cuáles son:
   - Reutilizables/renombrables por el estudiante
   - Fijos/reservados del lenguaje (palabras clave, sintaxis obligatoria, símbolos de cierre)
6. **Excepciones y casos especiales** de cada concepto (cuándo NO aplica la regla general, errores comunes de principiante, trampas del tipado dinámico)
7. **Metáfora o ejemplo visual** para cada concepto difícil de imaginar
8. **Errores típicos** que comete un junior en este tema (ej. confundir `==` con `===`, olvidar `return`, reasignar `const`)
9. **Preguntas de autoevaluación** (mínimo 8) tipo "¿Puedo explicar...?" para que yo verifique si realmente entendí
10. **Checklist final** de dominio del tema (formato casillas ✅)

## Restricciones
- No inventes sintaxis que no exista en JavaScript estándar (ES6+)
- Si algo depende de la plataforma/curso específico, acláralo como "esto puede variar según tu plataforma"
- Prioriza profundidad sobre brevedad — el objetivo es que este documento reemplace haber visto la clase de 3 horas
- Todos los ejemplos de código deben ser sintácticamente correctos y ejecutables
