// ============ 现西拓展包：经典教材句型 · 口语对话 · 词汇 · 语法 ============
// 例句取材《现代西班牙语》经典课文句型，在 data2.js 之后加载

// ---------- 新增词汇包（6 个，现西第一册主题） ----------
DECKS.push(
  {
    id: 'nation', name: '国家与国籍', icon: '🌍',
    words: [
      { es: 'el país', zh: '国家' },
      { es: 'China', zh: '中国', ex: 'Soy de China.', exZh: '我来自中国。' },
      { es: 'chino', zh: '中国的 / 中国人 / 中文' },
      { es: 'España', zh: '西班牙' },
      { es: 'el español', zh: '西班牙语 / 西班牙人' },
      { es: 'Cuba', zh: '古巴' },
      { es: 'cubano', zh: '古巴的 / 古巴人', ex: 'Paco es cubano.', exZh: '帕科是古巴人。' },
      { es: 'México', zh: '墨西哥' },
      { es: 'mexicano', zh: '墨西哥的 / 墨西哥人' },
      { es: 'americano', zh: '美洲的 / 美国人' },
      { es: 'el extranjero', zh: '外国人 / 国外' },
      { es: 'el idioma', zh: '语言' },
      { es: 'la nacionalidad', zh: '国籍' },
      { es: 'el mundo', zh: '世界' },
    ],
  },
  {
    id: 'job', name: '职业身份', icon: '👔',
    words: [
      { es: 'la enfermera', zh: '护士', ex: 'Ella es enfermera.', exZh: '她是护士。' },
      { es: 'el abogado', zh: '律师' },
      { es: 'el ingeniero', zh: '工程师' },
      { es: 'el periodista', zh: '记者' },
      { es: 'el cocinero', zh: '厨师' },
      { es: 'el camarero', zh: '服务员' },
      { es: 'el policía', zh: '警察' },
      { es: 'el cantante', zh: '歌手' },
      { es: 'el escritor', zh: '作家' },
      { es: 'el actor', zh: '演员' },
      { es: 'el conductor', zh: '司机' },
      { es: 'el vendedor', zh: '售货员' },
      { es: 'el jugador', zh: '运动员 / 选手' },
      { es: 'el director', zh: '经理 / 主任 / 导演' },
    ],
  },
  {
    id: 'house', name: '房屋与家居', icon: '🛋️',
    words: [
      { es: 'el piso', zh: '公寓 / 楼层' },
      { es: 'la habitación', zh: '房间' },
      { es: 'el dormitorio', zh: '卧室' },
      { es: 'la cocina', zh: '厨房' },
      { es: 'el cuarto de baño', zh: '浴室' },
      { es: 'el salón', zh: '客厅' },
      { es: 'la puerta', zh: '门' },
      { es: 'la ventana', zh: '窗户' },
      { es: 'la cama', zh: '床' },
      { es: 'la lámpara', zh: '台灯' },
      { es: 'el espejo', zh: '镜子' },
      { es: 'limpio', zh: '干净的', ex: 'La casa es pequeña pero limpia.', exZh: '房子不大但很干净。' },
      { es: 'sucio', zh: '脏的' },
      { es: 'la llave', zh: '钥匙' },
    ],
  },
  {
    id: 'school', name: '大学与课堂', icon: '🏫',
    words: [
      { es: 'la facultad', zh: '系 / 学院', ex: 'Voy a la facultad.', exZh: '我去学院。' },
      { es: 'el aula', zh: '教室' },
      { es: 'la pizarra', zh: '黑板' },
      { es: 'el bolígrafo', zh: '圆珠笔' },
      { es: 'el cuaderno', zh: '笔记本' },
      { es: 'el diccionario', zh: '词典' },
      { es: 'la pregunta', zh: '问题' },
      { es: 'la respuesta', zh: '回答 / 答案' },
      { es: 'la palabra', zh: '单词 / 话语' },
      { es: 'la frase', zh: '句子' },
      { es: 'enseñar', zh: '教 / 教授', ex: 'La profesora nos enseña español.', exZh: '老师教我们西班牙语。' },
      { es: 'aprender', zh: '学 / 学会' },
      { es: 'preguntar', zh: '提问' },
      { es: 'contestar', zh: '回答' },
    ],
  },
  {
    id: 'routine', name: '日常作息', icon: '🌅',
    words: [
      { es: 'despertarse', zh: '醒来' },
      { es: 'levantarse', zh: '起床', ex: 'Me levanto a las seis y media.', exZh: '我六点半起床。' },
      { es: 'ducharse', zh: '淋浴' },
      { es: 'vestirse', zh: '穿衣服' },
      { es: 'acostarse', zh: '上床睡觉' },
      { es: 'desayunar', zh: '吃早饭' },
      { es: 'almorzar', zh: '吃午饭' },
      { es: 'cenar', zh: '吃晚饭' },
      { es: 'descansar', zh: '休息' },
      { es: 'pasear', zh: '散步' },
      { es: 'volver', zh: '返回' },
      { es: 'dormir', zh: '睡觉' },
      { es: 'temprano', zh: '早（副词）' },
      { es: 'tarde', zh: '晚 / 迟（副词）' },
    ],
  },
  {
    id: 'adv', name: '高频小词', icon: '✨',
    words: [
      { es: 'también', zh: '也', ex: 'Yo también.', exZh: '我也是。' },
      { es: 'tampoco', zh: '也不' },
      { es: 'siempre', zh: '总是' },
      { es: 'nunca', zh: '从不' },
      { es: 'a veces', zh: '有时' },
      { es: 'muy', zh: '很（+形容词）' },
      { es: 'mucho', zh: '很多 / 非常' },
      { es: 'poco', zh: '少 / 一点' },
      { es: 'bastante', zh: '相当 / 足够' },
      { es: 'demasiado', zh: '太 / 过分' },
      { es: 'ya', zh: '已经' },
      { es: 'todavía', zh: '还 / 仍然' },
      { es: 'aquí', zh: '这里' },
      { es: 'allí', zh: '那里' },
    ],
  }
);

// ---------- 新增语法课（第 25~32 课，现西第一册核心语法） ----------
LESSONS.push(
  {
    id: 'l25', title: '钟点表达：现在几点了？', icon: '🕘',
    sections: [
      { h: '问时间与答时间', body: '<b>¿Qué hora es?</b>（几点了？）一点用单数 <b>Es la una</b>，两点及以后用复数 <b>Son las dos/tres…</b>',
        examples: [ { es: '¿Qué hora es? —Son las nueve.', zh: '几点了？——九点。' }, { es: 'Es la una y diez.', zh: '一点十分。' } ] },
      { h: '一刻、半点与"在几点"', body: '<b>y cuarto</b>（一刻）、<b>y media</b>（半）、<b>menos cuarto</b>（差一刻）。"在几点做某事"用 <b>a las…</b>：Tengo clase a las diez.',
        examples: [ { es: 'Son las nueve y media.', zh: '九点半。' }, { es: 'La clase empieza a las ocho menos cuarto.', zh: '课七点四十五开始。' } ] },
    ],
    quiz: [
      { q: '"现在一点"怎么说？', opts: ['Es la una.', 'Son las una.', 'Es una.'], a: 0, why: '一点用单数 Es la una。' },
      { q: '"九点半"是？', opts: ['las nueve y media', 'las nueve y cuarto', 'las nueve menos media'], a: 0 },
      { q: '"我十点有课"用？', opts: ['a las diez', 'en las diez', 'son las diez'], a: 0, why: '"在几点"用 a las。' },
    ],
  },
  {
    id: 'l26', title: '星期、月份与日期', icon: '📆',
    sections: [
      { h: '星期', body: '<b>¿Qué día es hoy?</b> —Hoy es lunes. 星期不大写：lunes, martes, miércoles, jueves, viernes, sábado, domingo。"在星期一"= <b>el lunes</b>（不用 en！）',
        examples: [ { es: 'Hoy es viernes.', zh: '今天星期五。' }, { es: 'El sábado vamos de excursión.', zh: '星期六我们去郊游。' } ] },
      { h: '日期', body: '<b>el + 数字 + de + 月份</b>：el quince de marzo（3月15日）。月份：enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre。',
        examples: [ { es: 'Hoy es el quince de marzo.', zh: '今天是3月15日。' }, { es: 'Mi cumpleaños es el dos de mayo.', zh: '我的生日是5月2日。' } ] },
    ],
    quiz: [
      { q: '"今天星期几？"怎么问？', opts: ['¿Qué día es hoy?', '¿Qué hora es hoy?', '¿Cuánto es hoy?'], a: 0 },
      { q: '"在星期五"怎么说？', opts: ['el viernes', 'en viernes', 'a viernes'], a: 0, why: '星期前用定冠词 el，不用 en。' },
      { q: '"3月15日"是？', opts: ['el quince de marzo', 'marzo el quince', 'quince marzo'], a: 0 },
    ],
  },
  {
    id: 'l27', title: '必须与应该：tener que / hay que / deber', icon: '📌',
    sections: [
      { h: '两种"必须"', body: '<b>tener que + 原形</b>＝（某人）必须：Tengo que estudiar. <b>hay que + 原形</b>＝泛指人人都得：Hay que comer bien.',
        examples: [ { es: 'Tengo que trabajar esta noche.', zh: '今晚我必须工作。' }, { es: 'Hay que practicar todos los días.', zh: '（人人都）得每天练习。' } ] },
      { h: '"应该"', body: '<b>deber + 原形</b>＝应该（建议、义务）：Debes descansar.（你应该休息）',
        examples: [ { es: 'Debes descansar más.', zh: '你应该多休息。' }, { es: 'No debemos llegar tarde.', zh: '我们不应该迟到。' } ] },
    ],
    quiz: [
      { q: '"我必须工作"怎么说？', opts: ['Tengo que trabajar.', 'Hay que trabajar yo.', 'Tengo trabajar.'], a: 0, why: 'tener que + 动词原形。' },
      { q: '泛指"人人都得…"用？', opts: ['tener que', 'hay que', 'ir a'], a: 1 },
      { q: '"你应该休息"是？', opts: ['Debes descansar.', 'Deber descansas.', 'Tienes descansar.'], a: 0 },
    ],
  },
  {
    id: 'l28', title: 'saber 与 conocer：两种"知道"', icon: '🧠',
    sections: [
      { h: 'saber：知道信息 / 会技能', body: '<b>saber + 信息/动词原形</b>：Sé nadar.（我会游泳）No sé su nombre.（我不知道他的名字）注意 yo 变位是 <b>sé</b>。',
        examples: [ { es: 'Sé hablar un poco de español.', zh: '我会说一点西班牙语。' }, { es: '¿Sabes dónde está el aula?', zh: '你知道教室在哪吗？' } ] },
      { h: 'conocer：认识人 / 熟悉地方', body: '<b>conocer</b> 接<b>人</b>要加 <b>a</b>：Conozco a Ana. 接地方直接接：Conozco Madrid.（我去过/熟悉马德里）',
        examples: [ { es: 'Conozco a tu hermana.', zh: '我认识你姐姐。' }, { es: '¿Conoces España?', zh: '你去过西班牙吗？' } ] },
    ],
    quiz: [
      { q: '"我会游泳"怎么说？', opts: ['Sé nadar.', 'Conozco nadar.', 'Sé a nadar.'], a: 0, why: '技能用 saber + 原形。' },
      { q: '"我认识安娜"是？', opts: ['Conozco a Ana.', 'Sé a Ana.', 'Conozco Ana.'], a: 0, why: 'conocer 接人要加 a。' },
      { q: '"熟悉/去过某地"用？', opts: ['saber', 'conocer', 'poder'], a: 1 },
    ],
  },
  {
    id: 'l29', title: '比较级与最高级', icon: '⚖️',
    sections: [
      { h: '三种比较', body: '<b>más … que</b>（比…更）、<b>menos … que</b>（比…更不）、<b>tan … como</b>（和…一样）。',
        examples: [ { es: 'Esta casa es más grande que esa.', zh: '这房子比那房子大。' }, { es: 'Ana es tan alta como yo.', zh: '安娜和我一样高。' } ] },
      { h: '最高级与不规则', body: '<b>el/la más … de</b>：Es el más alto de la clase.（他是班里最高的）不规则：<b>mejor</b>(更好) <b>peor</b>(更差) <b>mayor</b>(更年长) <b>menor</b>(更年幼)。',
        examples: [ { es: 'Este restaurante es el mejor de la ciudad.', zh: '这家餐厅是全城最好的。' }, { es: 'Mi hermano mayor vive en Madrid.', zh: '我哥哥住在马德里。' } ] },
    ],
    quiz: [
      { q: '"比那个更大"是？', opts: ['más grande que', 'muy grande que', 'grande más que'], a: 0 },
      { q: '"和…一样漂亮"是？', opts: ['tan bonita como', 'más bonita como', 'tan bonita que'], a: 0 },
      { q: 'bueno（好）的比较级是？', opts: ['más bueno', 'mejor', 'buenísimo'], a: 1 },
    ],
  },
  {
    id: 'l30', title: 'muy 与 mucho：最常错的一对', icon: '🎚️',
    sections: [
      { h: 'muy + 形容词/副词', body: '<b>muy</b> 只能放在形容词或副词前：muy alto, muy bien。不能单独回答（¿Te gusta? —*Muy ✗）。',
        examples: [ { es: 'La paella está muy rica.', zh: '海鲜饭非常好吃。' }, { es: 'Hablas muy bien.', zh: '你说得很好。' } ] },
      { h: 'mucho 的用法', body: '<b>mucho + 名词</b>（要变性数）：muchos libros, mucha agua。动词后单独用：Me gusta <b>mucho</b>. Trabaja <b>mucho</b>.',
        examples: [ { es: 'Tengo muchos amigos.', zh: '我有很多朋友。' }, { es: 'Me gusta mucho la música.', zh: '我非常喜欢音乐。' } ] },
    ],
    quiz: [
      { q: '"很好"怎么说？', opts: ['muy bien', 'mucho bien', 'muy bueno mucho'], a: 0 },
      { q: '"我非常喜欢"是？', opts: ['Me gusta mucho.', 'Me gusta muy.', 'Me muy gusta.'], a: 0, why: '动词后用 mucho，muy 不能单独用。' },
      { q: '"很多书"是？', opts: ['muchos libros', 'muy libros', 'mucho libros'], a: 0, why: 'mucho 要跟名词变性数。' },
    ],
  },
  {
    id: 'l31', title: '频率副词与双重否定', icon: '🔁',
    sections: [
      { h: '从"总是"到"从不"', body: '<b>siempre</b>(总是) → <b>a menudo</b>(经常) → <b>a veces</b>(有时) → <b>casi nunca</b>(几乎从不) → <b>nunca</b>(从不)。',
        examples: [ { es: 'Siempre desayuno en casa.', zh: '我总是在家吃早饭。' }, { es: 'A veces ceno fuera.', zh: '我有时在外面吃晚饭。' } ] },
      { h: '西语双重否定合法！', body: 'nunca 放动词后要配 no：<b>No voy nunca al cine. = Nunca voy al cine.</b> 两种都对，双重否定不是错句。tampoco（也不）同理。',
        examples: [ { es: 'No llego nunca tarde.', zh: '我从不迟到。' }, { es: 'Yo tampoco lo sé.', zh: '我也不知道。' } ] },
    ],
    quiz: [
      { q: '"我总是在家吃早饭"是？', opts: ['Siempre desayuno en casa.', 'Desayuno siempre casa.', 'Muy desayuno en casa.'], a: 0 },
      { q: '"No voy nunca al cine."这句话？', opts: ['是正确的双重否定', '是语法错误', '意思是"我总去电影院"'], a: 0, why: '西语双重否定合法。' },
      { q: '"有时"是？', opts: ['a veces', 'siempre', 'todavía'], a: 0 },
    ],
  },
  {
    id: 'l32', title: '感叹句：¡Qué bonito!', icon: '🎉',
    sections: [
      { h: '¡Qué + 形容词/名词!', body: '最常用的感叹结构：<b>¡Qué bonito!</b>（多漂亮啊）<b>¡Qué lástima!</b>（真遗憾）<b>¡Qué calor!</b>（好热啊）',
        examples: [ { es: '¡Qué bien!', zh: '太好了！' }, { es: '¡Qué lástima!', zh: '真遗憾！' } ] },
      { h: '加强版', body: '<b>¡Qué + 名词 + tan/más + 形容词!</b>：¡Qué casa tan bonita!（多漂亮的房子啊！）',
        examples: [ { es: '¡Qué casa tan bonita!', zh: '多漂亮的房子啊！' }, { es: '¡Qué día más bueno!', zh: '天气真好啊！' } ] },
    ],
    quiz: [
      { q: '"多漂亮啊！"怎么说？', opts: ['¡Qué bonito!', '¡Muy bonito qué!', '¡Cómo bonito!'], a: 0 },
      { q: '"真遗憾！"是？', opts: ['¡Qué lástima!', '¡Qué bien!', '¡Qué calor!'], a: 0 },
      { q: '"多漂亮的房子啊！"是？', opts: ['¡Qué casa tan bonita!', '¡Qué tan casa bonita!', '¡Casa qué bonita!'], a: 0 },
    ],
  }
);

// ---------- 新增拼句（现西经典句型） ----------
SENTENCES.push(
  { es: 'Son las nueve y media de la mañana', zh: '现在是早上九点半。' },
  { es: '¿Cuántas personas hay en tu familia?', zh: '你家有几口人？', fixed: true },
  { es: 'Mi padre trabaja en un hospital', zh: '我父亲在一家医院工作。' },
  { es: 'Todos los días me levanto a las seis', zh: '我每天六点起床。' },
  { es: 'Tengo que estudiar esta noche', zh: '今晚我必须学习。' },
  { es: 'Esta habitación es más grande que aquella', zh: '这间房间比那间大。' },
  { es: '¿Cómo se dice esto en español?', zh: '这个用西班牙语怎么说？', fixed: true },
  { es: 'Sé hablar un poco de español', zh: '我会说一点西班牙语。' },
  { es: 'El aula está muy limpia', zh: '教室非常干净。' },
  { es: 'Nunca llego tarde a clase', zh: '我上课从不迟到。' },
  { es: 'La profesora nos enseña español', zh: '老师教我们西班牙语。' },
  { es: 'Después de cenar doy un paseo', zh: '晚饭后我去散步。' }
);

// ---------- 口语拓展：新增跟读场景（现西句型） ----------
SPEAK_SCENES.push(
  {
    id: 'class', name: '课堂用语（现西）', icon: '🏫',
    phrases: [
      { es: 'No entiendo esta palabra.', zh: '我不懂这个单词。' },
      { es: '¿Puede repetir, por favor?', zh: '您能重复一遍吗？' },
      { es: '¿Cómo se dice esto en español?', zh: '这个用西班牙语怎么说？' },
      { es: '¿Qué significa esta frase?', zh: '这个句子是什么意思？' },
      { es: 'Tengo una pregunta.', zh: '我有一个问题。' },
      { es: 'Más despacio, por favor.', zh: '请慢一点。' },
    ],
  },
  {
    id: 'intro', name: '身份与介绍（现西）', icon: '🪪',
    phrases: [
      { es: '¿Quién es él? —Es mi profesor.', zh: '他是谁？——他是我的老师。' },
      { es: '¿Qué es esto? —Es un diccionario.', zh: '这是什么？——这是一本词典。' },
      { es: 'Te presento a mi amiga Ana.', zh: '给你介绍我的朋友安娜。' },
      { es: 'Encantado de conocerte.', zh: '很高兴认识你。' },
      { es: 'Somos compañeros de clase.', zh: '我们是同班同学。' },
      { es: '¿Cuál es tu número de teléfono?', zh: '你的电话号码是多少？' },
    ],
  },
  {
    id: 'react', name: '寒暄与回应', icon: '💬',
    phrases: [
      { es: '¡Qué bien!', zh: '太好了！' },
      { es: '¡Qué lástima!', zh: '真遗憾！' },
      { es: 'No te preocupes.', zh: '别担心。' },
      { es: 'De acuerdo.', zh: '好的 / 同意。' },
      { es: '¡Date prisa!', zh: '快点！' },
      { es: 'Lo siento mucho.', zh: '非常抱歉。' },
      { es: '¡Buen provecho!', zh: '祝好胃口 / 请慢用！' },
      { es: '¡Feliz cumpleaños!', zh: '生日快乐！' },
    ],
  }
);

// ---------- 口语拓展：情景对话（角色扮演，现西课文风格） ----------
const DIALOGUES = [
  {
    id: 'd1', name: '初次见面', icon: '🤝', userRole: 'B',
    lines: [
      { who: 'A', es: '¡Hola! ¿Quién eres?', zh: '你好！你是谁？' },
      { who: 'B', es: 'Soy Ana. Soy estudiante.', zh: '我是安娜。我是学生。' },
      { who: 'A', es: 'Mucho gusto. ¿De dónde eres?', zh: '很高兴认识你。你来自哪里？' },
      { who: 'B', es: 'Soy de China. ¿Y tú?', zh: '我来自中国。你呢？' },
      { who: 'A', es: 'Soy de España. Somos amigos.', zh: '我来自西班牙。我们是朋友啦。' },
      { who: 'B', es: '¡Qué bien!', zh: '太好了！' },
    ],
  },
  {
    id: 'd2', name: '谈论家庭', icon: '👨‍👩‍👧', userRole: 'B',
    lines: [
      { who: 'A', es: '¿Cuántas personas hay en tu familia?', zh: '你家有几口人？' },
      { who: 'B', es: 'Somos cuatro: mis padres, mi hermana y yo.', zh: '四口人：父母、妹妹和我。' },
      { who: 'A', es: '¿Qué hace tu padre?', zh: '你父亲做什么工作？' },
      { who: 'B', es: 'Es médico. Trabaja en un hospital.', zh: '他是医生，在一家医院工作。' },
      { who: 'A', es: '¿Y tu madre?', zh: '你母亲呢？' },
      { who: 'B', es: 'Es profesora. Enseña español en una universidad.', zh: '她是老师，在一所大学教西班牙语。' },
    ],
  },
  {
    id: 'd3', name: '问时间与安排', icon: '🕙', userRole: 'B',
    lines: [
      { who: 'A', es: 'Perdona, ¿qué hora es?', zh: '打扰一下，现在几点了？' },
      { who: 'B', es: 'Son las nueve y media.', zh: '九点半。' },
      { who: 'A', es: '¡Uy! Tengo clase a las diez.', zh: '哎呀！我十点有课。' },
      { who: 'B', es: '¿Qué clase tienes?', zh: '你有什么课？' },
      { who: 'A', es: 'Tengo clase de español.', zh: '我有西班牙语课。' },
      { who: 'B', es: 'Pues, ¡date prisa!', zh: '那你快点吧！' },
    ],
  },
  {
    id: 'd4', name: '在餐厅点餐', icon: '🍽️', userRole: 'A',
    lines: [
      { who: 'A', es: '¡Camarero! El menú, por favor.', zh: '服务员！请拿菜单。' },
      { who: 'B', es: 'Aquí tiene. ¿Qué desea tomar?', zh: '给您。您想吃点什么？' },
      { who: 'A', es: 'Quiero una paella y una ensalada.', zh: '我要一份海鲜饭和一份沙拉。' },
      { who: 'B', es: '¿Y para beber?', zh: '喝点什么？' },
      { who: 'A', es: 'Un zumo de naranja, por favor.', zh: '请来一杯橙汁。' },
      { who: 'B', es: 'Muy bien. Ahora mismo.', zh: '好的，马上来。' },
    ],
  },
  {
    id: 'd5', name: '谈论日常作息', icon: '🌅', userRole: 'B',
    lines: [
      { who: 'A', es: '¿A qué hora te levantas?', zh: '你几点起床？' },
      { who: 'B', es: 'Me levanto a las seis y media todos los días.', zh: '我每天六点半起床。' },
      { who: 'A', es: '¡Qué temprano! ¿Y qué haces después?', zh: '真早！然后你做什么？' },
      { who: 'B', es: 'Me ducho, desayuno y voy a la facultad.', zh: '我洗澡、吃早饭，然后去学院。' },
      { who: 'A', es: '¿A qué hora te acuestas?', zh: '你几点睡觉？' },
      { who: 'B', es: 'Me acuesto a las once de la noche.', zh: '我晚上十一点睡觉。' },
    ],
  },
];

// ---------- 口语拓展：新增情景问答 ----------
QA_ITEMS.push(
  { q: '¿Quién es él?', zh: '他是谁？（可以说：他是我的朋友/老师/父亲…）', accept: ['es'], sample: 'Es mi profesor de español.', sampleZh: '他是我的西班牙语老师。' },
  { q: '¿Qué es esto?', zh: '这是什么？（想象手边一件东西）', accept: ['es un', 'es una', 'esto es'], sample: 'Es un diccionario.', sampleZh: '这是一本词典。' },
  { q: '¿Cuántas personas hay en tu familia?', zh: '你家有几口人？', accept: ['somos', 'hay', 'personas', 'cuatro', 'tres', 'cinco'], sample: 'Somos cuatro en mi familia.', sampleZh: '我们家四口人。' },
  { q: '¿A qué hora te levantas?', zh: '你几点起床？', accept: ['me levanto', 'a las'], sample: 'Me levanto a las siete.', sampleZh: '我七点起床。' },
  { q: '¿Qué día es hoy?', zh: '今天星期几？', accept: ['hoy es', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'], sample: 'Hoy es viernes.', sampleZh: '今天星期五。' },
  { q: '¿Qué estás haciendo?', zh: '你正在做什么？', accept: ['estoy'], sample: 'Estoy estudiando español.', sampleZh: '我正在学西班牙语。' },
  { q: '¿Por qué estudias español?', zh: '你为什么学西班牙语？', accept: ['porque', 'quiero'], sample: 'Porque quiero viajar a España.', sampleZh: '因为我想去西班牙旅行。' },
  { q: '¿Cómo es tu casa?', zh: '你家（房子）什么样？', accept: ['es', 'grande', 'pequeña', 'bonita', 'hay'], sample: 'Mi casa es pequeña pero muy limpia.', sampleZh: '我家不大但很干净。' },
  { q: '¿Cuál es tu comida favorita?', zh: '你最爱的食物是什么？', accept: ['favorita es', 'me gusta', 'es el', 'es la'], sample: 'Mi comida favorita es la paella.', sampleZh: '我最爱的食物是海鲜饭。' },
  { q: '¿Adónde vas este fin de semana?', zh: '这个周末你去哪里？', accept: ['voy a'], sample: 'Voy al parque con mis amigos.', sampleZh: '我和朋友们去公园。' }
);

// ---------- 口语拓展：新增看中文说西语 ----------
SPEAK_TRANSLATE.push(
  { zh: '现在九点半。', es: 'Son las nueve y media.' },
  { zh: '我们家有四口人。', es: 'Somos cuatro en mi familia.' },
  { zh: '我每天六点起床。', es: 'Me levanto a las seis todos los días.' },
  { zh: '我父亲在医院工作。', es: 'Mi padre trabaja en un hospital.' },
  { zh: '今天星期一。', es: 'Hoy es lunes.' },
  { zh: '我得学习。', es: 'Tengo que estudiar.' },
  { zh: '这个用西班牙语怎么说？', es: '¿Cómo se dice esto en español?' },
  { zh: '我会说一点西班牙语。', es: 'Sé hablar un poco de español.' },
  { zh: '这间房间又大又干净。', es: 'La habitación es grande y limpia.' },
  { zh: '别担心。', es: 'No te preocupes.' }
);

// ---------- 口语拓展：新增自由表达话题 ----------
SPEAK_TOPICS.push(
  { t: 'Mi rutina diaria', zh: '我的日常作息（练自复动词）', min: 15,
    ideas: ['Me despierto a las...', 'Me levanto y me ducho', 'Desayuno... y voy a...', 'Me acuesto a las...'] },
  { t: 'Mi universidad / Mi trabajo', zh: '我的大学 / 工作', min: 12,
    ideas: ['Estudio en... / Trabajo en...', 'Mis compañeros son...', 'La profesora nos enseña...'] },
  { t: 'Mi casa', zh: '介绍你的家（房子）', min: 12,
    ideas: ['Vivo en un piso', 'Hay tres habitaciones', 'Mi dormitorio es pequeño pero limpio'] },
  { t: 'Un viaje inolvidable', zh: '一次难忘的旅行（练过去时）', min: 15,
    ideas: ['El año pasado fui a...', 'Vi muchas cosas interesantes', 'Comí... y lo pasé muy bien'] }
);

// ---------- 成就与说明更新 ----------
const _lessonAll3 = ACHIEVEMENTS.find(a => a.id === 'lessonAll');
if (_lessonAll3) _lessonAll3.desc = '完成全部 ' + LESSONS.length + ' 节语法课';

ACHIEVEMENTS.push(
  { id: 'dialog12', icon: '🎭', name: '戏精本精', desc: '对话跟读达标 12 句', cond: s => (s.dialogCount || 0) >= 12 },
  { id: 'vocab120', icon: '🏆', name: '词汇学霸', desc: '掌握 120 个单词', cond: s => masteredCount(s) >= 120 }
);
