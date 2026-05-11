export interface MathChallenge {
  problem: string;
  solution: string;
  translation: string;
  options: string[];
  correctAnswer: string;
}

export const MATH_VOCAB = {
  numbers: [
    { n: "0", w: "cero" },
    { n: "1", w: "uno" },
    { n: "2", w: "dos" },
    { n: "3", w: "tres" },
    { n: "4", w: "cuatro" },
    { n: "5", w: "cinco" },
    { n: "6", w: "seis" },
    { n: "7", w: "siete" },
    { n: "8", w: "ocho" },
    { n: "9", w: "nueve" },
    { n: "10", w: "diez" },
    { n: "20", w: "veinte" },
    { n: "30", w: "treinta" },
    { n: "40", w: "cuarenta" },
    { n: "50", w: "cincuenta" }
  ],
  operations: [
    { s: "+", w: "más", am: "պլյուս" },
    { s: "-", w: "menos", am: "մինուս" },
    { s: "*", w: "por", am: "անգամ" },
    { s: "/", w: "entre", am: "բաժանած" },
    { s: "=", w: "son / es igual a / es", am: "հավասար է" }
  ]
};

export const MATH_CHALLENGES: MathChallenge[] = [
  {
    problem: "dos más tres",
    translation: "երկու գումարած երեք",
    solution: "cinco",
    options: ["cuatro", "cinco", "seis"],
    correctAnswer: "cinco"
  },
  {
    problem: "diez menos cuatro",
    translation: "տասը հանած չորս",
    solution: "seis",
    options: ["cinco", "seis", "siete"],
    correctAnswer: "seis"
  },
  {
    problem: "tres por tres",
    translation: "երեք անգամ երեք",
    solution: "nueve",
    options: ["seis", "ocho", "nueve"],
    correctAnswer: "nueve"
  },
  {
    problem: "ocho entre dos",
    translation: "ութ բաժանած երկուսի",
    solution: "cuatro",
    options: ["dos", "երեք", "cuatro"],
    correctAnswer: "cuatro"
  },
  {
    problem: "cinco más cinco",
    translation: "հինգ գումարած հինգ",
    solution: "diez",
    options: ["nueve", "diez", "once"],
    correctAnswer: "diez"
  },
  {
    problem: "veinte menos diez",
    translation: "քսան հանած տասը",
    solution: "diez",
    options: ["diez", "once", "doce"],
    correctAnswer: "diez"
  },
  {
    problem: "dos por cuatro",
    translation: "երկու անգամ չորս",
    solution: "ocho",
    options: ["seis", "siete", "ocho"],
    correctAnswer: "ocho"
  },
  {
    problem: "doce entre tres",
    translation: "տասներկու բաժանած երեքի",
    solution: "cuatro",
    options: ["tres", "cuatro", "cinco"],
    correctAnswer: "cuatro"
  },
  {
    problem: "siete más ocho",
    translation: "յոթ գումարած ութ",
    solution: "quince",
    options: ["catorce", "quince", "dieciséis"],
    correctAnswer: "quince"
  },
  {
    problem: "treinta menos cinco",
    translation: "երեսուն հանած հինգ",
    solution: "veinticinco",
    options: ["veinte", "veinticinco", "treinta"],
    correctAnswer: "veinticinco"
  },
  {
    problem: "cinco por cuatro",
    translation: "հինգ անգամ չորս",
    solution: "veinte",
    options: ["diez", "quince", "veinte"],
    correctAnswer: "veinte"
  },
  {
    problem: "dieciséis entre cuatro",
    translation: "տասնվեց բաժանած չորսի",
    solution: "cuatro",
    options: ["cuatro", "cinco", "seis"],
    correctAnswer: "cuatro"
  },
  {
    problem: "once más seis",
    translation: "տասնմեկ գումարած վեց",
    solution: "diecisiete",
    options: ["dieciséis", "diecisiete", "dieciocho"],
    correctAnswer: "diecisiete"
  },
  {
    problem: "cincuenta menos veinte",
    translation: "հիսուն հանած քսան",
    solution: "treinta",
    options: ["veinte", "treinta", "cuarenta"],
    correctAnswer: "treinta"
  },
  {
    problem: "dos por seis",
    translation: "երկու անգամ վեց",
    solution: "doce",
    options: ["diez", "once", "doce"],
    correctAnswer: "doce"
  },
  {
    problem: "veintiuno entre tres",
    translation: "քսանմեկ բաժանած երեքի",
    solution: "siete",
    options: ["seis", "siete", "ocho"],
    correctAnswer: "siete"
  },
  {
    problem: "nueve más siete",
    translation: "ինը գումարած յոթ",
    solution: "dieciséis",
    options: ["quince", "dieciséis", "diecisiete"],
    correctAnswer: "dieciséis"
  },
  {
    problem: "cuarenta menos uno",
    translation: "քառասուն հանած մեկ",
    solution: "treinta y nueve",
    options: ["treinta y ocho", "treinta y nueve", "cuarenta"],
    correctAnswer: "treinta y nueve"
  },
  {
    problem: "tres por cuatro",
    translation: "երեք անգամ չորս",
    solution: "doce",
    options: ["once", "doce", "trece"],
    correctAnswer: "doce"
  },
  {
    problem: "cero más uno",
    translation: "զրո գումարած մեկ",
    solution: "uno",
    options: ["cero", "uno", "dos"],
    correctAnswer: "uno"
  }
];
