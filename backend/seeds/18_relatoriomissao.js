exports.seed = function (knex, Promise) {
  const arr = [];

  arr[61] = 1;

  let arr2 = [
    {
      dth_sistema: "2020-07-08",
      dt_ocorrencia: "2020-07-08",
      hr_entrada: "17:22",
      hr_saida: "19:30",
      tipo_missao: "Operacional",
      orgao_responsavel: "OAB",
      comandante: "Comandante Moura",
      matricula_comandate:"11475",
      guarnicao: "DOP",
      gm_part1: "Fernando Silva",
      gm_part2: "Luan Paiva",
      gm_part3: "Wagner Matos",
      gm_part4: "Iglan Cardeal",
      orgaos_participantes: "MP, STF, TJ",
      relato: "A Missão consiste em operacionalizar os documentos da guarda municipal e tornar a mesma um centro de gestão de documentos moderno e seguro. Contamos com o apoio de todos para tal feito, assim, melhoraremos a produção e o trabalho de muitos.",
      coordenador: "Inspetor Orestes",
      inspetoria: "DOP",
      superior_servico: "Antonio Carlos",
      estado: "Pa",
      cidade: "Belém",
      endereco: "Tv Curuzu",
      bairro: "Marco",
      numero: "222",
      cep: "66089-087",
      id_user_register: 2
    },
  ];

  const nomes = ["Mario Couto Pereira", 
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
    "Alexa Amazon Brigs"
  ];

  const tipo = [
    "Operacional",
    "Prevenção de Tumulto",
    "Prevenção de Brigas",
    "Escolta",
    "Tática",
    "Resgate",
  ];

  const orgao = [
    "OAB",
    "SEPLAM",
    "SENASP",
    "SEMOB",
    "MP",
    "TRT",
  ];

  const relatorio = [
    "A Missão consiste em operacionalizar os documentos da guarda municipal e tornar a mesma um centro de gestão de documentos moderno e seguro. Contamos com o apoio de todos para tal feito, assim, melhoraremos a produção e o trabalho de muitos.",
    "A missão será baseada nas operações de inteligência semelhantes as da equipe de segurança do presidente e serão usados armamento de calibres pesados e acessórios de poderio militar. Tudo para proteger o impecável time do paysandu"
  ];

  const inspetorias = [
    "DOP",
    "DAGUA",
    "TATICO",
    "RONDAC",
    "ROMU",
    "GAT",
  ];

  const chefia = [
    "Orestes",
    "Fernando Silva",
    "Guilherme",
    "JP",
    "Wagner Mattos",
    "Luan Paiva",
  ];

  const locais = [
    "Tv. Chaco",
    "Humaitá",
    "Tv Timbó",
    "Marques",
    "Av Pedro Miranda",
    "Tv Lomas",
  ];

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  const hora = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];

  for (let i = 0; i < arr.length; i++) {
    min = Math.ceil(1);
    max = Math.floor(400);
    rand16 = Math.floor(Math.random() * (max - min)) + min;

    const rand = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 1);
    const rand6 = Math.floor(Math.random() * 10);
    const rand7 = Math.floor(Math.random() * 6);
    const rand8 = Math.floor(Math.random() * 6);
    const rand9 = Math.floor(Math.random() * 6);
    const rand10 = Math.floor(Math.random() * 14);
    const rand11 = Math.floor(Math.random() * 14);
    const rand12 = Math.floor(Math.random() * 14);
    const rand13 = Math.floor(Math.random() * 14);
    const rand14 = Math.floor(Math.random() * 14);
    const rand15 = Math.floor(Math.random() * 14);

    arr2.push({
      dth_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      hr_entrada: `${hora[rand]}:${hora[rand2]}`,
      hr_saida: `${hora[rand3]}:${hora[rand4]}`,
      tipo_missao: tipo[rand7],
      orgao_responsavel: orgao[rand7],
      comandante: chefia[rand8],
      matricula_comandate:`${ano[rand5]}${mes[rand]}${rand11}`,
      guarnicao: inspetorias[rand9],
      gm_part1: nomes[rand10],
      gm_part2: nomes[rand11],
      gm_part3: nomes[rand12],
      gm_part4: nomes[rand13],
      orgaos_participantes: `${orgao[rand8]}, ${orgao[rand9]}`,
      relato: relatorio[rand5],
      coordenador: chefia[rand7],
      inspetoria: inspetorias[rand8],
      superior_servico: chefia[rand9],
      estado: "PA",
      cidade: "Belém",
      endereco: locais[rand7],
      bairro: "Pedreira",
      numero: `${rand3}${rand6}`,
      cep: `${rand6}${rand2}${rand3}8-${rand}0`,
      
    });
  }

  // Deletes ALL existing entries
  return knex("relatorio_missao").insert(arr2);
};
