exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      dth_sist: "2020-07-10",
      solicitante: "GMB-00735",
      inspetoria_solicitante: "DABEN",
      posto_solicitante: "Prç Batista Campos",
      fone_solicitante: "(91)98852-1235",
      solicitado: "GMB-00992",
      inspetoria_solicitado: "DOP",
      posto_solicitado: "Prç República",
      fone_solicitado: "(91)99233-2021",
      mes_troca: "Abril/2021",
      turno_solicitante: "Manhã",
      turno_solicitado: "Noite",
      data_solicitacao: "2021-03-10",
      id_user_register:3,
    },
  ];

  const postos = [
    "Portal da Amazonia",
    "Ver-o-rio",
    "ver-o-peso",
    "Prç República",
    "BRT",
    "Apoio Semob",
  ];

  const inspetorias = ["DOP", "DAGUA", "TATICO", "RONDAC", "ROMU", "DABEN"];

  const op1 = [
    "Janeiro/2021",
    "Julho/2021",
    "Dezembro/2021",
    "Outubro/2021",
    "Fevereiro/2021",
    "Março/2021",
    "Abril/2021",
    "Maio/2021",
    "Junho/2021",
    "Agosto/2021",
    "Setembro/2021",
    "Novembro/2021",
  ];

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];

  for (let i = 0; i < arr.length; i++) {
    const rand0 = Math.floor(Math.random() * 9);
    const rand1 = Math.floor(Math.random() * 9);
    const rand2 = Math.floor(Math.random() * 6);
    const rand3 = Math.floor(Math.random() * 6);
    const rand4 = Math.floor(Math.random() * 6);
    const rand5 = Math.floor(Math.random() * 999);
    const rand6 = Math.floor(Math.random() * 999);
    const rand7 = Math.floor(Math.random() * 9);
    const rand8 = Math.floor(Math.random() * 12);
    const rand9 = Math.floor(Math.random() * 9);

    arr2.push({
      dth_sist: `2021-${mes[rand1]}-${dia[rand7]}`,
      solicitante: `GMB-00${rand5}`,
      inspetoria_solicitante: inspetorias[rand2],
      posto_solicitante: postos[rand3],
      fone_solicitante: `(91)98${rand0}${ano[rand1]}-${dia[rand0]}${mes[rand1]}`,
      solicitado: `GMB-00${rand6}`,
      inspetoria_solicitado: inspetorias[rand3],
      posto_solicitado: postos[rand4],
      fone_solicitado: `(91)98${rand1}${ano[rand0]}-${dia[rand1]}${mes[rand0]}`,
      mes_troca: op1[rand8],
      turno_solicitante: "Manhã",
      turno_solicitado: "Noite",
      data_solicitacao: `2021-${mes[rand1]}-${dia[rand7]}`,
    });
  }

  // Deletes ALL existing entries
  return knex("troca_turno").insert(arr2);
};
