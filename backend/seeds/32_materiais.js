exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      servidor: "Fernando Silva Jr",
      matricula: "0315303-000",
      placa: "GMB-00735",
      posto: "Prç Batista Campos",
      inspetoria: "DABEN",
      descricao: "Solicito 3 garrafões de água e uma torneira para pia",
      dt_solicitacao: "2020-07-10",
      dth_sist: "2020-07-10",
    },
  ];

  const nomes = [
    "Mario Couto Pereira",
    "Pedro Barros de Sousa Filho",
    "Shirley Maria Coelho",
    "Luan Paiva Barbosa",
    "Fernando Silva Jr",
    "Wagner Mattos",
    "Caio Bastos de Oliveira",
    "Vinicios Coelho Pinheiro Neto",
    "Maria Ana Lurdes Pascoal",
    "Ana Carolina Martins Carneiro",
    "Camila Salgado da Paixão",
    "Lucas Santos Correa",
    "Gabriel Barbosa Araujo",
    "Alexa Amazon Bezos",
  ];

  const postos = [
    "Portal da Amazonia",
    "Ver-o-Rio",
    "ver-o-Peso",
    "Prç República",
    "BRT",
    "Apoio Semob",
  ];

  const inspetorias = ["DOP", "DAGUA", "TATICO", "RONDAC", "ROMU", "DABEN"];

  const descricao = [
      "Solicito água, mesa, cadeira",
      "Solicito uma cafeteira expresso dupla, com função late",
      "Solicito 5 mesas de escritório, 5 poltronas, 2 computadores e 3 garrafões de água",
      "Solicito 3 mesas de escritório, 3 cadeiras, água, escrivaninha",
  ]

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];

  const numero = [35, 36, 38, 39, 40, 41, 42, 43, 44, 46];

  for (let i = 0; i < arr.length; i++) {
    const rand0 = Math.floor(Math.random() * 9);
    const rand1 = Math.floor(Math.random() * 9);
    const rand2 = Math.floor(Math.random() * 14);
    const rand3 = Math.floor(Math.random() * 6);
    const rand4 = Math.floor(Math.random() * 6);
    const rand5 = Math.floor(Math.random() * 1400);
    const rand6 = Math.floor(Math.random() * 1400);
    const rand7 = Math.floor(Math.random() * 9);
    const rand8 = Math.floor(Math.random() * 4);

    arr2.push({
      servidor: nomes[rand2],
      matricula: `0315303-${rand5}`,
      placa: `GMB-${rand6}`,
      posto: postos[rand3],
      inspetoria: inspetorias[rand4],
      descricao:descricao[rand8],
      dt_solicitacao: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
      dth_sist: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
    });
  }

  // Deletes ALL existing entries
  return knex("requisicao_material").insert(arr2);
};
