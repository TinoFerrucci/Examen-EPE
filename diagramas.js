/* ============================================================
   Examen de Capacitación Eléctrica — EPE
   Generador de diagramas.

   Dibuja en SVG los esquemas que acompañan a las preguntas:
   circuitos, fasores, ondas, triángulos y vectores.

   En preguntas.js no se escribe SVG a mano. Se pone solamente
   una descripción del dibujo, por ejemplo:

       diagrama: { tipo: "serie", r: ["5 Ω", "10 Ω"], u: "15 V" }

   y este archivo se encarga del resto. Al final de cada bloque
   está la lista de opciones que acepta cada tipo.

   Los dibujos no llevan colores fijos: usan las variables del
   tema, así que se ven bien en claro y en oscuro.
   ============================================================ */

const DIAGRAMAS = (function () {
  "use strict";

  var contador = 0;   // para que los marcadores de flecha no choquen entre sí

  /* ── Utilidades ───────────────────────────────────────── */

  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function n(v) { return (Math.round(v * 10) / 10); }

  function texto(x, y, s, clase, anclaje) {
    if (s === undefined || s === null || s === "") return "";
    return '<text class="dg-t ' + (clase || "") + '" x="' + n(x) + '" y="' + n(y) +
           '" text-anchor="' + (anclaje || "middle") + '">' + esc(s) + "</text>";
  }

  function linea(x1, y1, x2, y2, clase) {
    return '<line class="' + (clase || "dg-h") + '" x1="' + n(x1) + '" y1="' + n(y1) +
           '" x2="' + n(x2) + '" y2="' + n(y2) + '"/>';
  }

  function poli(puntos, clase) {
    return '<polyline class="' + (clase || "dg-h") + '" points="' +
           puntos.map(function (p) { return n(p[0]) + "," + n(p[1]); }).join(" ") + '"/>';
  }

  function nodo(x, y) {
    return '<circle class="dg-nodo" cx="' + n(x) + '" cy="' + n(y) + '" r="3.5"/>';
  }

  // Resistencia horizontal (rectángulo IEC) centrada en x,y
  function resH(x, y, etiqueta, abajo) {
    var w = 52, h = 19;
    return '<rect class="dg-c" x="' + n(x - w / 2) + '" y="' + n(y - h / 2) +
           '" width="' + w + '" height="' + h + '" rx="2.5"/>' +
           texto(x, abajo ? y + h / 2 + 16 : y - h / 2 - 8, etiqueta);
  }

  // Resistencia vertical centrada en x,y
  function resV(x, y, etiqueta, izquierda) {
    var w = 19, h = 52;
    return '<rect class="dg-c" x="' + n(x - w / 2) + '" y="' + n(y - h / 2) +
           '" width="' + w + '" height="' + h + '" rx="2.5"/>' +
           texto(izquierda ? x - w / 2 - 8 : x + w / 2 + 8, y + 5, etiqueta, "",
                 izquierda ? "end" : "start");
  }

  // Fuente: círculo con la letra U y el valor al costado
  function fuente(x, y, etiqueta, alterna) {
    var r = 17;
    var simbolo = alterna
      ? '<path class="dg-h dg-fino" d="M' + n(x - 8) + ' ' + n(y) +
        ' q4 -7 8 0 q4 7 8 0"/>'
      : texto(x, y + 5, "U", "dg-peq");
    return '<circle class="dg-c" cx="' + n(x) + '" cy="' + n(y) + '" r="' + r + '"/>' +
           simbolo + texto(x - r - 7, y + 5, etiqueta, "dg-acento", "end");
  }

  // Flecha de corriente sobre un tramo horizontal
  function flechaI(x, y, etiqueta, id) {
    return '<line class="dg-h dg-acento-l" marker-end="url(#' + id + ')" x1="' + n(x - 16) +
           '" y1="' + n(y) + '" x2="' + n(x + 16) + '" y2="' + n(y) + '"/>' +
           texto(x, y + 20, etiqueta, "dg-acento");
  }

  // Camino de una senoidal
  function senoide(x0, x1, yc, amp, ciclos, faseGrados) {
    var d = "", pasos = 140;
    var fase = (faseGrados || 0) * Math.PI / 180;
    for (var i = 0; i <= pasos; i++) {
      var t = i / pasos;
      var x = x0 + (x1 - x0) * t;
      var y = yc - amp * Math.sin(2 * Math.PI * ciclos * t + fase);
      d += (i ? "L" : "M") + n(x) + " " + n(y);
    }
    return d;
  }

  // Arco para marcar un ángulo desde el eje X, en el origen ox,oy
  function arcoAngulo(ox, oy, radio, gradosDesde, gradosHasta) {
    var a = gradosDesde * Math.PI / 180, b = gradosHasta * Math.PI / 180;
    var x1 = ox + radio * Math.cos(a), y1 = oy - radio * Math.sin(a);
    var x2 = ox + radio * Math.cos(b), y2 = oy - radio * Math.sin(b);
    var barrido = gradosHasta > gradosDesde ? 0 : 1;
    return '<path class="dg-h dg-fino dg-tenue" d="M' + n(x1) + " " + n(y1) +
           " A" + radio + " " + radio + " 0 0 " + barrido + " " + n(x2) + " " + n(y2) + '"/>';
  }

  // Referencia de colores: [[claseTrazo, claseTexto, etiqueta], …]
  function leyenda(x, y, items) {
    var s = "", cx = x;
    items.forEach(function (it) {
      s += '<line class="dg-onda ' + it[0] + '" x1="' + n(cx) + '" y1="' + n(y) +
           '" x2="' + n(cx + 20) + '" y2="' + n(y) + '"/>';
      s += texto(cx + 26, y + 5, it[2], it[1], "start");
      cx += 32 + String(it[2]).length * 8.5;
    });
    return s;
  }

  function ejes(x0, y0, x1, y1, ox, oy, id) {
    return '<line class="dg-eje" marker-end="url(#' + id + ')" x1="' + n(x0) + '" y1="' + n(oy) +
           '" x2="' + n(x1) + '" y2="' + n(oy) + '"/>' +
           '<line class="dg-eje" marker-end="url(#' + id + ')" x1="' + n(ox) + '" y1="' + n(y1) +
           '" x2="' + n(ox) + '" y2="' + n(y0) + '"/>';
  }

  function envolver(vb, cuerpo, maxAncho, titulo, id) {
    var defs =
      '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" ' +
      'markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">' +
      '<path class="dg-punta" d="M0 0 L10 5 L0 10 z"/></marker></defs>';
    return '<svg class="dg" viewBox="' + vb + '" role="img" ' +
           'style="max-width:' + maxAncho + 'px" aria-label="' + esc(titulo || "Esquema") + '">' +
           "<title>" + esc(titulo || "Esquema") + "</title>" + defs + cuerpo + "</svg>";
  }

  /* ══════════════ Tipos de diagrama ══════════════ */

  var tipos = {};

  /* serie · { r: ["5 Ω", …], u: "15 V", corriente: "I" }
     Malla rectangular con la fuente a la izquierda y las
     resistencias repartidas sobre el lado superior.          */
  tipos.serie = function (c, id) {
    var r = c.r || [], xi = 55, xd = 500, yt = 55, yb = 160, cy = (yt + yb) / 2;
    var s = "";
    s += poli([[xi, cy - 17], [xi, yt], [xd, yt]]);
    s += poli([[xd, yt], [xd, yb], [xi, yb], [xi, cy + 17]]);
    s += fuente(xi, cy, c.u, c.alterna);

    var x0 = 100, x1 = 455, paso = (x1 - x0) / Math.max(r.length, 1);
    r.forEach(function (etq, i) {
      s += resH(x0 + paso * (i + 0.5), yt, etq);
    });
    if (c.corriente !== false) s += flechaI((xi + xd) / 2, yb, c.corriente || "I", id);
    return envolver("-38 0 588 200", s, 520, c.titulo || "Circuito en serie", id);
  };

  /* paralelo · { r: ["10 Ω", …], u: "30 V" }
     Fuente a la izquierda y una rama vertical por resistencia. */
  tipos.paralelo = function (c, id) {
    var r = c.r || [], xi = 50, xd = 490, yt = 45, yb = 175, cy = (yt + yb) / 2;
    var s = "";
    s += poli([[xi, cy - 17], [xi, yt], [xd, yt]]);
    s += poli([[xd, yt], [xd, yb], [xi, yb], [xi, cy + 17]]);
    s += fuente(xi, cy, c.u, c.alterna);

    var x0 = 120, x1 = 470, paso = (x1 - x0) / Math.max(r.length, 1);
    r.forEach(function (etq, i) {
      var cx = x0 + paso * (i + 0.5);
      s += linea(cx, yt, cx, cy - 26) + linea(cx, cy + 26, cx, yb);
      s += resV(cx, cy, etq);
      s += nodo(cx, yt) + nodo(cx, yb);
    });
    return envolver("-38 0 578 210", s, 520, c.titulo || "Circuito en paralelo", id);
  };

  /* mixto · { r1, r2, r3, r4, u }
     R1 en serie con el conjunto  R2 ∥ (R3 + R4).              */
  tipos.mixto = function (c, id) {
    var xi = 45, yt = 78, yup = 40, ydn = 118, yb = 190, cy = (yt + yb) / 2;
    var xA = 245, xB = 470, xd = 505;
    var s = "";
    s += poli([[xi, cy - 17], [xi, yt], [xA, yt]]);
    s += resH(200, yt, c.r1);
    s += poli([[xA, yt], [xA, yup], [xB, yup]]);
    s += resH(320, yup, c.r3) + resH(408, yup, c.r4);
    s += poli([[xA, yt], [xA, ydn], [xB, ydn]]);
    s += resH(357, ydn, c.r2, true);
    s += poli([[xB, yup], [xB, ydn]]);
    s += poli([[xB, yt], [xd, yt], [xd, yb], [xi, yb], [xi, cy + 17]]);
    s += nodo(xA, yt) + nodo(xB, yt);
    s += fuente(xi, cy, c.u, c.alterna);
    return envolver("-42 0 592 222", s, 530, c.titulo || "Circuito mixto", id);
  };

  /* triangulo · { horizontal, vertical, hipotenusa, angulo, sentido:"arriba"|"abajo" }
     Sirve para el triángulo de potencias y el de impedancias.  */
  tipos.triangulo = function (c, id) {
    var arriba = c.sentido !== "abajo";
    var ox = 70, oy = arriba ? 205 : 80;
    var ax = 340, ay = arriba ? 85 : 200;
    var s = ejes(45, arriba ? 60 : 245, 375, arriba ? 230 : 60, ox, oy, id);
    s += '<path class="dg-relleno" d="M' + ox + " " + oy + "L" + ax + " " + oy +
         "L" + ax + " " + ay + 'z"/>';
    s += linea(ox, oy, ax, oy, "dg-h dg-acento-l");
    s += linea(ax, oy, ax, ay, "dg-h dg-rojo-l");
    s += linea(ox, oy, ax, ay, "dg-h dg-grueso");
    s += arcoAngulo(ox, oy, 46, 0, arriba ? 25 : -25);
    s += texto(ox + 62, arriba ? oy - 12 : oy + 22, c.angulo, "dg-tenue-t", "start");
    s += texto((ox + ax) / 2, arriba ? oy + 24 : oy - 12, c.horizontal, "dg-acento");
    s += texto(ax + 14, (oy + ay) / 2 + 5, c.vertical, "dg-rojo", "start");
    s += texto((ox + ax) / 2 - 30, (oy + ay) / 2 - (arriba ? 14 : -22), c.hipotenusa, "dg-fuerte");
    return envolver("0 0 500 275", s, 470, c.titulo || "Triángulo", id);
  };

  /* fasores · { angulo: -90, u:"U", i:"I", nota:"φ = −90°" }
     Ángulo positivo = la corriente adelanta.                  */
  tipos.fasores = function (c, id) {
    var ox = 175, oy = 140, largo = 92, ang = c.angulo || 0;
    var rad = ang * Math.PI / 180;
    var s = ejes(30, 28, 320, 252, ox, oy, id);
    var ix = ox + largo * Math.cos(rad);
    var iy = oy - largo * Math.sin(rad);
    // Etiqueta del fasor I, corrida hacia afuera en la misma dirección
    var lx = ox + (largo + 20) * Math.cos(rad);
    var ly = oy - (largo + 20) * Math.sin(rad);
    var cos = Math.cos(rad);
    var anclaI = cos > 0.25 ? "start" : (cos < -0.25 ? "end" : "middle");
    if (anclaI === "middle") ly += Math.sin(rad) > 0 ? -4 : 14;
    s += '<line class="dg-h dg-grueso" marker-end="url(#' + id + ')" x1="' + ox + '" y1="' + oy +
         '" x2="' + (ox + largo) + '" y2="' + oy + '"/>';
    s += '<line class="dg-h dg-acento-l" marker-end="url(#' + id + ')" x1="' + ox + '" y1="' + oy +
         '" x2="' + n(ix) + '" y2="' + n(iy) + '"/>';
    if (ang !== 0) {
      s += arcoAngulo(ox, oy, 50, 0, ang);
      s += texto(ox + largo + 16, oy + 5, c.u || "U", "dg-fuerte", "start");
      s += texto(lx, ly + 5, c.i || "I", "dg-acento", anclaI);
    } else {
      // En fase los dos fasores quedan superpuestos: una sola etiqueta.
      s += texto(ox + largo + 16, oy + 5, (c.u || "U") + " e " + (c.i || "I"), "dg-fuerte", "start");
    }
    s += texto(175, 285, c.nota, "dg-tenue-t");
    return envolver("0 0 350 298", s, 350, c.titulo || "Diagrama fasorial", id);
  };

  /* ondas · { desfasaje: -90, a:"U", b:"I", ciclos: 2 }
     Dos senoidales con un corrimiento entre ellas.            */
  tipos.ondas = function (c, id) {
    var x0 = 55, x1 = 520, yc = 132, amp = 60, ciclos = c.ciclos || 2;
    var s = leyenda(x0, 18, c.b === false
      ? [["dg-grueso", "dg-fuerte", c.a || "U"]]
      : [["dg-grueso", "dg-fuerte", c.a || "U"], ["dg-acento-l", "dg-acento", c.b || "I"]]);
    s += '<line class="dg-eje" marker-end="url(#' + id + ')" x1="' + (x0 - 20) +
         '" y1="' + yc + '" x2="' + (x1 + 20) + '" y2="' + yc + '"/>';
    s += linea(x0 - 5, 52, x0 - 5, 212, "dg-eje");
    s += '<path class="dg-onda dg-grueso" d="' + senoide(x0, x1, yc, amp, ciclos, 0) + '"/>';
    if (c.b !== false) {
      s += '<path class="dg-onda dg-acento-l" d="' +
           senoide(x0, x1, yc, amp, ciclos, c.desfasaje || 0) + '"/>';
    }
    s += texto(x1 + 26, yc + 5, "t", "dg-tenue-t", "start");
    s += texto((x0 + x1) / 2, 232, c.nota, "dg-tenue-t");
    return envolver("0 0 570 244", s, 540, c.titulo || "Ondas de tensión y corriente", id);
  };

  /* onda · { periodo:"T = 0,02 s", amplitud:"Valor máximo" }
     Una sola senoidal, con las marcas de período y amplitud.  */
  tipos.onda = function (c, id) {
    var x0 = 60, x1 = 520, yc = 115, amp = 62;
    var s = '<line class="dg-eje" marker-end="url(#' + id + ')" x1="' + (x0 - 22) +
            '" y1="' + yc + '" x2="' + (x1 + 20) + '" y2="' + yc + '"/>';
    s += linea(x0 - 8, 32, x0 - 8, 198, "dg-eje");
    s += '<path class="dg-onda dg-grueso" d="' + senoide(x0, x1, yc, amp, 2, 0) + '"/>';
    var xm = x0 + (x1 - x0) / 2;
    s += linea(x0, yc, x0, 208, "dg-eje dg-guion") + linea(xm, yc, xm, 208, "dg-eje dg-guion");
    s += '<line class="dg-h dg-acento-l" marker-start="url(#' + id + ')" marker-end="url(#' + id +
         ')" x1="' + x0 + '" y1="200" x2="' + xm + '" y2="200"/>';
    s += texto((x0 + xm) / 2, 218, c.periodo || "T", "dg-acento");
    var xc = x0 + (x1 - x0) / 8;
    s += linea(x0 - 8, yc - amp, xc + 10, yc - amp, "dg-eje dg-guion");
    s += texto(xc + 18, yc - amp + 5, c.amplitud || "Amplitud", "dg-rojo", "start");
    s += texto(x1 + 26, yc + 5, "t", "dg-tenue-t", "start");
    return envolver("0 0 570 232", s, 540, c.titulo || "Onda senoidal", id);
  };

  /* trifasica · {}  Las tres fases desfasadas 120°.           */
  tipos.trifasica = function (c, id) {
    var x0 = 55, x1 = 520, yc = 128, amp = 58;
    var fases = [["dg-grueso", "dg-fuerte", 0, "R"],
                 ["dg-acento-l", "dg-acento", -120, "S"],
                 ["dg-verde-l", "dg-verde", -240, "T"]];
    var s = leyenda(x0, 18, fases.map(function (f) { return [f[0], f[1], f[3]]; }));
    s += '<line class="dg-eje" marker-end="url(#' + id + ')" x1="' + (x0 - 20) +
         '" y1="' + yc + '" x2="' + (x1 + 20) + '" y2="' + yc + '"/>';
    s += linea(x0 - 5, 50, x0 - 5, 206, "dg-eje");
    fases.forEach(function (f) {
      s += '<path class="dg-onda ' + f[0] + '" d="' + senoide(x0, x1, yc, amp, 1.5, f[2]) + '"/>';
    });
    s += texto(x1 + 26, yc + 5, "t", "dg-tenue-t", "start");
    s += texto((x0 + x1) / 2, 226, c.nota || "Las tres fases, desfasadas 120° entre sí", "dg-tenue-t");
    return envolver("0 0 570 238", s, 540, c.titulo || "Sistema trifásico", id);
  };

  /* vector · { x: 6, y: 4, etiqueta: "E = 6 + j4", rango: 7 }
     Vector en el plano cartesiano, con grilla.                */
  tipos.vector = function (c, id) {
    var rango = c.rango || 7, celda = 128 / rango, ox = 150, oy = 150;
    var s = "", i;
    for (i = -rango; i <= rango; i++) {
      s += linea(ox - 132, oy + i * celda, ox + 132, oy + i * celda, "dg-grilla");
      s += linea(ox + i * celda, oy - 132, ox + i * celda, oy + 132, "dg-grilla");
    }
    s += ejes(ox - 140, oy - 142, ox + 142, oy + 140, ox, oy, id);
    var px = ox + c.x * celda, py = oy - c.y * celda;
    s += '<line class="dg-h dg-acento-l dg-grueso" marker-end="url(#' + id + ')" x1="' + ox +
         '" y1="' + oy + '" x2="' + n(px) + '" y2="' + n(py) + '"/>';
    if (c.componentes !== false) {
      s += linea(ox, py, px, py, "dg-eje dg-guion") + linea(px, oy, px, py, "dg-eje dg-guion");
      s += texto(px, oy + (c.y >= 0 ? 20 : -10), c.x, "dg-tenue-t");
      s += texto(ox + (c.x >= 0 ? -12 : 12), py + 5, c.y, "dg-tenue-t", c.x >= 0 ? "end" : "start");
    }
    s += texto(px + (c.x >= 0 ? 12 : -12), py + (c.y >= 0 ? -10 : 20), c.etiqueta, "dg-acento",
               c.x >= 0 ? "start" : "end");
    s += texto(ox + 146, oy + 5, "x", "dg-tenue-t", "start") +
         texto(ox + 12, oy - 140, "y", "dg-tenue-t", "start");
    return envolver("-55 0 410 320", s, 340, c.titulo || "Vector", id);
  };

  /* transformador · { up, us, np, ns }                        */
  tipos.transformador = function (c, id) {
    var s = "", yt = 55, yb = 175, cy = 115;
    s += '<rect class="dg-nucleo" x="205" y="' + yt + '" width="14" height="120"/>';
    s += '<rect class="dg-nucleo" x="261" y="' + yt + '" width="14" height="120"/>';
    function bobina(x, mirar) {
      var d = "", k;
      for (k = 0; k < 5; k++) {
        var y = yt + 12 + k * 22;
        d += "M" + x + " " + y + " a11 11 0 0 " + (mirar ? 1 : 0) + " 0 22";
      }
      return '<path class="dg-h dg-grueso" d="' + d + '"/>';
    }
    s += bobina(195, 0) + bobina(285, 1);
    s += poli([[120, yt], [195, yt], [195, yt + 12]]) + poli([[195, yt + 122], [195, yb], [120, yb]]);
    s += poli([[360, yt], [285, yt], [285, yt + 12]]) + poli([[285, yt + 122], [285, yb], [360, yb]]);
    s += linea(120, yt, 120, yb) + linea(360, yt, 360, yb);
    s += texto(108, cy + 5, c.up || "Up", "dg-acento", "end");
    s += texto(372, cy + 5, c.us || "Us", "dg-acento", "start");
    s += texto(155, 212, c.np || "Primario", "dg-tenue-t");
    s += texto(325, 212, c.ns || "Secundario", "dg-tenue-t");
    s += texto(240, 42, "Núcleo", "dg-tenue-t");
    return envolver("0 0 480 228", s, 460, c.titulo || "Transformador", id);
  };

  /* ══════════════ Punto de entrada ══════════════ */

  function dibujar(spec) {
    if (!spec || !spec.tipo || !tipos[spec.tipo]) return "";
    try {
      return tipos[spec.tipo](spec, "dgf" + (++contador));
    } catch (e) {
      return "";   // un diagrama roto nunca debe voltear la pregunta
    }
  }

  return { dibujar: dibujar, tipos: tipos };
})();
