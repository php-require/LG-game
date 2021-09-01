/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Сколько вам лет?", ["18 - 20", "21 - 25", "26 - 30", "31 - 34", "35 и старше"],
        [
            "this.score.notSuitable++",
            "this.score.best++",
            "this.score.honest++",
            "this.score.honest++",
            "this.score.rsp++"
        ]
    ],
    [
        "Вы росли в полной семье?", ["В моей семье оба родителя", "Только Мама", "Мама и отчим", "Без родителей", "Другое"],
        [
            "this.score.best++;",
            "this.score.notSuitable++",
            "this.score.rsp++;",
            "this.score.notSuitable++",
            "this.score.defective++"
        ]
    ],
    [
        "Вы рассказываете родным, знакомым о проблемах в вашей семье?", ["Да", "Нет", "Частично"],
        [
            "this.score.defective++",
            "this.score.best++",
            "this.score.notSuitable++"
        ]
    ],

    [
        "Вам важно, что бы, на первом месте в вашей паре был мужчина?", ["Для меня это важно", "Я за равнозначные права", "неважно кто"],
        [
            "this.score.best++; this.score.honest++",
            "this.score.notSuitable++",
            "this.score.defective++"
        ]
    ],
    [
        "Вы используете секс в личной выгоде (например просили что то купить)", ["Нет", "Да", "Было несколько раз", "Пользуюсь этим"],
        [
            "this.score.honest++",
            "this.score.rsp++",
            "this.score.notSuitable++",
            "this.score.defective++"
        ]
    ],
    [
        "Вы получали подарок от мужчины через скандал, провокацию или манипуляцию", ["Только так можно что то попросить", "Нет", "Иногда", "Я боюсь что то просить"],
        [
            "this.score.rsp++",
            "this.score.honest++",
            "this.score.notSuitable++",
            "this.score.defective++"
        ]
    ],
    [
        "Вы оскорбляли своего мужчину", ["Да", "Нет и никогда не буду", "Только в ответ"],
        [
            "this.score.defective++; this.score.best--;",
            "this.score.best++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "Вы стесняетесь ходить голой перед своим мужчиной", ["Да", "Иногда", "Нет"],
        [
            "this.score.notSuitable++",
            "this.score.honest++",
            "this.score.best++"
        ]
    ],
    [
        "Вы кокетничаете с коллегами по работе находясь в паре", ["Нет", "Да", "Редко, так веселее работать"],
        [
            "this.score.best++",
            "this.score.rsp++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "У вас есть друзья мужского пола с которыми вы переписываетесь?", ["Нет", "Только дружеская переписка", "У меня много друзей"],
        [
            "this.score.best++;",
            "this.score.notSuitable++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "Вас бросал мужчина?", ["Я сама уходила", "Нет", "Раставались друзьями", "Да"],
        [
            "this.score.defective++",
            "this.score.honest++",
            "this.score.rsp++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "Вы уходили из семьи при наличии детей?", ["Да, но временно", "Да", "Нет"],
        [
            "this.score.defective++",
            " this.score.rsp+=4",
            "this.score.best++"
        ]
    ],
    [
        "У вас есть дети от предидущих браков", ["Да", "Нет", "У меня нет разводов"],
        [
            "this.score.rsp+=5",
            "this.score.best++",
            "this.score.best++"
        ]
    ],
    [
        "Вы вкладываетесь финансово в своего мужчину?", ["Да", "Редко, если нужно", "Нет, мужчина сам найдет выход из финаносовой проблемы", "Мои деньги это мои деньги, его деньги это наши"],
        [
            "this.score.best++",
            "this.score.honest++",
            "this.score.notSuitable++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "Часто отказываете в интиме?", ["Бывает, из за плохого самочувствия", " Иногда от нежелания, выдумываю причину", "Всегда только за"],
        [
            "this.score.rsp++",
            "this.score.defective++",
            "this.score.honest++",
        ]
    ],
    [
        "Вы поддерживаете порядок в доме?", ["Да, убираюсь каждый день", "Убираюсь пару раз в неделю или реже", "Убираемся вместе", "Использую cleaning компании"],
        [
            "this.score.notSuitable++",
            "this.score.honest++",
            "this.score.notSuitable++",
            "this.score.notSuitable++",
        ]
    ],
    [
        "В готовите еду для своего мужчины?", ["Редко", "Он готовит сам (любит)", "Готовлю и переживаю если, он не ел", "Готовлю только для детей"],
        [
            "this.score.notSuitable++",
            "this.score.notSuitable++",
            "this.score.best++",
            "this.score.rsp++"
        ]
    ],
    [
        "Вы стираете вещи своему мужчине", ["Да", "Да но отдельно", "Нет"],
        [
            "this.score.best++",
            "this.score.defective++",
            "this.score.notSuitable++"
        ]
    ],
    [
        "Вы платите за мужчину в ресторане?", ["Нет, платить должен мужчина", "Готова заплатить пополам", "Не важно кто платит"],
        [
            "this.score.defective++",
            "this.score.honest++;",
            "this.score.honest++;"
        ]
    ],
    [
        "Вы делаете подарки без повода, своему мужчине?", ["Да", "Нет"],
        [
            "this.score.honest++;",
            "this.score.honest--;"
        ]
    ],
    [
        "Когда есть напряжение в отношениях, вы пытаетесь сгладить?", ["Жду этих действий от мужчины", "Я сама сглажу конфликт, не важно кто виноват"],
        [
            "this.score.notSuitable++",
            "this.score.best++"
        ]
    ],
    [
        "Возникало у вас чувство что возможно вы его не любите", ["Да", "Нет"],
        [
            "this.score.rsp++",
            "this.score.honest++;"

        ]
    ],
    [
        "С любимым рай в шалаше", ["Это не про меня, мне нужны человеческие условия", "Без проблем"],
        [
            "this.score.rsp++;",
            "this.score.best++"

        ]
    ],
    [
        "У мужчины должна быть", ["Своя квартира и машина", "Хотя бы квартира с родителями", "не важно"],
        [
            "this.score.defective++;",
            "this.score.honest++;",
            "this.score.best++;"
        ]
    ],
    [
        "Надо слушать себя?", ["Я предпочитаю обсудить все с мужчиной", "Да, только себя", "Себя, родителей, и подруг", "Только мужчину"],
        [
            "this.score.best++;",
            "this.score.defective++;",
            "this.score.defective++",
            "this.score.best++"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'infested': {
        name: "Женщина загадка",
        description: "Возможно вы лукавите отвечая на вопросы. Советуем пройти тест ещё раз и быть честной к себе. Но если это не так, тогда смотрите советы ниже.",
        quote1: "- Вы в чем то хороши, а некоторые вещи будут пугать мужчин. Хотя мужчины и ищут оправдания женским поступкам, вам все же необходимо стать лучше.",
        quote2: "- У вас наблюдаются резкие перемены в способности выполнять социальные функции, Проанализируйте как большинство людей относятся к вопросам на которые вы отвечали.",
        author: "- Наш искусственный разум рекомендует вам почитать книги по психологии на тему отношений между мужчиной и женщиной.",
        points: "5"
    },
    'defective': {
        name: "Испорченная (БП)",
        description: "Испорченная женщина не готова трудиться для достижения общих целей, она рассматривает мужчину как источник личного обогащения. Это выражается в нежелании вкладываться в отношения вообще, либо вкладываться по минимуму — ему носки, а ты мне айфон. Мои деньги — это мои деньги, твои деньги — это наши деньги. Мужчина мне все и всегда должен, а я ему никогда и ничего.",
        quote1: "- На первом месте должен быть всегда ваш мужчина, потом дети и все остальные.",
        quote2: "- Не позволяйте посторонним людям влиять на вашу пару, маме, папе, подругам, резко присекайте разговоры о вас, это только ваше личное дело, запомните сор из избы не выносят, это важный кирпичик в фундаменте вашего счастья.",
        author: "- Порой вам кажется что мужчина несет вздор или вещи которые не укладываются у вас в голове, Обсудите все лично, найдите корень проблемы, не избегайте советов психологов. Научитесь признавать ошибки на которые указывает вам мужчина, даже если вы сейчас в корне не согласны с его доводами.",
        points: "10"
    },
    'rsp': {
        name: "РСП",
        description: "РСП – Разведенка с прицепом. Сокращение, популярное в интернете, придумали мужчины. Так они называют одинокую женщину с ребенком, которая ищет кормильца.",
        quote1: "- Некоторым мужчинам удобно* использовать РСП. Но как только РСП включает демо-режим*, её сливают.",
        quote2: "- РСП мужчины относят к низкоранговым самкам, С ними не может быть семьи, так как одну семью они уже разрушили, в редких исключения РСП попадаются Олени* - с таким типом мужчин женщина не будет счастлива и может за него держаться от безысходности, счастье женщины лепится из другого теста.",
        author: "- РСП и дамы за 35 сильным мужчинам не интересны. В бабьей яме растут неполноценные дети, Сохраняйте семью, это ваша ответственность, мужчина этого делать не должен!",
        points: "20"
    },
    'notSuitable': {
        name: "Непригодная для семьи",
        description: "С непригодной для семьи, постоянно происходят невероятные события. А виной тому её характер, привычки и убеждения. С утра до вечера её партнер будет слушать недовольства. Чаще это ситуация в которой она оказалась в следствии воспитания, убеждений, представлений.",
        quote1: "- Непригодная женщина - это та, которая занята саморазвитием, имеет свой широкий круг общения, которая учитывает свои интересы и желания.",
        quote2: "- Растворитесь в интересах мужчины, станьте ему музой, вы добьётесь большего успеха в своих интересах через заботу, любовь и ласку к мужчине.",
        author: "- Крепкая и счастливая семья дежится на сильном мужчине, и главная ваша задача приумножить его силу - Это называется женская мудрость",
        points: "30"
    },

    'honest': {
        name: "Благородная девушка с намёком на счастье",
        description: "Благородство в женщине определяется поступками. В нем сочетается очень много поведенческих моделей, но особо явно выделяются: отсутствие агрессии, стервозности, жестокости, капризности, наличие деликатности и умения прощать. Благородная девушка никогда не позволит себе нанести вред тем, кто изначально слабее не только физически, но и душевно. Она умеет прощать и не пытается сделать месть смыслом жизни. Она признает право других на ошибку.",
        quote1: "- Вы так близки к счастью, а может и уже счастливы. в любом случае ваши ответы достойны и ваше право быть с достойным мужчиной не оспоримо.",
        quote2: "- Добейтесь более высокого статуса в игре, примите во внимание свои ошибочные ответы и скорее переходите на новый уровнь!",
        author: "",
        points: "100"
    },
    'best': {
        name: "Вы прекрасная избранница для мужчины",
        description: "Вы та с которой захочется создать крепкие отношения с далеко идущими перспективами, Вы идеальны как мать и жена. Ваш избранник будет безусловно счастлив, а вы вместе с ним. Такие как вы настоящее сокровище.",
        quote1: "Ваша семья будет окутана любовью и заботой, а ваш избранник будет готов достать звезды с неба и положить к вашим ногам",
        quote2: "Ваши дети вырастут в полноценные здоровые личности и так же будут счастливы.",
        author: "Перед вашей мудростью склоняется даже искусственный интеллект. Покажите свой результат знакомым, пускай они знаю кем восхищаться в своём окружении!",
        points: "160"
    },
    'hybrid': {
        name: "Принцесса",
        description: "Чистота формы и чистота эссенции присутствует в вашем организме. Вы одно из немногих существ, которых стремились создать Зел-Нага. Доктор Наруд сумел воплотить все планы Зел-Нага в жизнь и теперь вы идеальное орудие. Не смотря на то что вы гибрид зерга и протосса вы не чувствуете симпатии к этим расам, а считаете высшей расой Гибридов.",
        quote1: "-Всё только начинается. Амун шептал об этом с далёких звёзд.",
        quote2: "",
        author: "(Наруд)",
        points: "70"
    }
}