// ============ 数据文件：词汇、语法课程、时态、句型、口语 ============

// ---------- 词汇（按主题分组） ----------
const DECKS = [
  {
    id: 'greet', name: '问候与礼貌', icon: '👋',
    words: [
      { es: 'hola', zh: '你好', ex: '¡Hola! ¿Qué tal?', exZh: '你好！最近怎么样？' },
      { es: 'buenos días', zh: '早上好', ex: 'Buenos días, señora.', exZh: '早上好，女士。' },
      { es: 'buenas tardes', zh: '下午好' },
      { es: 'buenas noches', zh: '晚上好 / 晚安' },
      { es: 'adiós', zh: '再见' },
      { es: 'hasta luego', zh: '回头见' },
      { es: 'gracias', zh: '谢谢', ex: 'Muchas gracias.', exZh: '非常感谢。' },
      { es: 'de nada', zh: '不客气' },
      { es: 'por favor', zh: '请', ex: 'Un café, por favor.', exZh: '请来一杯咖啡。' },
      { es: 'perdón', zh: '对不起 / 打扰一下' },
      { es: 'sí', zh: '是 / 对' },
      { es: 'no', zh: '不 / 不是' },
    ],
  },
  {
    id: 'num', name: '数字', icon: '🔢',
    words: [
      { es: 'cero', zh: '零' }, { es: 'uno', zh: '一' }, { es: 'dos', zh: '二' },
      { es: 'tres', zh: '三' }, { es: 'cuatro', zh: '四' }, { es: 'cinco', zh: '五' },
      { es: 'seis', zh: '六' }, { es: 'siete', zh: '七' }, { es: 'ocho', zh: '八' },
      { es: 'nueve', zh: '九' }, { es: 'diez', zh: '十' }, { es: 'veinte', zh: '二十' },
      { es: 'treinta', zh: '三十' }, { es: 'cien', zh: '一百' }, { es: 'mil', zh: '一千' },
    ],
  },
  {
    id: 'family', name: '家庭与人', icon: '👨‍👩‍👧',
    words: [
      { es: 'la familia', zh: '家庭' }, { es: 'el padre', zh: '父亲' }, { es: 'la madre', zh: '母亲' },
      { es: 'el hermano', zh: '兄弟' }, { es: 'la hermana', zh: '姐妹' },
      { es: 'el abuelo', zh: '祖父' }, { es: 'la abuela', zh: '祖母' },
      { es: 'el hijo', zh: '儿子' }, { es: 'la hija', zh: '女儿' },
      { es: 'el esposo', zh: '丈夫' }, { es: 'la esposa', zh: '妻子' },
      { es: 'el amigo', zh: '朋友（男）', ex: 'Es mi amigo.', exZh: '他是我的朋友。' },
    ],
  },
  {
    id: 'food', name: '食物与饮品', icon: '🥘',
    words: [
      { es: 'el agua', zh: '水' }, { es: 'el pan', zh: '面包' }, { es: 'la leche', zh: '牛奶' },
      { es: 'el café', zh: '咖啡', ex: 'Me gusta el café.', exZh: '我喜欢咖啡。' },
      { es: 'el té', zh: '茶' }, { es: 'el vino', zh: '葡萄酒' }, { es: 'la cerveza', zh: '啤酒' },
      { es: 'la carne', zh: '肉' }, { es: 'el pollo', zh: '鸡肉' }, { es: 'el pescado', zh: '鱼（食用）' },
      { es: 'la fruta', zh: '水果' }, { es: 'la manzana', zh: '苹果' },
      { es: 'el arroz', zh: '米饭' }, { es: 'el huevo', zh: '鸡蛋' },
    ],
  },
  {
    id: 'color', name: '颜色', icon: '🎨',
    words: [
      { es: 'rojo', zh: '红色的' }, { es: 'azul', zh: '蓝色的' }, { es: 'verde', zh: '绿色的' },
      { es: 'amarillo', zh: '黄色的' }, { es: 'negro', zh: '黑色的' }, { es: 'blanco', zh: '白色的' },
      { es: 'gris', zh: '灰色的' }, { es: 'rosa', zh: '粉色的' },
      { es: 'naranja', zh: '橙色的' }, { es: 'morado', zh: '紫色的' },
    ],
  },
  {
    id: 'time', name: '时间与日期', icon: '🕐',
    words: [
      { es: 'hoy', zh: '今天' }, { es: 'mañana', zh: '明天 / 早晨' }, { es: 'ayer', zh: '昨天' },
      { es: 'ahora', zh: '现在' }, { es: 'el día', zh: '白天 / 日子' }, { es: 'la semana', zh: '星期 / 周' },
      { es: 'el mes', zh: '月份' }, { es: 'el año', zh: '年' },
      { es: 'el lunes', zh: '星期一' }, { es: 'el viernes', zh: '星期五' },
      { es: 'el sábado', zh: '星期六' }, { es: 'el domingo', zh: '星期日' },
      { es: 'la hora', zh: '小时 / 时刻', ex: '¿Qué hora es?', exZh: '现在几点了？' },
      { es: 'el minuto', zh: '分钟' },
    ],
  },
  {
    id: 'verb', name: '高频动词', icon: '⚡',
    words: [
      { es: 'ser', zh: '是（本质）', ex: 'Soy de China.', exZh: '我来自中国。' },
      { es: 'estar', zh: '是（状态/位置）', ex: 'Estoy bien.', exZh: '我很好。' },
      { es: 'tener', zh: '有', ex: 'Tengo dos hermanos.', exZh: '我有两个兄弟。' },
      { es: 'hacer', zh: '做' }, { es: 'ir', zh: '去', ex: 'Voy a casa.', exZh: '我回家。' },
      { es: 'venir', zh: '来' }, { es: 'comer', zh: '吃' }, { es: 'beber', zh: '喝' },
      { es: 'hablar', zh: '说 / 讲', ex: 'Hablo español.', exZh: '我说西班牙语。' },
      { es: 'vivir', zh: '居住 / 生活' }, { es: 'querer', zh: '想要 / 爱' },
      { es: 'poder', zh: '能 / 可以' }, { es: 'ver', zh: '看见' }, { es: 'dar', zh: '给' },
    ],
  },
  {
    id: 'daily', name: '日常事物', icon: '🏠',
    words: [
      { es: 'la casa', zh: '房子 / 家' }, { es: 'la escuela', zh: '学校' },
      { es: 'el trabajo', zh: '工作' }, { es: 'la ciudad', zh: '城市' },
      { es: 'la calle', zh: '街道' }, { es: 'la tienda', zh: '商店' },
      { es: 'el dinero', zh: '钱' }, { es: 'el libro', zh: '书' },
      { es: 'la mesa', zh: '桌子' }, { es: 'la silla', zh: '椅子' },
      { es: 'el coche', zh: '汽车' }, { es: 'el teléfono', zh: '电话 / 手机' },
    ],
  },
];

// ---------- 发音 ----------
const ALPHABET = [
  ['A', 'a'], ['B', 'be'], ['C', 'ce'], ['D', 'de'], ['E', 'e'], ['F', 'efe'],
  ['G', 'ge'], ['H', 'hache'], ['I', 'i'], ['J', 'jota'], ['K', 'ka'], ['L', 'ele'],
  ['M', 'eme'], ['N', 'ene'], ['Ñ', 'eñe'], ['O', 'o'], ['P', 'pe'], ['Q', 'cu'],
  ['R', 'erre'], ['S', 'ese'], ['T', 'te'], ['U', 'u'], ['V', 'uve'],
  ['W', 'uve doble'], ['X', 'equis'], ['Y', 'ye'], ['Z', 'zeta'],
];

const PRON_RULES = [
  { title: '五个元音（永远只有一种读音！）', items: [
    { s: 'a', tip: '类似"啊"', word: 'casa' },
    { s: 'e', tip: '类似"诶"', word: 'mesa' },
    { s: 'i', tip: '类似"衣"', word: 'vino' },
    { s: 'o', tip: '类似"哦"', word: 'poco' },
    { s: 'u', tip: '类似"乌"', word: 'luna' },
  ]},
  { title: '特色辅音', items: [
    { s: 'ñ', tip: '类似"尼呀"连读', word: 'España' },
    { s: 'll', tip: '类似"耶"', word: 'llamar' },
    { s: 'rr', tip: '大舌颤音（多练！）', word: 'perro' },
    { s: 'j', tip: '喉音"赫"', word: 'jamón' },
    { s: 'h', tip: '永远不发音', word: 'hola' },
    { s: 'ge/gi', tip: 'g遇e/i读喉音"赫"', word: 'gente' },
    { s: 'ce/ci', tip: '西班牙读咬舌音，拉美读s', word: 'gracias' },
    { s: 'qu', tip: '读k，u不发音', word: 'queso' },
    { s: 'v', tip: '和b读音相同', word: 'vino' },
    { s: 'z', tip: '西班牙咬舌音，拉美读s', word: 'zapato' },
  ]},
];

// 听音辨词：播放正确单词，选出正确拼写
const PRON_QUIZ = [
  { word: 'perro', opts: ['perro', 'pero', 'perol'] },
  { word: 'gracias', opts: ['gracias', 'grasias', 'gracías'] },
  { word: 'queso', opts: ['queso', 'keso', 'cueso'] },
  { word: 'España', opts: ['España', 'Espana', 'Espania'] },
  { word: 'jamón', opts: ['jamón', 'hamón', 'gamón'] },
  { word: 'gente', opts: ['gente', 'jente', 'guente'] },
  { word: 'llamar', opts: ['llamar', 'yamar', 'liamar'] },
  { word: 'zapato', opts: ['zapato', 'sapato', 'çapato'] },
  { word: 'vino', opts: ['vino', 'bino', 'huino'] },
  { word: 'hoy', opts: ['hoy', 'oy', 'joy'] },
];

// ---------- 语法课程 ----------
const LESSONS = [
  {
    id: 'l1', title: '名词的性别', icon: '🚻',
    sections: [
      { h: '阳性与阴性', body: '西班牙语的每个名词都有"性别"。一般规律：<b>-o 结尾多为阳性</b>，<b>-a 结尾多为阴性</b>。',
        examples: [ { es: 'el libro', zh: '书（阳性）' }, { es: 'la casa', zh: '房子（阴性）' }, { es: 'el niño / la niña', zh: '男孩 / 女孩' } ] },
      { h: '常见例外', body: '有些词不按规律，需要单独记：el día（天，阳性）、la mano（手，阴性）、el mapa（地图，阳性）。',
        examples: [ { es: 'el día', zh: '白天（阳性）' }, { es: 'la mano', zh: '手（阴性）' } ] },
      { h: '看词尾判断', body: '以 <b>-ción / -sión / -dad</b> 结尾的名词一定是阴性。',
        examples: [ { es: 'la ciudad', zh: '城市' }, { es: 'la televisión', zh: '电视' } ] },
    ],
    quiz: [
      { q: '"casa"（房子）是什么性别？', opts: ['阳性', '阴性', '中性'], a: 1, why: '-a 结尾多为阴性。' },
      { q: '"el día"说明 día 是？', opts: ['阳性', '阴性', '复数'], a: 0, why: 'día 是常见例外，虽以 -a 结尾但是阳性。' },
      { q: '"universidad"（大学）的性别是？', opts: ['阳性', '阴性', '不确定'], a: 1, why: '-dad 结尾一定是阴性。' },
    ],
  },
  {
    id: 'l2', title: '冠词：el / la / un / una', icon: '🏷️',
    sections: [
      { h: '定冠词（特指"这个/那个"）', body: '阳性单数 <b>el</b>，阴性单数 <b>la</b>，阳性复数 <b>los</b>，阴性复数 <b>las</b>。',
        examples: [ { es: 'el libro', zh: '（这本）书' }, { es: 'la mesa', zh: '（这张）桌子' }, { es: 'los libros', zh: '（这些）书' } ] },
      { h: '不定冠词（泛指"一个/一些"）', body: '阳性 <b>un / unos</b>，阴性 <b>una / unas</b>。',
        examples: [ { es: 'un café', zh: '一杯咖啡' }, { es: 'una casa', zh: '一栋房子' } ] },
    ],
    quiz: [
      { q: '"一杯咖啡"怎么说？', opts: ['una café', 'un café', 'el cafés'], a: 1, why: 'café 是阳性，用 un。' },
      { q: '"mesa"（桌子）的定冠词是？', opts: ['el', 'la', 'un'], a: 1, why: 'mesa 是阴性名词。' },
      { q: '"los libros"是什么意思？', opts: ['一本书', '这些书', '一些桌子'], a: 1, why: 'los 是阳性复数定冠词。' },
    ],
  },
  {
    id: 'l3', title: '名词复数', icon: '📚',
    sections: [
      { h: '基本规则', body: '<b>元音结尾 +s</b>：casa→casas；<b>辅音结尾 +es</b>：profesor→profesores。',
        examples: [ { es: 'casa → casas', zh: '房子（复数）' }, { es: 'profesor → profesores', zh: '老师（复数）' } ] },
      { h: '特殊变化', body: '<b>-z 结尾变 -ces</b>：lápiz→lápices。冠词也要一起变复数。',
        examples: [ { es: 'lápiz → lápices', zh: '铅笔（复数）' }, { es: 'la mesa → las mesas', zh: '桌子（复数）' } ] },
    ],
    quiz: [
      { q: '"libro"的复数是？', opts: ['libroes', 'libros', 'libres'], a: 1, why: '元音结尾直接 +s。' },
      { q: '"ciudad"的复数是？', opts: ['ciudads', 'ciudades', 'ciudaces'], a: 1, why: '辅音结尾 +es。' },
      { q: '"lápiz"的复数是？', opts: ['lápizs', 'lápizes', 'lápices'], a: 2, why: '-z 结尾变 -ces。' },
    ],
  },
  {
    id: 'l4', title: '人称代词与"省主语"', icon: '🙋',
    sections: [
      { h: '六个人称', body: '<b>yo</b>(我) <b>tú</b>(你) <b>él/ella/usted</b>(他/她/您) <b>nosotros</b>(我们) <b>vosotros</b>(你们，西班牙用) <b>ellos/ellas/ustedes</b>(他们/她们/诸位)。',
        examples: [ { es: 'yo', zh: '我' }, { es: 'usted', zh: '您（正式场合）' } ] },
      { h: '主语常常省略！', body: '因为动词变位已经表明了人称，所以西语常省略主语——这是和英语最大的不同之一。',
        examples: [ { es: '(Yo) hablo español.', zh: '我说西班牙语。' }, { es: '(Nosotros) vivimos en Madrid.', zh: '我们住在马德里。' } ] },
    ],
    quiz: [
      { q: '对陌生长辈应该用哪个"你"？', opts: ['tú', 'usted', 'vosotros'], a: 1, why: 'usted 是尊称"您"。' },
      { q: '为什么西语常省略主语？', opts: ['为了省事', '动词变位已表明人称', '语法错误'], a: 1 },
      { q: '"我们"是？', opts: ['vosotros', 'ellos', 'nosotros'], a: 2 },
    ],
  },
  {
    id: 'l5', title: '动词 ser（是·本质）', icon: '🪪',
    sections: [
      { h: '什么时候用 ser', body: '表示<b>身份、国籍、职业、性格、时间</b>等固有属性。',
        examples: [ { es: 'Soy de China.', zh: '我来自中国。' }, { es: 'Ella es profesora.', zh: '她是老师。' }, { es: 'Son las dos.', zh: '现在两点。' } ] },
      { h: '变位（要背熟！）', body: '<b>soy, eres, es, somos, sois, son</b> —— 对应 yo / tú / él / nosotros / vosotros / ellos。',
        examples: [ { es: 'Soy estudiante.', zh: '我是学生。' }, { es: '¿Eres médico?', zh: '你是医生吗？' } ] },
    ],
    quiz: [
      { q: '"我是学生"怎么说？', opts: ['Soy estudiante.', 'Estoy estudiante.', 'Es estudiante.'], a: 0, why: '身份用 ser，第一人称是 soy。' },
      { q: '"ellos"对应的 ser 变位是？', opts: ['somos', 'son', 'sois'], a: 1 },
      { q: 'ser 用来表达？', opts: ['临时状态', '身份国籍职业等本质属性', '正在进行'], a: 1 },
    ],
  },
  {
    id: 'l6', title: '动词 estar 与 ser 的区别', icon: '⚖️',
    sections: [
      { h: '什么时候用 estar', body: '表示<b>状态、位置、情绪</b>。变位：<b>estoy, estás, está, estamos, estáis, están</b>。',
        examples: [ { es: 'Estoy cansado.', zh: '我累了。（状态）' }, { es: 'El baño está allí.', zh: '洗手间在那边。（位置）' } ] },
      { h: 'ser vs estar 一句话记住', body: '<b>ser = 是什么（本质）</b>，<b>estar = 处于什么（状态/位置）</b>。同一个形容词搭配不同动词意思会变！',
        examples: [ { es: 'Ella es alegre.', zh: '她性格开朗。（本性）' }, { es: 'Ella está alegre.', zh: '她现在很开心。（此刻）' } ] },
    ],
    quiz: [
      { q: '"洗手间在哪里"用哪个动词？', opts: ['ser', 'estar', '都可以'], a: 1, why: '位置用 estar。' },
      { q: '"Estoy bien."的意思是？', opts: ['我是好人', '我（现在）很好', '我很富有'], a: 1 },
      { q: '"她性格开朗"应该说？', opts: ['Ella es alegre.', 'Ella está alegre.', 'Ella alegre es.'], a: 0, why: '性格是本质属性，用 ser。' },
    ],
  },
  {
    id: 'l7', title: '规则动词的现在时变位', icon: '🔧',
    sections: [
      { h: '三大类动词', body: '按原形词尾分为 <b>-ar / -er / -ir</b> 三类。变位 = 去掉词尾 + 人称后缀。',
        examples: [ { es: 'hablar（说）', zh: '-ar 类' }, { es: 'comer（吃）', zh: '-er 类' }, { es: 'vivir（住）', zh: '-ir 类' } ] },
      { h: '后缀口诀', body: '-ar: <b>o, as, a, amos, áis, an</b>；-er: <b>o, es, e, emos, éis, en</b>；-ir: <b>o, es, e, imos, ís, en</b>。',
        examples: [ { es: 'Hablo chino.', zh: '我说中文。' }, { es: 'Comemos arroz.', zh: '我们吃米饭。' }, { es: '¿Dónde vives?', zh: '你住在哪里？' } ] },
    ],
    quiz: [
      { q: '"nosotros + hablar"的变位是？', opts: ['hablamos', 'hablan', 'habláis'], a: 0 },
      { q: '"tú + comer"的变位是？', opts: ['como', 'comes', 'come'], a: 1 },
      { q: '"yo + vivir"的变位是？', opts: ['vivo', 'vives', 'vive'], a: 0 },
    ],
  },
  {
    id: 'l8', title: '三大不规则动词：tener / ir / hacer', icon: '🌟',
    sections: [
      { h: 'tener（有）', body: '<b>tengo, tienes, tiene, tenemos, tenéis, tienen</b>。西语用 tener 表达年龄！',
        examples: [ { es: 'Tengo veinte años.', zh: '我二十岁。（直译：我有20年）' }, { es: 'Tengo hambre.', zh: '我饿了。' } ] },
      { h: 'ir（去）', body: '<b>voy, vas, va, vamos, vais, van</b>。<b>ir a + 动词原形</b> = 将要做某事（最常用的"将来"表达）。',
        examples: [ { es: 'Voy a la escuela.', zh: '我去学校。' }, { es: 'Voy a comer.', zh: '我要去吃饭 / 我将要吃饭。' } ] },
      { h: 'hacer（做）', body: '<b>hago, haces, hace, hacemos, hacéis, hacen</b>。还用于谈论天气。',
        examples: [ { es: 'Hace calor.', zh: '天气热。' }, { es: '¿Qué haces?', zh: '你在做什么？' } ] },
    ],
    quiz: [
      { q: '"我二十岁"怎么说？', opts: ['Soy veinte años.', 'Tengo veinte años.', 'Estoy veinte años.'], a: 1, why: '西语用 tener（有）表达年龄。' },
      { q: '"Voy a comer."的意思是？', opts: ['我在吃饭', '我要去吃饭', '我吃过了'], a: 1, why: 'ir a + 原形表将要。' },
      { q: '"天气热"怎么说？', opts: ['Es calor.', 'Está calor.', 'Hace calor.'], a: 2, why: '天气用 hacer。' },
    ],
  },
  {
    id: 'l9', title: '疑问句与否定句', icon: '❓',
    sections: [
      { h: '否定：太简单了', body: '在动词前加 <b>no</b> 即可。',
        examples: [ { es: 'No hablo francés.', zh: '我不会说法语。' }, { es: 'No tengo dinero.', zh: '我没有钱。' } ] },
      { h: '疑问句', body: '西语疑问句前后都有问号 <b>¿...?</b>。常用疑问词：<b>qué</b>(什么) <b>quién</b>(谁) <b>dónde</b>(哪里) <b>cuándo</b>(何时) <b>cómo</b>(如何) <b>cuánto</b>(多少) <b>por qué</b>(为什么)。',
        examples: [ { es: '¿Dónde está el baño?', zh: '洗手间在哪里？' }, { es: '¿Cuánto cuesta?', zh: '多少钱？' }, { es: '¿Cómo te llamas?', zh: '你叫什么名字？' } ] },
    ],
    quiz: [
      { q: '"我没有钱"怎么说？', opts: ['No tengo dinero.', 'Tengo no dinero.', 'No dinero tengo.'], a: 0, why: 'no 放在动词前。' },
      { q: '"哪里"是哪个疑问词？', opts: ['cuándo', 'dónde', 'cómo'], a: 1 },
      { q: '问价格用？', opts: ['¿Qué hora es?', '¿Cuánto cuesta?', '¿Cómo estás?'], a: 1 },
    ],
  },
  {
    id: 'l10', title: 'Gustar 句型（我喜欢…）', icon: '❤️',
    sections: [
      { h: '结构很特别', body: '直译是"某物让我喜欢"：<b>Me gusta + 单数名词/动词原形</b>；<b>Me gustan + 复数名词</b>。',
        examples: [ { es: 'Me gusta el café.', zh: '我喜欢咖啡。' }, { es: 'Me gustan los libros.', zh: '我喜欢（这些）书。' }, { es: 'Me gusta bailar.', zh: '我喜欢跳舞。' } ] },
      { h: '换人称只换开头', body: '<b>me / te / le / nos / os / les</b> + gusta(n)：我/你/他(她/您)/我们/你们/他们喜欢。',
        examples: [ { es: '¿Te gusta la música?', zh: '你喜欢音乐吗？' }, { es: 'Le gusta viajar.', zh: '他喜欢旅行。' } ] },
    ],
    quiz: [
      { q: '"我喜欢书（复数）"怎么说？', opts: ['Me gusta los libros.', 'Me gustan los libros.', 'Gusto los libros.'], a: 1, why: '复数名词用 gustan。' },
      { q: '"你喜欢跳舞吗？"是？', opts: ['¿Te gusta bailar?', '¿Te gustan bailar?', '¿Gustas bailar?'], a: 0, why: '动词原形算单数，用 gusta。' },
      { q: '"他喜欢"开头用？', opts: ['me', 'te', 'le'], a: 2 },
    ],
  },
];

// ---------- 时态与变位 ----------
const PRONOUNS = ['yo', 'tú', 'él/ella/usted', 'nosotros/as', 'vosotros/as', 'ellos/ellas/ustedes'];
const PRONOUNS_ZH = ['我', '你', '他/她/您', '我们', '你们', '他们'];

const TENSES = [
  { id: 'presente', name: '现在时', zh: '表示现在的动作、习惯、事实', icon: '☀️' },
  { id: 'preterito', name: '简单过去时', zh: '表示过去已完成的动作', icon: '🌙' },
  { id: 'futuro', name: '将来时', zh: '表示将要发生的事', icon: '🚀' },
];

const VERBS = [
  { inf: 'hablar', zh: '说', tag: '规则 -ar',
    presente: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'],
    preterito: ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'],
    futuro: ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'] },
  { inf: 'comer', zh: '吃', tag: '规则 -er',
    presente: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
    preterito: ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'],
    futuro: ['comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'] },
  { inf: 'vivir', zh: '住', tag: '规则 -ir',
    presente: ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven'],
    preterito: ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron'],
    futuro: ['viviré', 'vivirás', 'vivirá', 'viviremos', 'viviréis', 'vivirán'] },
  { inf: 'ser', zh: '是（本质）', tag: '不规则',
    presente: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    preterito: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    futuro: ['seré', 'serás', 'será', 'seremos', 'seréis', 'serán'] },
  { inf: 'estar', zh: '是（状态）', tag: '不规则',
    presente: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    preterito: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
    futuro: ['estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'] },
  { inf: 'tener', zh: '有', tag: '不规则',
    presente: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
    preterito: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
    futuro: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'] },
  { inf: 'ir', zh: '去', tag: '不规则',
    presente: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    preterito: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    futuro: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'] },
  { inf: 'hacer', zh: '做', tag: '不规则',
    presente: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
    preterito: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
    futuro: ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'] },
  { inf: 'querer', zh: '想要', tag: '不规则',
    presente: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
    preterito: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
    futuro: ['querré', 'querrás', 'querrá', 'querremos', 'querréis', 'querrán'] },
  { inf: 'poder', zh: '能', tag: '不规则',
    presente: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
    preterito: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
    futuro: ['podré', 'podrás', 'podrá', 'podremos', 'podréis', 'podrán'] },
];

// ---------- 句型拼句 ----------
const SENTENCES = [
  { es: 'Yo hablo un poco de español', zh: '我会说一点西班牙语。' },
  { es: '¿Cómo te llamas?', zh: '你叫什么名字？', fixed: true },
  { es: 'Me llamo Ana', zh: '我叫安娜。' },
  { es: '¿Dónde está el baño?', zh: '洗手间在哪里？', fixed: true },
  { es: 'Quiero un café por favor', zh: '请给我一杯咖啡。' },
  { es: 'La casa es grande', zh: '这房子很大。' },
  { es: 'Tengo dos hermanos', zh: '我有两个兄弟。' },
  { es: '¿Cuánto cuesta esto?', zh: '这个多少钱？', fixed: true },
  { es: 'Hoy hace buen tiempo', zh: '今天天气很好。' },
  { es: 'Vamos al restaurante', zh: '我们去餐厅吧。' },
  { es: 'Ella vive en Madrid', zh: '她住在马德里。' },
  { es: 'Me gusta la música', zh: '我喜欢音乐。' },
  { es: 'El libro está en la mesa', zh: '书在桌子上。' },
  { es: 'Mañana voy a trabajar', zh: '明天我要去上班。' },
  { es: '¿Qué hora es?', zh: '现在几点了？', fixed: true },
  { es: 'No tengo tiempo hoy', zh: '我今天没有时间。' },
];

// ---------- 口语场景 ----------
const SPEAK_SCENES = [
  {
    id: 'greet', name: '初次见面', icon: '🤝',
    phrases: [
      { es: 'Hola, ¿qué tal?', zh: '你好，最近怎么样？' },
      { es: 'Mucho gusto.', zh: '很高兴认识你。' },
      { es: '¿Cómo estás?', zh: '你好吗？' },
      { es: 'Muy bien, gracias.', zh: '很好，谢谢。' },
      { es: 'Soy de China.', zh: '我来自中国。' },
      { es: 'Hasta mañana.', zh: '明天见。' },
    ],
  },
  {
    id: 'rest', name: '餐厅点餐', icon: '🍽️',
    phrases: [
      { es: 'Una mesa para dos, por favor.', zh: '请给我一张两人桌。' },
      { es: 'El menú, por favor.', zh: '请给我菜单。' },
      { es: 'Quiero una paella.', zh: '我想要一份海鲜饭。' },
      { es: 'Sin picante, por favor.', zh: '请不要辣。' },
      { es: '¡Está muy rico!', zh: '太好吃了！' },
      { es: 'La cuenta, por favor.', zh: '请结账。' },
    ],
  },
  {
    id: 'travel', name: '旅行问路', icon: '🧳',
    phrases: [
      { es: '¿Dónde está la estación?', zh: '车站在哪里？' },
      { es: 'Un billete a Barcelona, por favor.', zh: '请给我一张去巴塞罗那的票。' },
      { es: '¿Cuánto cuesta el billete?', zh: '票价多少钱？' },
      { es: '¿Puede ayudarme?', zh: '您能帮我吗？' },
      { es: 'Estoy perdido.', zh: '我迷路了。' },
      { es: '¿Hay un hotel cerca?', zh: '附近有酒店吗？' },
    ],
  },
];

// ---------- 等级 ----------
const LEVELS = [
  { xp: 0, name: '启程小白' },
  { xp: 80, name: '会打招呼了' },
  { xp: 200, name: '词汇新芽' },
  { xp: 380, name: '语法学徒' },
  { xp: 600, name: '时态骑士' },
  { xp: 900, name: '句型建筑师' },
  { xp: 1300, name: '口语勇者' },
  { xp: 1800, name: '西语达人 A1' },
];

// ---------- 成就 ----------
const ACHIEVEMENTS = [
  { id: 'first', icon: '👣', name: '第一步 ¡Hola!', desc: '获得第一批经验值', cond: s => s.xp >= 5 },
  { id: 'streak3', icon: '🔥', name: '三日之火', desc: '连续学习 3 天', cond: s => s.streak >= 3 },
  { id: 'streak7', icon: '🌋', name: '七日燃烧', desc: '连续学习 7 天', cond: s => s.streak >= 7 },
  { id: 'vocab25', icon: '🌱', name: '词汇新芽', desc: '掌握 25 个单词', cond: s => masteredCount(s) >= 25 },
  { id: 'vocab60', icon: '🌳', name: '词汇大树', desc: '掌握 60 个单词', cond: s => masteredCount(s) >= 60 },
  { id: 'lesson3', icon: '📖', name: '语法学徒', desc: '完成 3 节语法课', cond: s => s.lessonsDone.length >= 3 },
  { id: 'lessonAll', icon: '🎓', name: '语法大师', desc: '完成全部 10 节语法课', cond: s => s.lessonsDone.length >= LESSONS.length },
  { id: 'conj50', icon: '⚙️', name: '变位机器', desc: '答对 50 道变位题', cond: s => s.conjCorrect >= 50 },
  { id: 'sent15', icon: '🧱', name: '句子建筑师', desc: '拼对 15 个句子', cond: s => s.sentCorrect >= 15 },
  { id: 'speak10', icon: '🎤', name: '开口勇者', desc: '完成 10 次口语跟读', cond: s => s.speakCount >= 10 },
  { id: 'match5', icon: '🧩', name: '连连看高手', desc: '完成 5 局配对游戏', cond: s => s.matchGames >= 5 },
  { id: 'xp500', icon: '💎', name: '经验宝石', desc: '累计 500 XP', cond: s => s.xp >= 500 },
];
