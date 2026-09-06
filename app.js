/* ============================================================
   Examen de Capacitación Eléctrica — EPE
   Lógica de la aplicación. JavaScript puro, sin dependencias.

   Los bancos de preguntas se cargan desde preguntas-m1.js y
   preguntas-m2.js, y los esquemas desde diagramas.js.
   ============================================================ */
(function () {
  "use strict";

  /* ── Constantes de configuración ─────────────────────── */
  var SEGUNDOS_POR_PREGUNTA = 90;   // presupuesto de tiempo en modo Examen
  var CLAVE_HISTORIAL = "epe_examen_historial";
  var CLAVE_ERRADAS   = "epe_examen_erradas";
  var MAX_HISTORIAL = 8;
  var CLAVE_SESION = "epe_examen_sesion";
  var temasElegidos = null;

  var NOMBRE_MODULO = {
    "1": "Módulo 1", "2": "Módulo 2", "todos": "Integrador", "erradas": "Mis erradas"
  };
  var NOMBRE_DIFICULTAD = {
    "todas": "Todas", "facil": "Fácil", "medio": "Medio", "dificil": "Difícil"
  };
  var NIVELES = ["facil", "medio", "dificil"];

  var BANCO = [];

  /* ── Estado del intento en curso ─────────────────────── */
  var estado = null;

  /* ── Atajos al DOM ───────────────────────────────────── */
  function $(id) { return document.getElementById(id); }
  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  /* ── Utilidades ──────────────────────────────────────── */

  // Barajado Fisher-Yates sobre una copia del array.
  function barajar(arr) {
    var copia = arr.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copia[i]; copia[i] = copia[j]; copia[j] = t;
    }
    return copia;
  }

  function formatearTiempo(seg) {
    if (seg < 0) seg = 0;
    var m = Math.floor(seg / 60), s = seg % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function mostrarPantalla(id) {
    var pantallas = document.querySelectorAll(".pantalla");
    for (var i = 0; i < pantallas.length; i++) pantallas[i].classList.remove("activa");
    $(id).classList.add("activa");
    window.scrollTo(0, 0);
  }

  function nivel(pct) { return pct >= 80 ? "alto" : (pct >= 60 ? "medio" : "bajo"); }

  /* Identificador estable de una pregunta.
     Se deriva del enunciado, así que el banco no necesita llevar
     un campo `id` que haya que mantener a mano (y que se podría
     duplicar sin darse cuenta). El costo es que si se reescribe
     el texto de una pregunta, esa pregunta pierde su historial
     de errores: es un cambio menor y sin consecuencias. */
  function idPregunta(p) {
    var s = p.modulo + "|" + p.tema + "|" + p.pregunta;
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }

  /* ══════════════ PANEL DEL MATERIAL ══════════════
     Muestra al costado la captura de la página del PDF que
     corresponde a la referencia de la pregunta. Las imágenes
     están en paginas/ con el nombre mN-PP.webp.              */

  var PAGINAS_MODULO = { 1: 47, 2: 53 };   // cuántas hojas tiene cada PDF
  var panel = { modulo: 0, hojas: [], seccion: "" };

  /* "Módulo 1, págs. 13 y 14 del PDF · Resistencia"
      → { modulo: 1, paginas: [13, 14], seccion: "Resistencia" }
     Si la referencia no tiene esa forma devuelve null y la app
     simplemente deja el texto sin convertirlo en botón.       */
  function parsearReferencia(ref) {
    if (!ref) return null;
    var mMod = ref.match(/^Módulo\s+(\d)/);
    var mPags = ref.match(/págs?\.\s+([\d\s,ya]+?)\s+del PDF/);
    if (!mMod || !mPags) return null;

    var modulo = parseInt(mMod[1], 10);
    var tope = PAGINAS_MODULO[modulo];
    if (!tope) return null;

    var paginas = [], valido = true;
    mPags[1].split(/\s*(?:,|y)\s*/).forEach(function (trozo) {
      trozo = trozo.trim();
      var rango = trozo.match(/^(\d+)\s+a\s+(\d+)$/);
      if (rango) {
        for (var p = +rango[1]; p <= +rango[2]; p++) paginas.push(p);
      } else if (/^\d+$/.test(trozo)) {
        paginas.push(+trozo);
      } else { valido = false; }
    });

    paginas = paginas.filter(function (n) { return n >= 1 && n <= tope; });
    if (!valido || !paginas.length) return null;

    var mSec = ref.split("·")[1];
    return { modulo: modulo, paginas: paginas, seccion: mSec ? mSec.trim() : "" };
  }

  function nombreHoja(modulo, pagina) {
    return "paginas/m" + modulo + "-" + (pagina < 10 ? "0" : "") + pagina + ".webp";
  }

  /* "pág. 5" · "págs. 27 a 29" si son seguidas · "págs. 32 y 42" si no.
     Importa la distinción: decir "32 a 42" haría pensar en once páginas. */
  function etiquetaPaginas(hojas) {
    if (hojas.length === 1) return "pág. " + hojas[0];
    var seguidas = hojas[hojas.length - 1] - hojas[0] + 1 === hojas.length;
    if (seguidas) return "págs. " + hojas[0] + " a " + hojas[hojas.length - 1];
    var todas = hojas.slice();
    var ultima = todas.pop();
    return "págs. " + todas.join(", ") + " y " + ultima;
  }

  function pintarPanel() {
    var hojas = panel.hojas;
    $("panel-titulo").textContent = "Módulo " + panel.modulo;
    $("panel-paginas").textContent = etiquetaPaginas(hojas);
    $("panel-seccion").textContent = panel.seccion;

    var tope = PAGINAS_MODULO[panel.modulo];
    $("panel-antes").disabled = hojas[0] <= 1;
    $("panel-despues").disabled = hojas[hojas.length - 1] >= tope;

    var cont = $("panel-hojas");
    cont.innerHTML = "";
    hojas.forEach(function (n) {
      var caja = crear("figure", "hoja");
      caja.appendChild(crear("figcaption", "hoja-etq", "Página " + n + " de " + tope));

      var enlace = document.createElement("a");
      enlace.href = nombreHoja(panel.modulo, n);
      enlace.target = "_blank";
      enlace.rel = "noopener";
      enlace.title = "Abrir la página en tamaño completo";

      var img = document.createElement("img");
      img.src = nombreHoja(panel.modulo, n);
      img.alt = "Módulo " + panel.modulo + ", página " + n;
      img.loading = "lazy";
      img.addEventListener("error", function () {
        enlace.replaceWith(crear("p", "hoja-error",
          "No se encontró la imagen de esta página. Verificá que la carpeta " +
          "paginas/ esté junto a index.html."));
      });

      enlace.appendChild(img);
      caja.appendChild(enlace);
      cont.appendChild(caja);
    });
  }

  function abrirPanel(ref) {
    var datos = parsearReferencia(ref);
    if (!datos) return;
    panel.modulo = datos.modulo;
    panel.hojas = datos.paginas.slice();
    panel.seccion = datos.seccion;
    pintarPanel();
    $("panel").hidden = false;
    $("panel-fondo").hidden = false;
    document.body.classList.add("panel-abierto");
    $("panel-hojas").scrollTop = 0;
    $("panel-cerrar").focus();
  }

  function cerrarPanel() {
    $("panel").hidden = true;
    $("panel-fondo").hidden = true;
    document.body.classList.remove("panel-abierto");
  }

  // Suma la página contigua al principio o al final de la tira.
  function extenderPanel(direccion) {
    var hojas = panel.hojas;
    if (direccion < 0 && hojas[0] > 1) hojas.unshift(hojas[0] - 1);
    else if (direccion > 0 && hojas[hojas.length - 1] < PAGINAS_MODULO[panel.modulo]) {
      hojas.push(hojas[hojas.length - 1] + 1);
    } else return;
    var arriba = $("panel-hojas").scrollHeight;
    pintarPanel();
    // Al agregar arriba, mantener la vista donde estaba
    if (direccion < 0) {
      $("panel-hojas").scrollTop += $("panel-hojas").scrollHeight - arriba;
    }
  }

  /* Construye el pie "Ver: …" de una pregunta. Si la referencia
     se puede resolver a páginas, sale como botón; si no, como
     texto suelto. */
  function crearReferencia(ref) {
    if (!parsearReferencia(ref)) return crear("p", "referencia", "Ver: " + ref);
    var b = crear("button", "referencia referencia-btn");
    b.type = "button";
    b.appendChild(crear("span", "referencia-icono", "⧉"));
    b.appendChild(crear("span", null, "Ver en el material: " + ref));
    b.title = "Abrir la página del PDF al costado";
    b.addEventListener("click", function (ev) {
      ev.stopPropagation();
      abrirPanel(ref);
    });
    return b;
  }

  /* ── Selección de preguntas ──────────────────────────────
     Reparte el cupo entre los temas disponibles de forma
     proporcional, para que un intento corto no quede
     concentrado en un solo tema.                             */
  function disponibles(modulo, dificultad, ignorarTemas) {
    var erradas = modulo === "erradas" ? leerErradas() : null;
    return BANCO.filter(function (p) {
      if (!ignorarTemas && temasElegidos !== null && temasElegidos.indexOf(p.tema) < 0) return false;
      if (dificultad !== "todas" && p.dificultad !== dificultad) return false;
      if (modulo === "erradas") return !!erradas[idPregunta(p)];
      return modulo === "todos" || String(p.modulo) === String(modulo);
    });
  }

  function elegirPreguntas(modulo, dificultad, cantidad) {
    var pool = disponibles(modulo, dificultad);
    if (cantidad >= pool.length) return barajar(pool);

    // Agrupar por tema y barajar dentro de cada grupo.
    var grupos = {}, ordenTemas = [];
    pool.forEach(function (p) {
      if (!grupos[p.tema]) { grupos[p.tema] = []; ordenTemas.push(p.tema); }
      grupos[p.tema].push(p);
    });
    ordenTemas.forEach(function (t) { grupos[t] = barajar(grupos[t]); });

    // Repartir por ronda: una de cada tema hasta completar el cupo.
    var elegidas = [], quedan = true;
    while (elegidas.length < cantidad && quedan) {
      quedan = false;
      for (var i = 0; i < ordenTemas.length && elegidas.length < cantidad; i++) {
        var g = grupos[ordenTemas[i]];
        if (g.length) { elegidas.push(g.pop()); quedan = true; }
      }
    }
    return barajar(elegidas);
  }

  // Baraja las opciones de una pregunta y recalcula el índice correcto.
  function prepararPregunta(p) {
    var indices = barajar([0, 1, 2, 3].slice(0, p.opciones.length));
    return {
      base: p,
      opciones: indices.map(function (i) { return p.opciones[i]; }),
      correcta: indices.indexOf(p.correcta),
      respuesta: null,   // índice elegido dentro del orden barajado
      marcada: false
    };
  }

  /* ── Almacenamiento local (opcional, tolerante) ───────── */

  function leerJSON(clave, porDefecto) {
    try {
      var crudo = window.localStorage.getItem(clave);
      if (!crudo) return porDefecto;
      var datos = JSON.parse(crudo);
      return datos === null || datos === undefined ? porDefecto : datos;
    } catch (e) { return porDefecto; }
  }

  function guardarJSON(clave, valor) {
    try { window.localStorage.setItem(clave, JSON.stringify(valor)); }
    catch (e) {
      $("aviso-guardado").textContent = "No se pudo guardar el historial o el repaso en este navegador. El resultado sigue disponible mientras mantengas esta página abierta.";
      $("aviso-guardado").hidden = false;
    }
  }

  function leerHistorial() {
    var d = leerJSON(CLAVE_HISTORIAL, []);
    return Array.isArray(d) ? d : [];
  }

  function leerErradas() {
    var d = leerJSON(CLAVE_ERRADAS, {});
    return (d && typeof d === "object" && !Array.isArray(d)) ? d : {};
  }

  /* Actualiza la lista de erradas con el resultado del intento.
     Una pregunta entra cuando se falla y sale cuando se acierta. */
  function registrarErradas(preguntas) {
    var erradas = leerErradas();
    var hoy = new Date().toISOString().slice(0, 10);
    preguntas.forEach(function (item) {
      if (item.respuesta === null) return;          // sin responder: no cuenta
      var id = idPregunta(item.base);
      if (item.respuesta === item.correcta) {
        delete erradas[id];
      } else {
        erradas[id] = { v: (erradas[id] ? erradas[id].v : 0) + 1, f: hoy };
      }
    });
    guardarJSON(CLAVE_ERRADAS, erradas);
  }

  function contarErradas() {
    var erradas = leerErradas(), n = 0;
    BANCO.forEach(function (p) { if (erradas[idPregunta(p)]) n++; });
    return n;
  }

  function guardarEnHistorial(entrada) {
    var datos = leerHistorial();
    datos.unshift(entrada);
    guardarJSON(CLAVE_HISTORIAL, datos.slice(0, MAX_HISTORIAL));
  }

  function pintarTemas() {
    var pool = disponibles(leerModuloElegido(), "todas", true);
    var cont = $("sel-temas"), foco = document.activeElement.dataset.tema;
    cont.innerHTML = "";
    var cantidad = 0, seleccionados = 0;
    [1, 2].forEach(function (modulo) {
      var temas = {};
      pool.filter(function (p) { return p.modulo === modulo; }).forEach(function (p) {
        if (!(p.tema in temas)) temas[p.tema] = 0;
        if (dificultadElegida === "todas" || dificultadElegida === p.dificultad) temas[p.tema]++;
      });
      if (!Object.keys(temas).length) return;
      var grupo = crear("fieldset", "temas-grupo");
      grupo.appendChild(crear("legend", null, "Módulo " + modulo));
      Object.keys(temas).forEach(function (tema) {
        cantidad++;
        var label = crear("label", "tema-opcion"), input = document.createElement("input");
        input.type = "checkbox";
        input.dataset.tema = tema;
        input.checked = temasElegidos === null || temasElegidos.indexOf(tema) >= 0;
        if (input.checked) seleccionados++;
        input.addEventListener("change", function () {
          if (temasElegidos === null) temasElegidos = Array.from(new Set(pool.map(function (p) { return p.tema; })));
          temasElegidos = temasElegidos.filter(function (t) { return t !== tema; });
          if (input.checked) temasElegidos.push(tema);
          actualizarDisponibles();
        });
        label.appendChild(input);
        label.appendChild(crear("span", null, tema));
        label.appendChild(crear("small", null, temas[tema] + " disponibles"));
        grupo.appendChild(label);
      });
      cont.appendChild(grupo);
    });
    $("temas-resumen").textContent = seleccionados + " de " + cantidad + " temas seleccionados";
    if (foco) Array.from(cont.querySelectorAll("input")).forEach(function (i) { if (i.dataset.tema === foco) i.focus(); });
  }

  function copiaEstado() {
    var copia = Object.assign({}, estado);
    copia.intervalo = null;
    return JSON.parse(JSON.stringify(copia));
  }

  function estadoValido(d) {
    return !!(d && ["practica", "examen"].indexOf(d.modo) >= 0 &&
      Number.isFinite(d.inicio) && (d.modo !== "examen" || Number.isFinite(d.vence)) &&
      Array.isArray(d.preguntas) && d.preguntas.length > 0 && d.preguntas.length <= 1000 &&
      Number.isInteger(d.actual) && d.actual >= 0 && d.actual < d.preguntas.length &&
      d.preguntas.every(function (p) {
        return p && p.base && typeof p.base.pregunta === "string" && typeof p.base.tema === "string" &&
          Array.isArray(p.opciones) && p.opciones.length === 4 && p.opciones.every(function (o) { return typeof o === "string"; }) &&
          Number.isInteger(p.correcta) && p.correcta >= 0 && p.correcta < 4 &&
          (p.respuesta === null || (Number.isInteger(p.respuesta) && p.respuesta >= 0 && p.respuesta < 4));
      }));
  }

  function leerSesion() {
    var d = leerJSON(CLAVE_SESION, null);
    return estadoValido(d) && !d.terminado ? d : null;
  }

  function guardarSesion() {
    if (!estado || estado.terminado) return true;
    try {
      window.localStorage.setItem(CLAVE_SESION, JSON.stringify(copiaEstado()));
      $("aviso-guardado").hidden = true;
      return true;
    } catch (e) {
      $("aviso-guardado").textContent = "No se pudo guardar el intento. Mantené la página abierta para conservar tus respuestas.";
      $("aviso-guardado").hidden = false;
      return false;
    }
  }

  function borrarSesion() {
    try { window.localStorage.removeItem(CLAVE_SESION); } catch (e) {}
  }

  function pintarSesion() {
    var d = leerSesion();
    $("sesion-pendiente").hidden = !d;
    if (!d) return;
    var respondidas = d.preguntas.filter(function (p) { return p.respuesta !== null; }).length;
    $("sesion-resumen").textContent = (d.modo === "examen" ? "Examen" : "Práctica") + " · " +
      respondidas + " de " + d.preguntas.length + " respondidas · pregunta " + (d.actual + 1);
    $("btn-continuar").textContent = d.modo === "examen" && d.vence <= Date.now() ? "Ver resultado (tiempo agotado)" : "Continuar intento";
  }

  function continuarSesion() {
    var d = leerSesion();
    if (!d) { pintarSesion(); return; }
    estado = d;
    estado.intervalo = null;
    $("etiqueta-modo").textContent = d.modo === "examen" ? "Examen" : "Práctica";
    $("cronometro").hidden = d.modo !== "examen";
    $("cronometro").classList.remove("alerta");
    $("mapa-grilla").hidden = !d.mapaAbierto;
    $("btn-mapa").setAttribute("aria-expanded", String(!!d.mapaAbierto));
    $("btn-mapa").classList.toggle("abierto", !!d.mapaAbierto);
    if (d.modo === "examen") {
      d.restante = Math.max(0, Math.ceil((d.vence - Date.now()) / 1000));
      if (!d.restante) { finalizar(true); return; }
      iniciarCronometro();
    }
    mostrarPantalla("pantalla-examen");
    pintarPregunta();
  }

  function botonPracticar(tema, modulo) {
    var b = crear("button", "btn btn-secundario practicar-tema", "Practicar este tema");
    b.addEventListener("click", function () {
      document.querySelector('input[name=modulo][value="' + modulo + '"]').checked = true;
      document.querySelector('input[name=modo][value=practica]').checked = true;
      temasElegidos = [tema];
      dificultadElegida = "todas";
      cantidadElegida = 10;
      pintarDificultades();
      volverAlInicio();
      $("btn-comenzar").focus();
    });
    return b;
  }

  function pintarPlan() {
    var cont = $("plan-repaso");
    cont.innerHTML = "";
    var grupos = {};
    estado.preguntas.forEach(function (p) {
      var clave = p.base.modulo + "|" + p.base.tema;
      if (!grupos[clave]) grupos[clave] = { tema: p.base.tema, modulo: p.base.modulo, total: 0, errores: 0, omitidas: 0, dudas: 0, refs: [] };
      var g = grupos[clave];
      g.total++;
      if (p.respuesta === null) g.omitidas++;
      else if (p.respuesta !== p.correcta) g.errores++;
      if (p.marcada) g.dudas++;
      if ((p.respuesta !== p.correcta || p.marcada) && g.refs.indexOf(p.base.referencia) < 0) g.refs.push(p.base.referencia);
    });
    var lista = Object.values(grupos).filter(function (g) { return g.refs.length; });
    lista.sort(function (a, b) { return (b.errores + b.omitidas) / b.total - (a.errores + a.omitidas) / a.total || b.dudas - a.dudas; });
    if (!lista.length) cont.appendChild(crear("p", "ayuda", "Resolviste todas las preguntas sin dejar marcas. Podés probar otros temas o subir la dificultad."));
    lista.forEach(function (g) {
      var tarjeta = crear("div", "tema-fila");
      tarjeta.appendChild(crear("h3", null, "M" + g.modulo + " · " + g.tema));
      tarjeta.appendChild(crear("p", "ayuda", g.errores + " incorrectas · " + g.omitidas + " omitidas · " + g.dudas + " marcadas · " + g.total + " evaluadas"));
      var refs = crear("details", "repaso-material");
      refs.appendChild(crear("summary", null, "Páginas para repasar (" + g.refs.length + " referencias)"));
      g.refs.forEach(function (ref) { refs.appendChild(crearReferencia(ref)); });
      tarjeta.appendChild(refs);
      var n = BANCO.filter(function (p) { return p.modulo === g.modulo && p.tema === g.tema; }).length;
      tarjeta.appendChild(crear("p", "ayuda", "Tanda sugerida: " + Math.min(10, n) + " preguntas en Práctica, de todas las dificultades."));
      tarjeta.appendChild(botonPracticar(g.tema, g.modulo));
      cont.appendChild(tarjeta);
    });
  }

  function pintarHistorial() {
    var datos = leerHistorial(), cont = $("historial"), lista = $("lista-historial");
    lista.innerHTML = "";
    if (!datos.length) { cont.hidden = true; return; }
    cont.hidden = false;

    datos.forEach(function (h) {
      var li = crear("li");
      var partes = [h.fecha, NOMBRE_MODULO[h.modulo] || h.modulo,
                    h.modo === "examen" ? "Examen" : "Práctica"];
      if (h.dificultad && h.dificultad !== "todas") partes.push(NOMBRE_DIFICULTAD[h.dificultad]);
      li.appendChild(crear("span", "hist-desc", partes.join(" · ")));
      var pct = Math.round(h.aciertos / h.total * 100);
      li.appendChild(crear("span", "hist-nota t-" + nivel(pct),
        h.aciertos + "/" + h.total + "  ·  " + pct + "%"));
      if (h.detalle && estadoValido(h.detalle)) {
        var ver = crear("button", "btn btn-secundario", "Ver detalle");
        ver.addEventListener("click", function () {
          estado = JSON.parse(JSON.stringify(h.detalle));
          finalizar(estado.porTiempo, true);
        });
        li.appendChild(ver);
      } else { li.appendChild(crear("small", "ayuda", "Sin detalle guardado")); }
      lista.appendChild(li);
    });
  }

  /* ══════════════ PANTALLA DE INICIO ══════════════ */

  var cantidadElegida = 20;
  var dificultadElegida = "todas";

  function pintarDificultades() {
    var cont = $("sel-dificultad");
    cont.innerHTML = "";
    ["todas"].concat(NIVELES).forEach(function (d) {
      var b = crear("button", "pastilla", NOMBRE_DIFICULTAD[d]);
      b.type = "button";
      b.dataset.d = d;
      if (d === dificultadElegida) b.classList.add("activa");
      b.addEventListener("click", function () {
        dificultadElegida = d;
        var todos = cont.querySelectorAll(".pastilla");
        for (var k = 0; k < todos.length; k++) todos[k].classList.remove("activa");
        b.classList.add("activa");
        actualizarDisponibles();
      });
      cont.appendChild(b);
    });
  }

  function pintarCantidades(max) {
    var cont = $("sel-cantidad");
    var previa = cantidadElegida;
    cont.innerHTML = "";

    var valores = [10, 20, 30, 50, 100].filter(function (v) { return v < max; });
    valores.push(max);

    valores.forEach(function (n) {
      var b = crear("button", "pastilla", n === max ? "Todas (" + n + ")" : String(n));
      b.type = "button";
      b.dataset.n = n;
      b.addEventListener("click", function () {
        cantidadElegida = n;
        var todos = cont.querySelectorAll(".pastilla");
        for (var k = 0; k < todos.length; k++) todos[k].classList.remove("activa");
        b.classList.add("activa");
      });
      cont.appendChild(b);
    });

    // Mantener la elección previa si sigue siendo posible; si no, la más cercana.
    var elegido = valores.indexOf(previa);
    if (elegido < 0) {
      elegido = 0;
      for (var i = 0; i < valores.length; i++) if (valores[i] <= previa) elegido = i;
    }
    cantidadElegida = valores[elegido];
    cont.children[elegido].classList.add("activa");
  }

  function leerModuloElegido() {
    var r = document.querySelector("input[name=modulo]:checked");
    return r ? r.value : "todos";
  }

  /* Recalcula cuántas preguntas quedan con lo elegido y ajusta
     las pastillas de cantidad, el aviso y el botón Comenzar. */
  function actualizarDisponibles() {
    pintarTemas();
    var modulo = leerModuloElegido();
    var total = disponibles(modulo, dificultadElegida).length;
    var aviso = $("aviso-inicio");

    $("btn-comenzar").disabled = total === 0;

    if (total === 0) {
      $("sel-cantidad").innerHTML = "";
      aviso.textContent = modulo === "erradas"
        ? "Todavía no hay preguntas falladas de ese nivel."
        : "No hay preguntas que cumplan con lo elegido.";
      aviso.className = "aviso-inicio alerta";
      return;
    }

    pintarCantidades(total);
    aviso.textContent = total + (total === 1 ? " pregunta disponible" : " preguntas disponibles");
    aviso.className = "aviso-inicio";
  }

  function pintarConteos() {
    var metas = document.querySelectorAll("[data-cuenta]");
    for (var i = 0; i < metas.length; i++) {
      var m = metas[i].dataset.cuenta;
      var n = BANCO.filter(function (p) { return m === "todos" || String(p.modulo) === m; }).length;
      metas[i].textContent = n + " preguntas en el banco";
    }
    $("total-banco").textContent = BANCO.length;

    // Tarjeta de erradas: se deshabilita si todavía no hay ninguna.
    var n = contarErradas();
    var tarjeta = $("tarjeta-erradas");
    var radio = tarjeta.querySelector("input");
    radio.disabled = n === 0;
    tarjeta.classList.toggle("inhabilitada", n === 0);
    $("meta-erradas").textContent = n === 0
      ? "Todavía no fallaste ninguna"
      : n + (n === 1 ? " pregunta pendiente" : " preguntas pendientes");
    if (n === 0 && radio.checked) {
      document.querySelector("input[name=modulo][value=todos]").checked = true;
    }
  }

  function leerConfig() {
    return {
      modulo: leerModuloElegido(),
      modo: document.querySelector("input[name=modo]:checked").value,
      temas: temasElegidos === null ? null : temasElegidos.slice(),
      dificultad: dificultadElegida,
      cantidad: cantidadElegida
    };
  }

  /* ══════════════ EXAMEN ══════════════ */

  function comenzar() {
    if (leerSesion() && !window.confirm("¿Reemplazar el intento guardado por uno nuevo?")) return;
    var cfg = leerConfig();
    var elegidas = elegirPreguntas(cfg.modulo, cfg.dificultad, cfg.cantidad);
    if (!elegidas.length) { actualizarDisponibles(); return; }

    estado = {
      modulo: cfg.modulo,
      temas: cfg.temas,
      modo: cfg.modo,
      dificultad: cfg.dificultad,
      preguntas: elegidas.map(prepararPregunta),
      actual: 0,
      inicio: Date.now(),
      restante: elegidas.length * SEGUNDOS_POR_PREGUNTA,
      vence: Date.now() + elegidas.length * SEGUNDOS_POR_PREGUNTA * 1000,
      intervalo: null,
      terminado: false,
      mapaAbierto: false
    };

    $("etiqueta-modo").textContent = cfg.modo === "examen" ? "Examen" : "Práctica";
    $("cronometro").hidden = cfg.modo !== "examen";
    $("cronometro").classList.remove("alerta");
    $("mapa-grilla").hidden = true;
    $("btn-mapa").setAttribute("aria-expanded", "false");
    $("btn-mapa").classList.remove("abierto");

    if (cfg.modo === "examen") iniciarCronometro();

    mostrarPantalla("pantalla-examen");
    pintarPregunta();
  }

  function iniciarCronometro() {
    $("cronometro").textContent = formatearTiempo(estado.restante);
    estado.intervalo = window.setInterval(function () {
      estado.restante = Math.max(0, Math.ceil((estado.vence - Date.now()) / 1000));
      var c = $("cronometro");
      c.textContent = formatearTiempo(estado.restante);
      if (estado.restante <= 60) c.classList.add("alerta");
      if (estado.restante <= 0) {
        detenerCronometro();
        finalizar(true);
      }
    }, 1000);
  }

  function detenerCronometro() {
    if (estado && estado.intervalo) {
      window.clearInterval(estado.intervalo);
      estado.intervalo = null;
    }
  }

  function pintarPregunta() {
    var idx = estado.actual;
    var item = estado.preguntas[idx];
    var p = item.base;
    var total = estado.preguntas.length;

    $("contador").textContent = "Pregunta " + (idx + 1) + " de " + total;
    $("progreso-relleno").style.width = ((idx) / total * 100) + "%";

    $("chip-modulo").textContent = "Módulo " + p.modulo;
    $("chip-tema").textContent = p.tema;
    var chipDif = $("chip-dificultad");
    chipDif.textContent = NOMBRE_DIFICULTAD[p.dificultad] || p.dificultad;
    chipDif.className = "chip chip-dificultad d-" + p.dificultad;
    $("chip-tipo").hidden = p.tipo !== "calculo";

    $("enunciado").textContent = p.pregunta;

    // Diagrama, si la pregunta trae uno
    var cajaDg = $("diagrama");
    var svg = p.diagrama && typeof DIAGRAMAS !== "undefined" ? DIAGRAMAS.dibujar(p.diagrama) : "";
    cajaDg.innerHTML = svg;
    cajaDg.hidden = !svg;

    // Opciones
    var cont = $("opciones");
    cont.innerHTML = "";
    item.opciones.forEach(function (texto, i) {
      var btn = crear("button", "opcion");
      btn.type = "button";
      btn.appendChild(crear("span", "letra", "ABCD"[i]));
      btn.appendChild(crear("span", "opcion-texto", texto));
      btn.appendChild(crear("span", "marca-res", ""));
      btn.addEventListener("click", function () { responder(i); });
      cont.appendChild(btn);
    });

    $("feedback").hidden = true;
    $("feedback").innerHTML = "";

    // Si ya había respuesta (volvió con Anterior), restaurar el estado visual.
    if (item.respuesta !== null) {
      if (estado.modo === "practica") mostrarCorreccion(item);
      else marcarElegida(item.respuesta);
    }

    pintarBotonMarcar();
    $("btn-anterior").disabled = idx === 0;
    $("btn-siguiente").textContent = (idx === total - 1) ? "Finalizar" : "Siguiente";
    actualizarAvisoNav();
    pintarMapa();
  }

  function marcarElegida(i) {
    var botones = $("opciones").children;
    for (var k = 0; k < botones.length; k++) botones[k].classList.toggle("elegida", k === i);
  }

  function mostrarCorreccion(item) {
    var botones = $("opciones").children;
    var acerto = item.respuesta === item.correcta;

    for (var i = 0; i < botones.length; i++) {
      var b = botones[i];
      b.disabled = true;
      b.classList.remove("elegida");
      if (i === item.correcta) {
        b.classList.add("correcta");
        b.querySelector(".marca-res").textContent = "✓";
      } else if (i === item.respuesta) {
        b.classList.add("incorrecta");
        b.querySelector(".marca-res").textContent = "✗";
      }
    }

    var fb = $("feedback");
    fb.className = "feedback " + (acerto ? "bien" : "mal");
    fb.innerHTML = "";
    fb.appendChild(crear("strong", "feedback-titulo",
      acerto ? "Correcto" : "Incorrecto — la respuesta es " + "ABCD"[item.correcta]));
    fb.appendChild(crear("p", null, item.base.explicacion));
    fb.appendChild(crearReferencia(item.base.referencia));
    fb.hidden = false;
  }

  function responder(i) {
    var item = estado.preguntas[estado.actual];
    if (estado.modo === "practica") {
      if (item.respuesta !== null) return;   // en práctica no se cambia la respuesta
      item.respuesta = i;
      mostrarCorreccion(item);
    } else {
      item.respuesta = i;
      marcarElegida(i);
    }
    actualizarAvisoNav();
    pintarMapa();
  }

  /* ── Marcar para revisar ─────────────────────────────── */

  function alternarMarca() {
    var item = estado.preguntas[estado.actual];
    item.marcada = !item.marcada;
    pintarBotonMarcar();
    pintarMapa();
  }

  function pintarBotonMarcar() {
    var item = estado.preguntas[estado.actual];
    var btn = $("btn-marcar");
    btn.classList.toggle("activa", item.marcada);
    btn.setAttribute("aria-pressed", item.marcada ? "true" : "false");
    $("marcar-texto").textContent = item.marcada ? "Marcada" : "Marcar";
  }

  /* ── Mapa de preguntas ───────────────────────────────── */

  function pintarMapa() {
    guardarSesion();
    var sinResponder = 0, marcadas = 0;
    estado.preguntas.forEach(function (p) {
      if (p.respuesta === null) sinResponder++;
      if (p.marcada) marcadas++;
    });

    var partes = ["Mapa de preguntas"];
    if (sinResponder) partes.push(sinResponder + " sin responder");
    if (marcadas) partes.push(marcadas + (marcadas === 1 ? " marcada" : " marcadas"));
    if (!sinResponder && !marcadas) partes.push("todo respondido");
    $("mapa-resumen").textContent = partes.join(" · ");

    var grilla = $("mapa-grilla");
    grilla.innerHTML = "";
    estado.preguntas.forEach(function (p, i) {
      var b = crear("button", "nav-q", String(i + 1));
      b.type = "button";
      if (i === estado.actual) b.classList.add("actual");
      if (p.marcada) b.classList.add("marcada");
      if (p.respuesta !== null) {
        // En práctica ya se sabe si estuvo bien; en examen solo que fue contestada.
        if (estado.modo === "practica" || estado.terminado) {
          b.classList.add(p.respuesta === p.correcta ? "ok" : "err");
        } else {
          b.classList.add("respondida");
        }
      }
      var estadoTexto = p.respuesta === null ? "sin responder" : "respondida";
      b.title = "Pregunta " + (i + 1) + " · " + estadoTexto + (p.marcada ? " · marcada" : "");
      b.addEventListener("click", function () {
        estado.actual = i;
        pintarPregunta();
        $("pantalla-examen").querySelector(".pregunta-card").scrollIntoView({ block: "start" });
      });
      grilla.appendChild(b);
    });
  }

  function alternarMapa() {
    estado.mapaAbierto = !estado.mapaAbierto;
    guardarSesion();
    $("mapa-grilla").hidden = !estado.mapaAbierto;
    $("btn-mapa").setAttribute("aria-expanded", estado.mapaAbierto ? "true" : "false");
    $("btn-mapa").classList.toggle("abierto", estado.mapaAbierto);
  }

  function actualizarAvisoNav() {
    var sinResponder = 0, marcadas = 0;
    estado.preguntas.forEach(function (p) {
      if (p.respuesta === null) sinResponder++;
      if (p.marcada) marcadas++;
    });
    var esUltima = estado.actual === estado.preguntas.length - 1;
    var partes = [];
    if (esUltima && sinResponder) partes.push("Quedan " + sinResponder + " sin responder");
    if (esUltima && marcadas) partes.push(marcadas + (marcadas === 1 ? " marcada" : " marcadas"));
    $("aviso-nav").textContent = partes.join(" · ");
  }

  function siguiente() {
    if (estado.actual < estado.preguntas.length - 1) {
      estado.actual++;
      pintarPregunta();
    } else {
      var sinResponder = 0, marcadas = 0;
      estado.preguntas.forEach(function (p) {
        if (p.respuesta === null) sinResponder++;
        if (p.marcada) marcadas++;
      });
      if (sinResponder > 0 || marcadas > 0) {
        var lineas = [];
        if (sinResponder > 0) {
          lineas.push("Quedan " + sinResponder +
            (sinResponder === 1 ? " pregunta sin responder" : " preguntas sin responder") +
            ". Se contarán como erradas.");
        }
        if (marcadas > 0) {
          lineas.push("Tenés " + marcadas +
            (marcadas === 1 ? " pregunta marcada" : " preguntas marcadas") + " para revisar.");
        }
        if (!window.confirm(lineas.join("\n") + "\n\n¿Finalizar igual?")) return;
      }
      finalizar(false);
    }
  }

  function anterior() {
    if (estado.actual > 0) { estado.actual--; pintarPregunta(); }
  }

  function salir() {
    if (!guardarSesion() && !window.confirm("No se pudo guardar. ¿Salir y perder este intento?")) return;
    detenerCronometro();
    estado = null;
    volverAlInicio();
  }

  function volverAlInicio() {
    cerrarPanel();
    pintarSesion();
    pintarConteos();
    pintarHistorial();
    actualizarDisponibles();
    mostrarPantalla("pantalla-inicio");
  }

  /* ══════════════ RESULTADO ══════════════ */

  function finalizar(porTiempo, soloLectura) {
    detenerCronometro();
    estado.terminado = true;

    var total = estado.preguntas.length;
    var aciertos = estado.preguntas.filter(function (p) { return p.respuesta === p.correcta; }).length;
    var pct = Math.round(aciertos / total * 100);
    var segundos = estado.segundos !== undefined ? estado.segundos : Math.round((Date.now() - estado.inicio) / 1000);
    estado.segundos = segundos;
    estado.porTiempo = porTiempo;

    // Marcador
    $("porcentaje").textContent = pct + "%";
    $("fraccion").textContent = aciertos + " de " + total;
    var anillo = $("anillo-valor");
    var largo = 2 * Math.PI * 52;
    anillo.style.strokeDashoffset = largo;
    anillo.className.baseVal = "anillo-valor " + (pct >= 60 ? "bien" : "mal");
    window.setTimeout(function () {
      anillo.style.strokeDashoffset = largo * (1 - pct / 100);
    }, 60);

    // Encabezado
    var titulo, mensaje;
    if (porTiempo) {
      titulo = "Se agotó el tiempo";
      mensaje = "El intento se cerró automáticamente. Las preguntas sin responder cuentan como erradas.";
    } else if (pct >= 90) {
      titulo = "Excelente";
      mensaje = "Dominás el material. Repasá solo los temas que aparezcan flojos abajo.";
    } else if (pct >= 75) {
      titulo = "Muy bien";
      mensaje = "Buen manejo del contenido. Mirá el desglose para afinar los temas más débiles.";
    } else if (pct >= 60) {
      titulo = "Aprobado, con temas para reforzar";
      mensaje = "Alcanza, pero conviene volver sobre los temas de menor porcentaje antes de rendir.";
    } else {
      titulo = "Hay que repasar";
      mensaje = "Volvé sobre el material: en la revisión de abajo tenés la página exacta de cada tema.";
    }
    $("titulo-resultado").textContent = titulo;
    $("mensaje-resultado").textContent = mensaje;

    $("res-modo").textContent = estado.modo === "examen" ? "Examen" : "Práctica";
    $("res-modulo").textContent = NOMBRE_MODULO[estado.modulo] || estado.modulo;
    $("res-dificultad").textContent = NOMBRE_DIFICULTAD[estado.dificultad] || estado.dificultad;
    $("res-tiempo").textContent = formatearTiempo(segundos);

    pintarDesglose();
    pintarPlan();
    pintarDesgloseDificultad();
    pintarRevision("todas");

    // Reiniciar los filtros de revisión
    var filtros = $("filtros-revision").children;
    for (var i = 0; i < filtros.length; i++) {
      filtros[i].classList.toggle("activo", filtros[i].dataset.filtro === "todas");
    }

    if (!soloLectura) {
    borrarSesion();
    registrarErradas(estado.preguntas);
    guardarEnHistorial({
      fecha: new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      modulo: estado.modulo,
      modo: estado.modo,
      dificultad: estado.dificultad,
      aciertos: aciertos,
      total: total,
      detalle: copiaEstado()
    });
    }

    mostrarPantalla("pantalla-resultado");
  }

  // Construye una fila de barra: etiqueta + fracción + barra de progreso.
  function filaDesglose(etiqueta, ok, total) {
    var pct = Math.round(ok / total * 100);
    var n = nivel(pct);
    var fila = crear("div", "tema-fila");
    var cab = crear("div", "tema-cab");
    cab.appendChild(crear("span", "tema-nombre", etiqueta));
    cab.appendChild(crear("span", "tema-nota t-" + n, ok + "/" + total + "  ·  " + pct + "%"));
    var barra = crear("div", "tema-barra");
    var relleno = crear("i", "n-" + n);
    relleno.style.width = pct + "%";
    barra.appendChild(relleno);
    fila.appendChild(cab); fila.appendChild(barra);
    return fila;
  }

  function pintarDesglose() {
    var porTema = {}, orden = [];
    estado.preguntas.forEach(function (p) {
      var t = p.base.tema;
      if (!porTema[t]) { porTema[t] = { ok: 0, total: 0, modulo: p.base.modulo }; orden.push(t); }
      porTema[t].total++;
      if (p.respuesta === p.correcta) porTema[t].ok++;
    });

    orden.sort(function (a, b) {
      return (porTema[a].ok / porTema[a].total) - (porTema[b].ok / porTema[b].total);
    });

    var cont = $("desglose");
    cont.innerHTML = "";
    orden.forEach(function (t) {
      var d = porTema[t];
      var fila = filaDesglose("M" + d.modulo + " · " + t, d.ok, d.total);
      fila.appendChild(botonPracticar(t, d.modulo));
      cont.appendChild(fila);
    });
  }

  function pintarDesgloseDificultad() {
    var cont = $("desglose-dificultad");
    cont.innerHTML = "";
    var hay = false;

    NIVELES.forEach(function (d) {
      var delNivel = estado.preguntas.filter(function (p) { return p.base.dificultad === d; });
      if (!delNivel.length) return;
      hay = true;
      var ok = delNivel.filter(function (p) { return p.respuesta === p.correcta; }).length;
      cont.appendChild(filaDesglose(NOMBRE_DIFICULTAD[d], ok, delNivel.length));
    });

    // Con un solo nivel presente el bloque no aporta nada.
    $("bloque-dificultad").hidden = !hay || cont.children.length < 2;
  }

  function pintarRevision(filtro) {
    var cont = $("revision");
    cont.innerHTML = "";

    var lista = estado.preguntas
      .map(function (p, i) { return { p: p, n: i + 1 }; })
      .filter(function (o) {
        if (filtro === "erradas") return o.p.respuesta !== o.p.correcta;
        if (filtro === "marcadas") return o.p.marcada;
        return true;
      });

    if (!lista.length) {
      cont.appendChild(crear("p", "ayuda", filtro === "marcadas"
        ? "No marcaste ninguna pregunta en este intento."
        : "No hay preguntas erradas en este intento."));
      return;
    }

    lista.forEach(function (o) {
      var item = o.p, p = item.base;
      var acerto = item.respuesta === item.correcta;
      var sinResponder = item.respuesta === null;

      var caja = crear("div", "rev-item " + (acerto ? "" : (sinResponder ? "sin" : "mal")));

      var cab = crear("button", "rev-cab");
      cab.type = "button";
      cab.appendChild(crear("span", "rev-num", acerto ? "✓" : (sinResponder ? "—" : "✗")));
      var titulo = crear("span", "rev-titulo", p.pregunta);
      if (item.marcada) {
        var bandera = crear("span", "rev-bandera", "⚑");
        bandera.title = "La marcaste para revisar";
        titulo.appendChild(bandera);
      }
      cab.appendChild(titulo);
      cab.appendChild(crear("span", "rev-flecha", "▾"));

      var cuerpo = crear("div", "rev-cuerpo");
      cuerpo.hidden = true;

      if (p.diagrama && typeof DIAGRAMAS !== "undefined") {
        var svg = DIAGRAMAS.dibujar(p.diagrama);
        if (svg) {
          var cajaDg = crear("div", "diagrama diagrama-rev");
          cajaDg.innerHTML = svg;
          cuerpo.appendChild(cajaDg);
        }
      }

      var lTuya = crear("p", "rev-linea");
      lTuya.appendChild(crear("span", "rev-etq", "Tu respuesta"));
      lTuya.appendChild(crear("span", acerto ? "rev-ok" : "rev-err",
        sinResponder ? "Sin responder" : item.opciones[item.respuesta]));
      cuerpo.appendChild(lTuya);

      if (!acerto) {
        var lOk = crear("p", "rev-linea");
        lOk.appendChild(crear("span", "rev-etq", "Respuesta correcta"));
        lOk.appendChild(crear("span", "rev-ok", item.opciones[item.correcta]));
        cuerpo.appendChild(lOk);
      }

      cuerpo.appendChild(crear("p", "rev-linea rev-exp", p.explicacion));
      cuerpo.appendChild(crearReferencia(p.referencia));

      cab.addEventListener("click", function () {
        cuerpo.hidden = !cuerpo.hidden;
        caja.classList.toggle("abierto", !cuerpo.hidden);
      });

      caja.appendChild(cab); caja.appendChild(cuerpo);
      cont.appendChild(caja);
    });
  }

  /* ══════════════ ATAJOS DE TECLADO ══════════════ */

  function atajos(ev) {
    // Escape cierra el panel del material, esté donde esté el foco.
    if (ev.key === "Escape" && !$("panel").hidden) {
      ev.preventDefault(); cerrarPanel(); return;
    }
    // Con el panel abierto no deben dispararse los atajos del examen.
    if (!$("panel").hidden) return;
    if (!$("pantalla-examen").classList.contains("activa") || !estado) return;
    if (/^(INPUT|TEXTAREA)$/.test(ev.target.tagName)) return;
    if (ev.ctrlKey || ev.altKey || ev.metaKey) return;

    var k = ev.key;
    if (k >= "1" && k <= "4") {
      var i = parseInt(k, 10) - 1;
      var botones = $("opciones").children;
      if (botones[i] && !botones[i].disabled) { ev.preventDefault(); botones[i].click(); }
    } else if (k === "Enter" || k === "ArrowRight") {
      ev.preventDefault(); siguiente();
    } else if (k === "ArrowLeft") {
      ev.preventDefault(); anterior();
    } else if (k === "m" || k === "M") {
      ev.preventDefault(); alternarMarca();
    }
  }

  /* ══════════════ ARRANQUE ══════════════ */

  function fallar(mensaje) {
    document.body.innerHTML =
      "<div style='padding:60px 24px;font-family:sans-serif;max-width:640px;margin:0 auto'>" +
      "<h1>No se pudo cargar el examen</h1><p>" + mensaje + "</p></div>";
  }

  function iniciar() {
    if (typeof BANCO_M1 !== "undefined" && BANCO_M1.length) BANCO = BANCO.concat(BANCO_M1);
    if (typeof BANCO_M2 !== "undefined" && BANCO_M2.length) BANCO = BANCO.concat(BANCO_M2);

    if (!BANCO.length) {
      fallar("Verificá que los archivos <code>preguntas-m1.js</code> y " +
             "<code>preguntas-m2.js</code> estén en la misma carpeta que " +
             "<code>index.html</code>.");
      return;
    }

    pintarConteos();
    pintarDificultades();
    actualizarDisponibles();
    pintarHistorial();

    var radios = document.querySelectorAll("input[name=modulo]");
    pintarSesion();
    $("btn-continuar").addEventListener("click", continuarSesion);
    $("btn-descartar").addEventListener("click", function () {
      if (window.confirm("¿Descartar las respuestas del intento guardado?")) { borrarSesion(); pintarSesion(); }
    });
    $("btn-todos-temas").addEventListener("click", function () { temasElegidos = null; actualizarDisponibles(); });
    $("btn-ningun-tema").addEventListener("click", function () { temasElegidos = []; actualizarDisponibles(); });
    for (var r = 0; r < radios.length; r++) {
      radios[r].addEventListener("change", function () { temasElegidos = null; actualizarDisponibles(); });
    }

    $("btn-comenzar").addEventListener("click", comenzar);
    $("btn-siguiente").addEventListener("click", siguiente);
    $("btn-anterior").addEventListener("click", anterior);
    $("btn-salir").addEventListener("click", salir);
    $("btn-marcar").addEventListener("click", alternarMarca);
    $("btn-mapa").addEventListener("click", alternarMapa);

    $("btn-reintentar").addEventListener("click", function () {
      var radio = document.querySelector('input[name=modulo][value="' + estado.modulo + '"]');
      if (radio) radio.checked = true;
      document.querySelector('input[name=modo][value="' + estado.modo + '"]').checked = true;
      temasElegidos = estado.temas || null;
      dificultadElegida = estado.dificultad;
      cantidadElegida = estado.preguntas.length;
      pintarDificultades();
      actualizarDisponibles();
      comenzar();
    });
    $("btn-inicio").addEventListener("click", volverAlInicio);

    $("panel-cerrar").addEventListener("click", cerrarPanel);
    $("panel-fondo").addEventListener("click", cerrarPanel);
    $("panel-antes").addEventListener("click", function () { extenderPanel(-1); });
    $("panel-despues").addEventListener("click", function () { extenderPanel(1); });

    $("btn-borrar-historial").addEventListener("click", function () {
      if (!window.confirm("¿Borrar el historial de intentos y la lista de preguntas erradas?")) return;
      try {
        window.localStorage.removeItem(CLAVE_HISTORIAL);
        window.localStorage.removeItem(CLAVE_ERRADAS);
      } catch (e) {}
      pintarConteos();
      pintarHistorial();
      actualizarDisponibles();
    });

    var filtros = $("filtros-revision").children;
    for (var i = 0; i < filtros.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          for (var k = 0; k < filtros.length; k++) filtros[k].classList.remove("activo");
          btn.classList.add("activo");
          pintarRevision(btn.dataset.filtro);
        });
      })(filtros[i]);
    }

    document.addEventListener("keydown", atajos);

    // Evitar perder un intento en curso por un cierre accidental.
    window.addEventListener("beforeunload", function (ev) {
      if (estado && !estado.terminado) { ev.preventDefault(); ev.returnValue = ""; }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
