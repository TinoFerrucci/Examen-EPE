/* ============================================================
   Examen de Capacitación Eléctrica — EPE
   Banco de preguntas · MÓDULO 2

   111 preguntas elaboradas a partir de MODULO_2.pdf:
   magnetismo, electromagnetismo, corriente alterna, potencias
   y factor de potencia, trigonometría y vectores.

   Las del Módulo 1 están en preguntas-m1.js. El formato de
   cada pregunta está explicado al comienzo de ese archivo.
   ============================================================ */

const BANCO_M2 = [

/* ══════════════════════════════════════════════════════════
   MAGNETISMO (20)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué es el magnetismo?",
  opciones: [
    "Un fenómeno físico por el que los materiales ejercen fuerzas de atracción o repulsión sobre otros materiales",
    "La propiedad de un material de conducir la corriente eléctrica",
    "La oposición que ofrece un material al paso de la corriente",
    "La capacidad de un material de acumular carga eléctrica"
  ],
  correcta: 0,
  explicacion: "El magnetismo es un fenómeno físico por el que los materiales ejercen fuerzas de atracción o repulsión sobre otros materiales. Los elementos más comunes que se relacionan con él son los imanes.",
  referencia: "Módulo 2, pág. 5 del PDF · 1 Magnetismo"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿De dónde proviene el nombre \"magnetismo\"?",
  opciones: [
    "De Magnesia, la región al norte de Grecia donde en el siglo VI a.C. se descubrió la magnetita",
    "Del apellido del físico que describió el fenómeno por primera vez",
    "Del latín magnus, por la gran fuerza que ejercen los imanes",
    "Del nombre del mineral magnesio, con el que se fabrican los imanes"
  ],
  correcta: 0,
  explicacion: "La magnetita (óxido ferroso-diférrico) fue descubierta en el siglo VI a.C. al norte de Grecia, en Magnesia, y de allí proviene el nombre.",
  referencia: "Módulo 2, pág. 5 del PDF · 1 Magnetismo"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué es la magnetita?",
  opciones: [
    "Un mineral natural, formado por óxido ferroso-diférrico, también llamado piedra imán",
    "Una aleación artificial de aluminio, níquel y cobre",
    "Un tipo de acero al silicio usado en los núcleos de transformadores",
    "Un gas de alta rigidez dieléctrica usado como aislante"
  ],
  correcta: 0,
  explicacion: "La magnetita, o piedra imán, es un mineral natural conformado por óxido ferroso-diférrico que tiene la propiedad de atraer al hierro. Es el único imán natural que menciona el módulo, y los imanes naturales son siempre permanentes.",
  referencia: "Módulo 2, págs. 5 y 6 del PDF · 1 Magnetismo"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué metales tiene la propiedad de atraer la magnetita?",
  opciones: [
    "El hierro, el cobalto, el níquel y ciertas aleaciones de estos metales",
    "El cobre, el aluminio y la plata",
    "El oro, la plata y el platino",
    "Todos los metales, sin excepción"
  ],
  correcta: 0,
  explicacion: "La magnetita atrae al hierro, al cobalto, al níquel y a ciertas aleaciones de estos metales. Esa propiedad recibe el nombre de magnetismo.",
  referencia: "Módulo 2, pág. 5 del PDF · 1 Magnetismo"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo define el módulo a un imán?",
  opciones: [
    "Un material capaz de producir un campo magnético exterior y así atraer algunos metales",
    "Un material capaz de conducir la corriente eléctrica sin resistencia",
    "Un material que se opone al paso de las líneas de fuerza",
    "Un material que solo produce campo magnético mientras circula corriente por él"
  ],
  correcta: 0,
  explicacion: "Un imán es un material capaz de producir un campo magnético exterior y así atraer algunos metales. Se caracteriza por tener SIEMPRE dos polos opuestos: norte y sur. La última opción describe al electroimán, que es un caso particular de imán temporal.",
  referencia: "Módulo 2, pág. 5 del PDF · 1.2 Imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuál es la trayectoria de los campos magnéticos respecto de los polos de un imán?",
  opciones: [
    "Salen siempre del polo Norte y entran siempre al polo Sur",
    "Salen siempre del polo Sur y entran siempre al polo Norte",
    "Salen y entran indistintamente por cualquiera de los dos polos",
    "No salen de los polos, sino del centro del imán"
  ],
  correcta: 0,
  explicacion: "Los imanes se caracterizan por tener SIEMPRE dos polos opuestos, Norte y Sur. Los campos magnéticos salen siempre del polo Norte y entran siempre al polo Sur.",
  referencia: "Módulo 2, pág. 5 del PDF · 1.2 Imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "Si se parte un imán en dos, ¿qué se obtiene?",
  opciones: [
    "Dos imanes, cada uno con su polo norte y su polo sur",
    "Un imán con polo norte y otro con polo sur, separados",
    "Dos trozos de material sin propiedades magnéticas",
    "Un solo imán, porque una de las mitades pierde el magnetismo"
  ],
  correcta: 0,
  explicacion: "Si partimos un imán en 2, siempre obtendremos 2 imanes, cada uno con su polo norte y sur. Los polos no pueden separarse: un imán tiene siempre los dos.",
  referencia: "Módulo 2, pág. 5 del PDF · 1.2 Imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo interactúan los polos magnéticos entre sí?",
  opciones: [
    "Los polos opuestos se atraen y los polos iguales se repelen",
    "Los polos opuestos se repelen y los polos iguales se atraen",
    "Todos los polos se atraen entre sí",
    "Todos los polos se repelen entre sí"
  ],
  correcta: 0,
  explicacion: "Los polos opuestos se atraen y los polos iguales se repelen. Este principio es el que explica el funcionamiento de motores y de la fuerza electromagnética.",
  referencia: "Módulo 2, pág. 5 del PDF · 1.4 Fuerzas de interacción entre imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué son las LÍNEAS DE FUERZA?",
  opciones: [
    "Líneas imaginarias que se trazan para explicar la actividad magnética de cada polo, ya que las fuerzas magnéticas son invisibles",
    "Los conductores físicos que unen el polo norte con el polo sur de un imán",
    "Las trayectorias que siguen los electrones dentro del material del imán",
    "Los límites físicos del material magnético"
  ],
  correcta: 0,
  explicacion: "Las fuerzas que producen los polos magnéticos (y que forman el campo magnético) son invisibles. Por eso se trazan líneas imaginarias que explican la actividad magnética de cada polo: son las líneas de fuerza.",
  referencia: "Módulo 2, pág. 5 del PDF · 1.2 Imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cómo se clasifican los imanes según su origen y su permanencia?",
  opciones: [
    "Los naturales son siempre permanentes; los artificiales pueden ser permanentes o temporales",
    "Los naturales pueden ser permanentes o temporales; los artificiales son siempre permanentes",
    "Tanto los naturales como los artificiales son siempre permanentes",
    "Tanto los naturales como los artificiales son siempre temporales"
  ],
  correcta: 0,
  explicacion: "Los imanes que se encuentran en la naturaleza (la magnetita) se denominan naturales y siempre son permanentes. Los creados por el hombre son artificiales y se subclasifican en permanentes (neodimio, alnico, samario cobalto) y temporales (el electroimán).",
  referencia: "Módulo 2, pág. 6 del PDF · 1.3 Clasificación de los imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cuáles de estos son ejemplos de imanes ARTIFICIALES PERMANENTES?",
  opciones: [
    "Los de neodimio, alnico y samario cobalto",
    "El electroimán y el solenoide con núcleo de aire",
    "La magnetita y la piedra imán",
    "El acero al silicio de grano orientado"
  ],
  correcta: 0,
  explicacion: "Los imanes permanentes manifiestan sus propiedades permanentemente; son ejemplos los de neodimio, alnico y samario cobalto. La magnetita es un imán NATURAL, y el electroimán es un imán artificial TEMPORAL. El acero al silicio no es un imán sino un material de alta permeabilidad usado en núcleos.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.3 Clasificación de los imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "El imán artificial de \"alnico\" recibe su nombre porque es una aleación de…",
  opciones: [
    "Aluminio, níquel y cobre",
    "Aluminio, níquel y cobalto puro",
    "Acero, litio y cobre",
    "Aluminio, nitrógeno y carbono"
  ],
  correcta: 0,
  explicacion: "El módulo indica que el alnico es una aleación de Aluminio, Níquel y Cobre. Es uno de los tres ejemplos de imán artificial permanente que menciona, junto con el neodimio y el samario cobalto.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.3 Clasificación de los imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es el ejemplo típico de imán TEMPORAL que da el módulo?",
  opciones: [
    "El electroimán, que solo genera campo magnético mientras circula corriente por él",
    "El imán de neodimio de un disco rígido",
    "La magnetita",
    "El imán de alnico de un parlante"
  ],
  correcta: 0,
  explicacion: "Los imanes temporales manifiestan sus propiedades durante un tiempo determinado. El electroimán es el ejemplo claro: solo genera campo magnético cuando por él circula corriente eléctrica, y al desaparecer esta también lo hace el campo.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.3 Clasificación de los imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles de estas son aplicaciones cotidianas de los imanes que menciona el módulo?",
  opciones: [
    "El imán de un disco rígido, el de un parlante y los de la bobina de una guitarra eléctrica",
    "Los aisladores de porcelana de las líneas de media tensión",
    "Las puntas de prueba de la pinza voltiamperométrica",
    "Los conductores de aluminio con alma de acero"
  ],
  correcta: 0,
  explicacion: "El módulo ilustra las aplicaciones de los imanes con el imán perteneciente a un disco rígido de PC, el imán de un parlante y los imanes en la bobina de una guitarra eléctrica. También muestra el núcleo de un transformador trifásico como ejemplo de material permeable.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.3 Aplicaciones de los imanes"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué es la PERMEABILIDAD de un material?",
  opciones: [
    "La facilidad con la que las líneas de fuerza del campo magnético atraviesan el material",
    "La resistencia que opone el material a ser atravesado por las líneas de fuerza",
    "La cantidad de corriente eléctrica que el material puede conducir",
    "La capacidad del material de conservar el magnetismo cuando se retira el campo"
  ],
  correcta: 0,
  explicacion: "La permeabilidad es la \"facilidad\" con la que las líneas de fuerza atraviesan el material. El hierro tiene una permeabilidad mucho mayor que el aire, y es el material permeable más utilizado.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.5 Permeabilidad y reluctancia magnética"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué es la RELUCTANCIA magnética?",
  opciones: [
    "Lo opuesto a la permeabilidad: la \"resistencia\" que opone el material a ser atravesado por las líneas de fuerza",
    "Lo mismo que la permeabilidad, expresado en otras unidades",
    "La fuerza con la que un imán atrae al hierro",
    "La cantidad de líneas de fuerza que produce un imán"
  ],
  correcta: 0,
  explicacion: "La reluctancia es lo opuesto a la permeabilidad. Por eso, en la práctica se usan materiales de alta permeabilidad (baja reluctancia), como el hierro, para los núcleos de electroimanes y como \"caminos\" para guiar los campos magnéticos.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.5 Permeabilidad y reluctancia magnética"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué analogía plantea el módulo entre un material permeable y un conductor eléctrico?",
  opciones: [
    "Uno \"conduce\" campo magnético y el otro corriente eléctrica",
    "Los dos conducen corriente eléctrica, pero a distinta velocidad",
    "Uno se calienta por efecto Joule y el otro no",
    "Los dos se oponen al paso de las líneas de fuerza"
  ],
  correcta: 0,
  explicacion: "El módulo plantea la analogía de forma directa: un material permeable \"conduce\" campo magnético igual que un conductor eléctrico conduce corriente. Siguiendo la misma comparación, la reluctancia sería el equivalente magnético de la resistencia eléctrica.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.5 Permeabilidad y reluctancia magnética"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "Un material tiene ALTA permeabilidad. ¿Qué se puede afirmar sobre su reluctancia y sobre su uso?",
  opciones: [
    "Tiene baja reluctancia, y sirve como núcleo de electroimanes o como camino para guiar campos magnéticos",
    "Tiene alta reluctancia, y sirve para bloquear los campos magnéticos",
    "Tiene baja reluctancia, y por eso se usa como aislante eléctrico",
    "Su reluctancia no guarda ninguna relación con su permeabilidad"
  ],
  correcta: 0,
  explicacion: "Permeabilidad y reluctancia son conceptos opuestos: a mayor permeabilidad, menor reluctancia. Justamente por eso, en la práctica se utilizan materiales de alta permeabilidad como núcleos de electroimanes y como \"caminos\" para guiar los campos magnéticos, que es el caso de los transformadores.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.5 Permeabilidad y reluctancia magnética"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "Comparando el hierro con el aire, ¿cuál es la afirmación correcta?",
  opciones: [
    "El hierro tiene permeabilidad mucho mayor, así que a las líneas de fuerza les resulta más fácil atravesarlo",
    "El aire tiene permeabilidad mucho mayor que el hierro",
    "Ambos tienen la misma permeabilidad, porque los dos son no conductores del campo",
    "El hierro tiene alta reluctancia, y por eso frena las líneas de fuerza"
  ],
  correcta: 0,
  explicacion: "Es sabido que el hierro tiene una permeabilidad mucho mayor que el aire. El aire, en cambio, tiene alta reluctancia y no le resulta fácil a las líneas de fuerza atravesarlo. Esa diferencia es la razón por la que a un solenoide con núcleo de aire se le coloca un núcleo de hierro.",
  referencia: "Módulo 2, págs. 6 y 8 del PDF · Permeabilidad y el solenoide"
},

{
  modulo: 2, tema: "Magnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuál es el material permeable más utilizado?",
  opciones: [
    "El hierro",
    "El aluminio",
    "El cobre",
    "La porcelana"
  ],
  correcta: 0,
  explicacion: "El módulo lo señala expresamente: el material permeable más utilizado es el hierro. El cobre y el aluminio son excelentes conductores eléctricos, pero eso es otra propiedad: conducen corriente, no campo magnético.",
  referencia: "Módulo 2, pág. 6 del PDF · 1.5 Permeabilidad y reluctancia magnética"
},

/* ══════════════════════════════════════════════════════════
   ELECTROMAGNETISMO (23)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué descubrió Hans Christian Oersted en 1820?",
  opciones: [
    "La relación entre el magnetismo y la corriente eléctrica que fluye por un conductor",
    "La ley de la inducción electromagnética",
    "Que los polos iguales se repelen y los opuestos se atraen",
    "El principio de funcionamiento del transformador"
  ],
  correcta: 0,
  explicacion: "En 1820 el físico danés Oersted descubrió la relación entre el magnetismo y la corriente eléctrica. La ley de la inducción, en cambio, corresponde a los experimentos de Michael Faraday en 1831.",
  referencia: "Módulo 2, pág. 7 del PDF · 2.1 Campo magnético alrededor de un conductor"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué forma tiene el campo electromagnético que se genera alrededor de un conductor por el que circula corriente?",
  opciones: [
    "Circular y giratorio, concéntrico con el conductor",
    "Rectilíneo y paralelo al conductor",
    "Radial, saliendo en línea recta desde el conductor",
    "Con forma de ocho, con dos lóbulos a los costados del conductor"
  ],
  correcta: 0,
  explicacion: "Alrededor de todo conductor por el que circule corriente se genera un campo electromagnético de forma circular y giratoria, concéntrico con el conductor. El sentido de giro guarda relación con el sentido de circulación de la corriente.",
  referencia: "Módulo 2, pág. 7 del PDF · 2.1 Campo magnético alrededor de un conductor"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "El campo magnético de un conductor recto es generalmente muy débil. ¿Qué aplicación técnica menciona el módulo como excepción?",
  opciones: [
    "La pinza amperométrica",
    "El transformador de distribución",
    "El motor de corriente continua",
    "El generador trifásico"
  ],
  correcta: 0,
  explicacion: "El módulo señala que el campo alrededor de un conductor recto es muy débil y no encuentra muchas aplicaciones técnicas, a excepción de la pinza amperométrica. Justamente por eso, para aprovechar el fenómeno se arrolla el conductor formando un solenoide o bobina.",
  referencia: "Módulo 2, pág. 7 del PDF · 2.1 Campo magnético alrededor de un conductor"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué es un solenoide y para qué se lo utiliza?",
  opciones: [
    "Un conductor recto arrollado una cierta cantidad de vueltas, con el que se consigue un campo magnético mucho más intenso que con el conductor recto",
    "Un núcleo de hierro macizo que concentra las líneas de fuerza",
    "Un imán permanente de forma cilíndrica",
    "Un conductor recto de gran sección que reduce la resistencia del circuito"
  ],
  correcta: 0,
  explicacion: "El solenoide (o bobina) no es más que un conductor recto arrollado una cierta cantidad de vueltas. El efecto del campo magnético total es el del conductor rectilíneo multiplicado por la cantidad de vueltas, de modo que se consigue un campo mucho más intenso.",
  referencia: "Módulo 2, pág. 7 del PDF · 2.2 El solenoide"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuáles son las tres formas de intensificar el campo magnético de un conductor?",
  opciones: [
    "Arrollarlo en espiras formando una bobina, aumentar la intensidad de corriente y colocar un núcleo de hierro dentro del solenoide",
    "Aumentar la longitud del conductor, reducir su sección y enfriarlo",
    "Alimentarlo con corriente continua, aumentar la tensión y aislarlo mejor",
    "Colocar un núcleo de aire, reducir la corriente y disminuir el número de vueltas"
  ],
  correcta: 0,
  explicacion: "Las tres formas son: (1) arrollar el conductor en espiras formando una bobina, ya que a mayor número de vueltas más intenso será el campo; (2) aumentar la intensidad de corriente, porque el electromagnetismo depende de ella; y (3) colocar un núcleo de hierro dentro del solenoide, porque el hierro tiene mayor permeabilidad que el aire.",
  referencia: "Módulo 2, pág. 8 del PDF · Intensificar el campo magnético"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué se coloca un núcleo de hierro dentro de una bobina en lugar de dejarla con núcleo de aire?",
  opciones: [
    "Porque el hierro tiene permeabilidad altísima y baja reluctancia, por lo que las líneas de fuerza encuentran en él un mejor camino",
    "Porque el hierro conduce mejor la corriente eléctrica que el aire",
    "Porque el hierro aísla eléctricamente los distintos arrollamientos entre sí",
    "Porque el hierro tiene mayor reluctancia y así se concentra el campo"
  ],
  correcta: 0,
  explicacion: "El aire tiene alta reluctancia y no le resulta fácil a las líneas de fuerza atravesarlo. Con un núcleo de hierro, de permeabilidad altísima, se obtienen dos ventajas: el mismo campo con mucha menos energía, o bien un campo más intenso para la misma energía puesta en juego.",
  referencia: "Módulo 2, pág. 8 del PDF · 2.2 El solenoide"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es la ventaja del electroimán frente a un imán permanente?",
  opciones: [
    "Se puede encender, apagar o variar la intensidad de su campo variando la corriente eléctrica",
    "Produce un campo magnético sin necesidad de energía",
    "Sus polos norte y sur no se pueden invertir",
    "Conserva el campo magnético indefinidamente sin alimentación"
  ],
  correcta: 0,
  explicacion: "El electroimán se comporta como un imán permanente pero con la ventaja de poder encenderlo, apagarlo o variar la intensidad del campo variando la corriente eléctrica. Esa capacidad de controlarlo es lo que lo hace útil en máquinas eléctricas.",
  referencia: "Módulo 2, pág. 8 del PDF · 2.2 El solenoide"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "La FUERZA ELECTROMAGNÉTICA es el fenómeno físico que…",
  opciones: [
    "transforma energía eléctrica en cinética (movimiento), y es el principio del motor",
    "transforma energía cinética en eléctrica, y es el principio del generador",
    "transforma energía eléctrica en otra energía eléctrica de distinta tensión",
    "transforma energía eléctrica en calor por efecto Joule"
  ],
  correcta: 0,
  explicacion: "Si dentro de un campo magnético constante se coloca un conductor y por este se hace circular corriente, se obtiene un desplazamiento del conductor: energía eléctrica convertida en cinética. Ese es el principio del motor. El generador hace el camino inverso, cinética a eléctrica.",
  referencia: "Módulo 2, pág. 9 del PDF · 2.4 Fuerza electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿De qué factores depende la fuerza que mueve al conductor inmerso en un campo magnético?",
  opciones: [
    "Es directamente proporcional a la intensidad del campo magnético B, a la corriente I y a la longitud efectiva L del conductor",
    "Depende únicamente de la tensión aplicada al conductor",
    "Es directamente proporcional a la longitud total del conductor, esté o no dentro del campo",
    "Es inversamente proporcional a la corriente que circula"
  ],
  correcta: 0,
  explicacion: "La fuerza es directamente proporcional a B, a I y a la longitud efectiva L. Longitud efectiva significa solo la parte del conductor que está inmersa en el campo: si el conductor mide 5 m pero solo 1 m está dentro del campo, solo ese metro produce fuerza. También influye el ángulo con que el conductor corta el campo, que en este caso es 90°.",
  referencia: "Módulo 2, pág. 9 del PDF · 2.4 Fuerza electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "En una máquina eléctrica, ¿cómo se definen el rotor y el estator?",
  opciones: [
    "El rotor es el conjunto de partes unidas al eje, que rotan; el estator son las piezas sostenidas por la carcaza, que quedan estáticas",
    "El rotor son las piezas fijas y el estator las que giran",
    "El rotor es el bobinado y el estator es el núcleo de hierro",
    "El rotor es la parte eléctrica y el estator la parte mecánica"
  ],
  correcta: 0,
  explicacion: "Se denomina rotor al conjunto de todas las partes de la máquina que se encuentran unidas al eje y por consiguiente rotan. El estator está compuesto por las piezas que se sostienen de la carcaza, quedando estáticas. La distinción vale tanto para motores como para generadores, que son constructivamente muy similares.",
  referencia: "Módulo 2, págs. 10 y 12 del PDF · Rotor y estator"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "En un motor, ¿qué ocurre si se invierte SOLO uno de los dos parámetros (el sentido del campo magnético o el sentido de la corriente)?",
  opciones: [
    "Se invierte el sentido del movimiento; si después se invierte también el otro, el movimiento vuelve al sentido original",
    "El motor se detiene por completo",
    "El sentido del movimiento no cambia",
    "El motor duplica su velocidad de giro"
  ],
  correcta: 0,
  explicacion: "Dados un campo magnético y un sentido de corriente determinados, el movimiento tiene un sentido determinado. Si se cambia solo uno de los parámetros, se invierte el sentido del movimiento; si luego se cambia el otro, vuelve al sentido original. Ese es justamente el motivo por el que los motores universales funcionan con corriente alterna.",
  referencia: "Módulo 2, pág. 10 del PDF · Funcionamiento del motor"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "En un motor de corriente continua, ¿cuál es la función del colector o conmutador?",
  opciones: [
    "Invertir el sentido de circulación de la corriente para que el motor siga girando cuando el bobinado del rotor queda perpendicular al campo",
    "Rectificar la corriente alterna de entrada y convertirla en continua",
    "Transmitir el movimiento del rotor al eje de la máquina",
    "Refrigerar los bobinados del rotor durante el funcionamiento"
  ],
  correcta: 0,
  explicacion: "En los motores de C.C. la fuerza electromagnética deja de producir rotación en el momento en que el bobinado del rotor queda perpendicular al campo magnético. Para que el motor siga girando debe invertirse el sentido de la corriente, y eso se logra por medio del colector o conmutador.",
  referencia: "Módulo 2, pág. 10 del PDF · Motores de C.C."
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Por qué los motores universales, muy similares a los de C.C., pueden funcionar con corriente alterna?",
  opciones: [
    "Porque el campo del estator lo genera un electroimán alimentado por la misma fuente, así que al invertirse la corriente se invierten a la vez el campo y la corriente del rotor",
    "Porque tienen un rectificador interno que convierte la alterna en continua",
    "Porque su rotor gira tan rápido que no alcanza a notar la inversión",
    "Porque el campo del estator lo genera un imán permanente que no se ve afectado"
  ],
  correcta: 0,
  explicacion: "En los motores universales el campo magnético del estator es generado por un electroimán, no por un imán permanente. Cuando el sentido de la corriente se invierte (en alterna, de forma cíclica), no solo cambia la dirección de la corriente en el bobinado del rotor sino también el sentido del campo del estator, porque ambos están alimentados por la misma fuente. Al invertirse los DOS parámetros a la vez, el sentido del movimiento se mantiene.",
  referencia: "Módulo 2, pág. 10 del PDF · Motores universales"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué demostraron los experimentos de Michael Faraday en 1831?",
  opciones: [
    "Que es posible inducir una fuerza electromotriz en un circuito utilizando un campo magnético variable",
    "Que alrededor de un conductor con corriente se genera un campo magnético",
    "Que los polos iguales se repelen",
    "Que la corriente alterna se transporta mejor que la continua"
  ],
  correcta: 0,
  explicacion: "Los experimentos de Faraday en Inglaterra en 1831 mostraron que es posible inducir una FEM (fuerza electromotriz inducida) en un circuito utilizando un campo magnético variable. De ahí surge la ley de la inducción de Faraday. El campo alrededor del conductor con corriente fue el descubrimiento de Oersted, en 1820.",
  referencia: "Módulo 2, pág. 11 del PDF · 2.5 Inducción electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿De qué factores depende la FEM inducida en un conductor que se mueve dentro de un campo magnético?",
  opciones: [
    "De la intensidad del campo B, de la velocidad v con que se mueve el conductor y de su longitud efectiva L",
    "Únicamente de la resistencia del conductor",
    "De la corriente que se le inyecte previamente al conductor",
    "Únicamente de la cantidad de vueltas del bobinado"
  ],
  correcta: 0,
  explicacion: "La FEM inducida es directamente proporcional a la intensidad del campo magnético B, a la velocidad v con la que se mueve el conductor y a su longitud efectiva L. También tiene relación con el ángulo entre la dirección del movimiento y el campo magnético. Se mide en voltios.",
  referencia: "Módulo 2, pág. 11 del PDF · 2.5 Inducción electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "Cuando se induce una FEM en un conductor, ¿qué hace falta para que circule corriente?",
  opciones: [
    "Que se cierre el circuito conectando una carga; entonces aparece la llamada corriente inducida",
    "Nada más: la corriente circula por el solo hecho de inducirse la FEM",
    "Inyectar previamente corriente en el bobinado",
    "Que el conductor esté quieto respecto del campo magnético"
  ],
  correcta: 0,
  explicacion: "Inducir una FEM implica que, si se cierra el circuito conectando una carga, aparecerá en el mismo una corriente que toma el nombre de corriente inducida. Es la misma regla general de la electricidad: hace falta tensión Y circuito cerrado.",
  referencia: "Módulo 2, pág. 11 del PDF · 2.5 Inducción electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué condición debe cumplirse SIEMPRE para que se genere una fuerza electromotriz inducida (FEM)?",
  opciones: [
    "Debe existir un movimiento relativo entre el campo magnético y el conductor, sin importar cuál queda fijo y cuál se mueve",
    "El conductor debe moverse y el campo magnético debe permanecer fijo",
    "El campo magnético debe moverse y el conductor debe permanecer fijo",
    "Debe circular previamente una corriente por el conductor"
  ],
  correcta: 0,
  explicacion: "Para que se genere una FEM tiene que haber siempre un movimiento relativo entre el campo magnético y el conductor, sin importar cuál queda fijo y cuál se mueve.",
  referencia: "Módulo 2, pág. 11 del PDF · 2.5 Inducción electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cuáles son las tres formas de generar una FEM que enumera el módulo?",
  opciones: [
    "Mover el conductor en un campo estático; variar el campo en el espacio con el conductor fijo; variar el campo en el tiempo con el conductor fijo",
    "Aumentar la corriente, aumentar las vueltas de la bobina y colocar un núcleo de hierro",
    "Calentar el conductor, enfriarlo y someterlo a presión",
    "Conectarlo a una pila, a una batería o a un generador"
  ],
  correcta: 0,
  explicacion: "Las tres formas son: (1) movimiento del conductor a través de un campo magnético estático, que es el caso de los generadores monofásicos de baja potencia; (2) variación en el espacio del campo con el conductor fijo, el caso de los generadores trifásicos de mayor potencia; y (3) variación en el tiempo del campo con el conductor fijo, el caso de los transformadores.",
  referencia: "Módulo 2, págs. 11 a 14 del PDF · 2.5 Inducción electromagnética"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Por qué en un generador trifásico de gran potencia las bobinas quedan fijas en el estator y los campos magnéticos giran con el rotor?",
  opciones: [
    "Porque poner los 3 bobinados en el rotor obligaría a usar 4 anillos rozantes y a transmitir toda la potencia generada por los carbones",
    "Porque de esa manera el rotor pesa más y gira con más inercia",
    "Porque las bobinas fijas no necesitan aislación",
    "Porque así se puede prescindir del neutro en la salida"
  ],
  correcta: 0,
  explicacion: "Generar trifásica requiere 3 bobinados, uno por fase. Si se colocaran en el rotor, la máquina debería poseer 4 anillos rozantes (3 fases y neutro), y además toda la potencia eléctrica generada tendría que ser transmitida por los carbones. Por eso se invierte el arreglo: bobinas fijas en el estator y campos giratorios en el rotor.",
  referencia: "Módulo 2, pág. 13 del PDF · 2.5.2 Variación en el espacio del campo magnético"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "En un generador de corriente alterna, ¿por qué la tensión generada resulta alterna?",
  opciones: [
    "Porque al girar el rotor el sentido de corte de las líneas de campo se va alternando: media rotación corta en una dirección y la otra media en la contraria",
    "Porque el colector invierte la corriente dos veces por vuelta",
    "Porque la fuente que alimenta el rotor es alterna",
    "Porque los anillos rozantes invierten la polaridad en cada vuelta"
  ],
  correcta: 0,
  explicacion: "Como el rotor gira, el sentido de corte de las líneas de campo se va alternando: la mitad de la rotación el corte es en una dirección y la otra mitad en la contraria. Ese es el motivo de que la tensión generada sea alterna. Los anillos rozantes, a diferencia del colector de los motores de C.C., NO producen en ningún momento una inversión.",
  referencia: "Módulo 2, pág. 12 del PDF · 2.5.1 Movimiento del conductor"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "facil",
  pregunta: "En un transformador, ¿cuál es el único vínculo que existe entre el circuito primario y el secundario?",
  opciones: [
    "El campo magnético, ya que ambos circuitos están eléctricamente aislados entre sí y del núcleo",
    "Una conexión eléctrica directa a través del núcleo metálico",
    "El aceite dieléctrico que rodea a los bobinados",
    "La carcaza exterior del transformador"
  ],
  correcta: 0,
  explicacion: "Los circuitos primario y secundario están eléctricamente aislados el uno del otro, y a su vez del núcleo y de toda parte metálica exterior. El único vínculo es el campo magnético: el primario lo crea, el núcleo lo guía y provoca un fenómeno de inducción en el secundario.",
  referencia: "Módulo 2, pág. 14 del PDF · 2.5.3 El transformador",
  diagrama: { tipo: "transformador", up: "Up", us: "Us", np: "Primario", ns: "Secundario" }
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "dificil",
  pregunta: "El módulo advierte, principalmente por cuestiones de seguridad, que todo transformador es REVERSIBLE. ¿Qué significa esto?",
  opciones: [
    "Que puede funcionar como reductor o como elevador, y eso depende solo de cuál de sus bobinados se energice",
    "Que puede funcionar tanto con corriente alterna como con corriente continua",
    "Que se le puede invertir la polaridad sin que cambie nada",
    "Que el núcleo se puede desmontar y volver a montar en el otro sentido"
  ],
  correcta: 0,
  explicacion: "Que un transformador sea reversible significa que puede funcionar como reductor o como elevador, y solo depende de cuál de sus bobinados se energice (es decir, cuál se use como primario). Es un punto crítico al momento de trabajar sobre la máquina: alimentar por el lado de baja puede poner alta tensión en el otro bobinado.",
  referencia: "Módulo 2, pág. 14 del PDF · 2.5.3 El transformador"
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "teoria", dificultad: "medio",
  pregunta: "¿De qué material se construye el núcleo de un transformador y por qué?",
  opciones: [
    "De acero al silicio de grano orientado, porque debe tener altísima permeabilidad para que todo el campo del primario llegue al secundario",
    "De cobre, porque es el mejor conductor eléctrico",
    "De aluminio, porque es liviano y barato",
    "De porcelana, porque debe aislar el primario del secundario"
  ],
  correcta: 0,
  explicacion: "Dada la importancia, en cuanto a rendimiento, de que todo el campo magnético generado en el primario llegue al secundario, el núcleo debe ser de un material de altísima permeabilidad. En la práctica se utiliza acero al silicio de grano orientado. El núcleo guía el campo: no conduce corriente ni aísla.",
  referencia: "Módulo 2, pág. 14 del PDF · 2.5.3 El transformador",
  diagrama: { tipo: "transformador", up: "Up", us: "Us", np: "Primario", ns: "Secundario" }
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un transformador tiene en el bobinado primario 5 veces más vueltas que en el secundario y se alimenta con 1.100 V. ¿Qué tensión hay en los bornes de salida?",
  opciones: [
    "220 V",
    "5.500 V",
    "1.100 V",
    "550 V"
  ],
  correcta: 0,
  explicacion: "Cuánto aumenta o reduce la tensión un transformador depende de la relación entre las vueltas del primario y del secundario. Si el primario tiene 5 veces más vueltas, la tensión de salida será un quinto de la de entrada: 1.100 / 5 = 220 V.",
  referencia: "Módulo 2, pág. 14 del PDF · 2.5.3 El transformador",
  diagrama: { tipo: "transformador", up: "1.100 V", us: "?", np: "Primario · 5N", ns: "Secundario · N" }
},

{
  modulo: 2, tema: "Electromagnetismo", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un transformador de distribución reduce de 13.200 V a 220 V. ¿Cuál es la relación entre las vueltas del primario y del secundario?",
  opciones: [
    "El primario tiene 60 veces más vueltas que el secundario",
    "El secundario tiene 60 veces más vueltas que el primario",
    "Ambos tienen la misma cantidad de vueltas",
    "El primario tiene 6 veces más vueltas que el secundario"
  ],
  correcta: 0,
  explicacion: "La relación de tensiones es igual a la relación de vueltas: 13.200 / 220 = 60. Como la tensión BAJA, el primario debe tener más vueltas que el secundario, 60 veces más. Si fuera al revés, el transformador elevaría en lugar de reducir.",
  referencia: "Módulo 2, pág. 14 del PDF · 2.5.3 El transformador",
  diagrama: { tipo: "transformador", up: "13.200 V", us: "220 V", np: "Primario", ns: "Secundario" }
},

/* ══════════════════════════════════════════════════════════
   CORRIENTE ALTERNA (36)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se define la corriente alterna?",
  opciones: [
    "Corriente eléctrica en la que la magnitud y el sentido varían cíclicamente",
    "Corriente eléctrica de magnitud constante que circula siempre en el mismo sentido",
    "Corriente eléctrica cuya magnitud varía pero cuyo sentido es siempre el mismo",
    "Corriente eléctrica que solo circula durante medio ciclo"
  ],
  correcta: 0,
  explicacion: "La corriente alterna es aquella en la que magnitud y sentido varían cíclicamente. La forma de onda más utilizada es la oscilación sinusoidal, porque con ella se consigue una transmisión más eficiente de la energía.",
  referencia: "Módulo 2, pág. 17 del PDF · 3.1 Corriente alterna y sus ventajas"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles son las principales ventajas de la corriente alterna frente a la continua?",
  opciones: [
    "Generadores y motores más baratos, eficientes y menos complejos; transformar la tensión de manera simple y barata; y transportar grandes cantidades de energía a larga distancia con mínima sección de conductores",
    "Menor riesgo eléctrico para las personas y menor costo de aislación",
    "Puede almacenarse fácilmente en baterías y pilas",
    "No produce calentamiento en los conductores por efecto Joule"
  ],
  correcta: 0,
  explicacion: "Aunque la corriente continua fue la primera en descubrirse, se utiliza alterna por sus ventajas decisivas en la producción y el transporte de energía. Son exactamente esas tres las que enumera el módulo.",
  referencia: "Módulo 2, pág. 17 del PDF · 3.1 Corriente alterna y sus ventajas"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué la forma de onda de la corriente alterna es senoidal?",
  opciones: [
    "Porque surge del propio generador: el movimiento circular de los bobinados dentro del rotor provoca esa curva suavemente ondulada",
    "Porque es la forma más fácil de dibujar en un gráfico",
    "Porque los transformadores la convierten a esa forma",
    "Porque los conductores de aluminio solo admiten esa forma de onda"
  ],
  correcta: 0,
  explicacion: "La forma senoidal surge del propio generador de energía: el movimiento circular de los bobinados dentro del rotor es el que provoca esa curva suavemente ondulada. Su nombre viene de la función matemática \"Seno\", también conocida como sinusoide, que se utiliza en trigonometría.",
  referencia: "Módulo 2, pág. 17 del PDF · 3.1 Corriente alterna y sus ventajas"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En una onda senoidal, ¿qué forma un CICLO?",
  opciones: [
    "El conjunto de un semiciclo positivo y uno negativo",
    "Únicamente el semiciclo positivo",
    "Dos semiciclos positivos consecutivos",
    "El tiempo que tarda la onda en llegar a su valor máximo"
  ],
  correcta: 0,
  explicacion: "La onda senoidal es repetitiva y cíclica: existe una forma que, cada vez que termina, vuelve a ocurrir. A esa porción de onda que se repite se la denomina ciclo, y está formada por un semiciclo positivo y uno negativo. Por la simetría de la senoidal, cada ciclo puede subdividirse en semiciclos.",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia",
  diagrama: { tipo: "ondas", b: false, a: "Un ciclo completo", nota: "Semiciclo positivo + semiciclo negativo = un ciclo", ciclos: 2 }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es la diferencia entre CICLO y PERÍODO?",
  opciones: [
    "El ciclo es la forma de la curva que se repite; el período es el tiempo necesario para completar dicha forma",
    "El ciclo es el tiempo necesario para completar la forma; el período es la forma de la curva",
    "Son sinónimos: ambos designan el tiempo de una oscilación completa",
    "El ciclo es el semiciclo positivo y el período el semiciclo negativo"
  ],
  correcta: 0,
  explicacion: "No hay que confundirlos: el ciclo hace referencia a la forma en sí de la curva (la porción de onda que se repite), mientras que el período es el tiempo necesario para completar dicha forma.",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia",
  diagrama: { tipo: "onda", periodo: "T = período", amplitud: "Amplitud" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En una onda senoidal, ¿qué se denomina AMPLITUD?",
  opciones: [
    "El valor máximo de la onda; por la simetría entre semiciclos, el valor mínimo es numéricamente igual pero de signo contrario",
    "El tiempo que tarda la onda en completar un ciclo",
    "La cantidad de ciclos que se repiten en un segundo",
    "La diferencia entre el valor máximo y el valor mínimo de la onda"
  ],
  correcta: 0,
  explicacion: "La amplitud es el valor máximo de la onda. Dada la simetría que existe entre los semiciclos, el valor mínimo será numéricamente igual, aunque de signo contrario.",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia",
  diagrama: { tipo: "onda", periodo: "T = período", amplitud: "Amplitud = valor máximo" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué valores de período y frecuencia se utilizan en Argentina?",
  opciones: [
    "Período de 0,02 s (20 ms) y frecuencia de 50 Hz",
    "Período de 0,02 s (20 ms) y frecuencia de 60 Hz",
    "Período de 0,0167 s y frecuencia de 60 Hz",
    "Período de 1 s y frecuencia de 1 Hz"
  ],
  correcta: 0,
  explicacion: "En Argentina el período de la tensión de línea es de 0,02 segundos (20 milisegundos) y la frecuencia utilizada es de 50 Hz. Son dos formas de decir lo mismo, porque f = 1/T y T = 1/f.",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia",
  diagrama: { tipo: "onda", periodo: "T = 0,02 s", amplitud: "Valor máximo" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se define la corriente alterna trifásica?",
  opciones: [
    "Un conjunto de tres corrientes monofásicas idénticas en amplitud y frecuencia, pero desfasadas entre sí 120°, cada una transportada por un conductor independiente",
    "Tres corrientes de distinta amplitud y frecuencia que circulan por el mismo conductor",
    "Tres corrientes idénticas y en fase, transportadas por tres conductores",
    "Un conjunto de tres corrientes desfasadas 90° entre sí"
  ],
  correcta: 0,
  explicacion: "Son tres corrientes monofásicas idénticas en amplitud y frecuencia pero desfasadas 120°, cada una por un conductor independiente. El desfasaje de 120° se logra separando físicamente las bobinas en el estator del generador.",
  referencia: "Módulo 2, págs. 13 y 19 del PDF · 3.3 Sistema trifásico de corrientes",
  diagrama: { tipo: "trifasica" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se denominan habitualmente las tres fases y el neutro de la red?",
  opciones: [
    "Las fases R, S y T; el neutro se reserva la letra N",
    "Las fases X, Y y Z; el neutro la letra O",
    "Las fases N1, N2 y N3; el neutro la letra F",
    "Las fases A, B y N; el neutro la letra T"
  ],
  correcta: 0,
  explicacion: "Para identificar las fases se las suele nombrar con letras o números como A, B, C o 1, 2, 3, pero lo más común es denominarlas con las letras R, S y T, mientras que la letra N se reserva para el neutro de la red.",
  referencia: "Módulo 2, pág. 19 del PDF · 3.3 Sistema trifásico de corrientes",
  diagrama: { tipo: "trifasica" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Dónde se usan los sistemas trifásicos de 4 conductores y dónde los de 3 conductores?",
  opciones: [
    "Los de 4 conductores (3 fases y neutro) casi exclusivamente en distribución en baja tensión; los de 3 conductores en distribución y transmisión en media y alta tensión",
    "Los de 4 conductores en alta tensión y los de 3 en baja tensión",
    "Los de 4 conductores solo en generación y los de 3 solo en consumo domiciliario",
    "No hay diferencia de uso: se eligen indistintamente"
  ],
  correcta: 0,
  explicacion: "El sistema de 4 conductores (3 fases y un neutro) se utiliza casi exclusivamente en sistemas de distribución en Baja Tensión, y presenta dos valores de tensión según entre qué puntos se tome. Las líneas de 3 conductores se usan para distribución y transmisión en media y alta tensión, donde no hay neutro.",
  referencia: "Módulo 2, pág. 19 del PDF · 3.3 Sistema trifásico de corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "dificil",
  pregunta: "En las líneas de 3 conductores de media y alta tensión, donde NO existe neutro, ¿se puede encontrar una tensión de fase?",
  opciones: [
    "Sí, porque la tierra cumple la función de neutro: la tensión de fase se mide entre cualquiera de las fases y tierra",
    "No, porque sin neutro solo existe la tensión de línea",
    "Sí, pero solo si se instala un neutro artificial en el punto de medición",
    "No, porque en media y alta tensión ambas tensiones son iguales"
  ],
  correcta: 0,
  explicacion: "En las líneas de 3 conductores la tierra cumple la función de neutro. Por lo tanto la tensión de fase se mide entre cualquiera de las fases y tierra, o cualquier elemento apoyado en ella, como postes, escaleras o grúas. Es un punto de seguridad importante en el trabajo en altura.",
  referencia: "Módulo 2, pág. 19 del PDF · 3.3 Sistema trifásico de corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se define la IMPEDANCIA?",
  opciones: [
    "La oposición al paso de corriente en circuitos de corriente alterna, formada por resistencias, reactancias inductivas y reactancias capacitivas",
    "La oposición al paso de corriente en circuitos de corriente continua, formada solo por resistencias",
    "La suma aritmética de todas las resistencias de un circuito",
    "El desfasaje que existe entre la tensión y la corriente"
  ],
  correcta: 0,
  explicacion: "La impedancia (Z) es la oposición al paso de corriente en circuitos de CA. En continua las únicas cargas posibles son las resistencias, pero en alterna se agregan las reactancias inductivas (XL) y capacitivas (XC). Una impedancia puede estar formada por los tres tipos de carga, por dos o por uno solo.",
  referencia: "Módulo 2, pág. 20 del PDF · 3.4 Impedancia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cuál es la diferencia entre una reactancia inductiva (XL) y una capacitiva (XC)?",
  opciones: [
    "La inductiva transforma energía eléctrica en campo magnético; la capacitiva la transforma en campo eléctrico. Ambas transformaciones son reversibles",
    "La inductiva transforma energía eléctrica en campo eléctrico; la capacitiva en campo magnético",
    "La inductiva realiza una transformación irreversible y la capacitiva una reversible",
    "La inductiva se mide en Henry y la capacitiva en Farad"
  ],
  correcta: 0,
  explicacion: "Las reactancias inductivas (bobinas, transformadores, motores) transforman energía eléctrica en campo magnético; las capacitivas (capacitores) la transforman en campo eléctrico. En ambos casos la transformación es reversible: cuando se desarma el campo se recupera la energía. Precisamente por eso comparten el nombre de reactancias. Las tres, R, XL y XC, se miden en ohm [Ω].",
  referencia: "Módulo 2, pág. 20 del PDF · 3.4 Impedancia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué caracteriza a una RESISTENCIA dentro del conjunto de la impedancia?",
  opciones: [
    "Es el único elemento que transforma la energía eléctrica en otra forma de manera irreversible: focos, estufas, planchas",
    "Transforma la energía eléctrica en campo magnético de forma reversible",
    "Transforma la energía eléctrica en campo eléctrico de forma reversible",
    "No transforma energía: solo la almacena"
  ],
  correcta: 0,
  explicacion: "Las resistencias son todos los elementos que transforman la energía eléctrica en alguna otra forma de manera IRREVERSIBLE, como los focos, las estufas o las planchas. Esa irreversibilidad es lo que las diferencia de las reactancias, que devuelven la energía al desarmar sus campos. Las tres se miden en ohm.",
  referencia: "Módulo 2, pág. 20 del PDF · 3.4 Impedancia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Por qué la impedancia se trabaja matemáticamente como un vector y no como un escalar?",
  opciones: [
    "Porque se expresa como Z = R + j(XL − XC): R es la componente horizontal y la resta de reactancias la vertical, así que hay que operarla vectorialmente",
    "Porque su valor cambia con el tiempo",
    "Porque se mide en ohm igual que la resistencia",
    "Porque solo existe en circuitos trifásicos"
  ],
  correcta: 0,
  explicacion: "La expresión Z = R + j(XL − XC) corresponde a un vector en forma rectangular, donde el valor de las resistencias es la componente horizontal y la resta entre XL y XC la componente vertical. Por eso no se pueden sumar los valores de forma tradicional. También puede expresarse en forma polar, con módulo Z y ángulo φ.",
  referencia: "Módulo 2, págs. 20 y 21 del PDF · 3.4 Impedancia",
  diagrama: { tipo: "triangulo", horizontal: "R", vertical: "XL − XC", hipotenusa: "Z", angulo: "φ" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En un circuito RESISTIVO PURO alimentado con tensión alterna, ¿cómo van la tensión y la corriente?",
  opciones: [
    "En fase: las ondas viajan superpuestas, y cuando una pasa por cero la otra también. El ángulo φ es cero",
    "Desfasadas 90°, con la corriente atrasada",
    "Desfasadas 90°, con la corriente adelantada",
    "Desfasadas 180°, en oposición"
  ],
  correcta: 0,
  explicacion: "En un circuito puramente resistivo la corriente y la tensión no solo tienen la misma forma sino que además van en fase: las ondas viajan superpuestas, y cuando una pasa por cero la otra también. Visto en fasores, ambos giran uno sobre el otro y el ángulo φ vale cero.",
  referencia: "Módulo 2, pág. 23 del PDF · 3.5.1 Circuito resistivo (R)",
  diagrama: { tipo: "fasores", angulo: 0, nota: "φ = 0°  ·  tensión y corriente en fase" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En un circuito INDUCTIVO PURO, ¿qué ocurre entre la tensión y la corriente?",
  opciones: [
    "La corriente atrasa 90° respecto de la tensión: es el máximo desfasaje inductivo",
    "La corriente adelanta 90° respecto de la tensión",
    "Van en fase, igual que en un circuito resistivo",
    "La corriente atrasa 45° respecto de la tensión"
  ],
  correcta: 0,
  explicacion: "En un circuito L la corriente \"atrasa\" respecto de la tensión: parados en cualquier punto del eje X vemos pasar primero la onda de tensión y luego, más atrasada, la de corriente. Si la carga es una inductancia pura el ángulo φ vale −90°, que es el máximo desfasaje inductivo.",
  referencia: "Módulo 2, pág. 24 del PDF · 3.5.2 Circuito inductivo (L)",
  diagrama: { tipo: "ondas", desfasaje: -90, nota: "La corriente atrasa 90° respecto de la tensión" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En un circuito CAPACITIVO PURO, ¿qué ocurre entre la tensión y la corriente?",
  opciones: [
    "La corriente adelanta 90° respecto de la tensión: es el máximo desfasaje capacitivo",
    "La corriente atrasa 90° respecto de la tensión",
    "Van en fase, igual que en un circuito resistivo",
    "La corriente adelanta 180° respecto de la tensión"
  ],
  correcta: 0,
  explicacion: "A diferencia del inductivo, en un circuito C la corriente \"adelanta\" respecto de la tensión: vemos pasar primero la onda de corriente y luego la de tensión. Si la carga es un capacitor puro el ángulo φ vale +90°, el máximo desfasaje capacitivo.",
  referencia: "Módulo 2, págs. 24 y 25 del PDF · 3.5.3 Circuito capacitivo (C)",
  diagrama: { tipo: "fasores", angulo: 90, nota: "φ = +90°  ·  la corriente adelanta" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "En un circuito R-C, ¿qué se puede afirmar sobre el desfasaje?",
  opciones: [
    "La corriente siempre adelanta, con un ángulo comprendido entre 0° y 90° sin alcanzar los extremos",
    "La corriente siempre atrasa, con un ángulo entre 0° y 90°",
    "El desfasaje es exactamente 90°, igual que en el capacitivo puro",
    "El desfasaje es siempre 45°, cualesquiera sean los valores"
  ],
  correcta: 0,
  explicacion: "En un R-C la corriente siempre está adelantada respecto de la tensión, pero el adelanto ya no es de 90° como en el capacitivo puro: está comprendido entre 0° y 90°. Si XC es mucho mayor el desfasaje será cercano a 90°; si son similares rondará los 45°; y si la resistencia es mucho mayor, cercano a 0°. Nunca llega a los extremos.",
  referencia: "Módulo 2, pág. 26 del PDF · 3.5.5 Circuito resistivo y capacitivo (R-C)",
  diagrama: { tipo: "fasores", angulo: 38, nota: "φ entre 0° y +90°  ·  la corriente adelanta" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "dificil",
  pregunta: "Según el resumen del módulo, ¿cómo se comporta la corriente respecto de la tensión en cada tipo de carga?",
  opciones: [
    "Atrasa 90° si es inductiva pura; atrasa entre 90° y 0° si es R-L; queda en fase si es resistiva pura; adelanta entre 0° y 90° si es R-C; adelanta 90° si es capacitiva pura",
    "Adelanta 90° si es inductiva pura; queda en fase si es R-L; atrasa 90° si es capacitiva pura",
    "Siempre queda en fase con la tensión, cualquiera sea la carga",
    "Atrasa 90° si es capacitiva pura y adelanta 90° si es inductiva pura"
  ],
  correcta: 0,
  explicacion: "Ese es exactamente el resumen del módulo. Una regla práctica: la bobina (inductiva) hace que la corriente se retrase, el capacitor hace que se adelante, y la resistencia pura las deja en fase (φ = 0). En las cargas mixtas el ángulo queda entre 0° y 90° sin llegar nunca a los extremos.",
  referencia: "Módulo 2, pág. 27 del PDF · Resumen de desfasajes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "Al hablar de desfasajes entre tensión y corriente, ¿cuál es la convención que usa el módulo?",
  opciones: [
    "Se toma la tensión como referencia y se dice que la corriente adelanta o atrasa respecto de ella",
    "Se toma la corriente como referencia y se dice que la tensión adelanta o atrasa",
    "Se toma siempre el neutro como referencia",
    "No hay convención: cada caso se analiza de forma distinta"
  ],
  correcta: 0,
  explicacion: "Siempre se habla de que la corriente adelanta o atrasa con respecto a la tensión, es decir que se toma a esta última como referencia. El módulo aclara que hacerlo así es lo más tradicional, aunque también sería correcto tomar la corriente como referencia y decir que es la tensión la que se atrasa o adelanta.",
  referencia: "Módulo 2, pág. 22 del PDF · 3.5 Análisis de impedancia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "facil",
  pregunta: "En circuitos de corriente alterna, ¿cómo queda expresada la Ley de Ohm?",
  opciones: [
    "I = U / Z, reemplazando la resistencia por la impedancia",
    "I = U / R, exactamente igual que en continua",
    "I = U · Z",
    "La Ley de Ohm no se cumple en corriente alterna"
  ],
  correcta: 0,
  explicacion: "En circuitos de corriente alterna, donde no solamente existen resistencias sino impedancias, la Ley de Ohm queda I = U / Z. Como U, I y Z son magnitudes vectoriales, la división se hace en forma polar: se dividen los módulos y se restan los ángulos.",
  referencia: "Módulo 2, pág. 22 del PDF · 3.5 Análisis de impedancia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Se cumplen las leyes de Ohm y de Kirchhoff en los circuitos de corriente alterna?",
  opciones: [
    "Sí, se cumplen igual que en continua, pero existen diferencias a la hora de analizar los parámetros eléctricos",
    "No, en alterna esas leyes no tienen validez",
    "Solo se cumple la de Ohm; las de Kirchhoff no",
    "Solo se cumplen si el circuito es puramente resistivo"
  ],
  correcta: 0,
  explicacion: "El módulo lo dice expresamente: las leyes básicas de la electricidad (Ohm y Kirchhoff) se cumplen al igual que en los circuitos de corriente continua, pero existen diferencias a la hora de analizar los parámetros. La diferencia central es que en alterna hay que trabajar con magnitudes vectoriales, no escalares.",
  referencia: "Módulo 2, pág. 17 del PDF · 3.1 Corriente alterna y sus ventajas"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "Cuando medimos con un amperímetro o pinza amperométrica el consumo de un motor, ¿qué corriente estamos leyendo?",
  opciones: [
    "El módulo de la corriente aparente, es decir la corriente total, sin poder distinguir cuánto es activa y cuánto reactiva",
    "Solamente la corriente activa, la que realiza el trabajo mecánico",
    "Solamente la corriente reactiva, la que genera el campo magnético",
    "La suma aritmética de la corriente activa más la reactiva"
  ],
  correcta: 0,
  explicacion: "Los amperímetros miden corriente aparente, pero solamente su módulo: no permiten conocer el desfasaje ni cuánto de esa corriente es activa y cuánto reactiva.",
  referencia: "Módulo 2, pág. 28 del PDF · 3.6 Las tres corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué diferencia hay entre la corriente activa y la corriente reactiva?",
  opciones: [
    "La activa es la que utilizan las resistencias y realiza trabajo; la reactiva es la que usan bobinas y capacitores para crear sus campos",
    "La activa es la que usan las bobinas y la reactiva la que usan las resistencias",
    "La activa circula en continua y la reactiva en alterna",
    "Son la misma corriente medida con distintos instrumentos"
  ],
  correcta: 0,
  explicacion: "La corriente activa es la utilizada por las resistencias del circuito: solo ellas la consumen y solo ellas realizan transformaciones irreversibles, así que representa la corriente utilizada para realizar trabajos. La reactiva es la que utilizan las bobinas y capacitores para crear sus campos magnéticos y eléctricos.",
  referencia: "Módulo 2, pág. 28 del PDF · 3.6 Las tres corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Por qué la corriente aparente NO es la suma de la corriente activa más la reactiva?",
  opciones: [
    "Porque la aparente es la \"diagonal\": la activa es la componente horizontal y la reactiva la vertical, así que se combinan vectorialmente",
    "Porque la reactiva se resta en lugar de sumarse",
    "Porque la corriente aparente solo tiene en cuenta la activa",
    "Porque la reactiva no existe realmente en el circuito"
  ],
  correcta: 0,
  explicacion: "La corriente aparente es la corriente TOTAL, conformada por la activa en su componente horizontal y por la reactiva en la vertical. Si se intentara calcularla sumando activa más reactiva se caería en un error, porque vista gráficamente la aparente es la diagonal del rectángulo, no la suma de los lados.",
  referencia: "Módulo 2, pág. 28 del PDF · 3.6 Las tres corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "teoria", dificultad: "dificil",
  pregunta: "En dos derivaciones el amperímetro mide 3 A y 5 A. ¿Por qué al medir la corriente total no se obtienen 8 A?",
  opciones: [
    "Porque el instrumento muestra el módulo pero no el ángulo, y las corrientes tienen desfasajes distintos que hay que tener en cuenta al sumarlas",
    "Porque el amperímetro siempre mide con un error del 40 %",
    "Porque una de las dos corrientes circula en sentido contrario",
    "Porque las corrientes en paralelo se restan, no se suman"
  ],
  correcta: 0,
  explicacion: "Es un error muy común en alterna. El instrumento muestra el valor del módulo, pero no el ángulo, y la corriente sí posee un desfasaje. Lo más probable es que las corrientes medidas no tengan el mismo ángulo, así que al sumarlas aritméticamente el resultado no coincide con lo que muestra el amperímetro al medir la total. En el ejemplo del módulo, 3 ∠30° + 5 ∠−60° da 6 ∠−32°, no 8.",
  referencia: "Módulo 2, pág. 29 del PDF · Suma de corrientes medidas"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "facil",
  pregunta: "En Argentina el período de la tensión de línea es de 0,02 segundos. ¿Cuál es la frecuencia?",
  opciones: [
    "50 Hz",
    "20 Hz",
    "60 Hz",
    "0,02 Hz"
  ],
  correcta: 0,
  explicacion: "f = 1 / T = 1 / 0,02 = 50 Hz. Es la frecuencia que se utiliza en nuestro país. Período y frecuencia son inversos entre sí.",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "Si un equipo trabaja con una frecuencia de 60 Hz, ¿cuál es su período?",
  opciones: [
    "0,0167 s (16,7 ms)",
    "0,06 s (60 ms)",
    "0,02 s (20 ms)",
    "60 s"
  ],
  correcta: 0,
  explicacion: "T = 1 / f = 1 / 60 = 0,0167 s, es decir 16,7 milisegundos. A mayor frecuencia, menor período. Para comparar: a los 50 Hz de nuestro país les corresponde un período de 0,02 s (20 ms).",
  referencia: "Módulo 2, pág. 18 del PDF · 3.2 Periodo y frecuencia"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "En un sistema trifásico de baja tensión la tensión de fase (UF) es de 220 V. ¿Cuál es la tensión de línea (UL)?",
  opciones: [
    "380 V",
    "127 V",
    "440 V",
    "660 V"
  ],
  correcta: 0,
  explicacion: "UL = √3 × UF = 1,73 × 220 ≈ 380 V. Es el valor característico de la baja tensión en distribución. Multiplicar por 2 (440 V) o por 3 (660 V) son errores frecuentes: la constante es √3, no 2 ni 3.",
  referencia: "Módulo 2, pág. 19 del PDF · 3.3 Sistema trifásico de corrientes"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "Según la tabla del módulo, en una red de media tensión de 33 kV entre fases, ¿cuál es aproximadamente la tensión de fase?",
  opciones: [
    "19 kV",
    "57 kV",
    "16,5 kV",
    "11 kV"
  ],
  correcta: 0,
  explicacion: "UF = UL / √3 = 33 / 1,73 ≈ 19 kV. La tabla del módulo lista: BT 380 / 220 V; MT 13,2 / 7,6 kV; MT 33 / 19 kV; AT 132 / 76 kV; AT 220 / 127 kV.",
  referencia: "Módulo 2, pág. 19 del PDF · Tabla de tensiones UL y UF"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "En una línea de alta tensión de 220 kV entre fases, ¿cuál es la tensión de fase según la tabla del módulo?",
  opciones: [
    "127 kV",
    "110 kV",
    "381 kV",
    "76 kV"
  ],
  correcta: 0,
  explicacion: "UF = UL / √3 = 220 / 1,73 ≈ 127 kV, tal como figura en la tabla. Cuidado con dos trampas: dividir por 2 daría 110 kV, y 76 kV es el valor de fase que corresponde a la línea de 132 kV, no a la de 220 kV.",
  referencia: "Módulo 2, pág. 19 del PDF · Tabla de tensiones UL y UF"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un circuito tiene R = 30 Ω, XL = 8 Ω y no tiene componente capacitiva. ¿Cuál es su impedancia expresada en forma polar?",
  opciones: [
    "31 Ω ∠ 14,9°",
    "38 Ω ∠ 14,9°",
    "22 Ω ∠ 75,1°",
    "240 Ω ∠ 0°"
  ],
  correcta: 0,
  explicacion: "Z = R + j(XL − XC) = 30 + j(8 − 0) = 30 + j8. Pasando a polar: módulo = √(30² + 8²) = √964 ≈ 31 Ω, y ángulo = arctg(8/30) ≈ 14,9°. La impedancia no se obtiene sumando ni restando directamente R y XL: es una magnitud vectorial.",
  referencia: "Módulo 2, págs. 27 y 28 del PDF · 3.6 Las tres corrientes, ejemplo",
  diagrama: { tipo: "triangulo", horizontal: "R = 30 Ω", vertical: "XL = 8 Ω", hipotenusa: "Z = ?", angulo: "φ" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "dificil",
  pregunta: "A ese mismo circuito (Z = 31 Ω ∠ 14,9°) se le aplica una tensión de 220 V ∠ 0°. ¿Qué corriente circula?",
  opciones: [
    "7,1 A ∠ −14,9°",
    "7,1 A ∠ +14,9°",
    "6.820 A ∠ 14,9°",
    "0,14 A ∠ −14,9°"
  ],
  correcta: 0,
  explicacion: "En circuitos de corriente alterna la Ley de Ohm queda I = U / Z. Al dividir vectores en forma polar, los módulos se dividen y los ángulos se restan: 220 / 31 = 7,1 A, y 0° − 14,9° = −14,9°. El módulo 7,1 A es la corriente aparente (la que mediría una pinza) y el ángulo es el desfasaje respecto de la tensión.",
  referencia: "Módulo 2, págs. 22 y 28 del PDF · Ley de Ohm en CA"
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un circuito tiene R = 6 Ω, XL = 12 Ω y XC = 4 Ω. ¿Cuál es el módulo de su impedancia?",
  opciones: [
    "10 Ω",
    "22 Ω",
    "14 Ω",
    "2 Ω"
  ],
  correcta: 0,
  explicacion: "Primero se resuelve la componente vertical: XL − XC = 12 − 4 = 8 Ω. Entonces Z = 6 + j8, y su módulo es √(6² + 8²) = √100 = 10 Ω. El error típico es sumar los tres valores (22 Ω) olvidando que las reactancias se restan entre sí y que el resultado es una suma vectorial.",
  referencia: "Módulo 2, pág. 20 del PDF · 3.4 Impedancia",
  diagrama: { tipo: "triangulo", horizontal: "R = 6 Ω", vertical: "XL − XC = 8 Ω", hipotenusa: "Z = ?", angulo: "φ" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un circuito tiene R = 8 Ω, XL = 3 Ω y XC = 9 Ω. ¿Cuál es su impedancia en forma rectangular y qué carácter tiene?",
  opciones: [
    "Z = 8 − j6, de carácter capacitivo porque XC es mayor que XL",
    "Z = 8 + j6, de carácter inductivo porque XL es mayor que XC",
    "Z = 8 + j12, de carácter inductivo",
    "Z = 20, puramente resistivo"
  ],
  correcta: 0,
  explicacion: "Z = R + j(XL − XC) = 8 + j(3 − 9) = 8 − j6. Como XC supera a XL, la componente vertical queda NEGATIVA y el circuito resulta de carácter capacitivo: la corriente adelantará a la tensión. Su módulo es √(8² + 6²) = 10 Ω. Las reactancias se compensan entre sí: manda la más grande.",
  referencia: "Módulo 2, págs. 20 y 21 del PDF · 3.4 Impedancia",
  diagrama: { tipo: "triangulo", sentido: "abajo", horizontal: "R = 8 Ω", vertical: "XC − XL = 6 Ω", hipotenusa: "Z", angulo: "φ" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "En un circuito R-L la reactancia inductiva es mucho mayor que la resistencia. ¿Qué ángulo de desfasaje cabe esperar?",
  opciones: [
    "Cercano a 90°, sin llegar a serlo, con la corriente atrasada respecto de la tensión",
    "Exactamente 90°, con la corriente atrasada",
    "Cercano a 0°, prácticamente en fase",
    "Cercano a 90°, con la corriente adelantada respecto de la tensión"
  ],
  correcta: 0,
  explicacion: "En un R-L la corriente siempre atrasa, y el ángulo está comprendido entre 0° y 90° sin alcanzar los extremos. Si XL es mucho mayor que R, el desfasaje será muy cercano a 90°; si son similares rondará los 45°; y si R es mucho mayor, el ángulo será cercano a 0°. Los 90° exactos solo se dan en una inductancia pura.",
  referencia: "Módulo 2, pág. 25 del PDF · 3.5.4 Circuito resistivo e inductivo (R-L)",
  diagrama: { tipo: "fasores", angulo: -72, nota: "XL mucho mayor que R: φ se acerca a −90°" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "medio",
  pregunta: "En un circuito R-L la resistencia y la reactancia inductiva tienen valores similares. ¿Qué desfasaje cabe esperar?",
  opciones: [
    "Rondará los 45°, con la corriente atrasada",
    "Rondará los 90°, con la corriente atrasada",
    "Será exactamente 0°: van en fase",
    "Rondará los 45°, pero con la corriente adelantada"
  ],
  correcta: 0,
  explicacion: "Cuando ambos componentes tienen valores similares el desfasaje ronda los 45°. Es coherente con el triángulo de impedancias: si los dos catetos (R y XL) son parecidos, el ángulo entre la hipotenusa y el eje horizontal se acerca a 45°. La corriente atrasa porque la carga es inductiva.",
  referencia: "Módulo 2, pág. 25 del PDF · 3.5.4 Circuito resistivo e inductivo (R-L)",
  diagrama: { tipo: "fasores", angulo: -45, nota: "R y XL similares: φ ronda los −45°" }
},

{
  modulo: 2, tema: "Corriente alterna", tipo: "calculo", dificultad: "dificil",
  pregunta: "La corriente de un circuito, expresada en forma rectangular, es I = 6,8 + j 1,8 [A]. ¿Qué representa cada término?",
  opciones: [
    "6,8 A es la corriente activa (la de las resistencias) y 1,8 A la corriente reactiva (la de bobinas y capacitores)",
    "6,8 A es la corriente reactiva y 1,8 A la corriente activa",
    "6,8 A es la corriente aparente y 1,8 A el error de medición",
    "Los dos valores son corriente activa, medidos en dos instantes distintos"
  ],
  correcta: 0,
  explicacion: "El primer término, la componente horizontal, es la CORRIENTE ACTIVA: la que utilizan las resistencias, únicas que realizan transformaciones irreversibles y por lo tanto trabajo. El segundo, la componente vertical, es la CORRIENTE REACTIVA: la que usan bobinas y capacitores para crear sus campos. La aparente (7,1 A) es la diagonal, no la suma de las dos.",
  referencia: "Módulo 2, pág. 28 del PDF · 3.6 Las tres corrientes"
},

/* ══════════════════════════════════════════════════════════
   POTENCIAS Y FACTOR DE POTENCIA (22)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué representa la POTENCIA ACTIVA (P) y en qué unidad se mide?",
  opciones: [
    "La potencia útil, la que realmente se aprovecha y realiza un trabajo; se consume en las resistencias y se mide en Watt [W]",
    "La potencia que no se consume y queda circulando en el circuito; se mide en VAr",
    "La totalidad de potencia entregada por el sistema; se mide en VA",
    "La potencia perdida por efecto Joule en los conductores; se mide en kWh"
  ],
  correcta: 0,
  explicacion: "La potencia activa es la \"potencia útil\": la energía del eje de un motor que mueve un mecanismo, el calor de una resistencia, la luz de una lámpara. Se consume en las resistencias de la máquina o instalación, se representa con P y su unidad es el Watt [W]. Es la que registran los medidores y la que se factura.",
  referencia: "Módulo 2, pág. 30 del PDF · 3.7.1 Potencia activa"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué caracteriza a la POTENCIA REACTIVA (Q)?",
  opciones: [
    "Realmente NO es consumida ni produce trabajo útil: es necesaria para crear los campos magnéticos y eléctricos de bobinas y condensadores. Se mide en VoltAmper Reactivos [VAr]",
    "Es la potencia que se transforma íntegramente en trabajo útil y se mide en Watt",
    "Es la suma vectorial de la potencia activa y la aparente, medida en VA",
    "Es la potencia que se pierde en forma de calor en los conductores"
  ],
  correcta: 0,
  explicacion: "La potencia reactiva no produce trabajo útil: aparece en instalaciones con bobinas o condensadores y es necesaria para crear sus campos. Se representa con Q y se mide en VAr. No es consumida sino \"entretenida\" entre el aparato y la red, intercambiándose constantemente entre la fuente y la carga.",
  referencia: "Módulo 2, pág. 30 del PDF · 3.7.2 Potencia reactiva"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles son las unidades de las tres potencias?",
  opciones: [
    "Activa en Watt [W], reactiva en VoltAmper Reactivos [VAr] y aparente en Volt-Amper [VA]",
    "Activa en VA, reactiva en W y aparente en VAr",
    "Las tres se miden en Watt [W]",
    "Activa en kWh, reactiva en VAr y aparente en Watt"
  ],
  correcta: 0,
  explicacion: "Cada potencia tiene su propia unidad, y eso permite reconocer de cuál se está hablando con solo mirar el dato: P en Watt [W], Q en VoltAmper Reactivos [VAr] y S en Volt-Amper [VA]. El kWh, en cambio, es unidad de energía, no de potencia.",
  referencia: "Módulo 2, págs. 30 y 31 del PDF · Potencias en corriente alterna"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Cómo se relacionan la potencia reactiva inductiva (QL) y la capacitiva (QC)?",
  opciones: [
    "Tienen las mismas características pero signos opuestos (QL positiva y QC negativa), por lo que se compensan entre sí: si hay igual cantidad de ambas, la Q total es cero",
    "Se suman entre sí, por lo que instalar capacitores empeora el problema",
    "Son idénticas en todo, incluido el signo, y no pueden compensarse",
    "La QC solo existe en corriente continua y la QL solo en alterna"
  ],
  correcta: 0,
  explicacion: "Los dos subtipos tienen las mismas características, solo que una es positiva (QL, de las bobinas) y la otra negativa (QC, de los condensadores). En definitiva se compensan una con otra: si hay la misma cantidad de QL que de QC, la suma total de Q es cero y para el sistema eléctrico es como si esas potencias no existieran. Ese es el fundamento de la compensación del factor de potencia.",
  referencia: "Módulo 2, pág. 30 del PDF · 3.7.2 Potencia reactiva"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se obtiene la POTENCIA APARENTE (S) a partir de la activa y la reactiva?",
  opciones: [
    "Como la suma vectorial (geométrica) de P y Q, es decir la hipotenusa del triángulo de potencias; se mide en Volt-Amper [VA]",
    "Como la suma aritmética directa de P más Q; se mide en Watt",
    "Como la resta de P menos Q; se mide en VAr",
    "Como el producto de P por Q; se mide en VA"
  ],
  correcta: 0,
  explicacion: "La potencia aparente es la totalidad de potencia entregada por el sistema a la instalación. Está formada por P y Q, pero matemáticamente es la suma VECTORIAL de ambas: no se pueden sumar de la forma tradicional. En el triángulo de potencias, S es la hipotenusa.",
  referencia: "Módulo 2, pág. 31 del PDF · 3.7.3 Potencia aparente",
  diagrama: { tipo: "triangulo", horizontal: "P", vertical: "Q", hipotenusa: "S", angulo: "φ" }
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "En el triángulo de potencias, ¿dónde se ubican la potencia activa y la reactiva?",
  opciones: [
    "P siempre en el eje horizontal y hacia la derecha; Q a 90° en el extremo de P, coincidiendo con la reactancia del triángulo de impedancias",
    "P en el eje vertical y Q en el horizontal",
    "P y Q sobre la misma línea, una a continuación de la otra",
    "P en la hipotenusa y Q en el eje horizontal"
  ],
  correcta: 0,
  explicacion: "La potencia activa P se encuentra siempre en el eje horizontal y hacia la derecha, porque se consume en las resistencias y por eso coincide con R en el triángulo de impedancias. En el extremo de P y a 90° está la potencia reactiva Q, cuya posición coincide con la reactancia inductiva. Si la reactancia fuese capacitiva, se invierte el sentido de Q.",
  referencia: "Módulo 2, pág. 31 del PDF · 3.8 Triángulo de potencias",
  diagrama: { tipo: "triangulo", horizontal: "P", vertical: "Q", hipotenusa: "S", angulo: "φ" }
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cómo se define matemáticamente el factor de potencia?",
  opciones: [
    "Como la relación entre la potencia activa y la potencia aparente: P / S, que es igual al coseno del ángulo φ",
    "Como la relación entre la potencia reactiva y la activa: Q / P",
    "Como la relación entre la potencia aparente y la activa: S / P",
    "Como el producto de la potencia activa por la aparente: P × S"
  ],
  correcta: 0,
  explicacion: "Factor de potencia = P / S = cos(φ). En el triángulo de potencias, φ es el ángulo entre P y S; por la relación trigonométrica del triángulo rectángulo, el coseno de un ángulo es su cateto adyacente (P) dividido por la hipotenusa (S). Es adimensional: no tiene unidad, porque expresa un porcentaje.",
  referencia: "Módulo 2, pág. 32 del PDF · 3.9 Factor de potencia",
  diagrama: { tipo: "triangulo", horizontal: "P", vertical: "Q", hipotenusa: "S", angulo: "φ" }
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué valores puede tomar el factor de potencia y qué significa su signo?",
  opciones: [
    "Va de 1 a 0, donde 1 es el ideal (100% activa). El signo es convencional: negativo si el reactivo lo genera una bobina, positivo si lo genera un capacitor",
    "Va de 0 a 100, donde 100 es el ideal. El signo indica si la instalación es monofásica o trifásica",
    "Va de 1 a 0, donde 0 es el ideal. El signo negativo indica una carga capacitiva",
    "Puede tomar cualquier valor, incluso mayor que 1 en instalaciones sobrecompensadas"
  ],
  correcta: 0,
  explicacion: "El factor de potencia va de 1 a 0: 1 es el valor ideal (el 100% de la energía utilizada es activa) y 0 la peor condición (todo lo consumido es reactivo). El signo se coloca por convención, no surge del cálculo matemático: si el consumo de reactivo lo genera una bobina el signo es negativo; si lo produce un capacitor, positivo.",
  referencia: "Módulo 2, pág. 33 del PDF · 3.9.1 Valores"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Entre qué valores de factor de potencia exige EPE que se mantengan los grandes usuarios?",
  opciones: [
    "Entre +0,95 y −0,95, es decir que como mínimo el 95% de la energía utilizada sea activa",
    "Entre +0,80 y −0,80",
    "Exactamente en 1, sin ningún margen de tolerancia",
    "Entre +0,50 y −0,50"
  ],
  correcta: 0,
  explicacion: "No hay exigencias hacia los usuarios residenciales, pero sí hacia los grandes usuarios, porque la optimización de sus instalaciones tiene gran impacto sobre las redes. Como un factor de potencia de 1 es muy difícil de mantener, la reglamentación contempla un margen y admite valores entre +0,95 y −0,95.",
  referencia: "Módulo 2, pág. 33 del PDF · 3.9.1 Valores"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué ocurre con la energía reactiva en la facturación y en los medidores?",
  opciones: [
    "No se tiene en cuenta para la facturación de pequeños clientes; los medidores digitales sí la miden, los analógicos no",
    "Se factura igual que la activa a todos los clientes",
    "Ningún medidor es capaz de registrarla",
    "Solo la registran los medidores analógicos, no los digitales"
  ],
  correcta: 0,
  explicacion: "La energía reactiva no es tenida en cuenta para la facturación en lo que respecta a pequeños clientes. Los medidores digitales, monofásicos y trifásicos, SÍ la miden; no así los analógicos, en los que el paso de energía reactiva no genera ni el más mínimo movimiento en su disco.",
  referencia: "Módulo 2, pág. 29 del PDF · Energía reactiva y medidores"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cuáles son los principales inconvenientes de un mal factor de potencia?",
  opciones: [
    "Incremento de pérdidas por efecto Joule, sobrecarga de generadores, transformadores y líneas, aumento de la caída de tensión e incremento de la potencia aparente",
    "Aumento del consumo de energía activa facturada al cliente",
    "Disminución de la corriente total que circula por la red",
    "Reducción de la vida útil de los medidores domiciliarios únicamente"
  ],
  correcta: 0,
  explicacion: "El módulo enumera esos cuatro. La raíz de todos es la misma: un bajo factor de potencia implica gran corriente reactiva, lo que aumenta la corriente TOTAL. Y esa corriente extra calienta (pérdidas I²R), sobrecarga los equipos, aumenta la caída de tensión (I·R) y eleva la potencia aparente que debe entregar la máquina.",
  referencia: "Módulo 2, págs. 36 y 37 del PDF · 3.10.1 ¿Por qué se debe corregir?"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "En la analogía de la jarra de cerveza que usa el módulo, ¿qué representa cada elemento?",
  opciones: [
    "La capacidad de la jarra es la potencia aparente [kVA], la cerveza líquida la potencia activa [kW] y la espuma la potencia reactiva [kVAr]",
    "La jarra es la potencia activa, la cerveza la reactiva y la espuma la aparente",
    "La jarra es la energía facturada, la cerveza el costo y la espuma el impuesto",
    "La jarra es la corriente, la cerveza la tensión y la espuma la resistencia"
  ],
  correcta: 0,
  explicacion: "La capacidad de la jarra representa la potencia del transformador (aparente, en kVA), la cantidad de cerveza líquida la potencia activa (kW) y la espuma la potencia reactiva (kVAr). Lo ideal sería que la jarra esté llena de cerveza: sin espuma, el factor de potencia sería 1. Cuando el factor es bajo la espuma aumenta y la jarra rebalsa, o bien hay que servir menos cerveza.",
  referencia: "Módulo 2, pág. 37 del PDF · Incremento de potencia aparente"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cómo se corrige el factor de potencia de una carga inductiva, y dónde conviene instalar el equipo de compensación?",
  opciones: [
    "Con condensadores conectados en paralelo con la carga, instalados lo más cerca posible de ella, porque la liberación de energía reactiva se produce aguas arriba del banco",
    "Con bobinas conectadas en serie con la carga, instaladas en la estación transformadora",
    "Con condensadores conectados en serie con la carga, en cualquier punto de la línea",
    "Con resistencias conectadas en paralelo, lo más cerca posible de la fuente"
  ],
  correcta: 0,
  explicacion: "La corrección se hace con condensadores en paralelo con la carga: si en el mismo circuito hay una reactancia inductiva y una capacitiva de igual valor, las cargas reactivas se anulan entre sí. Y la ubicación importa: la liberación de energía reactiva se produce aguas arriba del banco, porque entre este y la carga inductiva dicha energía sigue circulando. Por eso conviene compensar en las proximidades de la carga.",
  referencia: "Módulo 2, págs. 38 y 39 del PDF · 3.10.2 ¿Cómo se corrige? Cargas inductivas"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Por qué el intercambio entre bobinas y capacitores hace que la fuente ya no deba entregar energía reactiva?",
  opciones: [
    "Porque la energía reactiva queda confinada entre ambos elementos: el momento en que uno la demanda coincide con el que el otro la devuelve, y viceversa",
    "Porque los capacitores destruyen la energía reactiva",
    "Porque las bobinas dejan de generar campo magnético al haber capacitores",
    "Porque los capacitores transforman la energía reactiva en energía activa"
  ],
  correcta: 0,
  explicacion: "El efecto se da debido al intercambio energético entre bobinas y capacitores: la energía reactiva queda confinada entre ambos elementos, porque si bien los dos la necesitan, el momento en que uno demanda coincide con el que el otro devuelve. Los campos magnéticos siguen existiendo (sin ellos un motor o un transformador no funcionaría); lo que cambia es quién los alimenta.",
  referencia: "Módulo 2, pág. 38 del PDF · 3.10.2 Cargas inductivas"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "dificil",
  pregunta: "¿Cómo se compensa un factor de potencia CAPACITIVO, y en qué caso típico aparece?",
  opciones: [
    "Con cargas inductivas en paralelo; aparece en líneas muy largas de alta y muy alta tensión cuando están en vacío o con muy poca carga",
    "Con más capacitores en paralelo; aparece en instalaciones con muchos motores",
    "Con resistencias en serie; aparece en hornos eléctricos",
    "No hace falta compensarlo: un factor capacitivo nunca es perjudicial"
  ],
  correcta: 0,
  explicacion: "Así como es perjudicial un factor inductivo menor a 0,95, también lo es uno capacitivo de los mismos valores. Se compensa con las cargas opuestas, es decir inductivas, conectadas en paralelo igual que en el otro caso. El caso típico son líneas muy largas de AT y MAT en vacío o con muy poca carga: tienen un efecto capacitivo que no se anula naturalmente y produce un aumento de tensión del lado de la carga.",
  referencia: "Módulo 2, pág. 40 del PDF · Cargas capacitivas"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Por qué hay que tener en cuenta el factor de potencia al dimensionar conductores y llaves termomagnéticas?",
  opciones: [
    "Porque el circuito debe poder manejar la corriente TOTAL, aunque la parte reactiva no sea facturada por la distribuidora",
    "Porque las termomagnéticas se calibran en VAr y no en amperes",
    "Porque un factor de potencia bajo reduce la corriente y permite usar menos sección",
    "Porque la distribuidora exige sobredimensionar todo al doble"
  ],
  correcta: 0,
  explicacion: "En el ejemplo del módulo, un motor de 2.200 W con fp −0,76 hace circular 13,1 A y no los 10 A que se calcularían ignorando el factor. Al determinar la sección de los conductores y el valor de las llaves termomagnéticas hay que considerar el valor TOTAL de corriente, ya que por más que no sea facturada, el circuito debe poder manejar el total de la energía demandada.",
  referencia: "Módulo 2, pág. 35 del PDF · 3.9.2 Entendiendo el factor de potencia"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "medio",
  pregunta: "Un motor tiene una potencia activa de 2.200 W y un factor de potencia de −0,76. ¿Cuál es la potencia aparente que demanda?",
  opciones: [
    "2.894,7 VA",
    "1.672 VA",
    "2.200 VA",
    "3.700 VA"
  ],
  correcta: 0,
  explicacion: "De Factor de potencia = P / S se despeja S = P / Factor de potencia = 2.200 / 0,76 = 2.894,7 VA. El error frecuente es multiplicar (2.200 × 0,76 = 1.672), que es la operación inversa. Como el factor es menor que 1, la aparente siempre resulta MAYOR que la activa.",
  referencia: "Módulo 2, pág. 34 del PDF · 3.9.2 Entendiendo el factor de potencia"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "medio",
  pregunta: "Ese mismo motor (S = 2.894,7 VA) está conectado a 220 V. ¿Qué corriente total circula por su cable de alimentación?",
  opciones: [
    "13,1 A",
    "10 A",
    "7,6 A",
    "16,8 A"
  ],
  correcta: 0,
  explicacion: "I = S / U = 2.894,7 / 220 = 13,1 A. Si no se hubiera tenido en cuenta el factor de potencia, se habría calculado 2.200 / 220 = 10 A, un 31 % menos. Por eso el factor de potencia importa al dimensionar conductores y protecciones.",
  referencia: "Módulo 2, págs. 34 y 35 del PDF · 3.9.2 Entendiendo el factor de potencia"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "medio",
  pregunta: "Un electrodoméstico declara 2.200 W con factor de potencia 1 y funciona 5 horas. ¿Qué energía registra el medidor y qué corriente circula, a 220 V?",
  opciones: [
    "11 kWh y 10 A",
    "11 kWh y 13,1 A",
    "2,2 kWh y 10 A",
    "44 kWh y 20 A"
  ],
  correcta: 0,
  explicacion: "Con factor de potencia 1, hablar de aparente o de activa es lo mismo: toda la energía demandada es activa. Energía: E = P · t = 2.200 W · 5 h = 11.000 Wh = 11 kWh. Corriente: I = S / U = 2.200 / 220 = 10 A. Los 13,1 A corresponden al mismo aparato pero con fp −0,76.",
  referencia: "Módulo 2, pág. 34 del PDF · 3.9.2 Entendiendo el factor de potencia"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "medio",
  pregunta: "Una instalación demanda 200 kVAr inductivos y se le conecta en paralelo un banco de capacitores de 180 kVAr. ¿Cuál es la carga reactiva resultante?",
  opciones: [
    "20 kVAr inductivos",
    "380 kVAr inductivos",
    "20 kVAr capacitivos",
    "0 kVAr: queda totalmente compensada"
  ],
  correcta: 0,
  explicacion: "Como QL y QC tienen signos opuestos, se restan: 200 − 180 = 20 kVAr, y quedan del lado inductivo porque esa era la carga mayor. Es una compensación parcial: no anula la carga, solo la reduce. Para anularla por completo el banco debería ser de 200 kVAr.",
  referencia: "Módulo 2, pág. 38 del PDF · 3.10.2 Cargas inductivas"
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "dificil",
  pregunta: "Un gran cliente tiene una potencia activa de 55.000 W y demanda 59.782 VA. ¿Cuál es su factor de potencia y su aprovechamiento?",
  opciones: [
    "0,92 · aprovecha el 92 % de la energía que se le transporta",
    "1,09 · aprovecha el 109 % de la energía",
    "0,55 · aprovecha el 55 % de la energía",
    "0,08 · aprovecha el 8 % de la energía"
  ],
  correcta: 0,
  explicacion: "Factor de potencia = P / S = 55.000 / 59.782 = 0,92. Significa que el 92 % de la energía total que atraviesa la instalación se transforma en trabajo útil. Dividir al revés (S/P) daría 1,09, un valor imposible: el factor de potencia nunca supera 1.",
  referencia: "Módulo 2, pág. 35 del PDF · Tabla de factor de potencia",
  diagrama: { tipo: "triangulo", horizontal: "P = 55.000 W", vertical: "Q = 23.358 VAr", hipotenusa: "S = 59.782 VA", angulo: "φ = 23°" }
},

{
  modulo: 2, tema: "Potencias y factor de potencia", tipo: "calculo", dificultad: "dificil",
  pregunta: "Según la tabla del módulo, un cliente de 55 kW con factor de potencia 1 demanda 4,1 A. Si su factor cae a −0,63, ¿qué corriente demanda?",
  opciones: [
    "6,6 A, porque la potencia aparente sube a 87.301 VA",
    "4,1 A, porque la potencia activa no cambió",
    "2,6 A, porque el factor de potencia reduce la corriente",
    "55 A, porque la corriente es igual a la potencia en kW"
  ],
  correcta: 0,
  explicacion: "La potencia activa sigue siendo 55.000 W, así que el cliente paga lo mismo. Pero la aparente sube: S = 55.000 / 0,63 = 87.301 VA, y con ella la corriente, que pasa de 4,1 A a 6,6 A. Ese es el punto de toda la tabla: la facturación no cambia, pero la repercusión sobre las instalaciones de la distribuidora es enorme.",
  referencia: "Módulo 2, pág. 35 del PDF · Tabla de factor de potencia",
  diagrama: { tipo: "triangulo", horizontal: "P = 55.000 W", vertical: "Q = 67.845 VAr", hipotenusa: "S = 87.301 VA", angulo: "φ = 51°" }
},

/* ══════════════════════════════════════════════════════════
   TRIGONOMETRÍA Y VECTORES (10)
   ══════════════════════════════════════════════════════════ */

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Qué es un FASOR?",
  opciones: [
    "Un vector que gira a velocidad constante en sentido antihorario",
    "Un vector fijo que nunca cambia de posición",
    "Una magnitud escalar definida solo por un número y su unidad",
    "El valor máximo que alcanza una onda senoidal"
  ],
  correcta: 0,
  explicacion: "Un fasor no es más que un vector que gira a velocidad constante en sentido antihorario. Se lo usa como representación alternativa a la senoidal porque esta última, si bien permite visualizar bien el fenómeno, se torna muy compleja de operar.",
  referencia: "Módulo 2, pág. 43 del PDF · 4.2 Vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuál es la diferencia entre una magnitud escalar y una vectorial?",
  opciones: [
    "La escalar queda definida por un número y su unidad; la vectorial necesita además dirección, sentido y punto de aplicación",
    "La escalar necesita dirección y sentido; la vectorial solo un número",
    "La escalar se usa en continua y la vectorial en alterna, pero son lo mismo",
    "No hay diferencia: son dos nombres para el mismo concepto"
  ],
  correcta: 0,
  explicacion: "Magnitudes como la energía o la temperatura quedan definidas por un número y las unidades de su medida: son escalares. Otras, como la velocidad, la fuerza o el campo magnético, necesitan además una dirección, un sentido y un punto de aplicación: son vectoriales.",
  referencia: "Módulo 2, pág. 43 del PDF · 4.2 Vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "facil",
  pregunta: "¿Cuáles son las cuatro características que posee todo vector?",
  opciones: [
    "Punto de aplicación, módulo, dirección y sentido",
    "Módulo, ángulo, frecuencia y período",
    "Longitud, sección, resistividad y resistencia",
    "Origen, destino, velocidad y aceleración"
  ],
  correcta: 0,
  explicacion: "El punto de aplicación es el punto exacto sobre el que actúa; el módulo es la longitud del vector, medida desde su origen hasta su extremo; la dirección viene dada por la orientación de la recta que lo contiene; y el sentido se indica con la punta de flecha en su extremo.",
  referencia: "Módulo 2, pág. 43 del PDF · 4.2 Vectores",
  diagrama: { tipo: "vector", x: 5, y: 3, etiqueta: "A", componentes: false }
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "facil",
  pregunta: "Según el teorema de Pitágoras aplicado a los triángulos de la corriente alterna…",
  opciones: [
    "la hipotenusa al cuadrado es igual a la suma de los cuadrados de los catetos: h² = C² + c²",
    "la hipotenusa es igual a la suma de los catetos: h = C + c",
    "la hipotenusa al cuadrado es igual a la resta de los cuadrados de los catetos",
    "los tres lados son siempre iguales entre sí"
  ],
  correcta: 0,
  explicacion: "h² = C² + c². Despejando se puede averiguar cualquiera de los lados conociendo los otros dos. Es la herramienta que permite calcular el módulo de la impedancia a partir de R y X, o la potencia aparente a partir de P y Q.",
  referencia: "Módulo 2, pág. 42 del PDF · 4.1 Trigonometría"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "medio",
  pregunta: "En un triángulo rectángulo, el COSENO de un ángulo es igual a…",
  opciones: [
    "su cateto adyacente dividido por la hipotenusa, que es justamente la relación P / S del factor de potencia",
    "su cateto opuesto dividido por la hipotenusa",
    "su cateto opuesto dividido por el cateto adyacente",
    "la hipotenusa dividida por el cateto adyacente"
  ],
  correcta: 0,
  explicacion: "El coseno de un ángulo es su cateto adyacente dividido su hipotenusa. Aplicado al triángulo de potencias: el cateto adyacente a φ es P y la hipotenusa es S, de modo que cos(φ) = P / S. Por eso el factor de potencia y el coseno de φ son lo mismo.",
  referencia: "Módulo 2, págs. 32 y 42 del PDF · Factor de potencia y trigonometría",
  diagrama: { tipo: "triangulo", horizontal: "Cateto adyacente (P)", vertical: "Cateto opuesto (Q)", hipotenusa: "Hipotenusa (S)", angulo: "φ" }
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "teoria", dificultad: "medio",
  pregunta: "¿Qué forma conviene usar para cada operación con vectores?",
  opciones: [
    "Rectangular para sumar y restar; polar para multiplicar y dividir",
    "Polar para sumar y restar; rectangular para multiplicar y dividir",
    "Rectangular para todas las operaciones",
    "Polar para todas las operaciones"
  ],
  correcta: 0,
  explicacion: "Para sumar o restar conviene tener los vectores en forma rectangular, porque se opera componente horizontal con horizontal y vertical con vertical. Para multiplicar o dividir conviene la forma polar, porque los módulos se multiplican o dividen y los ángulos se suman o restan.",
  referencia: "Módulo 2, págs. 49 y 50 del PDF · Operaciones con vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "medio",
  pregunta: "Dados los vectores A = 6 + j4 y B = 2 − j3, ¿cuánto vale A + B?",
  opciones: [
    "8 + j1",
    "8 + j7",
    "4 + j7",
    "8 − j7"
  ],
  correcta: 0,
  explicacion: "Para sumar vectores conviene tenerlos en forma rectangular y se suman por separado las componentes horizontales y las verticales: (6 + 2) + j(4 + (−3)) = 8 + j(4 − 3) = 8 + j1. Atención a la regla de los signos en la componente vertical: el \"+\" de la suma multiplicado por el \"−\" del vector B equivale a una resta.",
  referencia: "Módulo 2, pág. 49 del PDF · 4.2.7 Suma y resta de vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "dificil",
  pregunta: "Con los mismos vectores A = 6 + j4 y B = 2 − j3, ¿cuánto vale A − B?",
  opciones: [
    "4 + j7",
    "4 + j1",
    "8 + j1",
    "4 − j7"
  ],
  correcta: 0,
  explicacion: "A − B = (6 − 2) + j(4 − (−3)). Aplicando la regla de los signos, dos signos negativos que se multiplican equivalen a una suma: (6 − 2) + j(4 + 3) = 4 + j7. Gráficamente, restar equivale a invertir el sentido del vector B y luego sumar.",
  referencia: "Módulo 2, págs. 49 y 50 del PDF · 4.2.7 Suma y resta de vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "medio",
  pregunta: "Dados A = 4 ∠ 38° y B = 2 ∠ 64°, ¿cuánto vale A × B?",
  opciones: [
    "8 ∠ 102°",
    "8 ∠ 26°",
    "2 ∠ 102°",
    "6 ∠ 2.432°"
  ],
  correcta: 0,
  explicacion: "Para multiplicar conviene tener los vectores en forma polar: los módulos se multiplican y los ángulos se SUMAN. Entonces A × B = (4 × 2) ∠ (38° + 64°) = 8 ∠ 102°.",
  referencia: "Módulo 2, pág. 50 del PDF · 4.2.9 Multiplicación y división de vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "dificil",
  pregunta: "Con los mismos vectores A = 4 ∠ 38° y B = 2 ∠ 64°, ¿cuánto vale A ÷ B?",
  opciones: [
    "2 ∠ −26°",
    "2 ∠ 102°",
    "8 ∠ −26°",
    "0,5 ∠ −26°"
  ],
  correcta: 0,
  explicacion: "Para dividir, el módulo del resultado es el cociente de los módulos y el ángulo es la RESTA de los ángulos: A ÷ B = (4 ÷ 2) ∠ (38° − 64°) = 2 ∠ −26°. Es exactamente la operación que se usa al aplicar la Ley de Ohm en corriente alterna, I = U / Z.",
  referencia: "Módulo 2, pág. 50 del PDF · 4.2.9 Multiplicación y división de vectores"
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "dificil",
  pregunta: "El vector E = 6 + j4 está en forma rectangular. ¿Cuál es su expresión en forma polar?",
  opciones: [
    "7,2 ∠ 33°",
    "10 ∠ 33°",
    "7,2 ∠ 56°",
    "2 ∠ 33°"
  ],
  correcta: 0,
  explicacion: "El módulo sale del teorema de Pitágoras: √(6² + 4²) = √52 = 7,21. El ángulo sale de la tangente: arctg(4/6) = 33,69°. Entonces E = 7,2 ∠ 33°. Sumar las componentes (10) es el error clásico: el módulo es la hipotenusa, no la suma de los catetos.",
  referencia: "Módulo 2, pág. 47 del PDF · 4.2.5 Pasaje de forma rectangular a polar",
  diagrama: { tipo: "vector", x: 6, y: 4, etiqueta: "E = 6 + j4" }
},

{
  modulo: 2, tema: "Trigonometría y vectores", tipo: "calculo", dificultad: "dificil",
  pregunta: "El vector F = 4 ∠ 38° está en forma polar. ¿Cuál es su expresión en forma rectangular?",
  opciones: [
    "3,15 + j 2,46",
    "2,46 + j 3,15",
    "4 + j 38",
    "1,52 + j 2,48"
  ],
  correcta: 0,
  explicacion: "La componente horizontal es 4 · cos(38°) = 3,15 y la vertical 4 · sen(38°) = 2,46. Entonces F = 3,15 + j 2,46. Como el ángulo es menor a 45°, la componente horizontal tiene que ser la mayor de las dos: eso permite descartar de entrada la opción que las invierte.",
  referencia: "Módulo 2, pág. 48 del PDF · 4.2.6 Pasaje de forma polar a rectangular",
  diagrama: { tipo: "vector", x: 3.15, y: 2.46, etiqueta: "F = 4 ∠ 38°", rango: 5 }
}

];
