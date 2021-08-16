exports.seed = function (knex, Promise) {
  const arr = [];

  arr[87] = 1;

  let arr2 = [
    {
      dt_ocorrencia: "2020-07-10",
      hr_chamada: "18:40",
      hr_ocorrencia: "16:00",
      operador: 4,
      origem: "gbel153",
      sexo: "Masculino",
      tipo_ocorrencia: "22 - Roubo e Furto",
      descricao:"Houve um furto a uma loja de conveniencia",
      encaminhamento:"gbel",
      desfecho:"Verificando",
      deslocamento_vtr:"Não",
      solicitante: "Augusto Pires",
      //doc: "45678913452",
      fone: "(91)98578-9585",
      endereco: "Passagem Pirajás",
      //cidade: "Belém",
      bairro: "Marco",
      superior_servico: "Antonio Carlos",
    },
  ];

  const nomes = [
    "Mario Couto",
    "Pedro Barros",
    "Shirley Maria",
    "Luan Paiva",
    "Fernando Silva",
    "Wagner Mattos",
    "Caio Bastos",
    "Vinicios Coelho",
    "Maria Ana",
    "Ana Carol",
    "Camila Salgado",
    "Lucas Santos",
    "Gabriel Barbosa",
    "Alexa Amazon",
  ];

  const etnia = [
    "Branco",
    "Pardo",
    "Negro",
    "Asiático",
    "Indígena",
    "Prefiro Não Dizer",
  ];

  const funcao = [
    "motorista",
    "guarda",
    "motoqueiro",
    "adjunto",
    "escudeiro",
    "encarregado",
  ];

  const relato = [
    "O suspeito foi detido após o ato do furto",
    "A ocorrencia foi solucionada dentro dos tramites legais",
    "A ocorrencia irá correr conforme a justiça legal",
  ];

  const integridade = [
    "Vítima Fatal",
    "Vítima com Escoriações Leves",
    "Vítima em estado grave",
    "Apenas Danos Materiais",
    "Danos ao meio ambiente",
    "Danos à área Florestal",
  ];

  const locais = [
    "Tv. Chaco",
    "Humaitá",
    "Av João Paulo II",
    "Av. Duque de Caxias",
    "Tv. Mauriti",
    "Av. Almirante Barroso",
  ];

  const inspetorias = ["DOP", "DAGUA", "TATICO", "RONDAC", "ROMU", "NTI"];

  const genero = ["Masculino", "Feminino", "Prefiro Não dizer"];

  const arma = ["Arma de Fogo", "Faca", "Não tinha"];

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  const hora = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];

  for (let i = 0; i < arr.length; i++) {
    min = Math.ceil(1234567);
    max = Math.floor(9876543);
    rand10 = Math.floor(Math.random() * (max - min)) + min;

    const rand = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 10);
    const rand6 = Math.floor(Math.random() * 10);
    const rand7 = Math.floor(Math.random() * 6);
    const rand8 = Math.floor(Math.random() * 5 + 1);
    const rand9 = Math.floor(Math.random() * 14);
    const rand11 = Math.floor(Math.random() * 14);
    const rand12 = Math.floor(Math.random() * 2);

    arr2.push({
      dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      hr_chamada: `${hora[rand5]}:${hora[rand6]}`,
      hr_ocorrencia: `${hora[rand5]}:${hora[rand6]}`,
      operador: rand8,
      origem: "gbel153",
      sexo: genero[rand12],
      tipo_ocorrencia: "22 - Roubo e Furto",
      descricao:"Houve um furto a uma loja de conveniencia",
      encaminhamento:"gbel",
      desfecho:"Verificando",
      deslocamento_vtr:"Não",
      solicitante: nomes[rand9],
      //doc: `${rand10}`,
      fone: `(91)8${rand10}`,
      endereco: locais[rand7],
      //cidade: "Belém",
      bairro: "Marco",
      superior_servico: nomes[rand11],
    });
  }

  // Deletes ALL existing entries
  return knex("sim").insert(arr2);
};
