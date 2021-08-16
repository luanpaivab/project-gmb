exports.seed = function (knex, Promise) {
  const arr = [];

  arr[100] = 1;

  let arr2 = [{
    dth_sistema: "2020-07-10 11:40:01",
    dt_ocorrencia: "2020-07-10",
    hr_ocorrencia: "07:00",
    tipo_veiculo: "carro",
    marca_modelo: "fiat uno",
    placa_veiculo: "ABC-1234",
    cor_veiculo: "Preto",
    estado: "Pará",
    cidade: "Belém",
    bairro: "São Brás",
    endereco: "Av. Governador José Malcher",
    numero: "1110",
    cep: "66060-232",
    id_foto:3
    //user_id: 1,
  }];

  const cor = [
    "Preto",
    "Prata",
    "Vermelho",
    "Branco",
    "Verde",
    "Vinho",
    "Laranja",
    "Magenta",
    "Branco Perolado",
    "Outra"
  ];

  const marca = [
    "Fiat Toro",
    "Renault Sandero",
    "Chevrolet Onix",
    "Renault Kwid",
    "Fiat Argo",
    "Ford Ka",
    "Hyundai HB20",
    "BMW X-Tudo",
    "Honda Civic",
    "Peugeot 308"
  ];

  const tipo_veiculo = ["Moto", "patins",
    "skate", "lancha",
     "bicicleta",
    "barco"
  ];

  const dia = ["01", "15", "07",
    "28", "13", "04", "21", "25", "11", "17"
  ];
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
    const rand8 = Math.floor(Math.random() * 6 + 1);

    arr2.push({
      dth_sistema: `2020-${mes[rand2]}-${dia[rand3]} ${ano[rand]}:${ano[rand3]}:${dia[rand3]}`,
      dt_ocorrencia: `2020-${mes[rand2]}-${dia[rand3]}`,
      hr_ocorrencia: `${ano[rand5]}:${dia[rand3]}`,
      tipo_veiculo: tipo_veiculo[rand7],
      marca_modelo: marca[rand3],
      placa_veiculo: `${letra[rand3]}${letra[rand2]}${letra[rand4]}-${rand}${rand4}${rand5}${rand6}`,
      cor_veiculo: cor[rand2],
      estado: "Pará",
      cidade: "Belém",
      bairro: "São Brás",
      endereco: "Av. Governador José Malcher",
      numero: `${rand3}${rand6}${rand}`,
      cep: `${rand6}${rand2}${rand5}${rand5}${rand4}-${rand}${rand}${rand2}`,
      id_foto:rand8
      //user_id: 1,
    });
  }

  // Deletes ALL existing entries
  return knex('roubo_de_veiculos').insert(arr2);

};


