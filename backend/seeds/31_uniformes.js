exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      servidor: "Fernando Silva Jr",
      matricula: "0315303-000",
      placa: "GMB-00735",
      uniforme_um: "Canícula Cinza (M)",
      tamanho_unifUm:38,
      uniforme_dois: "Calça Social (M)",
      tamanho_unifDois:42,
      uniforme_tres: "Camiseta Preta (M)",
      tamanho_unifTres:"M",
      uniforme_quatro: "Gandola Preta",
      tamanho_unifQuatro:40,
      calcado: "Sapato Social (M)",
      tam_calcado:42,
      cobertura: "Gorro RONDAC",
      tam_cobertura:"M",

      fiel: "Não",
      cinto_nylon: "Não",
      cinto_guarnicao: "Não",
      capa_colete: "Não",
      coldre: "Não",
      porta_algema: "Não",
      porta_tonfa: "Não",
      meia_social: "Não",
      distintivo_deQuepe: "Não",
      distintivo_boina_casquete: "Não",
      placa_peito: "Não",
      brasao_bordado_par: "Não",
      luva: "Não",
      armadura: "Não",
      cotoveleira: "Não",
      joelheira: "Não",
      protetor_canela: "Não",
      dt_requerimento: "2020-07-10",
      dth_sist: "2020-07-10",
    },
  ];

  const canicula = [
    "Canícula Azul (M)",
    "Canícula Azul (F)",
    "Canícula Cinza (M)",
    "Canícula Cinza (M)"
  ];
  
  const calca = [
    "Calça Social (M)",
    "Calça Social (F)",
    "Calça Rip Stop Azul (M)",
    "Calça Rip Stop Azul (F)",
    "Calça Rip Stop Preta (M)",
    "Calça Rip Stop Preta (F)",
    "Calça Rip Stop Camuflada (M)",
    "Calça Rip Stop Camuflada (F)",
    "Saia Operacional",
    "Saia Social",
  ];

  const camiseta = [
    "Camiseta Azul (M)",
    "Camiseta Azul (F)",
    "Camiseta Preta (M)",
    "Camiseta Preta (F)",
    "Camiseta Branca (M)",
    "Camiseta Branca (F)",
  ];

  const gandola = [
    "Gandola Azul",
    "Gandola Preta",
    "Gandola GAT",
    "Gandola ATAC",
  ];

  const calcado = [
    "Sapato Social (M)",
    "Sapato Social (F)",
    "Coturno",
    "Bota Motociclista"
  ];

  const cobertura = [
    "Gorro Branco",
    "Gorro GAT",
    "Gorro ATAC",
    "Gorro RONDAC",
    "Gorro Azul",
    "Quepe",
    "Casquete",
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
      "Alexa Amazon Bezos"
    ];

    const escolha = [
        "Sim",
        "Não"
    ]
    
    const tamanho = [
        "PP",
        "P",
        "M",
        "G",
        "GG"
    ]

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];

  const numero = [35, 36, 38, 39, 40, 41, 42, 43, 44, 46];

  for (let i = 0; i < arr.length; i++) {
    const rand0 = Math.floor(Math.random() * 9);
    const rand1 = Math.floor(Math.random() * 9);
    const rand2 = Math.floor(Math.random() * 14);
    const rand3 = Math.floor(Math.random() * 4);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 1400);
    const rand6 = Math.floor(Math.random() * 1400);
    const rand7 = Math.floor(Math.random() * 9);
    const rand8 = Math.floor(Math.random() * 6);
    const rand9 = Math.floor(Math.random() * 4);
    const rand10 = Math.floor(Math.random() * 7);
    const rand11 = Math.floor(Math.random() * 7);
    const rand12 = Math.floor(Math.random() * 10);
    const rand13 = Math.floor(Math.random() * 10);
    const rand14 = Math.floor(Math.random() * 10);
    const rand15 = Math.floor(Math.random() * 10);
    const rand16 = Math.floor(Math.random() * 2);
    const rand17 = Math.floor(Math.random() * 2);

    arr2.push({
        servidor: nomes[rand2],
        matricula: `0315303-${rand5}`,
        placa: `GMB-${rand6}`,
        uniforme_um: canicula[rand3],
        tamanho_unifUm:numero[rand12],
        uniforme_dois: calca[rand4],
        tamanho_unifDois:numero[rand13],
        uniforme_tres: camiseta[rand8],
        tamanho_unifTres:tamanho[rand11],
        uniforme_quatro: gandola[rand9],
        tamanho_unifQuatro:numero[rand14],
        calcado: calcado[rand9],
        tam_calcado:numero[rand15],
        cobertura: cobertura[rand10],
        tam_cobertura:tamanho[rand11],
  
        fiel: escolha[rand16],
        cinto_nylon: escolha[rand17],
        cinto_guarnicao: escolha[rand17],
        capa_colete: escolha[rand16],
        coldre: escolha[rand16],
        porta_algema: escolha[rand17],
        porta_tonfa: escolha[rand16],
        meia_social: escolha[rand16],
        distintivo_deQuepe: escolha[rand16],
        distintivo_boina_casquete: escolha[rand17],
        placa_peito: escolha[rand16],
        brasao_bordado_par: escolha[rand17],
        luva: escolha[rand17],
        armadura: escolha[rand16],
        cotoveleira: escolha[rand16],
        joelheira: escolha[rand17],
        protetor_canela: escolha[rand16],
        dth_sist: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        dt_requerimento: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`
    });
  }

  // Deletes ALL existing entries
  return knex("solicitacao_uniforme").insert(arr2);
};
