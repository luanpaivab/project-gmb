exports.seed = function (knex, Promise) {
  const arr = [];

  arr[25] = 1;

  let arr2 = [
    {
      dth_sistema: "2020-07-07 23:10:44",
      dt_ocorrencia: "2020-07-08",
      hr_ocorrencia: "07:00",
      local_incendio: "Residencial",
      relato:"Teve incêndio na casa devido a um gato que tinha no poste",
      classif_racial: "Branco",
      classific_genero: "Masculino",
      estado: "Pará",
      cidade: "Belém",
      bairro: "Marco",
      endereco: "Av João Paulo II",
      numero: "1110",
      cep: "66060-232",
      //user_id: 1,
    },
  ];

  const genero = ["Masculino", "Feminino", "Prefiro Não Dizer"];

  const etnia = [
    "Branco",
    "Pardo",
    "Negro",
    "Asiático",
    "Indígena",
    "Prefiro não Dizer",
  ];

  const onde = [
    "Residencial",
    "Repartição Pública",
    "Loja Comercial",
    "Repartição Privada",
    "Incendio Veicular",
    "Incêndio em via Pública",
  ];

  const locais = [
    "Tv. Chaco",
    "Humaitá",
    "Av João Paulo II",
    "Av. Duque de Caxias",
    "Tv. Mauriti",
    "Av. Almirante Barroso",
  ];
  
  const relato = [
    "Teve incêndio na casa devido a um gato que tinha no poste",
    "Vazamento de gás de cozinha",
    "Tava fritando umas coxinhas, o oleo tava muito quente e subiu a chama",
    "Apenas Danos Materiais",
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
    const rand8 = Math.floor(Math.random() * 2);
    const rand9 = Math.floor(Math.random() * 4);

    arr2.push({
      dth_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]} ${ano[rand]}:${ano[rand3]}:${dia[rand3]}`,
      dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      hr_ocorrencia: `${ano[rand5]}:${dia[rand3]}`,
      local_incendio: onde[rand7],
      relato:relato[rand9],
      classif_racial: etnia[rand7],
      classific_genero: genero[rand8],
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
  return knex("incendio").insert(arr2);
};
