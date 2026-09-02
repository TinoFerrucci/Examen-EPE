# Examen de Capacitación Eléctrica — EPE

Simulador de examen de opción múltiple sobre los Módulos 1 y 2 de la
capacitación eléctrica de la EPE. 210 preguntas con explicación y referencia a
la página exacta del material.

**Sitio:** <http://examen-epe.constantinoferrucci.com.ar/>

No hace falta instalar nada: es HTML, CSS y JavaScript sin dependencias ni
build. También corre en local abriendo `index.html` con doble clic.

## Qué incluye

- **210 preguntas**: 92 del Módulo 1 y 118 del Módulo 2, repartidas en 10 temas.
- **Tres niveles**: 75 fáciles, 80 medias y 55 difíciles.
- **Dos modos**: *Práctica* (corrige al instante y muestra la explicación) y
  *Examen* (de corrido, con 90 segundos por pregunta).
- **36 esquemas dibujados en SVG**: circuitos serie, paralelo y mixtos, fasores,
  ondas, sistema trifásico, triángulos de potencias e impedancias, vectores y
  transformadores.
- **El material a un clic**: cada explicación enlaza a la captura de la página
  del PDF donde verificarlo, en un panel lateral.
- **Repaso de erradas**, mapa de preguntas, marcado para revisar e historial de
  los últimos 8 intentos, guardado en el navegador.

Las preguntas y las opciones se barajan en cada intento. Ni la longitud de las
opciones ni los esquemas delatan la respuesta correcta: es una regla del banco,
no una casualidad.

## Estructura

| Archivo | Qué es |
| --- | --- |
| `index.html` | La página |
| `estilos.css` | Los estilos |
| `app.js` | La lógica del examen |
| `diagramas.js` | Generador SVG de los esquemas |
| `preguntas-m1.js` | Banco del Módulo 1 (92 preguntas) |
| `preguntas-m2.js` | Banco del Módulo 2 (118 preguntas) |
| `paginas/` | Las 100 hojas de los dos PDF, en imagen |
| `LEEME.txt` | Manual completo para quien rinde y para quien edita |

## Editar el banco de preguntas

Cada pregunta es un objeto en `preguntas-m1.js` o `preguntas-m2.js`:

```js
{
  modulo: 1,
  tema: "Conceptos eléctricos",
  tipo: "teoria",              // "teoria" o "calculo"
  dificultad: "medio",         // "facil", "medio" o "dificil", sin acentos
  pregunta: "...",
  opciones: ["...", "...", "...", "..."],
  correcta: 0,                 // posición dentro de "opciones", desde 0
  explicacion: "...",
  referencia: "Módulo 1, pág. 5 del PDF · Modelo atómico",
  diagrama: { tipo: "serie", r: ["5 Ω", "10 Ω"], u: "15 V" }   // opcional
}
```

Al escribir opciones, dos reglas:

1. **La correcta no puede ser la más larga de forma sistemática.** La
   justificación va en `explicacion`, no pegada a la opción, y los distractores
   se redactan con la misma estructura.
2. **El `diagrama` no puede contener la respuesta.** Si el dibujo es el que
   contesta la pregunta, la pregunta va sin dibujo.

Los tipos de esquema y sus opciones están documentados dentro de `diagramas.js`.
El detalle de la codificación, el formato de `referencia` y el resto del
procedimiento están en `LEEME.txt`.

Guardá siempre en UTF-8.
