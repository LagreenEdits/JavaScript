# PROMPT PARA IA — Generar material de estudio detallado

## Contexto
Soy estudiante del curso **JavaScript MEAN Mastery**, Módulo M1 Unidad 1: *JavaScript Junior Developer: Web Foundations & Coding Skills*.

Necesito material de estudio **exhaustivo** de una clase de **3 horas de duración** que NO pude ver completa. Tu tarea es generar el contenido como si hubieras impartido tú mismo esa clase de 3 horas, cubriendo TODO lo que normalmente se enseñaría, para que al leerlo yo tenga la confianza de que "vi" la clase completa, no un resumen superficial.

## Datos de la clase
- **Curso:** JavaScript MEAN Mastery
- **Módulo:** M1 Unidad 1
- **Clase:** Clase 5 — Manipulación del DOM con JavaScript
- **Duración real:** 3 horas
- **Nivel:** Junior / principiante absoluto
- **Prerrequisito lógico:** Clases 2, 3 (JS básico) y 4 (HTML/CSS)

## Temas que probablemente se cubrieron (usa esto como mínimo, amplía si falta algo lógico)
- Qué es el DOM (Document Object Model) y su representación como árbol de nodos
- Diferencia entre HTML (código fuente) y DOM (representación en memoria del navegador)
- Selección de elementos: `getElementById`, `getElementsByClassName`, `getElementsByTagName`
- Selección moderna: `querySelector`, `querySelectorAll`
- Diferencia entre NodeList y HTMLCollection (y por qué importa para iterar)
- Modificar contenido: `.innerText`, `.textContent`, `.innerHTML` (y riesgos de `.innerHTML`)
- Modificar estilos vía JS: `.style.propiedad`
- Modificar clases: `.classList.add/remove/toggle/contains`
- Modificar atributos: `.setAttribute`, `.getAttribute`, `.removeAttribute`
- Crear y eliminar elementos: `document.createElement`, `.appendChild`, `.remove()`
- Eventos: `addEventListener`, tipos comunes (`click`, `submit`, `input`, `mouseover`, `keydown`)
- Objeto `event` dentro del callback (`event.target`, `event.preventDefault()`)
- Propagación de eventos: bubbling básico (mención introductoria)
- `DOMContentLoaded` y por qué importa el orden de carga del script
- Recorrer y manipular el DOM dinámicamente (ej. listas generadas por JS)

## Formato de salida requerido (usa EXACTAMENTE esta estructura)

Para el tema completo de la clase, entrega:

1. **Índice de subtemas** cubiertos en la clase de 3h (lista completa y ordenada)
2. **Explicación detallada por subtema** (no solo definición — explica el "por qué" y "cómo funciona")
3. **Conceptos clave** (glosario con término + definición corta)
4. **¿Para qué sirve cada concepto?** en la práctica real
5. **Ejemplos abstractos** usando notación `[nombre_1]`, `[valor_1]`, indicando cuáles son:
   - Reutilizables/renombrables por el estudiante (variables, selectores CSS usados)
   - Fijos del lenguaje/API del DOM (nombres de métodos como `querySelector`, `addEventListener` — no se inventan)
6. **Excepciones y casos especiales** (elemento `null` si el script corre antes de tiempo, riesgo de seguridad de `.innerHTML`, diferencia NodeList vs Array real)
7. **Metáfora o ejemplo visual** para cada concepto difícil de imaginar
8. **Errores típicos** que comete un junior en este tema (seleccionar antes de que exista el elemento, confundir innerText con innerHTML, olvidar preventDefault en formularios)
9. **Preguntas de autoevaluación** (mínimo 8) tipo "¿Puedo explicar...?" para que yo verifique si realmente entendí
10. **Checklist final** de dominio del tema (formato casillas ✅)

## Restricciones
- No inventes métodos del DOM que no existan en el estándar del navegador
- Si algo depende de la plataforma/curso específico, acláralo como "esto puede variar según tu plataforma"
- Prioriza profundidad sobre brevedad — el objetivo es que este documento reemplace haber visto la clase de 3 horas
- Todos los ejemplos de código deben ser sintácticamente correctos y ejecutables en un navegador
