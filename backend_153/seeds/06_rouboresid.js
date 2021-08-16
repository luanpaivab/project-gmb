exports.seed = function (knex, Promise) {
  const arr = [];

  arr[25] = 1;

  let arr2 = [
    {
      data_hora_sistema: "2020-07-10 14:10:22",
      data_ocorrencia: "2020-07-10",
      hora_ocorrencia: "07:00",
      relato: "Vagabundo entrou na minha casa e me roubou",
      classificacao_racial: "Branco",
      classificacao_genero: "Masculino",
      tipo_armamento: "Arma de Fogo",
      estado: "Pará",
      cidade: "Belém",
      bairro: "Marco",
      endereco: "Av João Paulo II",
      numero: "1110",
      cep: "66060-232",
      //user_id: 1,
    },
  ];

  const genero = ["Masculino", "Feminino", "Prefiro Não dizer"];

  const etnia = [
    "Branco",
    "Pardo",
    "Negro",
    "Asiático",
    "Indígena",
    "Prefiro Não Dizer",
  ];

  const arma = ["Arma de Fogo", "Faca", "Não tinha"];

  const relatos = [
    "Marginal me assaltou a mão armada na minha casa",
    "Vagabundo e viciado entrou na minha kitnet e levou minha tv",
    "Invadiu meu apartamento e ameaçou minha família",
    "Disse que era da operadora X e me roubou",
    "Disse que era entregador e entregou um assalto",
    "Abriu o portão de casa e roubou meu material da obra",
  ];

  const locais = [
    "Tv. Chaco",
    "Humaitá",
    "Av João Paulo II",
    "Av. Duque de Caxias",
    "Tv. Mauriti",
    "Av. Almirante Barroso",
  ];

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  const letra = ["A", "C", "F", "O", "P", "G", "H", "D", "B", "M"];

  for (let i = 0; i < arr.length; i++) {
    const rand = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 10);
    const rand6 = Math.floor(Math.random() * 10);
    const rand7 = Math.floor(Math.random() * 6);
    const rand8 = Math.floor(Math.random() * 3);

    arr2.push({
      data_hora_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]} ${ano[rand]}:${ano[rand3]}:${dia[rand3]}`,
      data_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      hora_ocorrencia: `${ano[rand5]}:${dia[rand3]}`,
      relato: relatos[rand7],
      classificacao_racial: etnia[rand7],
      classificacao_genero: genero[rand8],
      tipo_armamento: arma[rand8],
      estado: "Pará",
      cidade: "Belém",
      bairro: "Marco",
      endereco: locais[rand7],
      numero: `${rand3}${rand6}${rand}`,
      cep: `${rand6}${rand2}${rand5}${rand5}${rand4}-${rand}${rand}${rand2}`,
      // user_id: 1,
    });
  }

  // Deletes ALL existing entries
  return knex("roubo_residencia").insert(arr2);
};
