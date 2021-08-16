exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      dth_sistema: "2020-07-08",
      dt_comunicado: "2020-07-08",
      hr_comunicado: "17:22",
      condutor: "Fernando Silva",
      matricula_condutor:"11523",
      funcao_condutor: "Motorista",
      lotacao: "Prc República",
      fone_condutor: "(91) 98433-4555",
      posto: "GBel-0014",
      relato:"Comunico através deste comunicado interno que estou comunicando este comunicado para assim preencher os dados desta equipe para se ter uma acurácia maior perante os dados a serem inseridos posteriormente de modo a ser um documento oficial",
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

  const funcao = [
    "Motorista",
    "Apoio",
    "Chefe de Setor",
    "Tático",
    "Suporte",
    "Planejamento",
  ];

  const lotacao = ["Prc República", 
  "Prc Batista Campos", 
  "Ver-o-Peso", 
  "Portal", 
  "Bosque", 
  "Nazaré"
];

  const relatorio = [
    "Comunico através deste comunicado interno que estou comunicando este comunicado para assim preencher os dados desta equipe para se ter uma acurácia maior perante os dados a serem inseridos posteriormente de modo a ser um documento oficial",
    "Este comunicado também serve para mostrar aos integrantes do projeto como que deve ser o padrão text de uma tabela e também mostra onde padronizar espaços de formatação das páginas impressas",
  ];

  const inspetorias = ["DOP", "DAGUA", "TATICO", "RONDAC", "ROMU", "GAT"];

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
    const rand5 = Math.floor(Math.random() * 2);
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
      dt_comunicado: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      hr_comunicado: `${hora[rand]}:${hora[rand2]}`,
      condutor: nomes[rand10],
      matricula_condutor:`${ano[rand5]}${mes[rand]}${rand11}`,
      funcao_condutor: funcao[rand7],
      lotacao: lotacao[rand7],
      fone_condutor: `(91)98${rand10}`,
      posto: `GBel-00${rand12}`,
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
  return knex("comunicado_interno").insert(arr2);
};
