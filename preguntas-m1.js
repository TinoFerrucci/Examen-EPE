/* ============================================================
   Examen de Capacitación Eléctrica — EPE
   Banco de preguntas · MÓDULO 1

   90 preguntas elaboradas a partir de MODULO_1.pdf:
   conceptos eléctricos, circuitos, mediciones, clasificación
   de tensiones y métodos de trabajo.

   Las del Módulo 2 están en preguntas-m2.js. La app junta
   los dos archivos sola.

   Formato de cada pregunta:
     modulo      1
     tema        agrupador para el desglose por tema
     tipo        "teoria" o "calculo"
     dificultad  "facil", "medio" o "dificil"
     pregunta    enunciado
     opciones    4 opciones (la app las baraja en cada intento)
     correcta    índice de la opción correcta en este array
     explicacion por qué esa es la respuesta
     referencia  dónde verificarlo en el material
     diagrama    opcional, ver diagramas.js

   Las páginas son las del PDF (las que muestra el visor).
   ============================================================ */

const BANCO_M1 = [

/* ══════════════════════════════════════════════════════════
   CONCEPTOS ELÉCTRICOS (44)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué partículas se encuentran en el núcleo del átomo?",
  opciones: [
    "Protones y neutrones",
    "Protones y electrones",
    "Electrones y neutrones",
    "Únicamente electrones"
  ],
  correcta: 0,
  explicacion: "Los protones y los neutrones se encuentran en el núcleo, ubicado en el centro del átomo. Los electrones, en cambio, se mueven en órbitas alrededor del mismo.",
  referencia: "Módulo 1, pág. 5 del PDF · Modelo atómico"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "Se dice que un átomo es \"eléctricamente neutro\" cuando…",
  opciones: [
    "tiene la misma cantidad de protones que de electrones, por lo que las cargas se anulan entre sí",
    "no posee neutrones en su núcleo",
    "tiene más electrones que protones",
    "ha perdido su electrón de valencia"
  ],
  correcta: 0,
  explicacion: "Si se suman las cargas de todos los protones (positivas) y todos los electrones (negativas), el resultado da cero porque hay la misma cantidad de unas que de otras. Un átomo se considera equilibrado cuando tiene la misma cantidad de protones que de electrones.",
  referencia: "Módulo 1, pág. 5 del PDF · Modelo atómico"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "Según el ejemplo del módulo, el átomo de cobre tiene 29 protones. ¿Cuántos electrones tiene?",
  opciones: [
    "29, porque un átomo equilibrado tiene tantos electrones como protones",
    "58, el doble que los protones",
    "1, únicamente el electrón de valencia",
    "No se puede saber a partir de la cantidad de protones"
  ],
  correcta: 0,
  explicacion: "El átomo de cobre del módulo tiene 29 protones, 29 neutrones y 29 electrones. La igualdad entre protones y electrones es justamente lo que lo mantiene eléctricamente neutro.",
  referencia: "Módulo 1, pág. 5 del PDF · Átomo de cobre"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cómo se denomina, cualquiera sea su origen, la fuente capaz de separar los electrones negativos de los núcleos positivos y poner la corriente en movimiento?",
  opciones: [
    "Fuerza electromotriz (F.E.M.)",
    "Fuerza centrífuga",
    "Resistividad del material",
    "Diferencia de reluctancia"
  ],
  correcta: 0,
  explicacion: "Cualquiera sea la fuente, se la denomina Fuerza Electromotriz (F.E.M.). Puede ser de origen natural (el rayo) o generada por el ser humano: pilas y baterías por medios químicos, generadores por medios magnéticos, generadores solares y eólicos, etc.",
  referencia: "Módulo 1, pág. 6 del PDF · Fuentes de F.E.M."
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles de estas son fuentes de fuerza electromotriz mencionadas en el módulo?",
  opciones: [
    "Pilas y baterías (medios químicos), generadores (medios magnéticos), generadores solares y eólicos",
    "Únicamente las pilas y las baterías",
    "Únicamente los generadores rotativos",
    "Los aisladores y los conductores"
  ],
  correcta: 0,
  explicacion: "El módulo enumera seis fuentes de F.E.M. capaces de separar los electrones de los núcleos: por medios químicos (pilas, baterías), por medios magnéticos (generadores), y también generadores solares y eólicos. Según su generación pueden dar corriente continua o alterna.",
  referencia: "Módulo 1, pág. 6 del PDF · Fuentes de F.E.M."
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué los metales son los mejores conductores de la corriente eléctrica?",
  opciones: [
    "Porque ceden con más facilidad que otros materiales los electrones que giran en la última capa de sus átomos",
    "Porque tienen mayor cantidad de neutrones en el núcleo",
    "Porque su resistividad es más alta que la de otros materiales",
    "Porque carecen de electrones de valencia"
  ],
  correcta: 0,
  explicacion: "Los metales ceden más fácilmente que otros materiales los electrones de la última capa de sus átomos, y por eso las cargas se mueven con facilidad a través de ellos.",
  referencia: "Módulo 1, pág. 7 del PDF · Materiales conductores"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "El cobre (Cu) y el aluminio (Al) son los metales más utilizados en circuitos eléctricos porque…",
  opciones: [
    "son relativamente baratos, maleables y tienen una muy baja resistividad",
    "son los únicos metales capaces de conducir la electricidad",
    "resisten la corrosión mejor que cualquier otro material",
    "tienen la resistividad más alta entre los metales"
  ],
  correcta: 0,
  explicacion: "El módulo señala esas tres razones: precio relativamente bajo, maleabilidad y muy baja resistividad.",
  referencia: "Módulo 1, pág. 7 del PDF · Materiales conductores"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "En un conductor aéreo designado \"Al/Ac 95/15\", ¿qué indican los números?",
  opciones: [
    "95 mm² de sección de aluminio y 15 mm² de sección de acero",
    "95 m de longitud y 15 mm de diámetro",
    "95 A de corriente admisible y 15 kV de tensión nominal",
    "95 mm de diámetro exterior y 15 mm de diámetro del alma"
  ],
  correcta: 0,
  explicacion: "La designación indica la sección de cada material: 95 mm² de aluminio (Al) y 15 mm² de acero (Ac), que es el alma que le da resistencia mecánica al conductor.",
  referencia: "Módulo 1, pág. 7 del PDF · Sección del conductor"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Qué tipos de conductores utiliza la EPE según el módulo?",
  opciones: [
    "Aéreos de aluminio (desnudos, protegidos o aislados) y subterráneos de aluminio y cobre, siempre aislados",
    "Únicamente conductores aéreos desnudos de cobre",
    "Únicamente conductores subterráneos de aluminio",
    "Aéreos de cobre desnudo y subterráneos de acero aislado"
  ],
  correcta: 0,
  explicacion: "Los aéreos son de aluminio y pueden ser desnudos, protegidos o aislados. Los subterráneos son de aluminio y cobre, y siempre aislados.",
  referencia: "Módulo 1, pág. 7 del PDF · Tipos de conductores que utiliza la E.P.E."
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cuál de estos materiales figura en el módulo como AISLANTE y no como conductor?",
  opciones: [
    "Agua destilada",
    "Agua mineralizada",
    "Grafito",
    "Madera húmeda"
  ],
  correcta: 0,
  explicacion: "El agua mineralizada, el grafito y la madera húmeda están listados entre los materiales conductores. El agua destilada, en cambio, aparece entre los aislantes junto con el vidrio, la porcelana, los plásticos, la goma, la madera seca, el aceite dieléctrico y ciertos gases como el SF6.",
  referencia: "Módulo 1, págs. 7 y 8 del PDF · Conductores y aislantes"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué le ocurre a un material aislante si se le aplica una tensión suficientemente elevada?",
  opciones: [
    "La fuerza es tan grande que los electrones son arrancados de sus átomos, el aislante se rompe y aparece conducción",
    "Su resistencia aumenta hasta hacerse infinita",
    "Se convierte de forma permanente en un conductor mejor que el cobre",
    "No ocurre nada: un aislante nunca conduce, cualquiera sea la tensión"
  ],
  correcta: 0,
  explicacion: "Los aislantes oponen total resistencia al paso de la corriente, pero cuando se les aplica un voltaje suficientemente elevado los electrones son literalmente arrancados de sus átomos, el aislante se rompe y hay conducción. Por eso la aislación depende directamente del nivel de tensión.",
  referencia: "Módulo 1, pág. 8 del PDF · Materiales aislantes"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Para qué se emplean los aislantes líquidos según el módulo?",
  opciones: [
    "Para llenar espacios con dieléctrico homogéneo, disipar el calor y apagar arcos",
    "Únicamente para lubricar las partes móviles de los interruptores",
    "Para aumentar la conductividad entre los bobinados",
    "Para reemplazar al SF6 en los equipos de maniobra"
  ],
  correcta: 0,
  explicacion: "Los aislantes líquidos se usan para llenar espacios con dieléctrico homogéneo, disipar calor y apagar arcos, por ejemplo en transformadores, cables, capacitores, aisladores pasantes e interruptores. Su presencia incrementa la rigidez dieléctrica entre partes.",
  referencia: "Módulo 1, pág. 8 del PDF · Aislantes líquidos"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "Respecto de los aislantes gaseosos, ¿qué afirmación es correcta?",
  opciones: [
    "Su rigidez dieléctrica crece a medida que aumenta la presión, y el SF6 es mejor aislante que el aire",
    "Su rigidez dieléctrica disminuye a medida que aumenta la presión",
    "Tienen resistividad muy baja y grandes pérdidas dieléctricas",
    "El aire es mejor aislante que el SF6"
  ],
  correcta: 0,
  explicacion: "El aire y otros gases tienen elevadísima resistividad y están prácticamente exentos de pérdidas dieléctricas; su rigidez dieléctrica crece al aumentar la presión. El SF6, difundido desde los años 70, es mejor aislante que el aire.",
  referencia: "Módulo 1, pág. 8 del PDF · Aislantes gaseosos"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "En las redes eléctricas, ¿cuáles son las dos funciones fundamentales que cumplen los aisladores?",
  opciones: [
    "Aislar eléctricamente los conductores entre sí y aislarlos respecto a tierra o a una masa metálica",
    "Conducir la corriente de fuga y disipar el calor del conductor",
    "Elevar la tensión de la línea y reducir la corriente que circula",
    "Sostener mecánicamente el conductor y medir su temperatura"
  ],
  correcta: 0,
  explicacion: "Los aisladores permiten aislar eléctricamente los conductores entre sí, y a esos mismos conductores respecto a tierra o a una masa metálica (que puede estar actuando como soporte).",
  referencia: "Módulo 1, pág. 9 del PDF · Aisladores"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "Sobre el aislador MN12, ¿qué afirmación es correcta?",
  opciones: [
    "Se usa en disposición tipo cadena: 9 o 10 aisladores en alta tensión y 3 o 4 en media tensión",
    "Se usa siempre de a uno, cualquiera sea el nivel de tensión",
    "Se usa en disposición tipo cadena: 3 o 4 aisladores en alta tensión y 9 o 10 en media tensión",
    "Es un aislador exclusivo de baja tensión"
  ],
  correcta: 0,
  explicacion: "El MN12 se emplea en disposición tipo cadena, con 9 o 10 aisladores en redes de alta tensión y 3 o 4 en media tensión. La cantidad crece con la tensión, porque la aislación depende directamente del nivel de tensión. \"MN\" significa Material Normalizado: fueron sometidos a ensayos y garantizan pesos y medidas estándar.",
  referencia: "Módulo 1, pág. 9 del PDF · Aisladores"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿De qué depende la aislación de cualquier elemento de un circuito eléctrico?",
  opciones: [
    "Exclusivamente de la tensión, por eso en media tensión no se pueden usar aislantes para baja tensión",
    "Exclusivamente de la corriente que circula por el circuito",
    "De la potencia total conectada al circuito",
    "De la resistencia del conductor que se está aislando"
  ],
  correcta: 0,
  explicacion: "La aislación depende exclusivamente de la tensión, ya que esta es la fuerza que obliga a los electrones a moverse por el material. Es un punto de seguridad clave: en una instalación de media tensión no se pueden usar aislantes ni herramientas destinados a baja tensión.",
  referencia: "Módulo 1, págs. 9 y 11 del PDF · Aisladores y Tensión"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles son las cinco variables eléctricas que estudia el curso?",
  opciones: [
    "Tensión, intensidad de corriente, resistencia, potencia y energía",
    "Tensión, corriente, frecuencia, impedancia y reactancia",
    "Tensión, corriente, resistencia, permeabilidad y reluctancia",
    "Corriente, potencia, energía, magnetismo y frecuencia"
  ],
  correcta: 0,
  explicacion: "El módulo estudia cinco variables: tensión, intensidad de la corriente, resistencia, potencia y energía. Todas actúan en el circuito eléctrico básico.",
  referencia: "Módulo 1, pág. 10 del PDF · Variables eléctricas"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "En un circuito eléctrico, ¿por qué se dice que un artefacto conectado actúa como una \"carga\"?",
  opciones: [
    "Porque está extrayendo energía eléctrica del circuito para su funcionamiento, y representa una resistencia",
    "Porque aporta energía eléctrica al circuito",
    "Porque acumula electrones sin consumirlos",
    "Porque aumenta la tensión disponible en el circuito"
  ],
  correcta: 0,
  explicacion: "Cuando un artefacto se conecta a una línea eléctrica actúa como \"carga\" en ese circuito porque está extrayendo energía eléctrica para su funcionamiento. Cualquier dispositivo conectado representa en sí una resistencia al paso de la corriente.",
  referencia: "Módulo 1, págs. 10 y 13 del PDF · Circuito eléctrico básico"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "La tensión eléctrica, también llamada diferencia de potencial o voltaje…",
  opciones: [
    "se mide en Volt [V], se simboliza con U o V y se mide con un voltímetro",
    "se mide en Ampere [A], se simboliza con I y se mide con un amperímetro",
    "se mide en Ohm [Ω], se simboliza con R y se mide con un megóhmetro",
    "se mide en Watt [W], se simboliza con P y se mide con un watímetro"
  ],
  correcta: 0,
  explicacion: "La tensión es la \"fuerza eléctrica\" necesaria para empujar a los electrones. Su unidad es el Volt [V], se simboliza con U o V y se mide con voltímetro o con pinza voltiamperométrica con el selector en ACV, siempre con puntas de prueba.",
  referencia: "Módulo 1, pág. 11 del PDF · Tensión"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "La intensidad de la corriente eléctrica…",
  opciones: [
    "se mide en Ampere [A], se simboliza con I y se mide con amperímetro, multímetro o pinza voltiamperométrica",
    "se mide en Volt [V], se simboliza con U y se mide con voltímetro",
    "se mide en Ohm [Ω], se simboliza con R y se mide con telurímetro",
    "se mide en Watt-hora [Wh], se simboliza con E y se mide con un medidor de energía"
  ],
  correcta: 0,
  explicacion: "La corriente es el flujo de electrones que circula por un circuito, impulsado indefectiblemente por una tensión. Su unidad es el Ampere [A], se simboliza con la letra I y se mide con amperímetro, multímetro o pinza voltiamperométrica con el selector en ACA.",
  referencia: "Módulo 1, pág. 12 del PDF · Corriente"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál de estas afirmaciones sobre la corriente eléctrica es correcta?",
  opciones: [
    "Habrá corriente solo si el circuito está cerrado y existe tensión, pero puede haber tensión sin corriente",
    "Puede haber corriente sin tensión si el circuito está cerrado",
    "Si hay tensión, siempre hay corriente circulando",
    "La corriente sigue circulando aunque el circuito esté abierto"
  ],
  correcta: 0,
  explicacion: "La corriente necesita dos condiciones simultáneas: circuito cerrado y tensión que impulse los electrones. Al abrir un interruptor el flujo se interrumpe, aunque la tensión siga presente. Por eso puede haber tensión sin corriente, pero nunca corriente sin tensión.",
  referencia: "Módulo 1, pág. 12 del PDF · Corriente"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "El calentamiento que produce la corriente al interactuar con la resistencia propia del elemento receptor (por ejemplo, el filamento de una lámpara) se denomina…",
  opciones: [
    "Efecto Joule",
    "Efecto Oersted",
    "Inducción de Faraday",
    "Efecto Volta"
  ],
  correcta: 0,
  explicacion: "Se llama Efecto Joule. Es una de las dos formas en que se manifiesta la corriente; la otra es el magnetismo, presente en motores, transformadores y bobinas.",
  referencia: "Módulo 1, pág. 12 del PDF · ¿Cómo se manifiesta la corriente?"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿De qué dos formas se manifiesta la corriente eléctrica?",
  opciones: [
    "Como calor (efecto Joule) y como magnetismo (campo magnético alrededor del conductor)",
    "Como calor y como luz, únicamente",
    "Como magnetismo y como sonido",
    "Como tensión y como resistencia"
  ],
  correcta: 0,
  explicacion: "El calor se produce por la interacción de la corriente con la resistencia del receptor: es el efecto Joule. El magnetismo es el efecto físico presente en motores, transformadores y bobinas, y se debe al principio básico del electromagnetismo: si circula una corriente eléctrica se produce un campo magnético.",
  referencia: "Módulo 1, pág. 12 del PDF · ¿Cómo se manifiesta la corriente?"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "La resistencia eléctrica…",
  opciones: [
    "se mide en Ohm [Ω], se simboliza con R y se mide con megóhmetro o telurímetro",
    "se mide en Volt [V], se simboliza con R y se mide con voltímetro",
    "se mide en Ampere [A], se simboliza con I y se mide con amperímetro",
    "se mide en Watt [W], se simboliza con P y se mide con watímetro"
  ],
  correcta: 0,
  explicacion: "La resistencia es toda oposición que encuentra la corriente a su paso por un circuito cerrado. Su unidad es el Ohm [Ω], se simboliza con la letra R y se mide con megóhmetro o telurímetro.",
  referencia: "Módulo 1, pág. 13 del PDF · Resistencia"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué el módulo afirma que no existen conductores ni aislantes perfectos?",
  opciones: [
    "Porque todos los materiales, incluidos los mejores conductores, ofrecen alguna resistencia al paso de la corriente",
    "Porque todos los materiales conducen igual de bien",
    "Porque los aislantes conducen mejor que los conductores a baja tensión",
    "Porque la resistencia de un conductor es siempre exactamente cero"
  ],
  correcta: 0,
  explicacion: "Todos los materiales y elementos conocidos ofrecen mayor o menor resistencia al paso de la corriente, incluyendo los mejores conductores. Un conductor en sí representa una resistencia: en la práctica todos tienen alguna resistencia inherente debido a las propiedades del material, y por eso se calientan al circular corriente.",
  referencia: "Módulo 1, pág. 13 del PDF · Resistencia"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué se debe hacer para reducir la resistencia de un conductor?",
  opciones: [
    "Aumentar el área de su sección transversal o elegir un material de menor resistividad",
    "Aumentar su longitud",
    "Reducir el área de su sección transversal",
    "Elegir un material de mayor resistividad"
  ],
  correcta: 0,
  explicacion: "En la fórmula R = ρ · L / S, la resistencia crece con la longitud y con la resistividad, y baja al aumentar la sección. Por eso, a mayor sección menor resistencia.",
  referencia: "Módulo 1, págs. 13 y 14 del PDF · Resistencia"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "Para el mismo paso de corriente, ¿cómo son las secciones necesarias de un conductor de cobre y uno de aluminio?",
  opciones: [
    "El de cobre necesita menor sección, por ser mejor material conductor",
    "El de aluminio necesita menor sección, por ser más liviano",
    "Ambos necesitan exactamente la misma sección",
    "El de cobre necesita el doble de sección que el de aluminio"
  ],
  correcta: 0,
  explicacion: "Para el mismo paso de corriente un conductor de cobre tendrá menor sección que uno de aluminio, por ser mejor material conductor eléctrico, es decir por tener menor resistividad.",
  referencia: "Módulo 1, pág. 13 del PDF · Resistencia"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "Cuando se habla de la SECCIÓN de un conductor se hace referencia a…",
  opciones: [
    "el área de un corte transversal, y por eso se mide en mm²",
    "el diámetro del conductor, y por eso se mide en mm",
    "la longitud del conductor, y por eso se mide en m",
    "el perímetro exterior del conductor, y por eso se mide en mm"
  ],
  correcta: 0,
  explicacion: "La sección NO es el diámetro, sino el área de un corte transversal. Por eso se mide en mm² (unidad de superficie) y no en mm (unidad de distancia). Si se conoce el radio, S = π · r².",
  referencia: "Módulo 1, pág. 15 del PDF · Recuerde: sección de un conductor"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "Según la Ley de Ohm, la intensidad de corriente que circula por una resistencia es…",
  opciones: [
    "directamente proporcional a la tensión aplicada e inversamente proporcional al valor de la resistencia",
    "inversamente proporcional a la tensión y directamente proporcional a la resistencia",
    "directamente proporcional tanto a la tensión como a la resistencia",
    "independiente de la tensión aplicada"
  ],
  correcta: 0,
  explicacion: "I = U / R. Si sube la tensión, sube la corriente; si sube la resistencia, la corriente baja. Las otras dos formas de la misma ley son U = I · R y R = U / I.",
  referencia: "Módulo 1, pág. 16 del PDF · Ley de Ohm"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "En el sistema de múltiplos y submúltiplos, ¿a qué equivale el prefijo \"kilo\"?",
  opciones: [
    "A 1.000 veces la unidad: 1.000 W = 1 kW",
    "A 0,001 veces la unidad",
    "A 0,000001 veces la unidad",
    "A 100 veces la unidad"
  ],
  correcta: 0,
  explicacion: "Kilo equivale a 1.000 veces la unidad; mili a 0,001 y micro a 0,000001. Por eso 1.000 W = 1 kW, 1.000 Wh = 1 kWh, y 132.000 V se escribe como 132 kV. Cuando los valores de corriente a medir son muy pequeños se usa un miliamperímetro.",
  referencia: "Módulo 1, págs. 16 y 40 del PDF · Múltiplos y submúltiplos"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "La potencia eléctrica…",
  opciones: [
    "se mide en Watt [W], se simboliza con P y se mide con un watímetro",
    "se mide en Watt-hora [Wh], se simboliza con E y se mide con un medidor de energía",
    "se mide en Volt [V], se simboliza con U y se mide con un voltímetro",
    "se mide en Ohm [Ω], se simboliza con R y se mide con un megóhmetro"
  ],
  correcta: 0,
  explicacion: "La potencia es la capacidad de cualquier máquina de realizar un trabajo. Su unidad es el Watt [W], en honor a James Watt, se simboliza con P y se mide con watímetro. Como los valores suelen ser grandes, generalmente se usa el prefijo kilo: 1.000 W = 1 kW.",
  referencia: "Módulo 1, pág. 18 del PDF · Potencia"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cómo se determina la potencia total de un circuito con varios artefactos conectados?",
  opciones: [
    "Sumando todas las potencias de los artefactos conectados: Pt = P1 + P2 + P3…",
    "Multiplicando entre sí las potencias de todos los artefactos",
    "Tomando la potencia del artefacto de mayor consumo",
    "Dividiendo la potencia mayor por la cantidad de artefactos"
  ],
  correcta: 0,
  explicacion: "Para determinar la potencia total de un circuito se suman todas las potencias de los artefactos conectados al mismo: Pt = P1 + P2 + P3 + P4…",
  referencia: "Módulo 1, pág. 19 del PDF · Fórmula de potencia eléctrica"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "dificil",
  pregunta: "Según el ejemplo del módulo, un motor de 1 HP de potencia mecánica equivale aproximadamente a…",
  opciones: [
    "745,7 W de potencia eléctrica",
    "1.000 W de potencia eléctrica",
    "220 W de potencia eléctrica",
    "1.491,4 W de potencia eléctrica"
  ],
  correcta: 0,
  explicacion: "El módulo indica que un motor de 1 HP de potencia mecánica corresponde a 745,7 W de potencia eléctrica, y uno de 2 HP a 1.491,4 W, que es exactamente el doble. Un motor de 2 HP realiza el mismo trabajo en la mitad del tiempo que uno de 1 HP.",
  referencia: "Módulo 1, pág. 18 del PDF · Potencia eléctrica"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿En qué unidad factura EPE la energía consumida por sus usuarios?",
  opciones: [
    "En kilovatios-hora [kWh], registrados por el medidor de energía",
    "En kilovatios [kW], registrados por un watímetro",
    "En Ampere-hora [Ah]",
    "En Volt-Ampere [VA]"
  ],
  correcta: 0,
  explicacion: "La energía resulta de integrar la potencia demandada en el tiempo (E = P · t) y se expresa habitualmente en kilovatios-hora. El medidor de energía registra el consumo en kWh y la facturación se realiza sobre ese valor.",
  referencia: "Módulo 1, pág. 20 del PDF · Energía"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "Una lámpara de 60 W encendida 12 horas por día, ¿consume más o menos energía que una pava de 2.000 W usada 20 minutos por día?",
  opciones: [
    "Más: la lámpara consume 720 Wh y la pava 660 Wh",
    "Menos, porque su potencia es mucho más chica",
    "Exactamente lo mismo, porque la energía no depende del tiempo",
    "Menos: la lámpara consume 60 Wh y la pava 2.000 Wh"
  ],
  correcta: 0,
  explicacion: "La energía depende de la potencia Y del tiempo: E = P · t. Lámpara: 60 W · 12 h = 720 Wh. Pava: 2.000 W · 0,33 h = 660 Wh. Aunque la pava tiene mucha más potencia, funciona tan poco tiempo que consume menos energía que la lámpara.",
  referencia: "Módulo 1, pág. 21 del PDF · ¿Cuál consume más energía?"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "Calculá la resistencia de un conductor de cobre (ρ = 0,018 Ω·mm²/m) de 200 m de longitud y 4 mm² de sección.",
  opciones: [
    "0,9 Ω",
    "9 Ω",
    "0,09 Ω",
    "1,8 Ω"
  ],
  correcta: 0,
  explicacion: "R = ρ · L / S = 0,018 · 200 / 4 = 3,6 / 4 = 0,9 Ω. Cuidado con dividir por la sección: si se olvida, da 3,6 Ω.",
  referencia: "Módulo 1, pág. 14 del PDF · Cálculo de resistencia de un conductor"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un conductor tiene 2 mm de diámetro. ¿Cuál es su sección?",
  opciones: [
    "3,14 mm²",
    "2 mm²",
    "12,57 mm²",
    "6,28 mm²"
  ],
  correcta: 0,
  explicacion: "La sección es el área del corte transversal: S = π · r². El radio es la mitad del diámetro, o sea 1 mm. Entonces S = π · 1² = 3,14 mm². El error clásico es usar el diámetro como si fuera el radio, lo que da 12,57 mm², es decir cuatro veces más.",
  referencia: "Módulo 1, pág. 15 del PDF · Recuerde: sección de un conductor"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Dos carretes de 200 m de longitud y 3 mm² de sección, uno de cobre (ρ = 0,0172 Ω·mm²/m) y otro de aluminio (ρ = 0,0275 Ω·mm²/m). ¿Cuál es la diferencia entre sus resistencias?",
  opciones: [
    "0,69 Ω (cobre 1,15 Ω y aluminio 1,83 Ω)",
    "0,69 Ω (cobre 1,83 Ω y aluminio 1,15 Ω)",
    "2,98 Ω, que es la suma de ambas",
    "No hay diferencia: la longitud y la sección son iguales"
  ],
  correcta: 0,
  explicacion: "Cobre: R = 0,0172 · 200 / 3 = 1,15 Ω. Aluminio: R = 0,0275 · 200 / 3 = 1,83 Ω. Diferencia: 1,83 − 1,15 = 0,68 Ω (redondeando, 0,69 Ω). El aluminio tiene más resistencia porque su resistividad es mayor: a igual longitud y sección, el peor conductor da más ohm.",
  referencia: "Módulo 1, págs. 15 y 23 del PDF · Ejercicios de resistencia de conductores, ejercicio 10"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "facil",
  pregunta: "¿Qué corriente circula por una estufa eléctrica de 160 Ω conectada a una red de 220 V?",
  opciones: [
    "1,375 A",
    "0,73 A",
    "13,75 A",
    "35.200 A"
  ],
  correcta: 0,
  explicacion: "I = U / R = 220 / 160 = 1,375 A. Si el resultado da 0,73 A es porque se dividió al revés (R / U), y 35.200 A surge de multiplicar en lugar de dividir.",
  referencia: "Módulo 1, págs. 17 y 23 del PDF · Ejercicios Ley de Ohm, ejercicio 1"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "Una plancha eléctrica consume 1,2 A conectada a 220 V. ¿Cuál es el valor de su resistencia?",
  opciones: [
    "183,3 Ω",
    "264 Ω",
    "0,0054 Ω",
    "22 Ω"
  ],
  correcta: 0,
  explicacion: "R = U / I = 220 / 1,2 = 183,3 Ω. El valor 264 Ω corresponde a multiplicar U · I, que da la potencia (264 W), no la resistencia.",
  referencia: "Módulo 1, págs. 17 y 23 del PDF · Ejercicios Ley de Ohm, ejercicio 2"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "Sobre una misma resistencia, la intensidad de la corriente se reduce a la mitad. ¿Qué le ocurre a la caída de tensión?",
  opciones: [
    "También se reduce a la mitad",
    "Se duplica",
    "No cambia, porque la resistencia es la misma",
    "Se reduce a la cuarta parte"
  ],
  correcta: 0,
  explicacion: "Como U = I · R y la resistencia no cambia, la tensión es directamente proporcional a la corriente. Si I se reduce a la mitad, U también se reduce a la mitad.",
  referencia: "Módulo 1, págs. 17 y 23 del PDF · Ejercicios Ley de Ohm, ejercicio 10"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "facil",
  pregunta: "Un aire acondicionado conectado a 220 V consume 6 A. ¿Cuál es su potencia?",
  opciones: [
    "1.320 W (1,32 kW)",
    "36,7 W",
    "226 W",
    "13.200 W"
  ],
  correcta: 0,
  explicacion: "P = U · I = 220 · 6 = 1.320 W, es decir 1,32 kW. Como los valores de potencia suelen ser grandes, se usa habitualmente el prefijo kilo: 1.000 W = 1 kW.",
  referencia: "Módulo 1, pág. 19 del PDF · Fórmula de potencia eléctrica"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Una aspiradora de coche funciona a 12 V y tiene una potencia de 100 W. ¿Qué corriente absorbe y qué resistencia presenta?",
  opciones: [
    "I = 8,33 A y R = 1,44 Ω",
    "I = 1.200 A y R = 0,01 Ω",
    "I = 0,12 A y R = 100 Ω",
    "I = 8,33 A y R = 8,33 Ω"
  ],
  correcta: 0,
  explicacion: "Primero la corriente: I = P / U = 100 / 12 = 8,33 A. Después la resistencia con la Ley de Ohm: R = U / I = 12 / 8,33 = 1,44 Ω. Son dos pasos encadenados: el resultado del primero es dato del segundo.",
  referencia: "Módulo 1, págs. 22 y 23 del PDF · Ejercicios de potencia y energía, ejercicio 7"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Por una estufa eléctrica de 60 Ω circula una corriente de 1,5 A durante 3 horas. ¿Qué energía consume?",
  opciones: [
    "0,405 kWh",
    "0,27 kWh",
    "4,05 kWh",
    "0,18 kWh"
  ],
  correcta: 0,
  explicacion: "Hay que encadenar tres pasos. Tensión: U = I · R = 1,5 · 60 = 90 V. Potencia: P = U · I = 90 · 1,5 = 135 W. Energía: E = P · t = 135 W · 3 h = 405 Wh = 0,405 kWh. El error habitual es equivocarse en la coma al pasar de Wh a kWh.",
  referencia: "Módulo 1, pág. 22 del PDF · Ejercicios de potencia y energía, ejercicio 3"
},

{
  modulo: 1, tema: "Conceptos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Se climatiza un aula con dos equipos de aire acondicionado de 4.000 W cada uno, durante las 4,5 horas que dura la clase. Si el kWh cuesta $0,16, ¿cuál es el costo de la energía consumida?",
  opciones: [
    "36 kWh → $5,76",
    "18 kWh → $2,88",
    "8 kWh → $1,28",
    "36.000 kWh → $5.760"
  ],
  correcta: 0,
  explicacion: "Potencia total: 2 · 4.000 W = 8.000 W = 8 kW. Energía: E = P · t = 8 kW · 4,5 h = 36 kWh. Costo: 36 · $0,16 = $5,76. El error típico es olvidar que son dos equipos, lo que da la mitad.",
  referencia: "Módulo 1, págs. 22 y 23 del PDF · Ejercicios de potencia y energía, ejercicio 8"
},

/* ══════════════════════════════════════════════════════════
   CIRCUITOS ELÉCTRICOS (18)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "En un circuito en serie, ¿qué magnitud permanece constante a lo largo de todo el circuito?",
  opciones: [
    "La corriente: todas las resistencias son recorridas por la misma corriente",
    "La tensión: todas las resistencias tienen la misma caída de tensión",
    "La resistencia: todas las resistencias valen lo mismo",
    "La potencia: todas las resistencias disipan lo mismo"
  ],
  correcta: 0,
  explicacion: "En serie hay un único camino para la corriente, por lo que I es constante (siempre el mismo valor) y todas las resistencias son recorridas por ella. Lo que se reparte es la tensión.",
  referencia: "Módulo 1, pág. 25 del PDF · Circuito serie",
  diagrama: { tipo: "serie", r: ["R1", "R2", "R3"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué establece la 2ª Ley de Kirchhoff?",
  opciones: [
    "La suma de todas las caídas de tensión en un circuito en serie es igual a la tensión total suministrada",
    "La suma de todas las corrientes que entran a un nodo es igual a la suma de las que salen",
    "La resistencia total de un circuito en serie es la inversa de la suma de las inversas",
    "La tensión aplicada a cada resistencia en paralelo es la misma que la de la fuente"
  ],
  correcta: 0,
  explicacion: "La 2ª Ley de Kirchhoff se aplica al circuito serie: Ut = U1 + U2 + U3… La opción de las corrientes en un nodo corresponde a la 1ª Ley, que se aplica al circuito paralelo.",
  referencia: "Módulo 1, pág. 25 del PDF · Circuito serie, 2ª Ley de Kirchhoff",
  diagrama: { tipo: "serie", r: ["U1", "U2", "U3"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "En un circuito en serie se quema una de las lámparas. ¿Qué ocurre con las demás?",
  opciones: [
    "Se apagan todas, porque se interrumpe el único camino que tiene la corriente",
    "Siguen funcionando normalmente, porque son independientes",
    "Aumentan su brillo, porque reciben más tensión",
    "Solo se apaga la lámpara siguiente a la que se quemó"
  ],
  correcta: 0,
  explicacion: "En serie hay un solo camino para la corriente, así que al cortarse en cualquier punto el flujo deja de circular por todo el circuito y se apagan todas. Esto es exactamente lo contrario de lo que ocurre en paralelo, donde cada rama es independiente.",
  referencia: "Módulo 1, págs. 12, 25 y 26 del PDF · Circuito serie y circuito paralelo",
  diagrama: { tipo: "serie", r: ["L1", "L2", "L3"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "En un circuito en serie con resistencias de distinto valor, ¿en cuál se produce la mayor caída de tensión?",
  opciones: [
    "En la de mayor resistencia, porque la corriente es la misma en todas y U = I · R",
    "En la de menor resistencia",
    "En todas por igual, porque están en serie",
    "En la que está más cerca de la fuente"
  ],
  correcta: 0,
  explicacion: "En serie la corriente es la misma para todas las resistencias. Como U = I · R, con I fija la caída de tensión es directamente proporcional a R: cuanto mayor la resistencia, mayor su caída. La suma de todas las caídas da la tensión total (2ª Ley de Kirchhoff).",
  referencia: "Módulo 1, págs. 16 y 25 del PDF · Ley de Ohm y circuito serie",
  diagrama: { tipo: "serie", r: ["2 Ω", "6 Ω", "4 Ω"], u: "24 V" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Por qué en un circuito en paralelo, si se quema una lámpara, las demás siguen funcionando?",
  opciones: [
    "Porque cada una de las corrientes es independiente del resto, y todas reciben la misma tensión de la fuente",
    "Porque la corriente es constante en todo el circuito",
    "Porque la resistencia equivalente aumenta al quemarse una lámpara",
    "Porque la tensión se reparte entre todas las lámparas"
  ],
  correcta: 0,
  explicacion: "En paralelo las cargas son independientes entre sí: cada rama tiene su propia corriente y todas están sometidas a la misma tensión, la de la fuente de alimentación (U = constante).",
  referencia: "Módulo 1, pág. 26 del PDF · Circuito paralelo",
  diagrama: { tipo: "paralelo", r: ["R1", "R2", "R3"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cómo se calcula la resistencia equivalente de un circuito en paralelo?",
  opciones: [
    "La inversa de la resistencia equivalente es igual a la suma de las inversas de cada resistencia",
    "Sumando directamente todas las resistencias",
    "Restando la menor resistencia de la mayor",
    "Multiplicando todas las resistencias entre sí"
  ],
  correcta: 0,
  explicacion: "1/Rt = 1/R1 + 1/R2 + … + 1/Rn. Sumar directamente corresponde al circuito serie (Rt = R1 + R2 + R3…).",
  referencia: "Módulo 1, pág. 26 del PDF · Circuito paralelo, resistencia equivalente",
  diagrama: { tipo: "paralelo", r: ["R1", "R2", "R3"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué la resistencia equivalente de un circuito en paralelo siempre resulta menor que la más chica de las resistencias conectadas?",
  opciones: [
    "Porque cada rama nueva agrega otro camino para la corriente, y más caminos significan menos oposición total",
    "Porque las resistencias en paralelo se restan entre sí",
    "Porque la tensión se reparte entre las ramas",
    "No es cierto: la equivalente siempre es mayor que la más grande"
  ],
  correcta: 0,
  explicacion: "Al conectar resistencias en paralelo se agregan caminos alternativos para la corriente. Cuantos más caminos, menor es la oposición total del conjunto, y por eso 1/Rt = 1/R1 + 1/R2 + … da siempre un valor menor que la resistencia más chica. Es un buen control rápido: si el resultado dio mayor que la más chica, el cálculo está mal.",
  referencia: "Módulo 1, pág. 26 del PDF · Circuito paralelo",
  diagrama: { tipo: "paralelo", r: ["10 Ω", "15 Ω"], u: "U" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué es un circuito mixto?",
  opciones: [
    "Un circuito que combina resistencias asociadas en serie con resistencias asociadas en paralelo",
    "Un circuito que combina corriente continua con corriente alterna",
    "Un circuito con conductores de cobre y de aluminio a la vez",
    "Un circuito con dos fuentes de alimentación distintas"
  ],
  correcta: 0,
  explicacion: "Se llama mixto al circuito que contiene resistencias asociadas en serie y resistencias asociadas en paralelo. Para hallar su resistencia equivalente primero hay que identificar cómo están interconectados los elementos, resolver esa porción, redibujar y repetir el procedimiento tantas veces como sea necesario.",
  referencia: "Módulo 1, pág. 27 del PDF · Circuito mixto",
  diagrama: { tipo: "mixto", r1: "R1", r2: "R2", r3: "R3", r4: "R4", u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "facil",
  pregunta: "Un circuito en serie tiene cuatro resistencias: R1 = 5 Ω, R2 = 10 Ω, R3 = 20 Ω y R4 = 15 Ω. ¿Cuál es la resistencia equivalente?",
  opciones: [
    "50 Ω",
    "2,4 Ω",
    "12,5 Ω",
    "35 Ω"
  ],
  correcta: 0,
  explicacion: "En serie, Rt = R1 + R2 + R3 + R4 = 5 + 10 + 20 + 15 = 50 Ω. El valor 2,4 Ω correspondería a calcularlas en paralelo por error.",
  referencia: "Módulo 1, pág. 28 del PDF · Ejercicios de resistencias equivalentes, ejercicio 1",
  diagrama: { tipo: "serie", r: ["R1 = 5 Ω", "R2 = 10 Ω", "R3 = 20 Ω", "R4 = 15 Ω"], u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "En un circuito serie alimentado con Ut = 15 V hay cinco resistencias. Las caídas de tensión medidas son U1 = 2 V, U2 = 3 V, U3 = 5 V y U4 = 3 V. ¿Cuánto vale U5?",
  opciones: [
    "2 V",
    "5 V",
    "13 V",
    "15 V"
  ],
  correcta: 0,
  explicacion: "Por la 2ª Ley de Kirchhoff, Ut = U1 + U2 + U3 + U4 + U5. Entonces U5 = 15 − (2 + 3 + 5 + 3) = 15 − 13 = 2 V.",
  referencia: "Módulo 1, pág. 28 del PDF · Verificar la 2ª ley de Kirchhoff, ejercicio 2",
  diagrama: { tipo: "serie", r: ["U1 = 2 V", "U2 = 3 V", "U3 = 5 V", "U4 = 3 V"], u: "Ut = 15 V" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "Dos resistencias de 10 Ω y 15 Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
  opciones: [
    "6 Ω",
    "25 Ω",
    "12,5 Ω",
    "150 Ω"
  ],
  correcta: 0,
  explicacion: "1/Rt = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6, por lo tanto Rt = 6 Ω. Nótese que el resultado es menor que la resistencia más chica (10 Ω), como siempre ocurre en paralelo. Sumarlas (25 Ω) sería el cálculo de un circuito serie.",
  referencia: "Módulo 1, págs. 26 y 27 del PDF · Circuito paralelo y circuito mixto",
  diagrama: { tipo: "paralelo", r: ["10 Ω", "15 Ω"], u: "U" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "facil",
  pregunta: "Dos resistencias iguales de 20 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
  opciones: [
    "10 Ω, la mitad del valor de una de ellas",
    "40 Ω, la suma de las dos",
    "20 Ω, el mismo valor de cada una",
    "400 Ω, el producto de las dos"
  ],
  correcta: 0,
  explicacion: "1/Rt = 1/20 + 1/20 = 2/20 = 1/10, entonces Rt = 10 Ω. Cuando dos resistencias iguales se conectan en paralelo, la equivalente es siempre la mitad de una de ellas. Sumarlas daría 40 Ω, que es el cálculo del circuito serie.",
  referencia: "Módulo 1, pág. 26 del PDF · Circuito paralelo, resistencia equivalente",
  diagrama: { tipo: "paralelo", r: ["20 Ω", "20 Ω"], u: "U" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "medio",
  pregunta: "Una fuente de 30 V alimenta en paralelo dos resistencias de 10 Ω y 15 Ω. ¿Cuál es la corriente total que entrega la fuente?",
  opciones: [
    "5 A",
    "1,2 A",
    "2 A",
    "3 A"
  ],
  correcta: 0,
  explicacion: "En paralelo cada resistencia recibe los 30 V completos: I1 = 30/10 = 3 A e I2 = 30/15 = 2 A. Por la 1ª Ley de Kirchhoff, It = I1 + I2 = 5 A. También se llega al mismo valor con la resistencia equivalente: It = 30 / 6 = 5 A.",
  referencia: "Módulo 1, pág. 26 del PDF · Circuito paralelo, 1ª Ley de Kirchhoff",
  diagrama: { tipo: "paralelo", r: ["10 Ω", "15 Ω"], u: "30 V" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "facil",
  pregunta: "A un nodo entran 12 A y salen por dos ramas: por una circulan 7 A. ¿Cuánto circula por la otra?",
  opciones: [
    "5 A",
    "19 A",
    "12 A",
    "7 A"
  ],
  correcta: 0,
  explicacion: "Por la 1ª Ley de Kirchhoff, la suma de todas las corrientes que entran a un nodo es igual a la suma de todas las que salen: 12 = 7 + I2, entonces I2 = 5 A.",
  referencia: "Módulo 1, págs. 26 y 29 del PDF · 1ª Ley de Kirchhoff"
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Tres resistencias de 10 Ω, 15 Ω y 30 Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
  opciones: [
    "5 Ω",
    "55 Ω",
    "18,3 Ω",
    "6 Ω"
  ],
  correcta: 0,
  explicacion: "Conviene llevar todo a un denominador común: 1/Rt = 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5, entonces Rt = 5 Ω. Un error muy común es olvidar el último paso e informar 1/5 como si fuera el resultado. Control rápido: 5 Ω es menor que 10 Ω, la más chica, así que el valor es coherente.",
  referencia: "Módulo 1, págs. 26 y 29 del PDF · Circuito paralelo, resistencia equivalente",
  diagrama: { tipo: "paralelo", r: ["10 Ω", "15 Ω", "30 Ω"], u: "U" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un circuito serie de 24 V tiene R1 = 2 Ω, R2 = 6 Ω y R3 = 4 Ω. ¿Cuál es la caída de tensión en R2?",
  opciones: [
    "12 V",
    "8 V",
    "4 V",
    "24 V"
  ],
  correcta: 0,
  explicacion: "Van tres pasos. Resistencia equivalente: Rt = 2 + 6 + 4 = 12 Ω. Corriente (la misma en todo el circuito): I = 24 / 12 = 2 A. Caída en R2: U2 = I · R2 = 2 · 6 = 12 V. Verificación con la 2ª Ley de Kirchhoff: U1 + U2 + U3 = 4 + 12 + 8 = 24 V, la tensión total.",
  referencia: "Módulo 1, págs. 25 y 28 del PDF · Circuito serie, ejercicio 3",
  diagrama: { tipo: "serie", r: ["R1 = 2 Ω", "R2 = 6 Ω", "R3 = 4 Ω"], u: "24 V" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "En ese mismo circuito serie de 24 V (R1 = 2 Ω, R2 = 6 Ω, R3 = 4 Ω, con I = 2 A), ¿qué potencia disipa R2?",
  opciones: [
    "24 W",
    "12 W",
    "48 W",
    "6 W"
  ],
  correcta: 0,
  explicacion: "La caída en R2 es U2 = I · R2 = 2 · 6 = 12 V, y la corriente es 2 A. Entonces P2 = U2 · I = 12 · 2 = 24 W. Como control: la potencia total es Pt = 24 V · 2 A = 48 W, y la suma de las individuales (8 + 24 + 16) da exactamente 48 W.",
  referencia: "Módulo 1, págs. 19 y 28 del PDF · Potencia y ejercicio 3",
  diagrama: { tipo: "serie", r: ["R1 = 2 Ω", "R2 = 6 Ω", "R3 = 4 Ω"], u: "24 V" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "En el circuito del esquema, R3 y R4 están en serie entre sí; ese conjunto está en paralelo con R2, y todo eso en serie con R1. ¿Cuál es la resistencia equivalente total?",
  opciones: [
    "10 Ω",
    "29 Ω",
    "6 Ω",
    "15 Ω"
  ],
  correcta: 0,
  explicacion: "Se resuelve por pasos: (1) R3 + R4 = 6 + 9 = 15 Ω. (2) Esos 15 Ω en paralelo con R2 = 10 Ω: 1/Req = 1/10 + 1/15 → Req = 6 Ω. (3) Ese resultado en serie con R1: 6 + 4 = 10 Ω. Sumar todo directamente daría 29 Ω, que ignora la conexión en paralelo.",
  referencia: "Módulo 1, pág. 27 del PDF · Circuito mixto",
  diagrama: { tipo: "mixto", r1: "R1 = 4 Ω", r2: "R2 = 10 Ω", r3: "R3 = 6 Ω", r4: "R4 = 9 Ω", u: "Ut" }
},

{
  modulo: 1, tema: "Circuitos eléctricos", tipo: "calculo", dificultad: "dificil",
  pregunta: "En el circuito del esquema, R3 y R4 están en serie; ese conjunto en paralelo con R2, y todo en serie con R1. ¿Cuál es la resistencia equivalente total?",
  opciones: [
    "20 Ω",
    "50 Ω",
    "10 Ω",
    "30 Ω"
  ],
  correcta: 0,
  explicacion: "Paso a paso: (1) R3 + R4 = 5 + 15 = 20 Ω. (2) Esos 20 Ω en paralelo con R2 = 20 Ω: al ser dos valores iguales en paralelo, la equivalente es la mitad, 10 Ω. (3) En serie con R1: 10 + 10 = 20 Ω. La clave siempre es resolver primero la asociación más interna y volver a empezar con el circuito redibujado.",
  referencia: "Módulo 1, pág. 27 del PDF · Circuito mixto",
  diagrama: { tipo: "mixto", r1: "R1 = 10 Ω", r2: "R2 = 20 Ω", r3: "R3 = 5 Ω", r4: "R4 = 15 Ω", u: "Ut" }
},

/* ══════════════════════════════════════════════════════════
   MEDICIONES ELÉCTRICAS (12)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué caracteriza a la corriente continua (C.C. o DC)?",
  opciones: [
    "La tensión es constante en el tiempo y la corriente circula siempre en el mismo sentido",
    "La tensión varía en forma senoidal y la corriente cambia de sentido periódicamente",
    "La tensión es constante pero la corriente invierte su sentido periódicamente",
    "Tanto la tensión como la corriente varían cíclicamente"
  ],
  correcta: 0,
  explicacion: "En corriente continua la tensión no varía con el tiempo y la corriente es siempre la misma y se mueve siempre en el mismo sentido. Por eso el polo positivo y el negativo son siempre los mismos. La producen las pilas, las baterías y las dinamos.",
  referencia: "Módulo 1, pág. 31 del PDF · Corriente continua"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Quién produce la corriente alterna y qué forma de onda genera?",
  opciones: [
    "Los alternadores, que por electromagnetismo e inducción producen una onda de tensión senoidal",
    "Las pilas y baterías, que producen una onda cuadrada",
    "Las dinamos, que producen una tensión constante",
    "Los transformadores, que producen una onda triangular"
  ],
  correcta: 0,
  explicacion: "La corriente alterna es producida por los alternadores (generadores de corriente alterna) y es la que se genera en las centrales eléctricas. Gracias al electromagnetismo y la inducción electromagnética, el giro del alternador produce una onda de tensión senoidal o sinusoidal.",
  referencia: "Módulo 1, pág. 31 del PDF · Corriente alterna"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "medio",
  pregunta: "Para medir corriente con una pinza voltiamperométrica, ¿cómo se procede?",
  opciones: [
    "Se coloca el selector en ACA y se abraza el conductor con la pinza, sin interrumpir el circuito; la medición es en serie",
    "Se coloca el selector en ACV y se usan las puntas de prueba en paralelo al circuito",
    "Se corta el conductor y se intercalan las puntas de prueba en el corte",
    "Se abrazan todos los conductores del circuito a la vez con la pinza"
  ],
  correcta: 0,
  explicacion: "El selector va en ACA (Altern Courrent Ampere) y se abraza el conductor con la pinza; el gran valor del instrumento es que permite medir intensidades en conductores activos sin necesidad de interrumpir el circuito. La medición de corriente se realiza en serie al circuito.",
  referencia: "Módulo 1, págs. 34 y 35 del PDF · Medición de corriente"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cómo hace la pinza voltiamperométrica para medir la corriente sin tocar el conductor?",
  opciones: [
    "Se abre la pinza para que el cable quede dentro del campo magnético que genera la corriente que circula por él",
    "Mide la temperatura que el conductor alcanza por efecto Joule",
    "Mide la caída de tensión entre los dos extremos de la pinza",
    "Inyecta una corriente de prueba en el conductor y mide la respuesta"
  ],
  correcta: 0,
  explicacion: "Es tan sencillo como abrir la pinza para que el cable (un solo polo) quede dentro del campo magnético. La corriente que circula genera un campo magnético alrededor del conductor, y el instrumento lo lee. Es una de las pocas aplicaciones técnicas del campo de un conductor recto.",
  referencia: "Módulo 1, pág. 32 del PDF · ¿Qué es una pinza voltiamperométrica?"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "medio",
  pregunta: "Para medir tensión con una pinza voltiamperométrica, ¿cómo se procede?",
  opciones: [
    "Con las puntas de prueba y el selector en ACV, siempre en paralelo al circuito",
    "Con la pinza abrazando el conductor y el selector en ACA, en serie al circuito",
    "Con las puntas de prueba y el selector en ACV, siempre en serie al circuito",
    "Con la pinza abrazando fase y neutro simultáneamente"
  ],
  correcta: 0,
  explicacion: "Toda medición de tensión se realiza en paralelo al circuito, con las puntas de prueba y el selector en ACV (Altern Courrent Voltage).",
  referencia: "Módulo 1, págs. 36 y 37 del PDF · Medición de tensión"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuál es el modo correcto de colocar las puntas de prueba para medir tensión?",
  opciones: [
    "Roja en la fase y negra en la referencia de tierra, aunque invertirlas no le produce problemas al equipo",
    "Roja en la fase y negra en la referencia de tierra; invertirlas destruye el instrumento",
    "Las dos puntas en la misma fase",
    "Roja en tierra y negra en la fase, siempre en ese orden"
  ],
  correcta: 0,
  explicacion: "El modo correcto es rojo para la fase y negro para la referencia de tierra, pero si se colocan de otra manera no se produce ningún problema al equipo. Es una convención de lectura, no una restricción del instrumento.",
  referencia: "Módulo 1, pág. 37 del PDF · Medición de tensión"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "dificil",
  pregunta: "Si con la pinza voltiamperométrica se abrazan a la vez los conductores de fase y neutro de un circuito monofásico, ¿qué valor se lee?",
  opciones: [
    "0, porque las corrientes de ida y de retorno se anulan",
    "El doble de la corriente real del circuito",
    "La corriente correcta del circuito",
    "La mitad de la corriente real del circuito"
  ],
  correcta: 0,
  explicacion: "Al abrazar fase y neutro juntos el valor será 0. Lo mismo ocurre en un circuito trifásico si se abrazan las fases y el neutro. La pinza debe encerrar un solo conductor por vez. También hay que confirmar que las pinzas queden correctamente cerradas: si no, habrá errores en la medición.",
  referencia: "Módulo 1, pág. 35 del PDF · Medición de corriente"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "medio",
  pregunta: "Si el instrumento muestra las letras \"OL\" en el display, ¿qué significa y qué hay que hacer?",
  opciones: [
    "Está fuera de escala: hay que colocar una escala menor",
    "Está fuera de escala: hay que colocar una escala mayor",
    "La batería está agotada: hay que reemplazarla",
    "La medición quedó fijada: hay que presionar DATA HOLD para liberarla"
  ],
  correcta: 0,
  explicacion: "\"OL\" indica que la escala seleccionada es muy grande respecto del valor medido, por lo que se deberá colocar una escala menor.",
  referencia: "Módulo 1, págs. 34 y 36 del PDF · Modo de uso"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "medio",
  pregunta: "Al seleccionar la escala de medición, ¿cuál es la regla que indica el módulo?",
  opciones: [
    "Empezar siempre con una magnitud mayor a la que se estima medir, e ir bajando",
    "Empezar siempre con la magnitud más chica e ir subiendo",
    "Elegir directamente la escala exacta del valor esperado",
    "La escala no influye: el instrumento se ajusta solo"
  ],
  correcta: 0,
  explicacion: "Se selecciona la magnitud teniendo en cuenta los valores aproximados a medir, y siempre se empieza con una magnitud mayor. Si la escala resulta demasiado grande, el display muestra \"OL\" y recién ahí se baja a una escala menor. Arrancar por la escala mayor protege al instrumento.",
  referencia: "Módulo 1, págs. 34 y 36 del PDF · Modo de uso"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Para qué sirve la tecla DATA HOLD del instrumento?",
  opciones: [
    "Para fijar en el display la magnitud medida",
    "Para cambiar automáticamente de escala",
    "Para apagar el instrumento y ahorrar batería",
    "Para alternar entre corriente continua y alterna"
  ],
  correcta: 0,
  explicacion: "El instrumento posee una tecla DATA HOLD que permite fijar en el display la magnitud medida. Es útil cuando hay que leer el valor en un lugar incómodo, donde no se puede mirar la pantalla al mismo tiempo que se toma la medición.",
  referencia: "Módulo 1, pág. 35 del PDF · Medición de corriente"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "facil",
  pregunta: "Si en el selector del instrumento figura DCV, ¿qué se está por medir?",
  opciones: [
    "Tensión en corriente continua (Direct Courrent Voltage)",
    "Corriente en continua",
    "Tensión en corriente alterna",
    "Resistencia de aislación"
  ],
  correcta: 0,
  explicacion: "DCV corresponde a Direct Courrent Voltage, es decir tensión de corriente continua. Algunos modelos de pinza voltiamperométrica permiten medir corriente continua además de alterna. Para alterna las siglas son ACV (tensión) y ACA (corriente).",
  referencia: "Módulo 1, págs. 34, 36 y 37 del PDF · Modo de uso"
},

{
  modulo: 1, tema: "Mediciones eléctricas", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es la diferencia principal entre un multímetro y una pinza voltiamperométrica?",
  opciones: [
    "El multímetro está pensado para medir voltaje y la pinza para medir corrientes sin desconectar cables, lo que la hace más segura y fácil de usar",
    "El multímetro solo mide corriente y la pinza solo mide tensión",
    "La pinza es un instrumento analógico y el multímetro siempre digital",
    "El multímetro puede medir sin interrumpir el circuito y la pinza no"
  ],
  correcta: 0,
  explicacion: "El multímetro sirve principalmente para medir voltaje, con capacidades extras para corriente. La pinza hace lo contrario: mide corrientes muy bien pero no es tan potente para voltajes. Además, la pinza es más segura y fácil de usar porque no requiere desconectar cables, y cumple también todas las funciones de un multímetro.",
  referencia: "Módulo 1, pág. 33 del PDF · Diferencia entre pinza y multímetro"
},

/* ══════════════════════════════════════════════════════════
   CLASIFICACIÓN DE TENSIONES (8)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se definen la tensión simple y la tensión compuesta?",
  opciones: [
    "Simple es la tensión entre fase y neutro; compuesta es la tensión entre fases",
    "Simple es la tensión entre fases; compuesta es la tensión entre fase y neutro",
    "Simple es la de baja tensión; compuesta es la de media y alta tensión",
    "Simple es la de corriente continua; compuesta es la de corriente alterna"
  ],
  correcta: 0,
  explicacion: "Se llama tensión simple a los valores entre fase y neutro, y tensión compuesta a los valores entre fases. En baja tensión: 220 V es la simple y 380 V la compuesta.",
  referencia: "Módulo 1, pág. 40 del PDF · Clasificación de tensiones"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Por qué etapas está conformado el sistema eléctrico?",
  opciones: [
    "Generación, transmisión y distribución",
    "Generación, medición y facturación",
    "Producción, aislación y consumo",
    "Transmisión, transformación y compensación"
  ],
  correcta: 0,
  explicacion: "El sistema eléctrico se conforma por generación, transmisión y distribución, más la administración. Desde la generación hasta la distribución, la operación del sistema se realiza con tensión trifásica.",
  referencia: "Módulo 1, pág. 39 del PDF · Sistema eléctrico"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es la principal justificación para operar el sistema eléctrico con tensión trifásica, además de reducir pérdidas en la transmisión?",
  opciones: [
    "Se gana en potencia: la potencia con tensión trifásica es tres veces mayor que la del mismo sistema en monofásica",
    "Se necesita un solo conductor en lugar de tres",
    "Permite eliminar por completo la necesidad de transformadores",
    "Reduce la tensión a la mitad manteniendo la misma potencia"
  ],
  correcta: 0,
  explicacion: "P (tensión trifásica) = 3 × P (tensión monofásica). En el sistema eléctrico de potencia, desde la generación hasta la distribución, la operación se realiza con tensión trifásica.",
  referencia: "Módulo 1, pág. 39 del PDF · Sistema eléctrico"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué determina que un cliente se alimente con tensión monofásica o trifásica?",
  opciones: [
    "Las cargas que se tengan que alimentar: en general las viviendas son monofásicas y las industrias trifásicas",
    "La distancia a la estación transformadora más cercana",
    "El nivel de tensión de la red de transmisión",
    "La cantidad de medidores instalados en el domicilio"
  ],
  correcta: 0,
  explicacion: "Lo que determina la elección son las cargas que se tendrán que alimentar. En general las viviendas se alimentan con tensión monofásica y las industrias con trifásica. La alimentación trifásica también entrega energía para cargas monofásicas, pero hay que tomar algunos cuidados, como el equilibrio de cargas entre las fases.",
  referencia: "Módulo 1, pág. 39 del PDF · Sistema eléctrico"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "teoria", dificultad: "facil",
  pregunta: "Según sus características, ¿cómo se clasifican las tensiones?",
  opciones: [
    "Trifásicas (3 fases), bifásicas (2 fases) y monofásicas (1 fase)",
    "Solo trifásicas y monofásicas",
    "Continuas, alternas y mixtas",
    "Simples, compuestas y equilibradas"
  ],
  correcta: 0,
  explicacion: "Según sus características pueden ser trifásicas (3 fases), bifásicas (2 fases) o monofásicas (1 fase). El módulo aclara que las líneas bifásicas se encuentran comúnmente en sistemas de distribución de energía en áreas rurales.",
  referencia: "Módulo 1, pág. 40 del PDF · Clasificación de tensiones"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "calculo", dificultad: "medio",
  pregunta: "Si la tensión compuesta de una red de baja tensión es 380 V, ¿cuánto vale la tensión simple?",
  opciones: [
    "220 V",
    "658 V",
    "190 V",
    "127 V"
  ],
  correcta: 0,
  explicacion: "La tensión compuesta es √3 (aproximadamente 1,73) veces mayor que la simple. Por lo tanto, U simple = 380 / 1,73 ≈ 220 V. Multiplicar en vez de dividir daría 658 V.",
  referencia: "Módulo 1, pág. 40 del PDF · Clasificación de tensiones"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "calculo", dificultad: "dificil",
  pregunta: "En una red de media tensión de 13.200 V entre fases, ¿cuál es aproximadamente la tensión entre fase y tierra?",
  opciones: [
    "7.621 V",
    "22.836 V",
    "6.600 V",
    "13.200 V"
  ],
  correcta: 0,
  explicacion: "13.200 V es la tensión compuesta (entre fases). La simple es U compuesta / √3 = 13.200 / 1,73 ≈ 7.621 V. La relación √3 es constante para todos los niveles de tensión: 500.000 → 288.675 V; 132.000 → 76.210 V; 380 → 220 V. Dividir por 2 (6.600 V) es un error frecuente.",
  referencia: "Módulo 1, pág. 40 del PDF · Tabla de tensión compuesta y simple"
},

{
  modulo: 1, tema: "Clasificación de tensiones", tipo: "calculo", dificultad: "dificil",
  pregunta: "En una línea de alta tensión se mide 76.210 V entre una fase y tierra. ¿Cuál es la tensión entre fases?",
  opciones: [
    "132.000 V (132 kV)",
    "44.000 V (44 kV)",
    "152.420 V (152 kV)",
    "228.630 V (228 kV)"
  ],
  correcta: 0,
  explicacion: "Acá el cálculo va al revés que de costumbre: se conoce la simple y se busca la compuesta, así que hay que MULTIPLICAR por √3. U compuesta = 76.210 · 1,73 ≈ 132.000 V, es decir 132 kV, un nivel característico de transmisión. Dividir en lugar de multiplicar daría 44 kV, y duplicar daría 152 kV.",
  referencia: "Módulo 1, pág. 40 del PDF · Tabla de tensión compuesta y simple"
},

/* ══════════════════════════════════════════════════════════
   MÉTODOS DE TRABAJO (8)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles son los tres métodos de trabajo CON tensión (TCT)?",
  opciones: [
    "A contacto, a distancia y a potencial",
    "A contacto, a distancia y consignación",
    "Consignación, bloqueo y puesta a tierra",
    "A potencial, consignación y a distancia"
  ],
  correcta: 0,
  explicacion: "Los trabajos con tensión (TCT) se realizan a contacto, a distancia o a potencial. La consignación, en cambio, corresponde a los trabajos SIN tensión (TST) y es la que aplica las 5 reglas de oro.",
  referencia: "Módulo 1, pág. 43 del PDF · Trabajos sobre líneas eléctricas"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cuáles son las 5 reglas de oro de la consignación, en su orden correcto?",
  opciones: [
    "Corte visible · Bloquear y señalizar · Verificar ausencia de tensión · Poner a tierra y cortocircuitar · Delimitar la zona de trabajo",
    "Bloquear y señalizar · Corte visible · Poner a tierra y cortocircuitar · Verificar ausencia de tensión · Delimitar la zona de trabajo",
    "Verificar ausencia de tensión · Corte visible · Bloquear y señalizar · Delimitar la zona de trabajo · Poner a tierra y cortocircuitar",
    "Corte visible · Verificar ausencia de tensión · Poner a tierra y cortocircuitar · Bloquear y señalizar · Delimitar la zona de trabajo"
  ],
  correcta: 0,
  explicacion: "El orden es: 1) Corte visible, 2) Bloquear y señalizar, 3) Verificar ausencia de tensión, 4) Poner a tierra y cortocircuitar, 5) Delimitar la zona de trabajo.",
  referencia: "Módulo 1, pág. 45 del PDF · Trabajos sin tensión (TST), consignación"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "dificil",
  pregunta: "Un operario realiza la consignación en este orden: corte visible, bloquear y señalizar, poner a tierra y cortocircuitar, verificar ausencia de tensión, delimitar la zona. ¿Qué está mal?",
  opciones: [
    "Puso a tierra antes de verificar la ausencia de tensión: si la línea siguiera con tensión, la puesta a tierra provocaría un cortocircuito franco",
    "Nada: ese es el orden correcto de las 5 reglas de oro",
    "El corte visible debería ir después de bloquear y señalizar",
    "Delimitar la zona de trabajo debería ser el primer paso"
  ],
  correcta: 0,
  explicacion: "El orden correcto pone la verificación de ausencia de tensión ANTES de la puesta a tierra. La secuencia es: 1) Corte visible, 2) Bloquear y señalizar, 3) Verificar ausencia de tensión, 4) Poner a tierra y cortocircuitar, 5) Delimitar la zona. El orden de las reglas de oro no es una formalidad: cada paso protege al siguiente.",
  referencia: "Módulo 1, pág. 45 del PDF · Trabajos sin tensión (TST), consignación"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "dificil",
  pregunta: "En el método de trabajo A CONTACTO, ¿qué condiciones se aplican?",
  opciones: [
    "Se trabaja con doble aislación como mínimo, distancia de seguridad 0 m + 2 niveles de aislación, y no se puede aplicar en alta tensión",
    "Se trabaja sin ningún tipo de aislación, a la distancia que fije la tabla 1",
    "Solo se aplica en alta tensión, con distancia de seguridad 0 m",
    "Se trabaja únicamente con el circuito consignado y puesto a tierra"
  ],
  correcta: 0,
  explicacion: "El trabajo a contacto se realiza sobre elementos tensionados mediante el uso de doble aislación como mínimo, con distancia de seguridad 0 m + 2 NA (niveles de aislación). Se aplica en media tensión (33 / 13,2 kV) y baja tensión (380 / 220 V), pero NO en alta tensión (500 / 220 / 132 kV).",
  referencia: "Módulo 1, pág. 43 del PDF · Método de trabajo a contacto"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿En qué nivel de tensión se aplica exclusivamente el método de trabajo A POTENCIAL?",
  opciones: [
    "Solo en alta tensión (500 / 220 / 132 kV)",
    "Solo en baja tensión (380 / 220 V)",
    "Solo en media tensión (33 / 13,2 kV)",
    "En todos los niveles de tensión por igual"
  ],
  correcta: 0,
  explicacion: "El trabajo a potencial se aplica únicamente en alta tensión, con distancia de seguridad 0 m. No se puede trabajar en esta modalidad ni en media ni en baja tensión.",
  referencia: "Módulo 1, pág. 45 del PDF · Método de trabajo a potencial"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "medio",
  pregunta: "En el método de trabajo A DISTANCIA, ¿cómo se determina la distancia de seguridad?",
  opciones: [
    "Con los valores dados en la tabla 1, más 2 niveles de aislación",
    "Siempre es 0 m, igual que en el trabajo a contacto",
    "Es siempre de 2 metros, cualquiera sea el nivel de tensión",
    "La define el operario según su criterio en el momento"
  ],
  correcta: 0,
  explicacion: "En el trabajo a distancia la distancia de seguridad toma los valores dados en la tabla 1 (distancias de seguridad eléctrica), más 2 NA. Se aplica en alta tensión (500 kV) y media tensión (33 / 13,2 kV), pero no en baja tensión.",
  referencia: "Módulo 1, pág. 44 del PDF · Método de trabajo a distancia"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué señala el módulo respecto de la evolución del método de trabajo a distancia?",
  opciones: [
    "Se está reemplazando por el trabajo a contacto, que es más rápido y seguro",
    "Se está extendiendo a todos los niveles de tensión, incluida la baja tensión",
    "Se está reemplazando por el trabajo a potencial en media tensión",
    "Está siendo abandonado porque no existen tablas de distancias confiables"
  ],
  correcta: 0,
  explicacion: "El módulo indica expresamente que el método de trabajo a distancia se está reemplazando por el trabajo a contacto, que es más rápido y seguro.",
  referencia: "Módulo 1, pág. 44 del PDF · Método de trabajo a distancia"
},

{
  modulo: 1, tema: "Métodos de trabajo", tipo: "teoria", dificultad: "medio",
  pregunta: "En los trabajos sobre líneas eléctricas, ¿qué corresponde a la consignación?",
  opciones: [
    "A los trabajos SIN tensión (TST), y es el procedimiento que aplica las 5 reglas de oro",
    "A los trabajos CON tensión (TCT), como cuarto método además de contacto, distancia y potencial",
    "A la verificación de los instrumentos antes de cada medición",
    "Al registro administrativo de las horas trabajadas en la línea"
  ],
  correcta: 0,
  explicacion: "Los trabajos se dividen en dos grandes grupos: con tensión (TCT), que se hacen a contacto, a distancia o a potencial; y sin tensión (TST), que se realizan mediante consignación. La consignación es justamente el procedimiento de las 5 reglas de oro.",
  referencia: "Módulo 1, págs. 43 y 45 del PDF · Trabajos sobre líneas eléctricas"
}

];
