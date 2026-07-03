// ============ 扩展内容包：进阶词汇/语法/时态/口语表达/写作 ============
// 本文件在 data.js 之后加载，向基础数据中合并新内容

// ---------- 新增词汇包（8 个） ----------
DECKS.push(
  {
    id: 'body', name: '身体与健康', icon: '🩺',
    words: [
      { es: 'la cabeza', zh: '头' }, { es: 'el ojo', zh: '眼睛' }, { es: 'la mano', zh: '手' },
      { es: 'el pie', zh: '脚' }, { es: 'el corazón', zh: '心脏' }, { es: 'la boca', zh: '嘴' },
      { es: 'la nariz', zh: '鼻子' }, { es: 'la oreja', zh: '耳朵' },
      { es: 'el médico', zh: '医生' }, { es: 'el hospital', zh: '医院' },
      { es: 'la medicina', zh: '药' }, { es: 'enfermo', zh: '生病的' },
      { es: 'cansado', zh: '疲惫的', ex: 'Estoy muy cansado.', exZh: '我很累。' },
      { es: 'el dolor', zh: '疼痛', ex: 'Tengo dolor de cabeza.', exZh: '我头疼。' },
    ],
  },
  {
    id: 'city', name: '城市与交通', icon: '🚇',
    words: [
      { es: 'el metro', zh: '地铁', ex: 'Voy en metro.', exZh: '我坐地铁去。' },
      { es: 'el autobús', zh: '公交车' }, { es: 'el tren', zh: '火车' },
      { es: 'el avión', zh: '飞机' }, { es: 'el aeropuerto', zh: '机场' },
      { es: 'la estación', zh: '车站' }, { es: 'el taxi', zh: '出租车' },
      { es: 'la plaza', zh: '广场' }, { es: 'el parque', zh: '公园' },
      { es: 'el museo', zh: '博物馆' }, { es: 'el banco', zh: '银行' },
      { es: 'el centro', zh: '市中心' }, { es: 'la bicicleta', zh: '自行车' },
      { es: 'el billete', zh: '票 / 纸币' },
    ],
  },
  {
    id: 'work', name: '工作与学习', icon: '💼',
    words: [
      { es: 'el estudiante', zh: '学生' }, { es: 'el profesor', zh: '老师' },
      { es: 'la clase', zh: '课 / 教室' }, { es: 'el examen', zh: '考试' },
      { es: 'la tarea', zh: '作业 / 任务' }, { es: 'la empresa', zh: '公司' },
      { es: 'la oficina', zh: '办公室' }, { es: 'la reunión', zh: '会议' },
      { es: 'el jefe', zh: '老板 / 上司' }, { es: 'el sueldo', zh: '工资' },
      { es: 'estudiar', zh: '学习', ex: 'Estudio español.', exZh: '我学西班牙语。' },
      { es: 'trabajar', zh: '工作' }, { es: 'la universidad', zh: '大学' },
      { es: 'el ordenador', zh: '电脑（西班牙）' },
    ],
  },
  {
    id: 'weather', name: '天气与自然', icon: '🌤️',
    words: [
      { es: 'el sol', zh: '太阳', ex: 'Hace sol.', exZh: '出太阳了。' },
      { es: 'la lluvia', zh: '雨' }, { es: 'la nieve', zh: '雪' }, { es: 'el viento', zh: '风' },
      { es: 'la nube', zh: '云' }, { es: 'el cielo', zh: '天空' }, { es: 'el mar', zh: '海' },
      { es: 'la montaña', zh: '山' }, { es: 'el río', zh: '河' }, { es: 'la flor', zh: '花' },
      { es: 'el árbol', zh: '树' }, { es: 'la playa', zh: '海滩' },
      { es: 'el calor', zh: '热', ex: 'Hace mucho calor.', exZh: '天气很热。' },
      { es: 'el frío', zh: '冷' },
    ],
  },
  {
    id: 'emotion', name: '情感与性格', icon: '😊',
    words: [
      { es: 'feliz', zh: '幸福的' }, { es: 'triste', zh: '悲伤的' },
      { es: 'contento', zh: '高兴的', ex: 'Estoy muy contento.', exZh: '我很高兴。' },
      { es: 'nervioso', zh: '紧张的' }, { es: 'tranquilo', zh: '平静的' },
      { es: 'simpático', zh: '友善讨喜的' }, { es: 'inteligente', zh: '聪明的' },
      { es: 'guapo', zh: '帅的 / 漂亮的' }, { es: 'alegre', zh: '开朗的' },
      { es: 'serio', zh: '严肃的' }, { es: 'amable', zh: '和蔼的' }, { es: 'tímido', zh: '害羞的' },
    ],
  },
  {
    id: 'verbs2', name: '动词进阶', icon: '🚀',
    words: [
      { es: 'pensar', zh: '想 / 认为' }, { es: 'saber', zh: '知道 / 会' },
      { es: 'conocer', zh: '认识 / 了解' }, { es: 'decir', zh: '说（内容）' },
      { es: 'salir', zh: '出去 / 离开' }, { es: 'llegar', zh: '到达' },
      { es: 'empezar', zh: '开始' }, { es: 'terminar', zh: '结束' },
      { es: 'buscar', zh: '寻找' }, { es: 'encontrar', zh: '找到 / 遇见' },
      { es: 'ayudar', zh: '帮助', ex: '¿Puedes ayudarme?', exZh: '你能帮我吗？' },
      { es: 'esperar', zh: '等待 / 希望' }, { es: 'necesitar', zh: '需要' },
      { es: 'comprar', zh: '买' },
    ],
  },
  {
    id: 'shop', name: '衣物与购物', icon: '🛍️',
    words: [
      { es: 'la ropa', zh: '衣服' }, { es: 'la camisa', zh: '衬衫' },
      { es: 'los pantalones', zh: '裤子' }, { es: 'los zapatos', zh: '鞋' },
      { es: 'el vestido', zh: '连衣裙' }, { es: 'el abrigo', zh: '外套' },
      { es: 'la talla', zh: '尺码', ex: '¿Tiene otra talla?', exZh: '有别的尺码吗？' },
      { es: 'el precio', zh: '价格' }, { es: 'barato', zh: '便宜的' },
      { es: 'caro', zh: '贵的' }, { es: 'la rebaja', zh: '打折' },
      { es: 'vender', zh: '卖' }, { es: 'la tarjeta', zh: '卡（银行卡）' },
      { es: 'el regalo', zh: '礼物' },
    ],
  },
  {
    id: 'hobby', name: '爱好与运动', icon: '⚽',
    words: [
      { es: 'el fútbol', zh: '足球' }, { es: 'el baloncesto', zh: '篮球' },
      { es: 'la natación', zh: '游泳（运动）' }, { es: 'la música', zh: '音乐' },
      { es: 'el cine', zh: '电影 / 电影院' }, { es: 'el deporte', zh: '运动' },
      { es: 'bailar', zh: '跳舞' }, { es: 'cantar', zh: '唱歌' },
      { es: 'leer', zh: '阅读' }, { es: 'viajar', zh: '旅行' },
      { es: 'cocinar', zh: '做饭' }, { es: 'nadar', zh: '游泳' },
      { es: 'correr', zh: '跑步' },
      { es: 'jugar', zh: '玩 / 打（球）', ex: 'Juego al fútbol.', exZh: '我踢足球。' },
    ],
  }
);

// ---------- 新增语法课（第 11~24 课） ----------
LESSONS.push(
  {
    id: 'l11', title: '形容词的性数一致', icon: '🎭',
    sections: [
      { h: '跟着名词变', body: '形容词要和名词保持<b>性、数一致</b>：alto → alta → altos → altas。以 <b>-e 或辅音</b>结尾的形容词不分阴阳性：grande, azul, fácil。',
        examples: [ { es: 'un chico alto / una chica alta', zh: '高个子男孩 / 女孩' }, { es: 'los coches nuevos', zh: '（这些）新车' }, { es: 'una casa grande', zh: '一栋大房子' } ] },
      { h: '位置：一般放名词后面', body: '和中文相反！<b>名词 + 形容词</b>：la casa blanca（白房子）。少数常用词可前置且缩尾：buen（好）、gran（伟大的）。',
        examples: [ { es: 'una ciudad bonita', zh: '一座漂亮的城市' }, { es: 'un buen amigo', zh: '一个好朋友' } ] },
    ],
    quiz: [
      { q: '"一个高个子女孩"怎么说？', opts: ['una chica alta', 'una chica alto', 'una alta chico'], a: 0, why: '形容词跟阴性名词变为 alta，放名词后。' },
      { q: 'grande 修饰阴性名词时变成？', opts: ['granda', '不变，还是 grande', 'grandes'], a: 1, why: '-e 结尾的形容词不分阴阳性。' },
      { q: '西语形容词一般放在？', opts: ['名词前', '名词后', '句首'], a: 1 },
    ],
  },
  {
    id: 'l12', title: '所有格：我的、你的、他的', icon: '🔑',
    sections: [
      { h: '六个所有格', body: '<b>mi</b>(我的) <b>tu</b>(你的) <b>su</b>(他/她/您的) <b>nuestro</b>(我们的) <b>vuestro</b>(你们的) <b>su</b>(他们的)。名词复数时加 s：mis libros。',
        examples: [ { es: 'mi madre', zh: '我的母亲' }, { es: 'tus amigos', zh: '你的朋友们' }, { es: 'su casa', zh: '他/她/您的房子' } ] },
      { h: 'nuestro 要分性', body: 'nuestro/nuestra、vuestro/vuestra 需要和名词性别一致，其余不分性。',
        examples: [ { es: 'nuestra escuela', zh: '我们的学校' }, { es: 'nuestros hijos', zh: '我们的孩子们' } ] },
    ],
    quiz: [
      { q: '"我的书（复数）"怎么说？', opts: ['mi libros', 'mis libros', 'míos libros'], a: 1, why: '名词复数所有格也要加 s。' },
      { q: '"我们的房子"怎么说？', opts: ['nuestro casa', 'nuestra casa', 'nuestras casa'], a: 1, why: 'casa 是阴性单数，用 nuestra。' },
      { q: 'su 不能表示下面哪个意思？', opts: ['他的', '您的', '我的'], a: 2 },
    ],
  },
  {
    id: 'l13', title: '指示词：这个、那个、更远的那个', icon: '👉',
    sections: [
      { h: '三级距离', body: '<b>este/esta</b>(这个) <b>ese/esa</b>(那个) <b>aquel/aquella</b>(更远的那个)。复数：estos/esos/aquellos。',
        examples: [ { es: 'este libro', zh: '这本书' }, { es: 'esa mesa', zh: '那张桌子' }, { es: 'aquella montaña', zh: '远处那座山' } ] },
      { h: '常用搭配', body: '¿Cuánto cuesta este...? 问价必备。esto/eso 泛指"这事/那东西"（不分性）。',
        examples: [ { es: '¿Cuánto cuesta esta camisa?', zh: '这件衬衫多少钱？' }, { es: '¿Qué es esto?', zh: '这是什么？' } ] },
    ],
    quiz: [
      { q: '"这本书"怎么说？', opts: ['este libro', 'ese libro', 'aquel libro'], a: 0 },
      { q: '距离说话人和听话人都很远的东西用？', opts: ['este', 'ese', 'aquel'], a: 2 },
      { q: '"那些房子（较近）"怎么说？', opts: ['esas casas', 'esos casas', 'aquella casas'], a: 0, why: 'casa 阴性复数用 esas。' },
    ],
  },
  {
    id: 'l14', title: 'hay 与 está：「有」和「在」', icon: '📍',
    sections: [
      { h: 'hay = 存在"有"', body: '<b>Hay</b> 表示某处"有"某物（泛指），后面接 un/una/数量词/复数，<b>不接 el/la</b>。',
        examples: [ { es: 'Hay un banco en la plaza.', zh: '广场上有一家银行。' }, { es: 'Hay muchos libros aquí.', zh: '这里有很多书。' } ] },
      { h: 'está = 特指"在"', body: '说<b>特定的</b>东西在哪里，用 estar：El banco está en la plaza. 口诀：<b>"有"什么用 hay，"在"哪里用 estar</b>。',
        examples: [ { es: 'El banco está en la plaza.', zh: '那家银行在广场上。' }, { es: '¿Dónde está el museo?', zh: '博物馆在哪里？' } ] },
    ],
    quiz: [
      { q: '"广场上有一家银行"怎么说？', opts: ['Hay un banco en la plaza.', 'El banco está en la plaza.', 'Es un banco en la plaza.'], a: 0, why: '表存在"有"用 hay。' },
      { q: '"那家银行在广场上"怎么说？', opts: ['Hay el banco en la plaza.', 'El banco está en la plaza.', 'El banco es en la plaza.'], a: 1, why: '特指位置用 está。' },
      { q: 'hay 后面一般不接？', opts: ['un / una', 'muchos', 'el / la'], a: 2 },
    ],
  },
  {
    id: 'l15', title: '常用前置词 a / de / en / con', icon: '🔗',
    sections: [
      { h: '四大金刚', body: '<b>a</b>(到/向；时刻 a las dos) <b>de</b>(…的/来自) <b>en</b>(在…里/上；交通工具 en metro) <b>con</b>(和…一起)。',
        examples: [ { es: 'Voy a Madrid en tren.', zh: '我坐火车去马德里。' }, { es: 'el libro de mi amigo', zh: '我朋友的书' }, { es: 'Como con mi familia.', zh: '我和家人一起吃饭。' } ] },
      { h: '缩合：al 和 del', body: '<b>a + el = al</b>，<b>de + el = del</b>（必须缩合）：Voy al cine. Vengo del trabajo.',
        examples: [ { es: 'Voy al cine.', zh: '我去电影院。' }, { es: 'Vengo del trabajo.', zh: '我下班回来。' } ] },
    ],
    quiz: [
      { q: '"我坐地铁"怎么说？', opts: ['en metro', 'a metro', 'de metro'], a: 0, why: '交通工具用 en。' },
      { q: 'a + el 必须缩合为？', opts: ['ael', 'al', '不缩合'], a: 1 },
      { q: '"我朋友的书"怎么说？', opts: ['el libro de mi amigo', 'el libro con mi amigo', 'mi amigo de el libro'], a: 0 },
    ],
  },
  {
    id: 'l16', title: 'por 与 para 的区别', icon: '🔀',
    sections: [
      { h: 'por：原因 / 经过 / 交换 / 时间段', body: 'gracias <b>por</b> tu ayuda（因…而感谢）、<b>por</b> la mañana（在早上）、pasar <b>por</b> el parque（经过公园）。',
        examples: [ { es: 'Gracias por tu ayuda.', zh: '谢谢你的帮助。' }, { es: 'Corro por la mañana.', zh: '我早上跑步。' } ] },
      { h: 'para：目的 / 对象 / 期限', body: 'Estudio <b>para</b> aprender（为了学会）、Es <b>para</b> ti（这是给你的）、<b>para</b> mañana（明天前）。口诀：<b>回头看原因用 por，向前看目的用 para</b>。',
        examples: [ { es: 'Este regalo es para ti.', zh: '这份礼物是给你的。' }, { es: 'Estudio para hablar bien.', zh: '我学习是为了说得好。' } ] },
    ],
    quiz: [
      { q: '"谢谢你的帮助"：Gracias ___ tu ayuda', opts: ['por', 'para', 'de'], a: 0, why: '表原因用 por。' },
      { q: '"这是给你的"：Es ___ ti', opts: ['por', 'para', 'a'], a: 1, why: '表对象用 para。' },
      { q: '"我学习是为了学会"：Estudio ___ aprender', opts: ['por', 'para', 'con'], a: 1, why: '表目的用 para。' },
    ],
  },
  {
    id: 'l17', title: '直接宾语代词：lo / la / los / las', icon: '🎯',
    sections: [
      { h: '把"它/他/她"提到动词前', body: '<b>me te lo/la nos os los/las</b>。位置在变位动词<b>之前</b>：Lo veo.（我看见他/它）¿La conoces?（你认识她吗？）',
        examples: [ { es: 'Lo veo.', zh: '我看见他/它。' }, { es: '¿Me entiendes?', zh: '你懂我（的意思）吗？' } ] },
      { h: '接动词原形时可以后缀', body: 'Quiero ver<b>lo</b>. = <b>Lo</b> quiero ver.（我想看它）两种位置都对。',
        examples: [ { es: 'Quiero comprarlo.', zh: '我想买它。' }, { es: 'Lo quiero comprar.', zh: '我想买它。（同义）' } ] },
    ],
    quiz: [
      { q: '"我看见他"怎么说？', opts: ['Lo veo.', 'Veo lo.', 'Veo él.'], a: 0, why: '代词放在变位动词前。' },
      { q: '直接宾语代词的位置一般在？', opts: ['变位动词前', '句尾', '主语前'], a: 0 },
      { q: '"我想买它"哪种说法正确？', opts: ['Quiero comprarlo.', 'Quiero lo comprar.', 'Comprar lo quiero.'], a: 0 },
    ],
  },
  {
    id: 'l18', title: '间接宾语代词：le / les（给某人）', icon: '🎁',
    sections: [
      { h: '给"我/你/他"…', body: '<b>me te le nos os les</b>：Le doy el libro.（我给他书）Te escribo.（我给你写信）',
        examples: [ { es: 'Le doy el libro.', zh: '我给他/她/您书。' }, { es: '¿Me puedes ayudar?', zh: '你能帮我吗？' } ] },
      { h: '常与 a + 人 连用', body: 'le/les 指代不明时，用 a + 人来说明：<b>Le</b> escribo <b>a María</b>.（我给玛丽亚写信）',
        examples: [ { es: 'Le escribo a María.', zh: '我给玛丽亚写信。' }, { es: 'Les hablo a mis padres.', zh: '我跟父母说话。' } ] },
    ],
    quiz: [
      { q: '"我给他书"怎么说？', opts: ['Le doy el libro.', 'Doy le el libro.', 'Lo doy el libro.'], a: 0 },
      { q: 'le 可以指代？', opts: ['只有"他"', '他/她/您都可以', '只有物品'], a: 1 },
      { q: '第三人称复数的间接宾语代词是？', opts: ['los', 'les', 'se'], a: 1 },
    ],
  },
  {
    id: 'l19', title: '自复动词：每天起床洗漱都靠它', icon: '🪞',
    sections: [
      { h: '动作作用于自己', body: '<b>llamarse</b>(名叫) <b>levantarse</b>(起床) <b>ducharse</b>(淋浴) <b>acostarse</b>(上床睡)。变位时代词也跟着变：<b>me te se nos os se</b>。',
        examples: [ { es: 'Me levanto a las siete.', zh: '我七点起床。' }, { es: '¿Cómo te llamas?', zh: '你叫什么名字？（直译：你把自己叫做什么）' } ] },
      { h: '一天的日常', body: 'me despierto(醒) → me levanto(起) → me ducho(洗澡) → me visto(穿衣) → me acuesto(睡)。描述日常作息的必备句型！',
        examples: [ { es: 'Me ducho por la mañana.', zh: '我早上洗澡。' }, { es: 'Me acuesto a las once.', zh: '我十一点睡觉。' } ] },
    ],
    quiz: [
      { q: '"我七点起床"怎么说？', opts: ['Me levanto a las siete.', 'Levanto a las siete.', 'Se levanto a las siete.'], a: 0, why: '第一人称自复代词用 me。' },
      { q: '"él + ducharse"的变位是？', opts: ['me ducha', 'se ducha', 'te ducha'], a: 1 },
      { q: '¿Cómo te llamas? 的直译是？', opts: ['你叫什么', '你把自己叫做什么', '你的名字在哪'], a: 1 },
    ],
  },
  {
    id: 'l20', title: '现在进行时：estar + 副动词', icon: '🏃',
    sections: [
      { h: '正在做某事', body: '副动词：<b>-ar → -ando</b>，<b>-er/-ir → -iendo</b>：hablando, comiendo, viviendo。前面加 estar 的变位。',
        examples: [ { es: 'Estoy estudiando español.', zh: '我正在学西班牙语。' }, { es: '¿Qué estás haciendo?', zh: '你正在做什么？' } ] },
      { h: '常见不规则副动词', body: 'leer → <b>leyendo</b>(正在读)，dormir → <b>durmiendo</b>(正在睡)，decir → <b>diciendo</b>(正在说)。',
        examples: [ { es: 'Está leyendo un libro.', zh: '他正在读一本书。' }, { es: 'El niño está durmiendo.', zh: '孩子正在睡觉。' } ] },
    ],
    quiz: [
      { q: '"我正在吃饭"怎么说？', opts: ['Estoy comiendo.', 'Soy comiendo.', 'Estoy comer.'], a: 0, why: 'estar + 副动词 -iendo。' },
      { q: 'hablar 的副动词是？', opts: ['hablando', 'habliendo', 'hablado'], a: 0 },
      { q: '进行时用哪个助动词？', opts: ['ser', 'estar', 'haber'], a: 1 },
    ],
  },
  {
    id: 'l21', title: '现在完成时：我做过 / 已经做了', icon: '✅',
    sections: [
      { h: 'haber + 过去分词', body: '<b>he has ha hemos habéis han</b> + 分词（-ar → -ado，-er/-ir → -ido）：He estudiado español.（我学过西班牙语）',
        examples: [ { es: 'He comido paella.', zh: '我吃过海鲜饭。' }, { es: '¿Has estado en España?', zh: '你去过西班牙吗？' } ] },
      { h: '不规则分词 & 使用场景', body: '常见不规则：<b>hecho</b>(做) <b>dicho</b>(说) <b>visto</b>(看) <b>escrito</b>(写) <b>puesto</b>(放) <b>vuelto</b>(回)。用于"到目前为止的经历"和"今天/这周刚发生的事"。',
        examples: [ { es: 'No he visto esa película.', zh: '我没看过那部电影。' }, { es: 'Hoy he trabajado mucho.', zh: '今天我干了很多活。' } ] },
    ],
    quiz: [
      { q: '"我看过那部电影"怎么说？', opts: ['He visto esa película.', 'He veído esa película.', 'Veo esa película.'], a: 0, why: 'ver 的分词是不规则的 visto。' },
      { q: 'hacer 的过去分词是？', opts: ['hacido', 'hecho', 'haciendo'], a: 1 },
      { q: '现在完成时的助动词是？', opts: ['estar', 'ser', 'haber'], a: 2 },
    ],
  },
  {
    id: 'l22', title: '两种过去时：讲故事的关键', icon: '📜',
    sections: [
      { h: '简单过去时 vs 过去未完成时', body: '<b>简单过去时</b>（comí）：一次性、已完成的动作。<b>过去未完成时</b>（comía）：过去的习惯、背景描写、"当时正…"。',
        examples: [ { es: 'Ayer comí paella.', zh: '昨天我吃了海鲜饭。（一次性）' }, { es: 'De niño, comía dulces todos los días.', zh: '小时候我每天吃糖。（习惯）' } ] },
      { h: '两者常常一起用', body: '背景用未完成时，突发动作用简单过去时：<b>Estaba</b> en casa cuando <b>llamaste</b>.（你打电话时我正在家）',
        examples: [ { es: 'Estaba en casa cuando llamaste.', zh: '你打电话来的时候我在家。' }, { es: 'Llovía y decidí quedarme.', zh: '当时在下雨，我决定留下。' } ] },
    ],
    quiz: [
      { q: '"小时候我常游泳"用哪种过去时？', opts: ['简单过去时', '过去未完成时', '将来时'], a: 1, why: '过去的习惯用未完成时。' },
      { q: '"昨天我买了一本书"用？', opts: ['简单过去时', '过去未完成时', '现在时'], a: 0, why: '一次性完成的动作。' },
      { q: '"你打电话时我在家"中"在家"用？', opts: ['简单过去时', '过去未完成时', '命令式'], a: 1, why: '背景状态用未完成时。' },
    ],
  },
  {
    id: 'l23', title: '命令式入门：让别人做事', icon: '📢',
    sections: [
      { h: 'tú 的肯定命令式', body: '规则动词 = <b>第三人称单数现在时</b>：¡Habla!（你说！）¡Come!（你吃！）¡Escucha!（你听！）',
        examples: [ { es: '¡Habla más despacio!', zh: '说慢一点！' }, { es: '¡Escucha esto!', zh: '听听这个！' } ] },
      { h: '八个不规则（高频！）', body: '<b>di</b>(说) <b>haz</b>(做) <b>ve</b>(去) <b>pon</b>(放) <b>sal</b>(出去) <b>sé</b>(当/是) <b>ten</b>(拿着) <b>ven</b>(来)。',
        examples: [ { es: '¡Ven aquí!', zh: '过来！' }, { es: '¡Dime!', zh: '告诉我！/ 你说！' } ] },
    ],
    quiz: [
      { q: '"你说吧！"怎么说？', opts: ['¡Habla!', '¡Hablas!', '¡Hablar!'], a: 0 },
      { q: 'hacer 的 tú 命令式是？', opts: ['hace', 'haz', 'haga'], a: 1 },
      { q: '"过来！"怎么说？', opts: ['¡Ven!', '¡Vienes!', '¡Venir!'], a: 0 },
    ],
  },
  {
    id: 'l24', title: '表达将来的三种方式', icon: '🔮',
    sections: [
      { h: '三种说法', body: '① <b>ir a + 原形</b>（口语最常用）：Voy a viajar. ② <b>简单将来时</b>：Viajaré. ③ <b>现在时 + 时间词</b>：Mañana trabajo.',
        examples: [ { es: 'Voy a viajar a España.', zh: '我要去西班牙旅行。' }, { es: 'Mañana trabajo.', zh: '我明天上班。' } ] },
      { h: '将来时还能表猜测', body: '简单将来时的隐藏用法——表示对现在的猜测：Serán las diez.（现在大概十点吧）',
        examples: [ { es: 'Serán las diez.', zh: '大概十点了吧。' }, { es: '¿Dónde estará Ana?', zh: '安娜会在哪儿呢？' } ] },
    ],
    quiz: [
      { q: '口语中最常用的将来表达是？', opts: ['ir a + 原形', '简单将来时', '虚拟式'], a: 0 },
      { q: '"Serán las diez."在语境中常表示？', opts: ['十点整', '猜测：大概十点', '曾经十点'], a: 1 },
      { q: '"明天我去上班"最自然的说法？', opts: ['Mañana voy a trabajar.', 'Mañana trabajé.', 'Mañana trabajaba.'], a: 0 },
    ],
  }
);

// ---------- 新增时态：过去未完成时 + 现在完成时 ----------
TENSES.push(
  { id: 'imperfecto', name: '过去未完成时', zh: '过去的习惯、背景描写（见语法第22课）', icon: '🌫️' },
  { id: 'perfecto', name: '现在完成时', zh: 'haber + 分词，表经历和"已经…"（见语法第21课）', icon: '✅' }
);

const HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];

// 已有 10 个动词补充过去未完成时和过去分词
const IMPERF_MAP = {
  hablar: ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban'],
  comer: ['comía', 'comías', 'comía', 'comíamos', 'comíais', 'comían'],
  vivir: ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían'],
  ser: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
  estar: ['estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban'],
  tener: ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían'],
  ir: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
  hacer: ['hacía', 'hacías', 'hacía', 'hacíamos', 'hacíais', 'hacían'],
  querer: ['quería', 'querías', 'quería', 'queríamos', 'queríais', 'querían'],
  poder: ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían'],
};
const PART_MAP = {
  hablar: 'hablado', comer: 'comido', vivir: 'vivido', ser: 'sido', estar: 'estado',
  tener: 'tenido', ir: 'ido', hacer: 'hecho', querer: 'querido', poder: 'podido',
};
VERBS.forEach(v => {
  if (IMPERF_MAP[v.inf]) v.imperfecto = IMPERF_MAP[v.inf];
  if (PART_MAP[v.inf]) v.part = PART_MAP[v.inf];
});

// 新增 5 个高频动词（五个时态齐全）
VERBS.push(
  { inf: 'venir', zh: '来', tag: '不规则', part: 'venido',
    presente: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'],
    preterito: ['vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'],
    imperfecto: ['venía', 'venías', 'venía', 'veníamos', 'veníais', 'venían'],
    futuro: ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendréis', 'vendrán'] },
  { inf: 'ver', zh: '看见', tag: '不规则', part: 'visto',
    presente: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    preterito: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    imperfecto: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
    futuro: ['veré', 'verás', 'verá', 'veremos', 'veréis', 'verán'] },
  { inf: 'dar', zh: '给', tag: '不规则', part: 'dado',
    presente: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    preterito: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    imperfecto: ['daba', 'dabas', 'daba', 'dábamos', 'dabais', 'daban'],
    futuro: ['daré', 'darás', 'dará', 'daremos', 'daréis', 'darán'] },
  { inf: 'decir', zh: '说（内容）', tag: '不规则', part: 'dicho',
    presente: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
    preterito: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'],
    imperfecto: ['decía', 'decías', 'decía', 'decíamos', 'decíais', 'decían'],
    futuro: ['diré', 'dirás', 'dirá', 'diremos', 'diréis', 'dirán'] },
  { inf: 'saber', zh: '知道 / 会', tag: '不规则', part: 'sabido',
    presente: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'],
    preterito: ['supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'],
    imperfecto: ['sabía', 'sabías', 'sabía', 'sabíamos', 'sabíais', 'sabían'],
    futuro: ['sabré', 'sabrás', 'sabrá', 'sabremos', 'sabréis', 'sabrán'] }
);

// ---------- 新增拼句 ----------
SENTENCES.push(
  { es: 'Ayer comí paella con mis amigos', zh: '昨天我和朋友们吃了海鲜饭。' },
  { es: 'El año pasado fui a España', zh: '去年我去了西班牙。' },
  { es: 'Cuando era niño vivía en Shanghái', zh: '小时候我住在上海。' },
  { es: 'He estudiado español durante dos meses', zh: '我已经学了两个月西班牙语。' },
  { es: 'Voy a viajar a México el próximo mes', zh: '下个月我要去墨西哥旅行。' },
  { es: 'Estoy aprendiendo español ahora', zh: '我现在正在学西班牙语。' },
  { es: 'Me levanto a las siete de la mañana', zh: '我早上七点起床。' },
  { es: '¿Puedes hablar más despacio?', zh: '你能说慢一点吗？' },
  { es: 'Quiero comprar un regalo para mi madre', zh: '我想给妈妈买一份礼物。' },
  { es: 'No he visto esa película', zh: '我没看过那部电影。' },
  { es: 'Mi hermana trabaja en un hospital', zh: '我姐姐在一家医院工作。' },
  { es: 'Hace mucho frío en invierno', zh: '冬天非常冷。' },
  { es: 'Te llamo mañana por la tarde', zh: '我明天下午给你打电话。' },
  { es: '¿A qué hora empieza la clase?', zh: '课几点开始？' },
  { es: 'Los zapatos son demasiado caros', zh: '这双鞋太贵了。' },
  { es: 'Nos vemos en la plaza a las cinco', zh: '我们五点在广场见。' }
);

// ---------- 口语表达：情景问答 ----------
// accept 中的关键词按"去重音小写"匹配，命中任意一个即视为回答有效
const QA_ITEMS = [
  { q: '¿Cómo te llamas?', zh: '你叫什么名字？', accept: ['me llamo', 'soy'], sample: 'Me llamo Ana.', sampleZh: '我叫安娜。' },
  { q: '¿De dónde eres?', zh: '你来自哪里？', accept: ['soy de'], sample: 'Soy de China.', sampleZh: '我来自中国。' },
  { q: '¿Cuántos años tienes?', zh: '你多大了？', accept: ['tengo'], sample: 'Tengo veinticinco años.', sampleZh: '我二十五岁。' },
  { q: '¿Dónde vives?', zh: '你住在哪里？', accept: ['vivo en'], sample: 'Vivo en Pekín.', sampleZh: '我住在北京。' },
  { q: '¿Qué te gusta hacer?', zh: '你喜欢做什么？', accept: ['me gusta'], sample: 'Me gusta leer y viajar.', sampleZh: '我喜欢阅读和旅行。' },
  { q: '¿Cómo estás hoy?', zh: '你今天怎么样？', accept: ['estoy', 'bien'], sample: 'Estoy muy bien, gracias.', sampleZh: '我很好，谢谢。' },
  { q: '¿Qué vas a hacer mañana?', zh: '你明天要做什么？', accept: ['voy a'], sample: 'Mañana voy a trabajar.', sampleZh: '明天我要上班。' },
  { q: '¿Qué hiciste ayer?', zh: '你昨天做了什么？', accept: ['fui', 'comi', 'estudie', 'trabaje', 'vi ', 'hice', 'lei'], sample: 'Ayer estudié español en casa.', sampleZh: '昨天我在家学了西班牙语。' },
  { q: '¿A qué te dedicas?', zh: '你是做什么工作的？', accept: ['soy', 'trabajo'], sample: 'Soy abogada. Trabajo en Pekín.', sampleZh: '我是律师，在北京工作。' },
  { q: '¿Qué tiempo hace hoy?', zh: '今天天气怎么样？', accept: ['hace', 'esta lloviendo', 'llueve'], sample: 'Hoy hace buen tiempo.', sampleZh: '今天天气很好。' },
];

// ---------- 口语表达：看中文说西语 ----------
const SPEAK_TRANSLATE = [
  { zh: '我很好，谢谢。', es: 'Estoy muy bien, gracias.' },
  { zh: '我想要一杯水。', es: 'Quiero un vaso de agua.' },
  { zh: '我喜欢西班牙音乐。', es: 'Me gusta la música española.' },
  { zh: '明天我们去海滩。', es: 'Mañana vamos a la playa.' },
  { zh: '我不明白。', es: 'No entiendo.' },
  { zh: '请你再说一遍。', es: '¿Puedes repetir, por favor?' },
  { zh: '昨天我在家吃的饭。', es: 'Ayer comí en casa.' },
  { zh: '这个多少钱？', es: '¿Cuánto cuesta esto?' },
  { zh: '今天天气很热。', es: 'Hoy hace mucho calor.' },
  { zh: '我正在学习西班牙语。', es: 'Estoy aprendiendo español.' },
];

// ---------- 口语表达：自由表达话题 ----------
const SPEAK_TOPICS = [
  { t: 'Preséntate', zh: '自我介绍', min: 12,
    ideas: ['Me llamo...', 'Soy de...', 'Tengo ... años', 'Me gusta...'] },
  { t: 'Mi familia', zh: '介绍你的家庭', min: 12,
    ideas: ['Tengo un hermano / una hermana', 'Mi madre se llama...', 'Mi padre es... (职业)', 'Somos ... personas'] },
  { t: 'Mi día', zh: '说说你的一天', min: 15,
    ideas: ['Me levanto a las...', 'Por la mañana...', 'Como a las...', 'Por la noche...'] },
  { t: 'Mis aficiones', zh: '你的爱好', min: 12,
    ideas: ['Me gusta jugar al fútbol', 'Los fines de semana...', 'También me gusta...'] },
  { t: 'Mi ciudad', zh: '介绍你的城市', min: 12,
    ideas: ['Vivo en...', 'Es una ciudad grande / bonita', 'Hay muchos parques y...'] },
  { t: 'Ayer', zh: '昨天做了什么（用过去时）', min: 12,
    ideas: ['Ayer fui a...', 'Comí...', 'Por la noche vi...'] },
  { t: 'Mis planes', zh: '你的计划（用将来表达）', min: 12,
    ideas: ['Mañana voy a...', 'El próximo año quiero...', 'Voy a estudiar...'] },
  { t: 'Mi comida favorita', zh: '你最爱的食物', min: 12,
    ideas: ['Mi comida favorita es...', 'Es muy rica', 'La como con frecuencia'] },
];

// ---------- 小作文 ----------
// must 中的 re 是正则源码，检查时作用于"去重音小写"后的文本（ñ 保留）
const WRITING_PROMPTS = [
  {
    id: 'w1', icon: '🙋', title: '自我介绍', es: 'Mi presentación', minWords: 30,
    must: [
      { label: '用 Me llamo... 介绍名字', re: 'me llamo' },
      { label: '用 Soy de... 说来自哪里', re: 'soy de' },
      { label: '用 Tengo ... años 说年龄', re: 'tengo .{0,30}años' },
      { label: '用 Me gusta... 说爱好', re: 'me gusta' },
    ],
    helps: [
      { es: 'Vivo en... con...', zh: '我和…住在…' },
      { es: 'Soy (profesión).', zh: '我是（职业）。' },
      { es: 'Estudio español porque...', zh: '我学西语是因为…' },
    ],
    sample: { es: '¡Hola! Me llamo Li Ming y soy de China. Tengo veinticinco años. Vivo en Pekín con mi familia. Soy abogado y trabajo en una empresa grande. Me gusta leer, viajar y aprender idiomas. Ahora estudio español porque quiero viajar a España el próximo año.',
      zh: '大家好！我叫李明，来自中国。我二十五岁，和家人住在北京。我是律师，在一家大公司工作。我喜欢阅读、旅行和学语言。现在我在学西班牙语，因为明年想去西班牙旅行。' },
  },
  {
    id: 'w2', icon: '👨‍👩‍👧', title: '我的家庭', es: 'Mi familia', minWords: 30,
    must: [
      { label: '用 Tengo... 说有几位家人', re: 'tengo|somos' },
      { label: '用 se llama 介绍某位家人的名字', re: 'se llama' },
      { label: '用 es 描述家人（职业/性格）', re: '\\bes\\b' },
      { label: '出现所有格 mi / mis', re: '\\bmis?\\b' },
    ],
    helps: [
      { es: 'Somos cuatro: ...', zh: '我们家四口人：…' },
      { es: 'Mi padre es médico.', zh: '我爸爸是医生。' },
      { es: 'Quiero mucho a mi familia.', zh: '我很爱我的家人。' },
    ],
    sample: { es: 'Mi familia no es muy grande. Somos cuatro: mi padre, mi madre, mi hermana y yo. Mi padre se llama Wang y es médico. Mi madre es profesora y cocina muy bien. Mi hermana tiene dieciocho años y estudia en la universidad. Los domingos comemos juntos y hablamos mucho. Quiero mucho a mi familia.',
      zh: '我家不算大，一共四口人：爸爸、妈妈、妹妹和我。爸爸姓王，是医生。妈妈是老师，做饭很好吃。妹妹十八岁，在上大学。每周日我们一起吃饭聊天。我很爱我的家人。' },
  },
  {
    id: 'w3', icon: '⏰', title: '我的一天', es: 'Mi día', minWords: 35,
    must: [
      { label: '用自复动词 Me levanto...', re: 'me levanto' },
      { label: '用 a las... 说具体时刻', re: 'a las?\\b' },
      { label: '用 por la mañana/tarde/noche', re: 'por la (mañana|tarde|noche)' },
      { label: '至少提到吃饭（como/desayuno/ceno）', re: '\\bcomo\\b|desayuno|ceno' },
    ],
    helps: [
      { es: 'Primero..., después..., luego...', zh: '首先…然后…接着…' },
      { es: 'Voy al trabajo en metro.', zh: '我坐地铁上班。' },
      { es: 'Me acuesto a las once.', zh: '我十一点睡觉。' },
    ],
    sample: { es: 'Me levanto a las siete de la mañana. Primero me ducho y desayuno café con pan. Voy al trabajo en metro. Por la mañana trabajo en la oficina y a las doce como con mis compañeros. Por la tarde tengo reuniones. Vuelvo a casa a las siete, ceno con mi familia y veo la televisión. Me acuesto a las once.',
      zh: '我早上七点起床。先洗澡，然后喝咖啡吃面包当早餐。我坐地铁上班。上午在办公室工作，十二点和同事吃午饭。下午开会。晚上七点回家，和家人吃晚饭、看电视。十一点睡觉。' },
  },
  {
    id: 'w4', icon: '🥘', title: '我最爱的食物', es: 'Mi comida favorita', minWords: 30,
    must: [
      { label: '用 Mi ... favorita es...', re: 'favorit' },
      { label: '用 Me gusta(n)...', re: 'me gustan?' },
      { label: '用 rico/delicioso 形容味道', re: 'ric[oa]|delicios[oa]' },
      { label: '说吃的频率或场合（como...）', re: '\\bcomo\\b|bebo' },
    ],
    helps: [
      { es: 'Lleva arroz, huevo y verduras.', zh: '它有米饭、鸡蛋和蔬菜。' },
      { es: 'Lo como una vez a la semana.', zh: '我一周吃一次。' },
      { es: 'No me gusta la comida picante.', zh: '我不喜欢辣的食物。' },
    ],
    sample: { es: 'Mi comida favorita es el arroz frito de mi madre. Es muy rico y fácil de hacer. Lleva arroz, huevo, carne y verduras. Lo como una vez a la semana. También me gusta mucho la paella española. En verano bebo té frío y como mucha fruta. No me gusta la comida muy picante.',
      zh: '我最爱的食物是妈妈做的炒饭，非常好吃又容易做，有米饭、鸡蛋、肉和蔬菜。我一周吃一次。我也很喜欢西班牙海鲜饭。夏天我喝冰茶、吃很多水果。我不喜欢太辣的食物。' },
  },
  {
    id: 'w5', icon: '🏙️', title: '我的城市', es: 'Mi ciudad', minWords: 30,
    must: [
      { label: '用 Vivo en... 说住在哪', re: 'vivo en' },
      { label: '用 hay 说城市里有什么', re: '\\bhay\\b' },
      { label: '用 está 说某地的位置', re: 'esta[ n]|\\besta\\b' },
      { label: '用 es 描述城市（大/漂亮/古老）', re: '\\bes\\b' },
    ],
    helps: [
      { es: 'Es una ciudad grande y antigua.', zh: '这是一座又大又古老的城市。' },
      { es: 'Mi lugar favorito es...', zh: '我最喜欢的地方是…' },
      { es: 'Me gusta vivir aquí.', zh: '我喜欢住在这里。' },
    ],
    sample: { es: 'Vivo en Pekín, la capital de China. Es una ciudad muy grande y antigua. Hay muchos parques, museos y restaurantes. Mi lugar favorito es el Parque Beihai, que está en el centro de la ciudad. En primavera hace buen tiempo y muchas personas pasean allí. La comida de mi ciudad es deliciosa. Me gusta vivir aquí.',
      zh: '我住在中国的首都北京。这是一座又大又古老的城市，有很多公园、博物馆和餐厅。我最喜欢的地方是北海公园，它在市中心。春天天气很好，很多人在那里散步。我们这里的食物很好吃。我喜欢住在这里。' },
  },
  {
    id: 'w6', icon: '📅', title: '上个周末（练过去时）', es: 'El fin de semana pasado', minWords: 35,
    must: [
      { label: '用 fui（我去了）', re: '\\bfui\\b' },
      { label: '用简单过去时动词（comí/vi/leí…）', re: 'comi\\b|\\bvi\\b|lei\\b|corri\\b|llame\\b|hable\\b|compre\\b' },
      { label: '用连接词 primero/después/luego', re: 'primero|despues|luego' },
      { label: '出现 pasado（过去的）', re: 'pasado' },
    ],
    helps: [
      { es: 'Fue un fin de semana muy tranquilo.', zh: '这是一个很平静的周末。' },
      { es: 'Lo pasamos muy bien.', zh: '我们玩得很开心。' },
      { es: 'Estaba muy rico.', zh: '（食物）非常好吃。' },
    ],
    sample: { es: 'El fin de semana pasado fui al cine con mis amigos. Vimos una película española muy interesante. Después comí paella en un restaurante nuevo. Estaba muy rica. El domingo por la mañana corrí en el parque y luego leí un libro en casa. Por la noche llamé a mis padres y hablamos una hora. Fue un fin de semana muy tranquilo.',
      zh: '上周末我和朋友们去看了电影，看了一部很有意思的西班牙电影。之后我在一家新餐厅吃了海鲜饭，非常好吃。周日早上我在公园跑步，然后在家看书。晚上给父母打了电话，聊了一个小时。这是一个很平静的周末。' },
  },
  {
    id: 'w7', icon: '🗓️', title: '我的计划（练将来表达）', es: 'Mis planes', minWords: 30,
    must: [
      { label: '用 voy a + 动词原形', re: 'voy a' },
      { label: '用 el próximo / la próxima', re: 'proxim[oa]' },
      { label: '用 quiero + 动词原形', re: 'quiero' },
      { label: '至少写三个不同的计划', re: '.' },
    ],
    helps: [
      { es: 'El próximo mes voy a...', zh: '下个月我要…' },
      { es: 'Quiero visitar España.', zh: '我想去西班牙。' },
      { es: 'Voy a practicar todos los días.', zh: '我要每天练习。' },
    ],
    sample: { es: 'Tengo muchos planes. Mañana voy a estudiar español dos horas. El próximo mes voy a viajar a Shanghái por trabajo. El próximo año quiero visitar España y México. Voy a hablar español con la gente allí. También quiero aprender a cocinar comida española. Voy a practicar todos los días porque quiero hablar muy bien.',
      zh: '我有很多计划。明天我要学两小时西班牙语。下个月我要去上海出差。明年我想去西班牙和墨西哥，要和当地人说西班牙语。我还想学做西班牙菜。我要每天练习，因为我想说得非常好。' },
  },
  {
    id: 'w8', icon: '🤝', title: '我最好的朋友', es: 'Mi mejor amigo/amiga', minWords: 30,
    must: [
      { label: '用 se llama 介绍名字', re: 'se llama' },
      { label: '用 es + 形容词描述性格', re: '\\bes\\b' },
      { label: '用 nos gusta / juntos 说一起做的事', re: 'nos gusta|junt[oa]s' },
      { label: '出现 amigo 或 amiga', re: 'amig[oa]' },
    ],
    helps: [
      { es: 'Es muy simpática e inteligente.', zh: '她很友善也很聪明。' },
      { es: 'Hablamos todos los días.', zh: '我们每天都聊天。' },
      { es: 'Es como una hermana para mí.', zh: '她对我来说就像姐妹。' },
    ],
    sample: { es: 'Mi mejor amiga se llama Ana. Es de Shanghái pero ahora vive en Pekín. Es muy simpática e inteligente. Trabaja en un hospital. Nos gusta ver películas y viajar juntas. El año pasado fuimos a Yunnan y lo pasamos muy bien. Hablamos todos los días. Es como una hermana para mí.',
      zh: '我最好的朋友叫安娜。她是上海人，现在住在北京。她很友善也很聪明，在一家医院工作。我们喜欢一起看电影和旅行。去年我们去了云南，玩得很开心。我们每天都聊天。她对我来说就像亲姐妹。' },
  },
];

// ---------- 等级与成就扩展 ----------
LEVELS.push(
  { xp: 2400, name: '流利在望 A2' },
  { xp: 3200, name: '西语大师' }
);

const _lessonAll = ACHIEVEMENTS.find(a => a.id === 'lessonAll');
if (_lessonAll) _lessonAll.desc = '完成全部 ' + LESSONS.length + ' 节语法课';

ACHIEVEMENTS.push(
  { id: 'lesson12', icon: '📘', name: '语法进阶', desc: '完成 12 节语法课', cond: s => s.lessonsDone.length >= 12 },
  { id: 'essay3', icon: '✍️', name: '小作家', desc: '通过 3 篇小作文', cond: s => (s.essaysDone || []).length >= 3 },
  { id: 'qa15', icon: '💬', name: '对答如流', desc: '情景问答通过 15 次', cond: s => (s.qaCount || 0) >= 15 },
  { id: 'review40', icon: '🗃️', name: '记忆管家', desc: '记忆库复习 40 次', cond: s => (s.reviewCount || 0) >= 40 },
  { id: 'streak14', icon: '🏔️', name: '半月登山', desc: '连续学习 14 天', cond: s => s.streak >= 14 }
);
