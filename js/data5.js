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
};
READINGS.forEach(r => { if (READING_ALIGN[r.id]) r.align = READING_ALIGN[r.id]; });
// 按册与主题顺序重排，阅读列表更贴合教材推进
const READING_ORDER = ['r7', 'r1', 'r8', 'r2', 'r9', 'r3', 'r10', 'r4', 'r11', 'r5', 'r12', 'r6'];
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
