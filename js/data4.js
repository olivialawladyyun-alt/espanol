// ============ 现西第二册·第三册内容包 + 知识点总览 + 宠物系统配置 ============
// 在 data3.js 之后加载

// ---------- 给已有课程标记册数（第 1~32 课 = 第一册范围） ----------
LESSONS.forEach(l => { if (!l.book) l.book = 1; });

// ---------- 第二册语法课（第 33~42 课） ----------
LESSONS.push(
  {
    id: 'l33', book: 2, title: '过去完成时：过去的过去', icon: '⏮️',
    sections: [
      { h: '构成：había + 过去分词', body: 'haber 的过去未完成时（<b>había, habías, había, habíamos, habíais, habían</b>）+ 过去分词。表示<b>过去某一时刻之前</b>已完成的动作。',
        examples: [ { es:'Cuando llegué, el tren ya había salido.', zh: '我到的时候，火车已经开走了。' }, { es: 'Ya había comido cuando me llamaste.', zh: '你打电话来时我已经吃过了。' } ] },
      { h: '和简单过去时配合讲故事', body: '先发生的用过去完成时，后发生的用简单过去时，叙事层次立刻清晰。',
        examples: [ { es: 'Me dijo que había estado en España.', zh: '他告诉我他（之前）去过西班牙。' } ] },
    ],
    quiz: [
      { q: '过去完成时的构成是？', opts: ['había + 过去分词', 'he + 过去分词', 'había + 动词原形'], a: 0 },
      { q: '"我到时火车已经开走了"中"开走"用？', opts: ['salió', 'había salido', 'ha salido'], a: 1, why: '"过去的过去"用过去完成时。' },
      { q: '过去完成时表达的是？', opts: ['现在完成的事', '过去某时刻之前已完成的事', '将来的事'], a: 1 },
    ],
  },
  {
    id: 'l34', book: 2, title: '数词进阶与序数词', icon: '💯',
    sections: [
      { h: '一百以上', body: '<b>cien</b>(100) / <b>ciento uno</b>(101)；200~900 要<b>变性</b>：doscientos libros / doscientas casas；<b>mil</b>(1000) 不变；<b>un millón de</b> + 名词。',
        examples: [ { es: 'doscientas casas', zh: '两百栋房子' }, { es: 'mil estudiantes', zh: '一千名学生' } ] },
      { h: '序数词', body: '<b>primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo</b>。primero/tercero 在阳性单数名词前缩尾：<b>el primer día</b>, el tercer piso。',
        examples: [ { es: 'el primer día de clase', zh: '上课的第一天' }, { es: 'Vivo en el tercer piso.', zh: '我住在四楼（西语三层）。' } ] },
    ],
    quiz: [
      { q: '"两百栋房子"是？', opts: ['doscientas casas', 'doscientos casas', 'dos cien casas'], a: 0, why: '200~900 要跟名词变性。' },
      { q: '"第一天"是？', opts: ['el primer día', 'el primero día', 'el uno día'], a: 0, why: 'primero 在阳性单数名词前缩尾为 primer。' },
      { q: '"一千"是？', opts: ['mil', 'un mil', 'miles'], a: 0 },
    ],
  },
  {
    id: 'l35', book: 2, title: 'se 的妙用：自复被动与无人称', icon: '🔮',
    sections: [
      { h: 'se + 第三人称 = 被动', body: '<b>Se habla español aquí.</b>（这里说西语）主语是复数时动词也复数：<b>Se venden pisos.</b>（出售公寓）',
        examples: [ { es: 'Se habla español en veinte países.', zh: '二十个国家说西班牙语。' }, { es: 'Se venden pisos.', zh: '公寓出售。' } ] },
      { h: '无人称表达', body: '不指明主语的泛指："人们/大家"：<b>¿Cómo se dice esto en español?</b> <b>Se vive bien aquí.</b>',
        examples: [ { es: '¿Cómo se escribe tu nombre?', zh: '你的名字怎么写？' }, { es: 'Se come muy bien en este restaurante.', zh: '这家餐厅吃得很好。' } ] },
    ],
    quiz: [
      { q: '"这里说西班牙语"是？', opts: ['Se habla español aquí.', 'Habla español aquí.', 'Es hablado español.'], a: 0 },
      { q: '"Se venden pisos."动词为什么用复数？', opts: ['因为 pisos 是复数主语', '习惯用法', '错句'], a: 0 },
      { q: '"这个怎么说？"是？', opts: ['¿Cómo se dice esto?', '¿Cómo dice esto?', '¿Cómo se dicen esto?'], a: 0 },
    ],
  },
  {
    id: 'l36', book: 2, title: '双代词连用：Se lo doy', icon: '🎁',
    sections: [
      { h: '间接在前，直接在后', body: '两个代词连用时顺序固定：<b>间接宾语 + 直接宾语</b>：Me lo da.（他把它给我）Te la presto.（我把它借给你）',
        examples: [ { es: '¿Me lo puedes prestar?', zh: '你能把它借给我吗？' }, { es: 'Te la doy mañana.', zh: '我明天把它给你。' } ] },
      { h: 'le/les 变 se', body: 'le/les 遇到 lo/la/los/las 时变成 <b>se</b>：Le doy el libro. → <b>Se lo doy.</b>（我把书给他）',
        examples: [ { es: 'Se lo digo ahora mismo.', zh: '我现在就告诉他。' }, { es: 'Se la enviamos ayer.', zh: '我们昨天把它寄给他了。' } ] },
    ],
    quiz: [
      { q: '"Le doy el libro."用代词替换后是？', opts: ['Se lo doy.', 'Le lo doy.', 'Lo le doy.'], a: 0, why: 'le + lo 必须变成 se lo。' },
      { q: '双代词连用的顺序是？', opts: ['间接在前直接在后', '直接在前间接在后', '随意'], a: 0 },
      { q: '"Te lo presto."的意思是？', opts: ['我把它借给你', '你把它借给我', '他借给你'], a: 0 },
    ],
  },
  {
    id: 'l37', book: 2, title: '关系代词：que / quien / donde', icon: '🧷',
    sections: [
      { h: 'que 最万能', body: '指人或物都行：<b>El libro que leo es interesante.</b>（我读的书很有意思）<b>La chica que canta es mi amiga.</b>',
        examples: [ { es: 'El libro que leo es interesante.', zh: '我在读的书很有意思。' }, { es: 'La paella que hace mi madre es la mejor.', zh: '我妈妈做的海鲜饭是最棒的。' } ] },
      { h: 'quien 与 donde', body: '<b>quien</b> 只指人，常用在前置词后：la chica <b>con quien</b> hablo；<b>donde</b> 指地点：la ciudad <b>donde</b> vivo。',
        examples: [ { es: 'La ciudad donde vivo es muy grande.', zh: '我住的城市很大。' }, { es: 'El amigo con quien viajé es cubano.', zh: '和我一起旅行的朋友是古巴人。' } ] },
    ],
    quiz: [
      { q: '最通用的关系代词是？', opts: ['que', 'quien', 'donde'], a: 0 },
      { q: '"我住的城市"是？', opts: ['la ciudad donde vivo', 'la ciudad quien vivo', 'la ciudad que vivo en'], a: 0 },
      { q: '前置词后指人用？', opts: ['quien', 'donde', 'cuando'], a: 0 },
    ],
  },
  {
    id: 'l38', book: 2, title: '命令式进阶：您、咱们与否定命令', icon: '🫡',
    sections: [
      { h: 'usted / nosotros 的命令式', body: '用<b>虚拟式形式</b>：<b>Pase usted.</b>（您请进）<b>Hablemos.</b>（咱们谈谈）Siéntense, por favor.（各位请坐）',
        examples: [ { es: 'Pase usted, por favor.', zh: '您请进。' }, { es: '¡Hablemos en español!', zh: '咱们用西语交谈吧！' } ] },
      { h: '否定命令 & 代词位置', body: '否定命令一律用虚拟式：<b>No hables.</b>（别说话）肯定命令代词后缀连写：<b>Dímelo.</b>（告诉我）；否定命令代词提前：<b>No me lo digas.</b>',
        examples: [ { es: 'No llegues tarde.', zh: '别迟到。' }, { es: 'Dímelo, por favor.', zh: '请告诉我。' } ] },
    ],
    quiz: [
      { q: '"您请进"是？', opts: ['Pase usted.', 'Pasa usted.', 'Pasar usted.'], a: 0, why: 'usted 命令式用虚拟式形式。' },
      { q: '"别说话（对 tú）"是？', opts: ['No hables.', 'No habla.', 'No hablar.'], a: 0, why: '否定命令用虚拟式。' },
      { q: '肯定命令中代词的位置？', opts: ['接在动词后连写', '放动词前', '省略'], a: 0 },
    ],
  },
  {
    id: 'l39', book: 2, title: '过去分词作形容词', icon: '🚪',
    sections: [
      { h: 'estar + 分词 = 状态', body: '分词作形容词要<b>性数一致</b>：<b>La puerta está abierta.</b>（门开着）<b>Las tiendas están cerradas.</b>（商店关着门）',
        examples: [ { es: 'La puerta está abierta.', zh: '门开着。' }, { es: 'La tienda está cerrada los domingos.', zh: '商店周日不营业。' } ] },
      { h: '名词 + 分词', body: '直接修饰名词：un libro <b>escrito</b> en español（一本用西语写的书）、una mesa <b>reservada</b>（一张预订了的桌子）。',
        examples: [ { es: 'un libro escrito en español', zh: '一本用西语写的书' }, { es: 'Estoy muy cansada.', zh: '我很累。（女生说）' } ] },
    ],
    quiz: [
      { q: '"门开着"是？', opts: ['La puerta está abierta.', 'La puerta está abierto.', 'La puerta es abierta.'], a: 0, why: '状态用 estar，分词与 puerta 阴性一致。' },
      { q: '分词作形容词时要？', opts: ['性数一致', '永远用阳性', '加 -mente'], a: 0 },
      { q: 'abrir（开）的过去分词是？', opts: ['abierto', 'abrido', 'abriendo'], a: 0 },
    ],
  },
  {
    id: 'l40', book: 2, title: '直接引语变间接引语', icon: '🗣️',
    sections: [
      { h: 'decir que + 陈述句', body: 'Dice: “Estoy cansado.” → <b>Dice que está cansado.</b>（他说他累了）注意人称跟着变！',
        examples: [ { es: 'Dice que tiene hambre.', zh: '他说他饿了。' }, { es: 'Ana dice que no puede venir.', zh: '安娜说她来不了。' } ] },
      { h: '转述疑问句', body: '一般疑问句用 <b>si</b>：Me pregunta <b>si</b> tengo tiempo.（他问我有没有时间）特殊疑问句保留疑问词：Me pregunta <b>dónde</b> vivo.',
        examples: [ { es: 'Me pregunta si hablo español.', zh: '他问我会不会说西语。' }, { es: 'Le pregunto cuántos años tiene.', zh: '我问他多大年纪。' } ] },
    ],
    quiz: [
      { q: 'Dice: “Tengo hambre.” 转述为？', opts: ['Dice que tiene hambre.', 'Dice que tengo hambre.', 'Dice tener que hambre.'], a: 0, why: '人称要变成第三人称。' },
      { q: '转述一般疑问句用？', opts: ['si', 'que', 'como'], a: 0 },
      { q: '转述"你住在哪里？"？', opts: ['Me pregunta dónde vivo.', 'Me pregunta si dónde vivo.', 'Me pregunta que vivo.'], a: 0 },
    ],
  },
  {
    id: 'l41', book: 2, title: '时间与让步：cuando / mientras / aunque', icon: '🔗',
    sections: [
      { h: '时间连词', body: '<b>cuando</b>（当…时，习惯性动作用陈述式）：Cuando llego a casa, ceno. <b>mientras</b>（与此同时）：Mientras como, veo la tele.',
        examples: [ { es: 'Cuando llego a casa, ceno.', zh: '我一到家就吃晚饭。' }, { es: 'Mientras como, veo la televisión.', zh: '我边吃饭边看电视。' } ] },
      { h: '让步：aunque', body: '<b>aunque</b> + 陈述式 = 虽然/尽管（既定事实）：Aunque llueve, salgo.（虽然下雨，我还是出门）',
        examples: [ { es: 'Aunque llueve, salgo.', zh: '虽然在下雨，我还是出门。' }, { es: 'Aunque es difícil, me gusta el español.', zh: '虽然难，我还是喜欢西语。' } ] },
    ],
    quiz: [
      { q: '"我一到家就吃晚饭（习惯）"是？', opts: ['Cuando llego a casa, ceno.', 'Cuando llegue a casa, ceno.', 'Mientras llego, ceno.'], a: 0, why: '习惯性动作 cuando 用陈述式。' },
      { q: 'mientras 的意思是？', opts: ['与此同时/当…时', '虽然', '因为'], a: 0 },
      { q: 'aunque 的意思是？', opts: ['虽然/尽管', '如果', '为了'], a: 0 },
    ],
  },
  {
    id: 'l42', book: 2, title: '条件式：委婉表达与假设', icon: '🕊️',
    sections: [
      { h: '构成：将来时词干 + ía', body: '<b>hablaría, comerías, viviríamos…</b> 不规则词干和将来时相同：tendría, haría, podría, diría。',
        examples: [ { es: 'Me gustaría viajar por toda España.', zh: '我（很）想游遍西班牙。' }, { es: '¿Podrías ayudarme?', zh: '你能帮我一下吗？（更客气）' } ] },
      { h: '三大用法', body: '① 委婉：<b>Me gustaría…</b> ② 客气请求：<b>¿Podrías…?</b> ③ 过去中的将来：Dijo que <b>vendría</b>.（他说他会来）',
        examples: [ { es: 'Dijo que vendría a las cinco.', zh: '他说他五点会来。' }, { es: 'Yo en tu lugar estudiaría más.', zh: '我要是你就多学习。' } ] },
    ],
    quiz: [
      { q: '条件式的构成是？', opts: ['将来时词干 + ía', '现在时词干 + ía', '原形 + ré'], a: 0 },
      { q: '"我想去旅行（委婉）"是？', opts: ['Me gustaría viajar.', 'Me gusta viajaré.', 'Quiero que viajar.'], a: 0 },
      { q: '"Dijo que vendría."中 vendría 表示？', opts: ['过去中的将来', '现在', '命令'], a: 0 },
    ],
  }
);

// ---------- 第三册语法课（第 43~50 课） ----------
LESSONS.push(
  {
    id: 'l43', book: 3, title: '虚拟式现在时：变位入门', icon: '🌀',
    sections: [
      { h: '什么是虚拟式', body: '表达<b>愿望、情感、怀疑、非事实</b>的动词形式（陈述式说"事实"，虚拟式说"心情"）。变位口诀：<b>词尾对调</b>——-ar → e，-er/-ir → a：hable, coma, viva。',
        examples: [ { es: 'hablar → hable, hables, hable, hablemos, habléis, hablen', zh: '-ar 类变 e' }, { es: 'comer → coma, comas, coma…', zh: '-er 类变 a' } ] },
      { h: '高频不规则', body: '<b>sea</b>(ser) <b>esté</b>(estar) <b>vaya</b>(ir) <b>tenga</b>(tener) <b>haga</b>(hacer) <b>venga</b>(venir) <b>diga</b>(decir) <b>sepa</b>(saber) <b>pueda</b>(poder) <b>quiera</b>(querer)。',
        examples: [ { es: 'Espero que todo vaya bien.', zh: '希望一切顺利。' }, { es: 'Que tengas un buen día.', zh: '祝你今天愉快。' } ] },
    ],
    quiz: [
      { q: 'hablar 的 yo 虚拟式是？', opts: ['hable', 'hablo', 'hablé'], a: 0, why: '-ar 类词尾对调为 e。' },
      { q: '-er/-ir 类虚拟式词尾变成？', opts: ['a', 'e', 'o'], a: 0 },
      { q: 'ir 的虚拟式是？', opts: ['vaya', 'va', 'iría'], a: 0 },
    ],
  },
  {
    id: 'l44', book: 3, title: '虚拟式 · 愿望与请求', icon: '🌠',
    sections: [
      { h: 'querer / esperar / pedir que + 虚拟式', body: '<b>Quiero que vengas.</b>（我想让你来）<b>Espero que tengas suerte.</b>（祝你好运）注意：主句和从句<b>主语不同</b>才用 que + 虚拟式；主语相同直接用原形：Quiero venir.',
        examples: [ { es: 'Quiero que vengas a mi casa.', zh: '我想让你来我家。' }, { es: 'Te pido que me escuches.', zh: '我请你听我说。' } ] },
      { h: 'Ojalá：但愿', body: '<b>¡Ojalá + 虚拟式!</b>：¡Ojalá apruebe el examen!（但愿我考试通过！）西语中最有阿拉伯血统的词。',
        examples: [ { es: '¡Ojalá no llueva mañana!', zh: '但愿明天别下雨！' }, { es: '¡Que te mejores pronto!', zh: '祝你早日康复！' } ] },
    ],
    quiz: [
      { q: '"我想让你来"是？', opts: ['Quiero que vengas.', 'Quiero que vienes.', 'Quiero vienes.'], a: 0, why: '愿望 + 不同主语 → que + 虚拟式。' },
      { q: '主语相同时"我想来"是？', opts: ['Quiero venir.', 'Quiero que venga.', 'Quiero que vengo.'], a: 0 },
      { q: 'Ojalá 后面接？', opts: ['虚拟式', '陈述式', '原形'], a: 0 },
    ],
  },
  {
    id: 'l45', book: 3, title: '虚拟式 · 情感与评价', icon: '💗',
    sections: [
      { h: '情感动词 + que + 虚拟式', body: '<b>Me alegro de que estés bien.</b>(很高兴你没事) <b>Siento que no puedas venir.</b>(很遗憾你来不了)',
        examples: [ { es: 'Me alegro de que estés aquí.', zh: '很高兴你在这里。' }, { es: 'Me sorprende que hable tan bien.', zh: '他说得这么好让我惊讶。' } ] },
      { h: '无人称评价句', body: '<b>Es importante que</b> estudies. <b>Es mejor que</b> descanses. <b>Es necesario que</b> practiques todos los días.',
        examples: [ { es: 'Es importante que practiques cada día.', zh: '每天练习很重要。' }, { es: 'Es mejor que te acuestes temprano.', zh: '你最好早点睡。' } ] },
    ],
    quiz: [
      { q: '"很高兴你来"是？', opts: ['Me alegro de que vengas.', 'Me alegro de que vienes.', 'Me alegro venir.'], a: 0 },
      { q: 'Es importante que 后面用？', opts: ['虚拟式', '陈述式', '将来时'], a: 0 },
      { q: '"你最好休息"是？', opts: ['Es mejor que descanses.', 'Es mejor que descansas.', 'Mejor descansar tú.'], a: 0 },
    ],
  },
  {
    id: 'l46', book: 3, title: '虚拟式 · 怀疑与否定', icon: '🤨',
    sections: [
      { h: '否定信念 → 虚拟式', body: '<b>No creo que sea verdad.</b>（我不认为这是真的）但肯定时用陈述式：<b>Creo que es verdad.</b> 一字之差，语气全变。',
        examples: [ { es: 'No creo que sea verdad.', zh: '我不认为这是真的。' }, { es: 'Creo que es verdad.', zh: '我认为这是真的。（陈述式）' } ] },
      { h: 'quizás / tal vez：可能', body: '<b>Quizás venga mañana.</b>（他明天可能来）用虚拟式表示不确定性更强。',
        examples: [ { es: 'Quizás llueva esta tarde.', zh: '今天下午可能下雨。' }, { es: 'Tal vez tengas razón.', zh: '也许你是对的。' } ] },
    ],
    quiz: [
      { q: 'No creo que ___ (ser) verdad.', opts: ['sea', 'es', 'será'], a: 0, why: '否定信念后用虚拟式。' },
      { q: 'Creo que 后面用？', opts: ['陈述式', '虚拟式', '条件式'], a: 0, why: '肯定的信念用陈述式。' },
      { q: '"Quizás venga."表示？', opts: ['可能来（不确定）', '一定来', '已经来了'], a: 0 },
    ],
  },
  {
    id: 'l47', book: 3, title: '虚拟式 · 目的与将来时间', icon: '🎯',
    sections: [
      { h: 'para que + 虚拟式', body: '"为了让…"：<b>Te lo explico para que lo entiendas.</b>（我解释给你听好让你明白）antes de que（在…之前）也接虚拟式。',
        examples: [ { es: 'Te lo explico para que lo entiendas.', zh: '我解释是为了让你明白。' }, { es: 'Sal antes de que llueva.', zh: '趁没下雨快出门。' } ] },
      { h: 'cuando 指将来 → 虚拟式', body: '习惯用陈述式（Cuando llego, ceno），但指<b>将来</b>就用虚拟式：<b>Cuando llegues, llámame.</b>（你到了就给我打电话）',
        examples: [ { es: 'Cuando llegues, llámame.', zh: '你到了就给我打电话。' }, { es: 'Cuando sea mayor, viajaré por el mundo.', zh: '等我长大了要环游世界。' } ] },
    ],
    quiz: [
      { q: 'para que 后面用？', opts: ['虚拟式', '陈述式', '原形'], a: 0 },
      { q: '"你到了（将来）给我打电话"是？', opts: ['Cuando llegues, llámame.', 'Cuando llegas, llámame.', 'Cuando llegarás, llámame.'], a: 0, why: 'cuando 指将来用虚拟式。' },
      { q: '习惯性的 cuando 用？', opts: ['陈述式', '虚拟式', '命令式'], a: 0 },
    ],
  },
  {
    id: 'l48', book: 3, title: '被动语态：ser 与 estar + 分词', icon: '🏛️',
    sections: [
      { h: 'ser + 分词（+ por）= 动作被动', body: '<b>La novela fue escrita por Cervantes.</b>（这部小说由塞万提斯写成）分词性数一致，动作执行者用 por 引出。',
        examples: [ { es: 'La novela fue escrita por Cervantes.', zh: '小说由塞万提斯写成。' }, { es: 'El puente fue construido en 1900.', zh: '这座桥建于1900年。' } ] },
      { h: 'estar + 分词 = 结果状态；口语爱用 se', body: '<b>La puerta está cerrada.</b>（门是关着的——状态）日常口语更常用 se 被动：<b>Se construyó en 1900.</b>',
        examples: [ { es: 'La puerta está cerrada.', zh: '门关着。（状态）' }, { es: 'Aquí se venden libros usados.', zh: '这里出售二手书。' } ] },
    ],
    quiz: [
      { q: '"小说由塞万提斯写成"是？', opts: ['La novela fue escrita por Cervantes.', 'La novela está escrita para Cervantes.', 'La novela se escribió Cervantes.'], a: 0 },
      { q: 'estar + 分词强调？', opts: ['结果状态', '动作过程', '将来'], a: 0 },
      { q: '日常口语中更常用的被动是？', opts: ['se 被动', 'ser 被动', '没有被动'], a: 0 },
    ],
  },
  {
    id: 'l49', book: 3, title: '条件句：如果…就…', icon: '🌈',
    sections: [
      { h: '真实条件句', body: '<b>Si + 现在时，将来时</b>：Si tengo tiempo, iré contigo.（如果有时间我就和你去）⚠️ si 后面<b>不能用将来时</b>！',
        examples: [ { es: 'Si tengo tiempo, iré contigo.', zh: '如果我有时间就和你一起去。' }, { es: 'Si estudias, aprobarás.', zh: '你学习就能通过考试。' } ] },
      { h: '非真实条件句（进阶预览）', body: '与现实相反：<b>Si + 过去虚拟式，条件式</b>：Si tuviera dinero, viajaría.（我要是有钱就去旅行——可惜没有）',
        examples: [ { es: 'Si tuviera dinero, viajaría por el mundo.', zh: '我要是有钱就环游世界。' }, { es: 'Si fuera tú, estudiaría más.', zh: '我要是你就多学习。' } ] },
    ],
    quiz: [
      { q: 'Si ___ (tener, yo) tiempo, iré.', opts: ['tengo', 'tendré', 'tenga'], a: 0, why: '真实条件 si 后用现在时，不能用将来时。' },
      { q: '非真实条件句的主句用？', opts: ['条件式', '将来时', '命令式'], a: 0 },
      { q: '"Si fuera tú…"的意思是？', opts: ['我要是你的话', '如果你去', '既然是你'], a: 0 },
    ],
  },
  {
    id: 'l50', book: 3, title: '将来完成时与时态呼应', icon: '🧭',
    sections: [
      { h: '将来完成时：habré + 分词', body: '"到某时将已完成"：<b>Para mayo habré terminado el curso.</b> 还能表<b>对过去的猜测</b>：Habrá salido ya.（他大概已经走了）',
        examples: [ { es: 'Para mayo habré terminado el curso.', zh: '到五月我将学完这门课。' }, { es: 'No contesta. Habrá salido ya.', zh: '他不接电话，大概已经出门了。' } ] },
      { h: '时态呼应小结', body: '主句变过去，从句跟着退一步：Dice que <b>viene</b> → Dijo que <b>venía</b>；Dice que <b>vendrá</b> → Dijo que <b>vendría</b>；Dice que <b>ha venido</b> → Dijo que <b>había venido</b>。',
        examples: [ { es: 'Dijo que vendría a las cinco.', zh: '他说过他五点会来。' }, { es: 'Pensaba que ya habías comido.', zh: '我以为你已经吃过了。' } ] },
    ],
    quiz: [
      { q: '将来完成时的构成是？', opts: ['habré + 过去分词', 'había + 过去分词', 'haya + 原形'], a: 0 },
      { q: '"Habrá salido ya."表示？', opts: ['对过去的猜测', '命令', '已证实的事实'], a: 0 },
      { q: 'Dice que vendrá → Dijo que ___', opts: ['vendría', 'vendrá', 'viene'], a: 0, why: '将来时呼应为条件式。' },
    ],
  }
);

// ---------- 新增时态：条件式（代码生成）+ 虚拟式现在时 ----------
TENSES.push(
  { id: 'condicional', name: '条件式', zh: '委婉请求、假设、过去中的将来（见第42课）', icon: '🕊️' },
  { id: 'subjuntivo', name: '虚拟式现在时', zh: '愿望、情感、怀疑、非事实（见第43~47课）', icon: '🌀' }
);
const COND_END = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'];

const SUBJ_MAP = {
  hablar: ['hable', 'hables', 'hable', 'hablemos', 'habléis', 'hablen'],
  comer: ['coma', 'comas', 'coma', 'comamos', 'comáis', 'coman'],
  vivir: ['viva', 'vivas', 'viva', 'vivamos', 'viváis', 'vivan'],
  ser: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
  estar: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
  tener: ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan'],
  ir: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
  hacer: ['haga', 'hagas', 'haga', 'hagamos', 'hagáis', 'hagan'],
  querer: ['quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'],
  poder: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'],
  venir: ['venga', 'vengas', 'venga', 'vengamos', 'vengáis', 'vengan'],
  ver: ['vea', 'veas', 'vea', 'veamos', 'veáis', 'vean'],
  dar: ['dé', 'des', 'dé', 'demos', 'deis', 'den'],
  decir: ['diga', 'digas', 'diga', 'digamos', 'digáis', 'digan'],
  saber: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
};
VERBS.forEach(v => { if (SUBJ_MAP[v.inf]) v.subjuntivo = SUBJ_MAP[v.inf]; });

// ---------- 新增词汇包（二、三册主题） ----------
DECKS.push(
  {
    id: 'post', name: '办事与通讯', icon: '📮',
    words: [
      { es: 'la carta', zh: '信' }, { es: 'el sello', zh: '邮票' }, { es: 'el sobre', zh: '信封' },
      { es: 'el paquete', zh: '包裹' }, { es: 'enviar', zh: '寄送 / 发送' }, { es: 'recibir', zh: '收到' },
      { es: 'el correo', zh: '邮局 / 邮件' }, { es: 'el mensaje', zh: '信息 / 留言' },
      { es: 'la dirección', zh: '地址' }, { es: 'firmar', zh: '签名' },
      { es: 'el documento', zh: '文件' }, { es: 'el pasaporte', zh: '护照' },
      { es: 'la ventanilla', zh: '（办事）窗口' },
      { es: 'hacer cola', zh: '排队', ex: 'Hay que hacer cola.', exZh: '得排队。' },
    ],
  },
  {
    id: 'health', name: '健康与就医', icon: '🏥',
    words: [
      { es: 'la salud', zh: '健康' }, { es: 'la enfermedad', zh: '疾病' },
      { es: 'el paciente', zh: '病人' },
      { es: 'doler', zh: '疼（用法同 gustar）', ex: 'Me duele la cabeza.', exZh: '我头疼。' },
      { es: 'la fiebre', zh: '发烧', ex: 'Tengo fiebre.', exZh: '我发烧了。' },
      { es: 'la gripe', zh: '流感' }, { es: 'la tos', zh: '咳嗽' },
      { es: 'el resfriado', zh: '感冒' }, { es: 'la receta', zh: '处方 / 菜谱' },
      { es: 'la pastilla', zh: '药片' }, { es: 'la consulta', zh: '门诊 / 咨询' },
      { es: 'grave', zh: '严重的' }, { es: 'mejorarse', zh: '好转 / 康复' },
      { es: 'la ambulancia', zh: '救护车' },
    ],
  },
  {
    id: 'society', name: '社会与文化', icon: '🏛️',
    words: [
      { es: 'la sociedad', zh: '社会' }, { es: 'la cultura', zh: '文化' },
      { es: 'la costumbre', zh: '习俗 / 习惯' }, { es: 'el gobierno', zh: '政府' },
      { es: 'la economía', zh: '经济' }, { es: 'la política', zh: '政治' },
      { es: 'el periódico', zh: '报纸' }, { es: 'la noticia', zh: '新闻 / 消息' },
      { es: 'la ley', zh: '法律' }, { es: 'el derecho', zh: '权利 / 法学' },
      { es: 'la población', zh: '人口' }, { es: 'el desarrollo', zh: '发展' },
      { es: 'la historia', zh: '历史' }, { es: 'el arte', zh: '艺术' },
    ],
  },
  {
    id: 'opinion', name: '观点与讨论', icon: '💭',
    words: [
      { es: 'opinar', zh: '发表意见' },
      { es: 'creer', zh: '认为 / 相信', ex: 'Creo que tienes razón.', exZh: '我认为你说得对。' },
      { es: 'la opinión', zh: '观点 / 意见' },
      { es: 'estar de acuerdo', zh: '同意', ex: 'Estoy de acuerdo contigo.', exZh: '我同意你。' },
      { es: 'la razón', zh: '道理 / 原因' }, { es: 'el problema', zh: '问题' },
      { es: 'la solución', zh: '解决办法' }, { es: 'discutir', zh: '讨论 / 争论' },
      { es: 'explicar', zh: '解释' }, { es: 'el ejemplo', zh: '例子' },
      { es: 'la verdad', zh: '真相 / 实话' }, { es: 'la mentira', zh: '谎言' },
      { es: 'importante', zh: '重要的' }, { es: 'necesario', zh: '必要的' },
    ],
  }
);

// ---------- 新增拼句（二、三册句型） ----------
SENTENCES.push(
  { es: 'Se habla español en veinte países', zh: '二十个国家说西班牙语。' },
  { es: 'El tren ya había salido', zh: '火车已经开走了。' },
  { es: 'Quiero que vengas a mi casa', zh: '我想让你来我家。' },
  { es: 'Me gustaría viajar por toda España', zh: '我想游遍整个西班牙。' },
  { es: 'La novela fue escrita por Cervantes', zh: '这部小说由塞万提斯写成。' },
  { es: 'Si tengo tiempo iré contigo', zh: '如果我有时间就和你一起去。' }
);

// ---------- 知识点总览（按册分类） ----------
const BOOK_SYLLABUS = [
  {
    book: 1, name: '第一册 · 入门基础', icon: '📕',
    cats: [
      { c: '语音与拼读', pts: [{ t: '字母表 · 元音 · 特色辅音（见「发音」页）' }] },
      { c: '名词与冠词', pts: [{ t: '名词的性别', id: 'l1' }, { t: '定冠词与不定冠词', id: 'l2' }, { t: '名词复数', id: 'l3' }] },
      { c: '形容词与副词', pts: [{ t: '形容词性数一致', id: 'l11' }, { t: 'muy 与 mucho', id: 'l30' }, { t: '频率副词与双重否定', id: 'l31' }, { t: '感叹句', id: 'l32' }] },
      { c: '代词与限定词', pts: [{ t: '主语人称代词', id: 'l4' }, { t: '所有格', id: 'l12' }, { t: '指示词', id: 'l13' }, { t: '直接宾语代词', id: 'l17' }, { t: '间接宾语代词', id: 'l18' }, { t: '自复动词', id: 'l19' }] },
      { c: '动词与时态', pts: [{ t: 'ser 的用法与变位', id: 'l5' }, { t: 'estar 与 ser/estar 区别', id: 'l6' }, { t: '规则动词现在时', id: 'l7' }, { t: '不规则动词 tener/ir/hacer', id: 'l8' }, { t: '现在进行时', id: 'l20' }, { t: '现在完成时', id: 'l21' }, { t: '简单过去时 vs 过去未完成时', id: 'l22' }, { t: '命令式入门', id: 'l23' }, { t: '将来的三种表达', id: 'l24' }] },
      { c: '句型与功能', pts: [{ t: '疑问句与否定句', id: 'l9' }, { t: 'gustar 句型', id: 'l10' }, { t: 'hay 与 está', id: 'l14' }, { t: '前置词 a/de/en/con', id: 'l15' }, { t: 'por 与 para', id: 'l16' }, { t: '钟点表达', id: 'l25' }, { t: '星期与日期', id: 'l26' }, { t: 'tener que / hay que / deber', id: 'l27' }, { t: 'saber 与 conocer', id: 'l28' }, { t: '比较级与最高级', id: 'l29' }] },
    ],
  },
  {
    book: 2, name: '第二册 · 进阶语法', icon: '📗',
    cats: [
      { c: '时态扩展', pts: [{ t: '过去完成时（había + 分词）', id: 'l33' }, { t: '条件式（hablaría）', id: 'l42' }] },
      { c: 'se 与代词', pts: [{ t: 'se 自复被动与无人称', id: 'l35' }, { t: '双代词连用（se lo）', id: 'l36' }] },
      { c: '从句与引语', pts: [{ t: '关系代词 que/quien/donde', id: 'l37' }, { t: '直接引语变间接引语', id: 'l40' }, { t: '时间与让步连词', id: 'l41' }] },
      { c: '命令式与分词', pts: [{ t: '命令式进阶（usted/否定）', id: 'l38' }, { t: '过去分词作形容词', id: 'l39' }] },
      { c: '数词', pts: [{ t: '百千与序数词', id: 'l34' }] },
    ],
  },
  {
    book: 3, name: '第三册 · 虚拟式与高级语法', icon: '📘',
    cats: [
      { c: '虚拟式', pts: [{ t: '虚拟式现在时变位', id: 'l43' }, { t: '愿望与请求（quiero que…）', id: 'l44' }, { t: '情感与评价（me alegro de que…）', id: 'l45' }, { t: '怀疑与否定（no creo que…）', id: 'l46' }, { t: '目的与将来时间（para que / cuando + 虚拟）', id: 'l47' }] },
      { c: '语态与高级时态', pts: [{ t: '被动语态 ser/estar + 分词', id: 'l48' }, { t: '条件句（si…）', id: 'l49' }, { t: '将来完成时与时态呼应', id: 'l50' }] },
    ],
  },
];

// ---------- 宠物系统配置 ----------
const PET_STAGES = [
  { g: 0, emoji: '🥚', name: '神秘的蛋', tip: '一颗来自安第斯山的蛋……多喂多陪它，帮它破壳！' },
  { g: 30, emoji: '🐣', name: '破壳日', tip: '咦，探出了毛茸茸的小脑袋！' },
  { g: 100, emoji: '🦙', name: '羊驼宝宝', tip: '是一只小羊驼！它似乎听得懂西班牙语。' },
  { g: 250, emoji: '🦙💕', name: '少年羊驼', tip: '活蹦乱跳，最爱听你读西语例句。' },
  { g: 500, emoji: '🦙✨', name: '成年羊驼', tip: '毛色发亮，已经能听懂完整的西语对话！' },
  { g: 900, emoji: '👑🦙🎓', name: '西语大师羊驼', tip: '¡Enhorabuena! 它已是一只会西语的传说羊驼！' },
];

const PET_ITEMS = [
  { id: 'galleta', icon: '🍪', name: '饼干', type: 'snack', price: 4, hunger: 8, mood: 1, growth: 1, say: '¡Ñam ñam!' },
  { id: 'leche', icon: '🥛', name: '牛奶', type: 'snack', price: 6, hunger: 12, mood: 2, growth: 1, say: '¡Qué rica!' },
  { id: 'carne', icon: '🍖', name: '肉肉', type: 'snack', price: 10, hunger: 20, mood: 3, growth: 2, say: '¡Delicioso!' },
  { id: 'pez', icon: '🐟', name: '小鱼干', type: 'snack', price: 15, hunger: 25, mood: 5, growth: 3, say: '¡Gracias, amigo!' },
  { id: 'lana', icon: '🧶', name: '毛线球', type: 'toy', price: 8, hunger: 0, mood: 10, growth: 1, say: '¡Qué divertido!' },
  { id: 'pelota', icon: '⚽', name: '小足球', type: 'toy', price: 12, hunger: 0, mood: 15, growth: 2, say: '¡Golazo!' },
  { id: 'yoyo', icon: '🪀', name: '溜溜球', type: 'toy', price: 20, hunger: 0, mood: 25, growth: 3, say: '¡Otra vez!' },
  { id: 'sombrero', icon: '👒', name: '小草帽', type: 'toy', price: 30, hunger: 0, mood: 30, growth: 5, say: '¡Qué guapo estoy!' },
];

// ---------- 词汇按册整理 ----------
// 补充第三册主题词汇包
DECKS.push(
  {
    id: 'env', name: '环境与自然', icon: '🌱',
    words: [
      { es: 'el medio ambiente', zh: '环境' },
      { es: 'la naturaleza', zh: '大自然' },
      { es: 'la contaminación', zh: '污染' },
      { es: 'proteger', zh: '保护', ex: 'Hay que proteger el medio ambiente.', exZh: '必须保护环境。' },
      { es: 'la energía', zh: '能源 / 能量' },
      { es: 'el clima', zh: '气候' },
      { es: 'la tierra', zh: '地球 / 土地' },
      { es: 'el bosque', zh: '森林' },
      { es: 'el animal', zh: '动物' },
      { es: 'la basura', zh: '垃圾' },
      { es: 'reciclar', zh: '回收利用' },
      { es: 'el aire', zh: '空气' },
      { es: 'el recurso', zh: '资源' },
      { es: 'el futuro', zh: '未来' },
    ],
  },
  {
    id: 'mind', name: '思想与人生', icon: '💡',
    words: [
      { es: 'la idea', zh: '想法 / 主意' },
      { es: 'el pensamiento', zh: '思想' },
      { es: 'la libertad', zh: '自由' },
      { es: 'la igualdad', zh: '平等' },
      { es: 'la educación', zh: '教育' },
      { es: 'el conocimiento', zh: '知识' },
      { es: 'la experiencia', zh: '经验 / 经历' },
      { es: 'el éxito', zh: '成功', ex: 'El esfuerzo trae el éxito.', exZh: '努力带来成功。' },
      { es: 'el fracaso', zh: '失败' },
      { es: 'el esfuerzo', zh: '努力' },
      { es: 'lograr', zh: '实现 / 达成' },
      { es: 'conseguir', zh: '获得 / 做到' },
      { es: 'mejorar', zh: '改善 / 提高' },
      { es: 'cambiar', zh: '改变' },
    ],
  }
);

// 每个词汇包对应的现西册数
const DECK_BOOK_MAP = {
  // 第一册：基础生活词汇
  greet: 1, num: 1, family: 1, food: 1, color: 1, time: 1, verb: 1, daily: 1,
  nation: 1, job: 1, house: 1, school: 1, routine: 1, adv: 1,
  // 第二册：进阶场景词汇
  body: 2, city: 2, work: 2, weather: 2, emotion: 2, verbs2: 2, shop: 2, hobby: 2, post: 2, health: 2,
  // 第三册：社会与思想词汇
  society: 3, opinion: 3, env: 3, mind: 3,
};
DECKS.forEach(d => { d.book = DECK_BOOK_MAP[d.id] || 1; });

const VOCAB_BOOKS = [
  { book: 1, name: '第一册 · 基础生活词汇', icon: '📕', tip: '打招呼、报数字、聊家人、说作息——开口第一个月全靠它们' },
  { book: 2, name: '第二册 · 进阶场景词汇', icon: '📗', tip: '出行、购物、就医、办事——把生活场景全部拿下' },
  { book: 3, name: '第三册 · 社会与思想词汇', icon: '📘', tip: '谈观点、聊社会、说理想——从"会说话"到"会表达"' },
];

// ---------- 成就与说明更新 ----------
const _lessonAll4 = ACHIEVEMENTS.find(a => a.id === 'lessonAll');
if (_lessonAll4) _lessonAll4.desc = '完成全部 ' + LESSONS.length + ' 节语法课';

ACHIEVEMENTS.push(
  { id: 'lesson32', icon: '📗', name: '一册毕业', desc: '完成前 32 节语法课（第一册）', cond: s => LESSONS.filter(l => l.book === 1).every(l => s.lessonsDone.includes(l.id)) },
  { id: 'petHatch', icon: '🐣', name: '破壳而出', desc: '宠物成长值达到 30', cond: s => (s.pet && s.pet.growth || 0) >= 30 },
  { id: 'petAdult', icon: '🦙', name: '羊驼长大了', desc: '宠物成长值达到 500', cond: s => (s.pet && s.pet.growth || 0) >= 500 },
  { id: 'coins500', icon: '🪙', name: '小富翁', desc: '累计获得 500 金币', cond: s => (s.coinsEarned || 0) >= 500 }
);
