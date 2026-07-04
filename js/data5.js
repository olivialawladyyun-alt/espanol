// ============ 学习强化包：例句补全 · 听力 · 阅读 · 语境填空 · 扩充题库 ============
// 在 data4.js 之后加载

// ---------- #4 词汇例句补全（为缺例句的高频词补上语境例句） ----------
const WORD_EXAMPLES = {
  // 第一册
  'buenas tardes': ['Buenas tardes, ¿cómo está usted?', '下午好，您好吗？'],
  'buenas noches': ['Buenas noches, hasta mañana.', '晚安，明天见。'],
  'adiós': ['Adiós, nos vemos pronto.', '再见，回头见。'],
  'de nada': ['—Gracias. —De nada.', '——谢谢。——不客气。'],
  'perdón': ['Perdón, ¿dónde está la salida?', '打扰一下，出口在哪里？'],
  'dos': ['Tengo dos hermanos.', '我有两个兄弟。'],
  'diez': ['Son las diez de la mañana.', '早上十点了。'],
  'cien': ['Este libro cuesta cien euros.', '这本书一百欧元。'],
  'la madre': ['Mi madre cocina muy bien.', '我妈妈做饭很好吃。'],
  'el hermano': ['Mi hermano estudia en Madrid.', '我哥哥在马德里学习。'],
  'la hija': ['Su hija tiene cinco años.', '他女儿五岁。'],
  'el pan': ['Como pan con leche por la mañana.', '我早上吃面包配牛奶。'],
  'la leche': ['Un vaso de leche, por favor.', '请来一杯牛奶。'],
  'el arroz': ['Me gusta el arroz con pollo.', '我喜欢鸡肉饭。'],
  'rojo': ['Tengo un coche rojo.', '我有一辆红色的车。'],
  'azul': ['El cielo está muy azul hoy.', '今天天空很蓝。'],
  'hoy': ['Hoy hace mucho calor.', '今天很热。' ],
  'ayer': ['Ayer fui al cine.', '昨天我去看了电影。'],
  'la semana': ['Trabajo cinco días a la semana.', '我一周工作五天。'],
  'hacer': ['¿Qué haces los domingos?', '你周日做什么？'],
  'venir': ['¿Puedes venir a mi casa?', '你能来我家吗？'],
  'comer': ['Vamos a comer juntos.', '我们一起去吃饭吧。'],
  'beber': ['¿Qué quieres beber?', '你想喝什么？'],
  'vivir': ['Vivo en una ciudad grande.', '我住在一座大城市。'],
  'poder': ['¿Puedes ayudarme, por favor?', '你能帮我一下吗？'],
  'ver': ['Quiero ver esa película.', '我想看那部电影。'],
  'la casa': ['Mi casa está cerca de aquí.', '我家离这儿很近。'],
  'el trabajo': ['El trabajo empieza a las nueve.', '工作九点开始。'],
  'la ciudad': ['Pekín es una ciudad muy grande.', '北京是一座很大的城市。'],
  'el dinero': ['No tengo mucho dinero.', '我没有很多钱。'],
  'el coche': ['Voy al trabajo en coche.', '我开车上班。'],
  // 第二册
  'la cabeza': ['Me duele la cabeza.', '我头疼。'],
  'el médico': ['El médico está en el hospital.', '医生在医院里。'],
  'enfermo': ['Estoy enfermo, no puedo ir.', '我病了，去不了。'],
  'el autobús': ['Tomo el autobús todas las mañanas.', '我每天早上坐公交车。'],
  'el tren': ['El tren sale a las ocho.', '火车八点发车。'],
  'la estación': ['La estación está muy lejos.', '车站很远。'],
  'el parque': ['Los niños juegan en el parque.', '孩子们在公园里玩。'],
  'el banco': ['Voy al banco a sacar dinero.', '我去银行取钱。'],
  'la clase': ['La clase de español es muy interesante.', '西班牙语课很有意思。'],
  'el examen': ['Mañana tengo un examen.', '我明天有考试。'],
  'la empresa': ['Trabajo en una empresa grande.', '我在一家大公司工作。'],
  'la reunión': ['La reunión es a las tres.', '会议三点开。'],
  'estudiar': ['Estudio español todos los días.', '我每天学西班牙语。'],
  'el sol': ['Hoy hace sol.', '今天出太阳。'],
  'la lluvia': ['No me gusta la lluvia.', '我不喜欢下雨。'],
  'la playa': ['En verano vamos a la playa.', '夏天我们去海滩。'],
  'feliz': ['Estoy muy feliz hoy.', '我今天很开心。'],
  'triste': ['¿Por qué estás triste?', '你为什么难过？'],
  'inteligente': ['Mi hermana es muy inteligente.', '我妹妹很聪明。'],
  'pensar': ['Pienso que tienes razón.', '我觉得你说得对。'],
  'saber': ['No sé su número de teléfono.', '我不知道他的电话号码。'],
  'salir': ['Salgo de casa a las siete.', '我七点出门。'],
  'llegar': ['El tren llega a las nueve.', '火车九点到。'],
  'empezar': ['La película empieza ahora.', '电影现在开始。'],
  'comprar': ['Quiero comprar un regalo.', '我想买一份礼物。'],
  'necesitar': ['Necesito ayuda, por favor.', '我需要帮助。'],
  'la camisa': ['Esta camisa es muy bonita.', '这件衬衫很漂亮。'],
  'los zapatos': ['Estos zapatos son muy caros.', '这双鞋很贵。'],
  'barato': ['Este restaurante es bueno y barato.', '这家餐厅又好又便宜。'],
  'caro': ['El coche es demasiado caro.', '这辆车太贵了。'],
  'el fútbol': ['Me gusta jugar al fútbol.', '我喜欢踢足球。'],
  'la música': ['Escucho música por la noche.', '我晚上听音乐。'],
  'el cine': ['Vamos al cine el sábado.', '我们周六去看电影。'],
  'bailar': ['Me encanta bailar.', '我超爱跳舞。'],
  'viajar': ['Quiero viajar por España.', '我想游历西班牙。'],
  'leer': ['Leo un libro antes de dormir.', '我睡前读一本书。'],
  // 第三册
  'la carta': ['Escribo una carta a mi amigo.', '我给朋友写一封信。'],
  'enviar': ['Voy a enviar este paquete.', '我要寄这个包裹。'],
  'recibir': ['Recibí tu mensaje ayer.', '我昨天收到了你的消息。'],
  'la salud': ['La salud es lo más importante.', '健康最重要。'],
  'la fiebre': ['El niño tiene fiebre.', '孩子发烧了。'],
  'grave': ['No es nada grave, tranquilo.', '不严重，别担心。'],
  'la sociedad': ['Vivimos en una sociedad moderna.', '我们生活在现代社会。'],
  'la cultura': ['Me interesa la cultura española.', '我对西班牙文化感兴趣。'],
  'el gobierno': ['El gobierno toma decisiones importantes.', '政府做出重要决定。'],
  'la noticia': ['Leo las noticias cada mañana.', '我每天早上看新闻。'],
  'la historia': ['Me gusta la historia de España.', '我喜欢西班牙的历史。'],
  'opinar': ['¿Qué opinas de esto?', '你对此有什么看法？'],
  'la opinión': ['Respeto tu opinión.', '我尊重你的意见。'],
  'discutir': ['No quiero discutir contigo.', '我不想和你争论。'],
  'explicar': ['¿Puedes explicarme esta palabra?', '你能给我解释这个词吗？'],
  'la verdad': ['Dime la verdad, por favor.', '请告诉我真相。'],
  'importante': ['Es importante estudiar cada día.', '每天学习很重要。'],
  'la naturaleza': ['Me gusta pasear en la naturaleza.', '我喜欢在大自然里散步。'],
  'proteger': ['Debemos proteger el medio ambiente.', '我们应该保护环境。'],
  'el futuro': ['Pienso mucho en el futuro.', '我常常思考未来。'],
  'la libertad': ['La libertad es un derecho.', '自由是一种权利。'],
  'la educación': ['La educación cambia la vida.', '教育改变人生。'],
  'el éxito': ['El esfuerzo lleva al éxito.', '努力带来成功。'],
  'lograr': ['Con trabajo puedes lograr tus sueños.', '通过努力你能实现梦想。'],
  'cambiar': ['Quiero cambiar mi vida.', '我想改变我的生活。'],
  'mejorar': ['Practico para mejorar mi español.', '我练习是为了提高西班牙语。'],
};
// 合并到 DECKS 中缺例句的词
DECKS.forEach(d => d.words.forEach(w => {
  if (!w.ex && WORD_EXAMPLES[w.es]) { w.ex = WORD_EXAMPLES[w.es][0]; w.exZh = WORD_EXAMPLES[w.es][1]; }
}));

// ---------- #3 语境填空（在句子里选对时态/变位） ----------
// 每题：句子（___ 处填空）、动词原形、正确答案、干扰项、时态提示、译文
const CONTEXT_FILL = [
  { s: 'Todos los días yo ___ a las siete.', inf: 'levantarse', a: 'me levanto', opts: ['me levanto', 'me levanté', 'me levantaba'], tip: '现在时·习惯', zh: '我每天七点起床。' },
  { s: 'Ahora mismo Ana ___ la televisión.', inf: 'ver (进行时)', a: 'está viendo', opts: ['está viendo', 've', 'vio'], tip: '现在进行时', zh: '安娜此刻正在看电视。' },
  { s: 'Ayer nosotros ___ paella en un restaurante.', inf: 'comer', a: 'comimos', opts: ['comimos', 'comemos', 'comíamos'], tip: '简单过去时·一次性', zh: '昨天我们在餐厅吃了海鲜饭。' },
  { s: 'Cuando era niño, ___ en Shanghái.', inf: 'vivir', a: 'vivía', opts: ['vivía', 'viví', 'vivo'], tip: '过去未完成时·习惯', zh: '小时候我住在上海。' },
  { s: 'Mañana yo ___ a la playa con mis amigos.', inf: 'ir', a: 'voy a ir', opts: ['voy a ir', 'fui', 'iba'], tip: '将来（ir a + 原形）', zh: '明天我要和朋友去海滩。' },
  { s: 'Esta semana (yo) ya ___ tres libros.', inf: 'leer', a: 'he leído', opts: ['he leído', 'leí', 'leía'], tip: '现在完成时·至今', zh: '这周我已经读了三本书。' },
  { s: 'Cuando llegué, el tren ya ___.', inf: 'salir', a: 'había salido', opts: ['había salido', 'salió', 'sale'], tip: '过去完成时·过去的过去', zh: '我到时火车已经开走了。' },
  { s: 'Me ___ viajar por toda España algún día.', inf: 'gustar (条件式)', a: 'gustaría', opts: ['gustaría', 'gusta', 'gustó'], tip: '条件式·委婉', zh: '我很想有朝一日游遍西班牙。' },
  { s: 'Quiero que tú ___ a mi fiesta.', inf: 'venir', a: 'vengas', opts: ['vengas', 'vienes', 'vendrás'], tip: '虚拟式·愿望', zh: '我想让你来我的聚会。' },
  { s: 'No creo que ___ verdad.', inf: 'ser', a: 'sea', opts: ['sea', 'es', 'será'], tip: '虚拟式·否定信念', zh: '我不认为这是真的。' },
  { s: 'Cuando ___, llámame por favor.', inf: 'llegar', a: 'llegues', opts: ['llegues', 'llegas', 'llegarás'], tip: '虚拟式·将来时间', zh: '你到了就给我打电话。' },
  { s: 'Si ___ tiempo, iré contigo.', inf: 'tener', a: 'tengo', opts: ['tengo', 'tendré', 'tenga'], tip: '真实条件·si后现在时', zh: '如果我有时间就和你去。' },
  { s: 'Ella ___ profesora de español.', inf: 'ser', a: 'es', opts: ['es', 'está', 'hay'], tip: '职业身份用 ser', zh: '她是西班牙语老师。' },
  { s: 'El baño ___ al final del pasillo.', inf: 'estar', a: 'está', opts: ['está', 'es', 'hay'], tip: '位置用 estar', zh: '洗手间在走廊尽头。' },
  { s: '___ muchos libros en la mesa.', inf: 'haber', a: 'Hay', opts: ['Hay', 'Están', 'Son'], tip: '存在"有"用 hay', zh: '桌上有很多书。' },
  { s: 'A mí me ___ los perros.', inf: 'gustar', a: 'gustan', opts: ['gustan', 'gusta', 'gusto'], tip: 'gustar+复数名词', zh: '我喜欢狗。' },
  { s: '¡___ (tú) más despacio, por favor!', inf: 'hablar (命令式)', a: 'Habla', opts: ['Habla', 'Hablas', 'Hablar'], tip: 'tú肯定命令式', zh: '请你说慢一点！' },
  { s: 'Nosotros ___ español desde hace un año.', inf: 'estudiar', a: 'estudiamos', opts: ['estudiamos', 'estudiábamos', 'estudiaremos'], tip: '现在时·持续至今', zh: '我们学西班牙语一年了。' },
  { s: 'El año pasado (yo) ___ a México.', inf: 'ir', a: 'fui', opts: ['fui', 'voy', 'iré'], tip: '简单过去时', zh: '去年我去了墨西哥。' },
  { s: 'Espero que ___ (tú) un buen día.', inf: 'tener', a: 'tengas', opts: ['tengas', 'tienes', 'tendrás'], tip: '虚拟式·祝愿', zh: '祝你今天愉快。' },
];

// ---------- #2 听力理解（听短文/对话，回答问题） ----------
// audio: 朗读的西语文本数组（逐句）；q: 问题；opts/a: 选项与答案
const LISTEN_COMPREHENSION = [
  {
    id: 'lc1', level: '第一册',
    audio: ['Hola, me llamo Carlos.', 'Soy de México.', 'Tengo veinticinco años.', 'Soy profesor de español.'],
    q: '¿De dónde es Carlos?', opts: ['De España', 'De México', 'De China'], a: 'De México',
    script: 'Hola, me llamo Carlos. Soy de México. Tengo veinticinco años. Soy profesor de español.',
    scriptZh: '你好，我叫卡洛斯。我来自墨西哥。我二十五岁。我是西班牙语老师。',
  },
  {
    id: 'lc2', level: '第一册',
    audio: ['Mi familia es pequeña.', 'Somos cuatro personas.', 'Mi padre es médico y mi madre es profesora.'],
    q: '¿Cuántas personas hay en la familia?', opts: ['Tres', 'Cuatro', 'Cinco'], a: 'Cuatro',
    script: 'Mi familia es pequeña. Somos cuatro personas. Mi padre es médico y mi madre es profesora.',
    scriptZh: '我家不大，一共四口人。我爸爸是医生，妈妈是老师。',
  },
  {
    id: 'lc3', level: '第一册',
    audio: ['Me levanto a las siete.', 'Desayuno café con pan.', 'Luego voy a la universidad en autobús.'],
    q: '¿Cómo va a la universidad?', opts: ['En coche', 'En metro', 'En autobús'], a: 'En autobús',
    script: 'Me levanto a las siete. Desayuno café con pan. Luego voy a la universidad en autobús.',
    scriptZh: '我七点起床，喝咖啡吃面包当早餐，然后坐公交车去大学。',
  },
  {
    id: 'lc4', level: '第二册',
    audio: ['Ayer fui de compras al centro.', 'Compré una camisa azul.', 'No era muy cara, solo veinte euros.'],
    q: '¿Cuánto costó la camisa?', opts: ['Doce euros', 'Veinte euros', 'Treinta euros'], a: 'Veinte euros',
    script: 'Ayer fui de compras al centro. Compré una camisa azul. No era muy cara, solo veinte euros.',
    scriptZh: '昨天我去市中心购物，买了一件蓝色衬衫，不太贵，只要二十欧元。',
  },
  {
    id: 'lc5', level: '第二册',
    audio: ['Este fin de semana no me siento bien.', 'Tengo fiebre y me duele la cabeza.', 'Voy a ir al médico mañana.'],
    q: '¿Qué le pasa a la persona?', opts: ['Está muy feliz', 'Está enferma', 'Está de vacaciones'], a: 'Está enferma',
    script: 'Este fin de semana no me siento bien. Tengo fiebre y me duele la cabeza. Voy a ir al médico mañana.',
    scriptZh: '这个周末我不太舒服，发烧还头疼，明天我要去看医生。',
  },
  {
    id: 'lc6', level: '第三册',
    audio: ['Creo que es importante proteger la naturaleza.', 'Todos podemos reciclar y ahorrar energía.', 'Así construimos un futuro mejor.'],
    q: '¿Qué idea defiende la persona?', opts: ['Viajar más', 'Proteger el medio ambiente', 'Ganar dinero'], a: 'Proteger el medio ambiente',
    script: 'Creo que es importante proteger la naturaleza. Todos podemos reciclar y ahorrar energía. Así construimos un futuro mejor.',
    scriptZh: '我认为保护大自然很重要。我们都可以回收利用、节约能源，这样就能建设一个更好的未来。',
  },
];

// ---------- #5 阅读理解（分级短文 + 理解题 + 生词） ----------
const READINGS = [
  {
    id: 'r1', book: 1, title: 'Un día normal', titleZh: '普通的一天',
    text: 'Me llamo Laura y soy estudiante. Todos los días me levanto a las siete de la mañana. Desayuno un café con leche y pan. Voy a la universidad en metro. Por la mañana tengo tres clases. A las dos como con mis amigos en la cafetería. Por la tarde estudio en la biblioteca. Por la noche ceno en casa con mi familia y veo un poco la televisión. Me acuesto a las once.',
    glossary: [ ['desayunar', '吃早饭'], ['la cafetería', '餐厅/咖啡厅'], ['la biblioteca', '图书馆'], ['acostarse', '上床睡觉'] ],
    questions: [
      { q: '¿A qué hora se levanta Laura?', opts: ['A las siete', 'A las dos', 'A las once'], a: 'A las siete' },
      { q: '¿Cómo va a la universidad?', opts: ['En autobús', 'En metro', 'A pie'], a: 'En metro' },
      { q: '¿Dónde come con sus amigos?', opts: ['En casa', 'En la biblioteca', 'En la cafetería'], a: 'En la cafetería' },
    ],
  },
  {
    id: 'r2', book: 1, title: 'Mi ciudad', titleZh: '我的城市',
    text: 'Vivo en una ciudad grande y bonita. Hay muchos parques, tiendas y restaurantes. En el centro hay un museo muy famoso. Me gusta pasear por la plaza los fines de semana. La gente de mi ciudad es muy simpática. En primavera hace buen tiempo, pero en verano hace mucho calor. Me gusta mucho vivir aquí porque nunca me aburro.',
    glossary: [ ['la plaza', '广场'], ['pasear', '散步'], ['simpático', '友善的'], ['aburrirse', '感到无聊'] ],
    questions: [
      { q: '¿Qué hay en el centro de la ciudad?', opts: ['Una playa', 'Un museo famoso', 'Una montaña'], a: 'Un museo famoso' },
      { q: '¿Qué tiempo hace en verano?', opts: ['Hace frío', 'Hace mucho calor', 'Llueve mucho'], a: 'Hace mucho calor' },
      { q: '¿Por qué le gusta vivir allí?', opts: ['Porque nunca se aburre', 'Porque es barato', 'Porque hay playa'], a: 'Porque nunca se aburre' },
    ],
  },
  {
    id: 'r3', book: 2, title: 'Un fin de semana', titleZh: '一个周末',
    text: 'El sábado pasado hizo muy buen tiempo. Por la mañana fui al mercado con mi madre y compramos fruta y verduras. Después de comer, fuimos al cine y vimos una película española muy divertida. Por la noche, unos amigos vinieron a casa y cenamos juntos. Lo pasamos muy bien. El domingo descansé, leí un libro y llamé a mis abuelos por teléfono. Fue un fin de semana tranquilo pero muy agradable.',
    glossary: [ ['el mercado', '市场'], ['divertido', '有趣的'], ['descansar', '休息'], ['agradable', '惬意的/舒服的'] ],
    questions: [
      { q: '¿Adónde fue el sábado por la mañana?', opts: ['Al cine', 'Al mercado', 'A casa de sus abuelos'], a: 'Al mercado' },
      { q: '¿Cómo era la película?', opts: ['Muy divertida', 'Muy larga', 'Muy triste'], a: 'Muy divertida' },
      { q: '¿Qué hizo el domingo?', opts: ['Trabajó mucho', 'Descansó y leyó', 'Fue de compras'], a: 'Descansó y leyó' },
    ],
  },
  {
    id: 'r4', book: 2, title: 'En la consulta del médico', titleZh: '在医生诊室',
    text: 'Esta mañana Pablo no se sentía bien, así que fue al médico. Tenía fiebre, tos y le dolía la garganta. El médico lo examinó y le dijo que era una gripe. Le recetó unas pastillas y le recomendó descansar y beber mucha agua. Pablo compró las medicinas en la farmacia y volvió a casa. Después de dos días de descanso, empezó a sentirse mucho mejor.',
    glossary: [ ['la garganta', '喉咙'], ['recetar', '开处方'], ['recomendar', '建议'], ['la farmacia', '药店'] ],
    questions: [
      { q: '¿Qué tenía Pablo?', opts: ['Una gripe', 'Un brazo roto', 'Dolor de estómago'], a: 'Una gripe' },
      { q: '¿Qué le recomendó el médico?', opts: ['Hacer deporte', 'Descansar y beber agua', 'Viajar'], a: 'Descansar y beber agua' },
      { q: '¿Cómo se sintió después de dos días?', opts: ['Peor', 'Igual', 'Mucho mejor'], a: 'Mucho mejor' },
    ],
  },
  {
    id: 'r5', book: 3, title: 'La importancia de aprender idiomas', titleZh: '学习语言的重要性',
    text: 'Hoy en día, aprender idiomas es muy importante. Cuando conoces otra lengua, puedes comunicarte con más personas y entender mejor otras culturas. Muchos jóvenes estudian inglés, pero cada vez más gente aprende español, porque es uno de los idiomas más hablados del mundo. Aprender un idioma no es fácil: hay que practicar todos los días y no tener miedo a cometer errores. Sin embargo, el esfuerzo siempre trae buenos resultados.',
    glossary: [ ['comunicarse', '交流'], ['la lengua', '语言'], ['cometer errores', '犯错'], ['el esfuerzo', '努力'] ],
    questions: [
      { q: '¿Por qué es importante aprender idiomas?', opts: ['Para ganar dinero', 'Para comunicarse y entender otras culturas', 'Para viajar gratis'], a: 'Para comunicarse y entender otras culturas' },
      { q: '¿Qué hay que hacer para aprender un idioma?', opts: ['Practicar todos los días', 'Estudiar solo los fines de semana', 'Vivir en el extranjero'], a: 'Practicar todos los días' },
      { q: '¿Qué trae el esfuerzo?', opts: ['Cansancio', 'Buenos resultados', 'Problemas'], a: 'Buenos resultados' },
    ],
  },
  {
    id: 'r6', book: 3, title: 'El medio ambiente', titleZh: '环境',
    text: 'El medio ambiente es un tema muy importante en nuestra sociedad. La contaminación del aire y del agua es un problema grave en muchas ciudades. Los científicos dicen que debemos cambiar nuestra forma de vivir para proteger la naturaleza. Cada persona puede ayudar: por ejemplo, reciclar la basura, usar menos el coche y ahorrar energía. Si todos colaboramos, podremos construir un futuro más limpio y saludable para las próximas generaciones.',
    glossary: [ ['la contaminación', '污染'], ['el científico', '科学家'], ['ahorrar', '节约'], ['colaborar', '合作'] ],
    questions: [
      { q: '¿Cuál es un problema grave en muchas ciudades?', opts: ['El tráfico', 'La contaminación', 'El ruido'], a: 'La contaminación' },
      { q: '¿Qué puede hacer cada persona?', opts: ['Reciclar y ahorrar energía', 'Comprar más coches', 'No hacer nada'], a: 'Reciclar y ahorrar energía' },
      { q: '¿Para quién construimos un futuro mejor?', opts: ['Para las empresas', 'Para las próximas generaciones', 'Para los científicos'], a: 'Para las próximas generaciones' },
    ],
  },
];

// 追加原创配套短文（贴合现西各册课文主题与语法进度，非教材原文）
READINGS.push(
  {
    id: 'r7', book: 1, title: 'Me presento', titleZh: '自我介绍',
    text: '¡Hola! Me llamo Wang Lin y soy de Pekín. Tengo diecinueve años y soy estudiante de primer año en la universidad. Estudio español porque me parece una lengua muy bonita. En mi clase somos veinte estudiantes. Mi profesora se llama Ana y es española. Es muy simpática y paciente. Todos los días tenemos dos horas de español. Aunque el español no es fácil, me gusta mucho y estudio con entusiasmo.',
    glossary: [ ['presentarse', '自我介绍'], ['de primer año', '一年级的'], ['paciente', '有耐心的'], ['con entusiasmo', '满怀热情地'] ],
    questions: [
      { q: '¿Cuántos años tiene Wang Lin?', opts: ['Diecinueve', 'Veinte', 'Veintiuno'], a: 'Diecinueve' },
      { q: '¿Por qué estudia español?', opts: ['Porque es fácil', 'Porque le parece una lengua muy bonita', 'Porque es obligatorio'], a: 'Porque le parece una lengua muy bonita' },
      { q: '¿Cómo es la profesora?', opts: ['Simpática y paciente', 'Seria y estricta', 'Joven y tímida'], a: 'Simpática y paciente' },
    ],
  },
  {
    id: 'r8', book: 1, title: 'Nuestra facultad', titleZh: '我们的系',
    text: 'Nuestra facultad de lenguas extranjeras es muy grande. Hay muchas aulas, una biblioteca y un laboratorio de idiomas. Los estudiantes estudiamos inglés, francés, español o alemán. Por la mañana tenemos clases y por la tarde estudiamos en la biblioteca. La biblioteca tiene muchos libros y diccionarios. A veces escuchamos audios en el laboratorio para practicar la pronunciación. Me gusta mucho mi facultad porque los profesores son buenos y los compañeros, muy amables.',
    glossary: [ ['la facultad', '系/学院'], ['el laboratorio de idiomas', '语言实验室'], ['el audio', '录音'], ['la pronunciación', '发音'] ],
    questions: [
      { q: '¿Qué hay en la facultad?', opts: ['Un hospital', 'Una biblioteca y un laboratorio', 'Una piscina'], a: 'Una biblioteca y un laboratorio' },
      { q: '¿Qué hacen por la tarde?', opts: ['Estudian en la biblioteca', 'Ven la televisión', 'Van de compras'], a: 'Estudian en la biblioteca' },
      { q: '¿Para qué usan el laboratorio?', opts: ['Para comer', 'Para practicar la pronunciación', 'Para dormir'], a: 'Para practicar la pronunciación' },
    ],
  },
  {
    id: 'r9', book: 2, title: 'Las vacaciones de verano', titleZh: '暑假',
    text: 'El verano pasado mi familia y yo fuimos de vacaciones a Xi\'an. Cogimos el tren por la mañana y llegamos por la tarde. Estuvimos allí una semana. Visitamos los famosos Guerreros de Terracota y comimos platos típicos de la región. Un día llovió mucho y no pudimos salir, así que nos quedamos en el hotel jugando a las cartas. A pesar de eso, lo pasamos muy bien. Cuando volvimos a casa, estábamos cansados pero muy contentos.',
    glossary: [ ['ir de vacaciones', '去度假'], ['coger el tren', '坐火车'], ['los Guerreros de Terracota', '兵马俑'], ['a pesar de', '尽管' ] ],
    questions: [
      { q: '¿Adónde fueron de vacaciones?', opts: ['A Pekín', 'A Xi\'an', 'A Shanghái'], a: 'A Xi\'an' },
      { q: '¿Qué visitaron?', opts: ['Los Guerreros de Terracota', 'La Gran Muralla', 'Un museo de arte'], a: 'Los Guerreros de Terracota' },
      { q: '¿Qué hicieron el día que llovió?', opts: ['Salieron igualmente', 'Se quedaron en el hotel jugando a las cartas', 'Volvieron a casa'], a: 'Se quedaron en el hotel jugando a las cartas' },
    ],
  },
  {
    id: 'r10', book: 2, title: 'Una fiesta de cumpleaños', titleZh: '生日聚会',
    text: 'Ayer fue el cumpleaños de mi amiga Marta y organizamos una fiesta sorpresa. Preparamos la comida, compramos un pastel y decoramos el salón con globos. Cuando Marta llegó, todos gritamos «¡Sorpresa!» y ella se puso muy contenta. Comimos, bailamos y cantamos hasta muy tarde. Cada uno le regaló algo. Yo le regalé un libro porque sé que le encanta leer. Fue una noche inolvidable y Marta nos dio las gracias a todos.',
    glossary: [ ['la fiesta sorpresa', '惊喜派对'], ['el pastel', '蛋糕'], ['decorar', '装饰'], ['inolvidable', '难忘的'] ],
    questions: [
      { q: '¿Qué tipo de fiesta organizaron?', opts: ['Una fiesta sorpresa', 'Una boda', 'Una cena formal'], a: 'Una fiesta sorpresa' },
      { q: '¿Qué le regaló el narrador a Marta?', opts: ['Un libro', 'Flores', 'Un pastel'], a: 'Un libro' },
      { q: '¿Cómo fue la noche?', opts: ['Aburrida', 'Inolvidable', 'Muy corta'], a: 'Inolvidable' },
    ],
  },
  {
    id: 'r11', book: 3, title: 'La tecnología en nuestra vida', titleZh: '科技与生活',
    text: 'Hoy en día la tecnología está presente en casi todo lo que hacemos. Gracias al teléfono móvil, podemos comunicarnos con personas de todo el mundo en pocos segundos. Internet nos permite estudiar, trabajar y comprar sin salir de casa. Sin embargo, algunos expertos creen que dependemos demasiado de las pantallas. Es importante que aprendamos a usar la tecnología con moderación y que no olvidemos hablar cara a cara con los demás. La tecnología debe ayudarnos, no controlarnos.',
    glossary: [ ['la pantalla', '屏幕'], ['depender de', '依赖'], ['con moderación', '适度地'], ['cara a cara', '面对面'] ],
    questions: [
      { q: '¿Qué nos permite hacer Internet?', opts: ['Estudiar, trabajar y comprar desde casa', 'Solo jugar', 'Nada útil'], a: 'Estudiar, trabajar y comprar desde casa' },
      { q: '¿Qué preocupa a algunos expertos?', opts: ['Que dependemos demasiado de las pantallas', 'Que la tecnología es cara', 'Que no hay suficiente Internet'], a: 'Que dependemos demasiado de las pantallas' },
      { q: '¿Cómo debemos usar la tecnología?', opts: ['Sin límites', 'Con moderación', 'Nunca'], a: 'Con moderación' },
    ],
  },
  {
    id: 'r12', book: 3, title: 'Estudiar en el extranjero', titleZh: '出国留学',
    text: 'Cada año, muchos jóvenes deciden estudiar en el extranjero. Vivir en otro país no siempre es fácil: al principio uno echa de menos a su familia y tiene que acostumbrarse a una cultura diferente. Sin embargo, es una experiencia que vale la pena. Estudiando fuera, se aprende un idioma mucho más rápido y se conocen personas de todo el mundo. Además, uno se vuelve más independiente y maduro. Aunque haya dificultades, la mayoría de los estudiantes dice que volvería a hacerlo.',
    glossary: [ ['en el extranjero', '在国外'], ['echar de menos', '想念'], ['acostumbrarse a', '适应'], ['valer la pena', '值得'] ],
    questions: [
      { q: '¿Qué es difícil al principio?', opts: ['Echar de menos a la familia y adaptarse', 'Aprender a comer', 'Encontrar el aeropuerto'], a: 'Echar de menos a la familia y adaptarse' },
      { q: '¿Qué ventaja se menciona?', opts: ['Se aprende el idioma más rápido', 'Se gana mucho dinero', 'Se estudia menos'], a: 'Se aprende el idioma más rápido' },
      { q: '¿Qué dice la mayoría de los estudiantes?', opts: ['Que no lo recomienda', 'Que volvería a hacerlo', 'Que fue un error'], a: 'Que volvería a hacerlo' },
    ],
  }
);

// 追加·进阶原创短文（更长、语法更难，贴合现西三~四册及 B1–C1 水平）
READINGS.push(
  {
    id: 'r13', book: 3, title: 'Las redes sociales', titleZh: '社交网络',
    text: 'Las redes sociales han cambiado por completo la manera en que nos relacionamos. Gracias a ellas, podemos mantener el contacto con amigos que viven lejos y enterarnos al instante de lo que ocurre en el mundo. No obstante, muchos expertos advierten de que un uso excesivo puede provocar ansiedad y aislamiento. Es fundamental que los jóvenes aprendan a proteger su intimidad y que no crean todo lo que leen en internet. Aunque estas plataformas ofrecen muchas ventajas, conviene recordar que la vida real sucede fuera de la pantalla. Al final, lo importante no es cuántos seguidores tengas, sino la calidad de tus relaciones.',
    glossary: [ ['la red social', '社交网络'], ['enterarse de', '得知/了解'], ['advertir de', '提醒/警告'], ['el aislamiento', '孤立/隔绝'], ['la intimidad', '隐私'], ['el seguidor', '粉丝/关注者'] ],
    questions: [
      { q: '¿Qué permiten hacer las redes sociales?', opts: ['Mantener el contacto con amigos lejanos', 'Ganar dinero fácilmente', 'Aprender idiomas sin esfuerzo'], a: 'Mantener el contacto con amigos lejanos' },
      { q: '¿De qué advierten los expertos?', opts: ['De que un uso excesivo puede causar ansiedad', 'De que son demasiado caras', 'De que funcionan mal'], a: 'De que un uso excesivo puede causar ansiedad' },
      { q: '¿Qué es fundamental según el texto?', opts: ['Que los jóvenes protejan su intimidad', 'Que todos tengan un móvil nuevo', 'Que se publiquen muchas fotos'], a: 'Que los jóvenes protejan su intimidad' },
      { q: 'Según el autor, ¿qué es lo más importante?', opts: ['La calidad de las relaciones', 'El número de seguidores', 'La cantidad de fotos'], a: 'La calidad de las relaciones' },
    ],
  },
  {
    id: 'r14', book: 3, title: 'El valor del tiempo libre', titleZh: '闲暇的价值',
    text: 'En la sociedad actual, muchas personas viven con prisa y apenas encuentran un momento para descansar. Sin embargo, el tiempo libre es tan necesario como el trabajo. Dedicar unas horas a leer, pasear o practicar un pasatiempo nos ayuda a reducir el estrés y a recuperar la energía. Los psicólogos recomiendan desconectar del móvil de vez en cuando y disfrutar de actividades que nos hagan felices. No se trata de no hacer nada, sino de elegir bien en qué invertimos nuestro tiempo. Quien aprende a descansar trabaja mejor y vive con más equilibrio.',
    glossary: [ ['con prisa', '匆忙地'], ['apenas', '几乎不'], ['el pasatiempo', '消遣/爱好'], ['el estrés', '压力'], ['desconectar', '放松/断开'], ['el equilibrio', '平衡'] ],
    questions: [
      { q: '¿Cómo viven muchas personas hoy en día?', opts: ['Con prisa y sin descansar', 'Con mucho tiempo libre', 'Sin trabajar nunca'], a: 'Con prisa y sin descansar' },
      { q: '¿Para qué sirve el tiempo libre?', opts: ['Para reducir el estrés y recuperar energía', 'Para ganar más dinero', 'Para trabajar más horas'], a: 'Para reducir el estrés y recuperar energía' },
      { q: '¿Qué recomiendan los psicólogos?', opts: ['Desconectar del móvil de vez en cuando', 'Usar más el móvil', 'No descansar nunca'], a: 'Desconectar del móvil de vez en cuando' },
      { q: '¿Qué le pasa a quien aprende a descansar?', opts: ['Trabaja mejor y vive con más equilibrio', 'Se vuelve perezoso', 'Gana menos amigos'], a: 'Trabaja mejor y vive con más equilibrio' },
    ],
  },
  {
    id: 'r15', book: 4, title: 'La siesta española', titleZh: '西班牙的午睡',
    text: 'La siesta es una de las costumbres más conocidas de España, aunque hoy en día no es tan común como mucha gente cree. Tradicionalmente, después de comer, los trabajadores descansaban un rato para evitar las horas de más calor, sobre todo en verano y en el sur del país. Este breve descanso, de unos veinte minutos, resultaba beneficioso para recuperar fuerzas y afrontar el resto de la jornada. Sin embargo, con el ritmo de vida moderno y los horarios laborales, cada vez menos españoles tienen la oportunidad de dormir la siesta entre semana. No obstante, algunos científicos defienden que una siesta corta mejora la memoria y la concentración. Por eso, en varios países han empezado a crear espacios para que los empleados puedan descansar durante la jornada.',
    glossary: [ ['la costumbre', '习俗'], ['un rato', '一会儿'], ['beneficioso', '有益的'], ['afrontar', '应对/面对'], ['la jornada', '一天/工作日'], ['no obstante', '然而'] ],
    questions: [
      { q: '¿Para qué descansaban tradicionalmente los trabajadores?', opts: ['Para evitar las horas de más calor', 'Para trabajar por la noche', 'Para hacer deporte'], a: 'Para evitar las horas de más calor' },
      { q: '¿Cuánto suele durar una siesta?', opts: ['Unos veinte minutos', 'Tres horas', 'Toda la tarde'], a: 'Unos veinte minutos' },
      { q: '¿Por qué cada vez menos españoles duermen la siesta?', opts: ['Por el ritmo de vida y los horarios laborales', 'Porque ya no tienen sueño', 'Porque está prohibida'], a: 'Por el ritmo de vida y los horarios laborales' },
      { q: '¿Qué defienden algunos científicos?', opts: ['Que una siesta corta mejora la memoria', 'Que dormir de día es malo', 'Que nadie debe descansar'], a: 'Que una siesta corta mejora la memoria' },
    ],
  },
  {
    id: 'r16', book: 4, title: 'Gabriel García Márquez', titleZh: '加西亚·马尔克斯与魔幻现实主义',
    text: 'Gabriel García Márquez, escritor colombiano nacido en 1927, es uno de los autores más importantes de la literatura en lengua española. Su obra más famosa, Cien años de soledad, cuenta la historia de la familia Buendía a lo largo de varias generaciones en un pueblo imaginario llamado Macondo. En sus novelas, los hechos cotidianos se mezclan con elementos fantásticos de una forma tan natural que el lector los acepta sin sorprenderse. Este estilo, conocido como realismo mágico, influyó en numerosos escritores de todo el mundo. En 1982 recibió el Premio Nobel de Literatura. Aunque murió en 2014, sus libros se siguen leyendo y traduciendo a decenas de idiomas, y su nombre continúa siendo un símbolo de la cultura latinoamericana.',
    glossary: [ ['la obra', '作品'], ['a lo largo de', '贯穿/在…期间'], ['cotidiano', '日常的'], ['mezclarse con', '与…交融'], ['el realismo mágico', '魔幻现实主义'], ['decenas de', '数十个'] ],
    questions: [
      { q: '¿De qué país era García Márquez?', opts: ['De Colombia', 'De España', 'De México'], a: 'De Colombia' },
      { q: '¿Dónde transcurre Cien años de soledad?', opts: ['En un pueblo imaginario llamado Macondo', 'En Madrid', 'En Bogotá'], a: 'En un pueblo imaginario llamado Macondo' },
      { q: '¿Qué caracteriza al realismo mágico?', opts: ['Mezclar hechos cotidianos con elementos fantásticos', 'Contar solo historias reales', 'Usar un lenguaje científico'], a: 'Mezclar hechos cotidianos con elementos fantásticos' },
      { q: '¿Qué premio recibió en 1982?', opts: ['El Premio Nobel de Literatura', 'El Premio Cervantes', 'Un Óscar'], a: 'El Premio Nobel de Literatura' },
    ],
  },
  {
    id: 'r17', book: 4, title: 'El Camino de Santiago', titleZh: '圣地亚哥朝圣之路',
    text: 'Cada año, miles de personas de todo el mundo recorren el Camino de Santiago, una red de rutas que terminan en la ciudad de Santiago de Compostela, en el noroeste de España. Aunque su origen es religioso, ya que durante siglos los peregrinos caminaban para visitar la tumba del apóstol Santiago, hoy la gente lo hace por motivos muy diversos. Algunos buscan una experiencia espiritual, otros quieren estar en contacto con la naturaleza o simplemente poner a prueba su resistencia física. El camino más popular, el Camino Francés, tiene unos ochocientos kilómetros y se puede completar en poco más de un mes. A lo largo del recorrido, los caminantes descubren pueblos, paisajes y una hospitalidad que difícilmente olvidarán.',
    glossary: [ ['recorrer', '走过/走遍'], ['la ruta', '路线'], ['el peregrino', '朝圣者'], ['poner a prueba', '考验'], ['el paisaje', '风景'], ['la hospitalidad', '好客/热情'] ],
    questions: [
      { q: '¿Dónde terminan las rutas del Camino de Santiago?', opts: ['En Santiago de Compostela', 'En Madrid', 'En Barcelona'], a: 'En Santiago de Compostela' },
      { q: '¿Cuál era el origen del Camino?', opts: ['Religioso', 'Deportivo', 'Comercial'], a: 'Religioso' },
      { q: '¿Cuántos kilómetros tiene el Camino Francés?', opts: ['Unos ochocientos', 'Unos cien', 'Más de tres mil'], a: 'Unos ochocientos' },
      { q: '¿Qué descubren los caminantes durante el recorrido?', opts: ['Pueblos, paisajes y hospitalidad', 'Grandes ciudades industriales', 'Playas tropicales'], a: 'Pueblos, paisajes y hospitalidad' },
    ],
  },
  {
    id: 'r18', book: 4, title: 'La inteligencia artificial', titleZh: '人工智能',
    text: 'La inteligencia artificial ha dejado de ser algo propio de las películas de ciencia ficción para convertirse en una realidad de nuestra vida diaria. Hoy la utilizamos, muchas veces sin darnos cuenta, cuando un teléfono reconoce nuestra voz o cuando una aplicación nos recomienda una canción. Sus posibilidades son enormes: puede ayudar a los médicos a detectar enfermedades, mejorar la seguridad en las carreteras o facilitar la traducción entre idiomas. Sin embargo, también plantea preguntas difíciles sobre el futuro del empleo y sobre quién es responsable cuando un sistema comete un error. Por eso, muchos expertos insisten en que es necesario que exista una regulación clara y en que la tecnología se desarrolle siempre al servicio de las personas.',
    glossary: [ ['dejar de', '不再'], ['darse cuenta de', '意识到'], ['detectar', '检测/发现'], ['plantear', '提出'], ['el empleo', '就业/工作'], ['al servicio de', '为…服务'] ],
    questions: [
      { q: '¿Dónde usamos la inteligencia artificial en la vida diaria?', opts: ['Cuando el teléfono reconoce nuestra voz', 'Solo en los laboratorios', 'Únicamente en las películas'], a: 'Cuando el teléfono reconoce nuestra voz' },
      { q: '¿Qué puede hacer según el texto?', opts: ['Ayudar a detectar enfermedades', 'Sustituir a las familias', 'Eliminar todos los idiomas'], a: 'Ayudar a detectar enfermedades' },
      { q: '¿Qué preguntas difíciles plantea?', opts: ['Sobre el empleo y la responsabilidad', 'Sobre el precio de los móviles', 'Sobre el clima'], a: 'Sobre el empleo y la responsabilidad' },
      { q: '¿Qué piden muchos expertos?', opts: ['Que exista una regulación clara', 'Que se prohíba la tecnología', 'Que nadie la use'], a: 'Que exista una regulación clara' },
    ],
  },
  {
    id: 'r19', book: 4, title: 'La dieta mediterránea', titleZh: '地中海饮食',
    text: 'La dieta mediterránea es mucho más que una manera de comer: es un estilo de vida reconocido por la Unesco como patrimonio cultural de la humanidad. Se basa en el consumo de productos frescos y de temporada, como frutas, verduras, legumbres, pescado y, sobre todo, aceite de oliva. La carne roja y los dulces se reservan para ocasiones especiales. Numerosos estudios han demostrado que este tipo de alimentación reduce el riesgo de sufrir enfermedades del corazón y ayuda a vivir más años. Pero la dieta mediterránea no consiste solo en qué comemos, sino también en cómo lo hacemos: compartir la mesa con la familia y los amigos, sin prisa, forma parte esencial de esta tradición.',
    glossary: [ ['el patrimonio', '遗产'], ['de temporada', '当季的'], ['la legumbre', '豆类'], ['reservarse para', '留待/用于'], ['el riesgo', '风险'], ['compartir', '分享'] ],
    questions: [
      { q: '¿Qué es la dieta mediterránea según el texto?', opts: ['Un estilo de vida y patrimonio cultural', 'Una moda pasajera', 'Un tipo de restaurante'], a: 'Un estilo de vida y patrimonio cultural' },
      { q: '¿En qué se basa principalmente?', opts: ['En productos frescos y aceite de oliva', 'En carne roja y dulces', 'En comida rápida'], a: 'En productos frescos y aceite de oliva' },
      { q: '¿Qué han demostrado numerosos estudios?', opts: ['Que reduce el riesgo de enfermedades del corazón', 'Que engorda mucho', 'Que es muy cara'], a: 'Que reduce el riesgo de enfermedades del corazón' },
      { q: '¿Qué más forma parte de esta tradición?', opts: ['Compartir la mesa sin prisa', 'Comer siempre solo', 'Comer muy rápido'], a: 'Compartir la mesa sin prisa' },
    ],
  },
  {
    id: 'r20', book: 4, title: 'El arte de Frida Kahlo', titleZh: '弗里达·卡罗的艺术',
    text: 'Frida Kahlo es probablemente la pintora mexicana más famosa del mundo. Su vida estuvo marcada por el dolor: de niña sufrió una enfermedad y, siendo joven, tuvo un grave accidente que la obligó a pasar largos periodos en cama. Fue precisamente entonces cuando empezó a pintar. Gran parte de su obra son autorretratos en los que refleja sus sentimientos, su cultura y el sufrimiento físico que soportó durante toda su vida. Frida se inspiró en las tradiciones populares de México y utilizó colores intensos y símbolos llenos de significado. Aunque en vida no fue tan reconocida como su marido, el pintor Diego Rivera, con el tiempo se ha convertido en un icono del arte y en un símbolo de fuerza para muchas mujeres.',
    glossary: [ ['la pintora', '女画家'], ['estar marcado por', '被…深深影响'], ['el autorretrato', '自画像'], ['reflejar', '反映'], ['soportar', '忍受'], ['el icono', '标志/偶像'] ],
    questions: [
      { q: '¿Cuándo empezó Frida Kahlo a pintar?', opts: ['Después de un grave accidente', 'De muy niña en la escuela', 'Al casarse con Diego Rivera'], a: 'Después de un grave accidente' },
      { q: '¿Qué representan gran parte de sus obras?', opts: ['Autorretratos que reflejan sus sentimientos', 'Paisajes de Europa', 'Escenas históricas'], a: 'Autorretratos que reflejan sus sentimientos' },
      { q: '¿En qué se inspiró?', opts: ['En las tradiciones populares de México', 'En el arte japonés', 'En la fotografía moderna'], a: 'En las tradiciones populares de México' },
      { q: '¿En qué se ha convertido con el tiempo?', opts: ['En un icono del arte y símbolo de fuerza', 'En una pintora olvidada', 'En una actriz famosa'], a: 'En un icono del arte y símbolo de fuerza' },
    ],
  },
  {
    id: 'r21', book: 4, title: 'El cine de Almodóvar', titleZh: '阿尔莫多瓦的电影',
    text: 'Pedro Almodóvar es el director de cine español más conocido internacionalmente. Nació en un pueblo de la región de La Mancha en 1949 y, desde muy joven, sintió pasión por el cine. Sus películas se caracterizan por los colores vivos, las historias llenas de emoción y unos personajes femeninos fuertes e inolvidables. En sus obras mezcla el humor y el drama con una libertad que sorprendió al público cuando empezó a rodar. Títulos como Mujeres al borde de un ataque de nervios o Todo sobre mi madre han ganado premios en todo el mundo, incluidos dos Óscar. Gracias a él, el cine español es hoy más conocido fuera de sus fronteras, y muchos jóvenes directores lo consideran un maestro.',
    glossary: [ ['el director', '导演'], ['sentir pasión por', '热爱/热衷于'], ['los colores vivos', '鲜艳的色彩'], ['el personaje', '人物/角色'], ['rodar', '拍摄（电影）'], ['la frontera', '边境/国界'] ],
    questions: [
      { q: '¿De dónde es Pedro Almodóvar?', opts: ['De un pueblo de La Mancha', 'De Madrid', 'De Andalucía'], a: 'De un pueblo de La Mancha' },
      { q: '¿Cómo son sus películas?', opts: ['De colores vivos y con personajes femeninos fuertes', 'En blanco y negro y silenciosas', 'Cortas y sin historia'], a: 'De colores vivos y con personajes femeninos fuertes' },
      { q: '¿Qué mezcla en sus obras?', opts: ['El humor y el drama', 'La ciencia y la política', 'El deporte y la música'], a: 'El humor y el drama' },
      { q: '¿Cuántos Óscar se mencionan?', opts: ['Dos', 'Ninguno', 'Cinco'], a: 'Dos' },
    ],
  },
  {
    id: 'r22', book: 4, title: 'El flamenco', titleZh: '弗拉门戈',
    text: 'El flamenco es una de las expresiones artísticas más representativas de España, especialmente de Andalucía, en el sur del país. Nació hace siglos de la mezcla de diferentes culturas y hoy es conocido en el mundo entero. El flamenco no es solo un baile: combina el cante, la guitarra y el baile en un mismo espectáculo lleno de fuerza y sentimiento. Los artistas expresan a través de él tanto la alegría como el dolor. En 2010, la Unesco lo declaró patrimonio cultural inmaterial de la humanidad. Aprender a bailar flamenco requiere años de práctica, pero cualquier persona puede disfrutar de su ritmo y su pasión al escucharlo por primera vez.',
    glossary: [ ['la expresión artística', '艺术表现形式'], ['el cante', '（弗拉门戈的）歌唱'], ['el espectáculo', '演出/表演'], ['a través de', '通过/借由'], ['declarar', '宣布/认定'], ['el ritmo', '节奏'] ],
    questions: [
      { q: '¿De qué región es especialmente representativo el flamenco?', opts: ['De Andalucía', 'De Cataluña', 'De Galicia'], a: 'De Andalucía' },
      { q: '¿Qué combina el flamenco?', opts: ['El cante, la guitarra y el baile', 'El cine y la pintura', 'La cocina y el vino'], a: 'El cante, la guitarra y el baile' },
      { q: '¿Qué hizo la Unesco en 2010?', opts: ['Lo declaró patrimonio de la humanidad', 'Lo prohibió', 'Lo inventó'], a: 'Lo declaró patrimonio de la humanidad' },
      { q: '¿Qué requiere aprender a bailar flamenco?', opts: ['Años de práctica', 'Solo un día', 'Ningún esfuerzo'], a: 'Años de práctica' },
    ],
  },
  {
    id: 'r23', book: 4, title: 'La geografía de América Latina', titleZh: '拉丁美洲地理',
    text: 'América Latina es una región enorme y muy variada que se extiende desde México hasta el sur de Argentina y Chile. En ella se encuentran algunos de los paisajes más impresionantes del planeta. La cordillera de los Andes, la más larga del mundo, recorre el continente de norte a sur. En Brasil está la selva amazónica, considerada el pulmón verde de la Tierra por la enorme cantidad de oxígeno que produce. También hay desiertos, como el de Atacama, uno de los lugares más secos del mundo. La mayoría de los países hablan español, aunque en Brasil se habla portugués. Esta diversidad geográfica y cultural convierte a América Latina en una región fascinante para viajeros y científicos.',
    glossary: [ ['la región', '地区'], ['extenderse', '延伸'], ['la cordillera', '山脉'], ['la selva', '丛林/雨林'], ['el desierto', '沙漠'], ['la diversidad', '多样性'] ],
    questions: [
      { q: '¿Desde dónde hasta dónde se extiende América Latina?', opts: ['Desde México hasta el sur de Argentina y Chile', 'Desde España hasta Brasil', 'Solo por Centroamérica'], a: 'Desde México hasta el sur de Argentina y Chile' },
      { q: '¿Cuál es la cordillera más larga del mundo?', opts: ['Los Andes', 'Los Pirineos', 'Los Alpes'], a: 'Los Andes' },
      { q: '¿Por qué se llama a la selva amazónica el pulmón verde?', opts: ['Por la enorme cantidad de oxígeno que produce', 'Porque es de color verde', 'Porque allí no vive nadie'], a: 'Por la enorme cantidad de oxígeno que produce' },
      { q: '¿Qué lengua se habla en Brasil?', opts: ['Portugués', 'Español', 'Francés'], a: 'Portugués' },
    ],
  }
);

// 每篇短文对应的现西册课主题与语法练习点（原创配套，非教材原文）
const READING_ALIGN = {
  r7:  '现西一册·自我介绍主题 ｜ 练：ser + 职业国籍、现在时',
  r1:  '现西一册·日常作息主题 ｜ 练：自复动词、现在时习惯',
  r8:  '现西一册·大学与系主题 ｜ 练：hay、现在时、方位',
  r2:  '现西一册·城市与天气主题 ｜ 练：hay/estar、hacer 天气',
  r9:  '现西二册·假期旅行主题 ｜ 练：简单过去时叙事',
  r3:  '现西二册·周末活动主题 ｜ 练：简单过去时 vs 过去未完成时',
  r10: '现西二册·节日聚会主题 ｜ 练：简单过去时、间接宾语代词',
  r4:  '现西二册·看病就医主题 ｜ 练：doler、过去时、医疗词汇',
  r11: '现西三册·科技与社会主题 ｜ 练：虚拟式（es importante que…）',
  r5:  '现西三册·学习语言主题 ｜ 练：无人称 se、para + 原形',
  r12: '现西三册·留学与人生主题 ｜ 练：虚拟式让步（aunque haya…）、条件式',
  r6:  '现西三册·环境保护主题 ｜ 练：deber、条件句、社会议题词汇',
  r13: '现西三册·社交与观点主题 ｜ 练：现在完成时、虚拟式（es fundamental que…）',
  r14: '现西三册·生活方式主题 ｜ 练：tan… como 比较、虚拟式建议句',
  r15: '进阶·社会文化主题 ｜ 练：过去未完成时描写、no obstante 转折',
  r16: '进阶·文学人物主题 ｜ 练：简单过去时叙事、定语从句',
  r17: '进阶·文化历史主题 ｜ 练：aunque/ya que 从句、长句阅读',
  r18: '进阶·科技伦理主题 ｜ 练：将来时、虚拟式（es necesario que…）',
  r19: '进阶·饮食健康主题 ｜ 练：无人称/被动 se、no… sino…',
  r20: '进阶·艺术传记主题 ｜ 练：简单过去时 vs 过去未完成时、定语从句',
  r21: '进阶·西语电影主题 ｜ 练：简单过去时叙事、定语从句、被动含义',
  r22: '进阶·音乐舞蹈主题 ｜ 练：no solo… sino…、tanto… como…',
  r23: '进阶·拉美地理主题 ｜ 练：无人称 se、最高级、长句阅读',
};
READINGS.forEach(r => { if (READING_ALIGN[r.id]) r.align = READING_ALIGN[r.id]; });

// 进阶篇整篇中文对照译文（原创配套翻译）
const READING_TEXT_ZH = {
  r15: '午睡是西班牙最广为人知的习俗之一，尽管如今它已不像许多人以为的那样普遍。传统上，午饭后工人们会休息一会儿，以避开一天中最热的时段，尤其是在夏天和西班牙南部。这段大约二十分钟的短暂休息，有助于恢复体力、应对余下的工作时间。然而，随着现代生活节奏和工作时间的变化，越来越少的西班牙人能在工作日睡上午觉。不过，一些科学家认为，短暂的午睡能改善记忆力和注意力。因此，许多国家已开始为员工设立可在工作时间休息的空间。',
  r16: '加夫列尔·加西亚·马尔克斯，哥伦比亚作家，1927 年出生，是西班牙语文学中最重要的作家之一。他最著名的作品《百年孤独》讲述了布恩迪亚家族在一个名叫马孔多的虚构小镇中数代人的故事。在他的小说里，日常事件与奇幻元素以极其自然的方式交织在一起，以至于读者毫不惊讶地接受了它们。这种被称为魔幻现实主义的风格，影响了世界各地无数作家。1982 年，他获得了诺贝尔文学奖。尽管他于 2014 年去世，他的作品仍在被人们阅读，并被翻译成数十种语言，他的名字至今仍是拉丁美洲文化的象征。',
  r17: '每年，来自世界各地的成千上万人走上圣地亚哥朝圣之路——一条条最终通往西班牙西北部圣地亚哥-德孔波斯特拉城的路线网络。虽然它起源于宗教，因为数个世纪以来朝圣者步行前往瞻仰使徒圣地亚哥的陵墓，但今天人们出于各种各样的原因走这条路。有人寻求一种精神体验，有人想亲近自然，也有人只是想考验自己的体力。最热门的路线——法国之路，全长约八百公里，用一个多月即可走完。沿途，行者们会遇见许多村庄、风景，以及一种令他们难以忘怀的热情好客。',
  r18: '人工智能已不再是科幻电影里的专属之物，而成了我们日常生活的现实。如今我们常常在不知不觉中使用它——当手机识别我们的声音，或某个应用为我们推荐一首歌时。它的可能性是巨大的：它可以帮助医生检测疾病、提升道路安全，或让不同语言之间的翻译更加便利。然而，它也提出了一些棘手的问题，关乎就业的未来，以及当一个系统出错时由谁负责。因此，许多专家坚持认为，必须有明确的监管，并且技术应始终服务于人。',
  r19: '地中海饮食远不止是一种吃法：它是一种被联合国教科文组织列为人类文化遗产的生活方式。它以新鲜、当季的食物为基础，如水果、蔬菜、豆类、鱼，尤其是橄榄油。红肉和甜食则留待特殊场合。大量研究表明，这种饮食方式能降低罹患心脏病的风险，并有助于延年益寿。但地中海饮食不仅在于我们吃什么，也在于我们怎么吃：与家人和朋友从容地共享一餐，是这一传统不可或缺的一部分。',
  r20: '弗里达·卡罗大概是世界上最著名的墨西哥女画家。她的一生都被痛苦所笼罩：幼年患过一场疾病，年轻时又遭遇一次严重车祸，使她不得不长期卧床。正是在那时，她开始作画。她的大部分作品是自画像，在其中映照出自己的情感、文化，以及她一生所忍受的身体痛苦。弗里达从墨西哥的民间传统中汲取灵感，运用浓烈的色彩和充满寓意的符号。尽管在世时她的声名不及丈夫——画家迭戈·里维拉，但随着时间推移，她已成为艺术的标志，也成为许多女性心中力量的象征。',
  r21: '佩德罗·阿尔莫多瓦是国际上最知名的西班牙电影导演。他 1949 年出生在拉曼查地区的一个小镇，从很小的时候起就对电影充满热情。他的影片以鲜艳的色彩、饱含情感的故事，以及一个个坚强而令人难忘的女性角色为特色。在作品中，他以一种在他初执导筒时令观众惊讶的自由，将幽默与悲情融为一体。《濒临崩溃边缘的女人》《关于我母亲的一切》等片在世界各地屡获大奖，其中包括两座奥斯卡。多亏了他，西班牙电影如今在国门之外更为人所知，许多年轻导演都视他为大师。',
  r22: '弗拉门戈是西班牙最具代表性的艺术表现形式之一，尤以该国南部的安达卢西亚为盛。它诞生于数百年前不同文化的交融，如今已闻名于全世界。弗拉门戈不只是一种舞蹈：它将歌唱、吉他与舞蹈融汇于同一场充满力量与情感的演出之中。艺术家借由它既表达欢乐，也表达痛苦。2010 年，联合国教科文组织将其列为人类非物质文化遗产。学会跳弗拉门戈需要多年的练习，但任何人在第一次聆听时，都能感受并享受它的节奏与激情。',
  r23: '拉丁美洲是一片幅员辽阔、丰富多样的地区，从墨西哥一直延伸到阿根廷和智利的南端。这里拥有地球上一些最令人叹为观止的景观。安第斯山脉——世界上最长的山脉，自北向南纵贯整个大陆。巴西境内有亚马孙雨林，因其产生的巨量氧气而被视为地球的绿色之肺。这里也有沙漠，比如阿塔卡马沙漠，是世界上最干旱的地方之一。大多数国家讲西班牙语，不过巴西讲葡萄牙语。这种地理与文化上的多样性，使拉丁美洲成为旅行者和科学家眼中一片引人入胜的土地。',
};
READINGS.forEach(r => { if (READING_TEXT_ZH[r.id]) r.textZh = READING_TEXT_ZH[r.id]; });
// 按册与主题顺序重排，阅读列表更贴合教材推进
const READING_ORDER = ['r7', 'r1', 'r8', 'r2', 'r9', 'r3', 'r10', 'r4', 'r11', 'r5', 'r12', 'r6', 'r13', 'r14', 'r15', 'r16', 'r17', 'r18', 'r19', 'r20', 'r21', 'r22', 'r23'];
READINGS.sort((a, b) => READING_ORDER.indexOf(a.id) - READING_ORDER.indexOf(b.id));

// ---------- #6 扩充语法题库（为各课补充题目；通关时从题池随机抽 3 道） ----------
const EXTRA_QUIZ = {
  l1: [
    { q: '"el problema"（问题）说明 problema 是？', opts: ['阳性', '阴性', '两可'], a: 0, why: 'problema 虽以 -a 结尾但是阳性（希腊来源词）。' },
    { q: '以 -ción 结尾的名词一般是？', opts: ['阴性', '阳性', '不确定'], a: 0, why: '-ción/-sión/-dad 结尾一定阴性。' },
    { q: '"el mapa"说明 mapa 是？', opts: ['阳性', '阴性', '复数'], a: 0, why: 'mapa 是常见阳性例外。' },
  ],
  l2: [
    { q: '"这些桌子"用哪个定冠词？', opts: ['los', 'las', 'unas'], a: 1, why: 'mesa 阴性复数用 las。' },
    { q: '"一些朋友（男）"是？', opts: ['unos amigos', 'unas amigos', 'los amigos'], a: 0 },
  ],
  l5: [
    { q: '"我们是学生"是？', opts: ['Somos estudiantes.', 'Sois estudiantes.', 'Son estudiantes.'], a: 0 },
    { q: '"现在两点"是？', opts: ['Son las dos.', 'Es la dos.', 'Está las dos.'], a: 0, why: '时间用 ser。' },
  ],
  l6: [
    { q: '"咖啡是热的（此刻）"是？', opts: ['El café está caliente.', 'El café es caliente.', 'El café hay caliente.'], a: 0, why: '临时状态用 estar。' },
    { q: '"我是中国人"是？', opts: ['Soy chino.', 'Estoy chino.', 'Hay chino.'], a: 0, why: '国籍用 ser。' },
  ],
  l7: [
    { q: '"ellos + vivir"是？', opts: ['viven', 'vivimos', 'vivís'], a: 0 },
    { q: '"yo + hablar"是？', opts: ['hablo', 'hablas', 'habla'], a: 0 },
  ],
  l10: [
    { q: '"我们喜欢旅行"是？', opts: ['Nos gusta viajar.', 'Nos gustan viajar.', 'Gustamos viajar.'], a: 0 },
    { q: '"他们喜欢这些歌"是？', opts: ['Les gustan estas canciones.', 'Les gusta estas canciones.', 'Le gustan estas canciones.'], a: 0 },
  ],
  l22: [
    { q: '"昨天下了一整天雨"（背景持续）更适合用？', opts: ['过去未完成时 llovía', '简单过去时 llovió', '现在时 llueve'], a: 0, why: '持续背景描写用未完成时。' },
    { q: '"电话响的时候我正在睡觉"中"睡觉"用？', opts: ['过去未完成时 dormía', '简单过去时 dormí', '命令式'], a: 0 },
  ],
  l43: [
    { q: 'comer 的 nosotros 虚拟式是？', opts: ['comamos', 'comemos', 'comimos'], a: 0 },
    { q: 'tener 的虚拟式（yo）是？', opts: ['tenga', 'tengo', 'tendré'], a: 0 },
  ],
  l44: [
    { q: '"但愿明天天气好！"是？', opts: ['¡Ojalá haga buen tiempo mañana!', '¡Ojalá hace buen tiempo!', '¡Ojalá hará buen tiempo!'], a: 0, why: 'Ojalá + 虚拟式。' },
    { q: '主语相同时"我希望通过考试"用？', opts: ['Espero aprobar el examen.', 'Espero que apruebo.', 'Espero que aprobaré.'], a: 0, why: '同主语用原形。' },
  ],
  l49: [
    { q: 'Si tengo dinero, ___ un coche.', opts: ['compraré', 'compre', 'comprara'], a: 0, why: '真实条件主句用将来时。' },
    { q: '"我要是你就不去"是？', opts: ['Si fuera tú, no iría.', 'Si soy tú, no voy.', 'Si era tú, no iba.'], a: 0, why: '非真实条件：过去虚拟式+条件式。' },
  ],
};
// 把扩充题并入对应课程的题池
for (const id in EXTRA_QUIZ) {
  const l = LESSONS.find(x => x.id === id);
  if (l) l.quiz = l.quiz.concat(EXTRA_QUIZ[id]);
}

// ---------- 成就扩展 ----------
ACHIEVEMENTS.push(
  { id: 'listen10', icon: '👂', name: '顺风耳', desc: '听力理解答对 10 次', cond: s => (s.listenCount || 0) >= 10 },
  { id: 'read6', icon: '📰', name: '阅读达人', desc: '读完 6 篇短文', cond: s => (s.readingsDone || []).length >= 6 },
  { id: 'context20', icon: '🎯', name: '语境高手', desc: '语境填空答对 20 题', cond: s => (s.contextCorrect || 0) >= 20 }
);
