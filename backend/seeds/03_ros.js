exports.seed = function (knex, Promise) {
  const arr = [];

  arr[400] = 1;

  let arr2 = [
    {
      dth_sistema: "2020-07-10",
      dt_ocorrencia: "2020-07-10",
      meio_chamado: "153",
      hr_chamado: "18:40",
      hr_inicio: "16:00",
      hr_termino: "16:38",
      cod_ocorrencia: "42",
      natureza: "Roubo",
      solicitante: "Lucas Teles",
      doc_solicitante: "45678913452",
      fone_solicitante: "(91)85789585",
      autorPres: "Wanderly Andrade",
      doc_autor: "1234568",
      endAutor: "Rua Capinaremos",
      genAutor: "Masculino",
      vitima: "Dona Onete",
      doc_vitima: "101089562",
      endVitima: "Av Castilho França",
      fone_vitima: "91987894521",
      local_autor: "Seccional do Guama",
      local_vitima: "Metropolitano",
      apoio_recebido: "Rondac",
      desc_apoio: "Rondac chegou no momento que o autor empreendeu fuga",
      bo_pc: true,
      tco_pc: false,
      aut_entrega_pc: true,
      auto_apreensao_pc: false,
      auto_entrega_gmb: true,
      auto_apreensao_gmb: true,
      outros_doc: false,
      tipo_doc: "125484",
      prod_apreendido: "carteira com documentos, cartões e dinheiro",
      encaminham_obj: "Seccional da Pedreira",
      testemunha1: "Dona Vilma",
      doc_test1: "1234567852",
      end_test1: "Pedro Miranda, 123",
      bairro_test1: "Pedreira",
      fone_teste1: "(91)32258874",
      testemunha2: "Dona Cleonice",
      doc_test2: "987778547",
      end_test2: "Pedro Miranda,124",
      bairro_test2: "Pedreira",
      fone_teste2: "(91)32258877",
      gm_part1: "Meireles",
      gm_part2: "JP",
      gm_part3: "Coelho",
      gm_part4: "",
      gm_part5: "",
      gm_part6: "",
      historico: "Pegamos o meliante enquanto o mesmo tentava empreender fuga",
      condutor: "João Arnaldo",
      matricula_condutor: "11475",
      placa_condutor: "10102",
      lotacao_condutor: "Distrito 4",
      coordenador: "Fernando Silva",
      inspetoria: "DOP",
      superior_serv: "Pedro Orestes",
      estado: "PA",
      cidade: "Belém",
      endereco: "Passagem Gaspar",
      bairro: "Cidade Velha",
      numero: "859",
      cep: "78572524",
      id_user_register:1
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

    const relato = [
      "O suspeito foi detido após o ato do furto. Ele tentou fuga, mas não obteve êxito, nós guardas conseguimos fazer uma abordagem conforme os meios legais nos amparam e encaminhamos o meliante aos locais cabíveis de continuar o processar no viés jurídico",
      "A ocorrencia foi solucionada dentro dos tramites legais, não houve resistência da parte dos supeitos e os mesmo foram encaminhados à delegacia e já estão disponíveis a justiça",
      "A ocorrencia irá correr conforme a justiça legal, os suspeitos foram enquadrados e depois detidos, as vítimas foram encaminhadas ao PSN mais próximo do local da ocorrência e depois foram encaminhadas a prestar queixa na delegacia da pedreira"
    ]

    const descricao = [
      "O presente relatório é parte integrante do inquérito policial acima referenciado composto por 04 (quatro) volumes, 10 (dez) apensos, um dos quais atinente a interceptações telemáticas (apenso IX) e outro relativo a mandados de busca e apreensão (apenso X), além de 2 (duas) medidas cautelares, sendo uma atinente a interceptação ambiental e outra relativa também à expedição de mandados de busca e apreensão (da mesma forma que o apenso X), além de outros documentos citados no corpo do texto2.",

      "De fato, os trabalhos investigativos desenvolvidos no âmbito da Operação, deflagrada no dia 19/09/2013, teve como objetivo desarticular duas organizações criminosas com atuações distintas: uma de lavagem de dinheiro e outra de má gestão de recursos de entidades previdenciárias públicas.",

      "No curso da investigação atinente ao branqueamento de capitais, observou-se que os líderes da organização criminosa também desenvolviam outra atividade ilícita: o aliciamento de prefeitos e gestores de regimes próprios de Previdência Social a fim de que eles aplicassem recursos das respectivas entidades previdenciárias em fundos de investimentos com papeis pouco atrativos, geridos pela própria quadrilha e com alta probabilidade de insucesso."
    ]

  const locais = [
    "Tv. Chaco",
    "Humaitá",
    "Tv Timbó",
    "Marques",
    "Av Pedro Miranda",
    "Tv Lomas",
  ];

  const natureza = [
    "Roubo",
    "Furto",
    "Assédio",
    "Tráfico",
    "Violência Doméstica",
    "Atentado",
  ];

  const inspetorias = [
    "DOP",
    "DAGUA",
    "TATICO",
    "RONDAC",
    "ROMU",
    "NTI",
  ];

  const objetos = [
    "carteira com documentos e dinheiro",
    "relógio de pulso",
    "Celular",
    "Bolsa com documentos e alguns pertences",
    "notebook",
    "Tv smart 42",
  ];

  const chefia = [
    "Orestes",
    "Fernando Silva",
    "Guilherme",
    "JP",
    "Wagner Mattos",
    "Luan Paiva",
  ];

  const bool = [
    true,
    false
  ]

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
    const rand8 = Math.floor(Math.random() * 2);
    const rand9 = Math.floor(Math.random() * 14);
    const rand11 = Math.floor(Math.random() * 14);
    const rand12 = Math.floor(Math.random() * 14);
    const rand13 = Math.floor(Math.random() * 2);
    const rand14 = Math.floor(Math.random() * 2);
    const rand15 = Math.floor(Math.random() * 3);
    const rand16 = Math.floor(Math.random() * 3);
    const rand17 = Math.floor(Math.random() * 3);
    const rand18 = Math.floor(Math.random() * 3);
    const rand19 = Math.floor(Math.random() * 6);
    const rand20 = Math.floor(Math.random() * 6);

    arr2.push({
      dth_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      meio_chamado: "153",
      hr_chamado: `${hora[rand]}:${hora[rand2]}`,
      hr_inicio: `${hora[rand3]}:${hora[rand4]}`,
      hr_termino: `${hora[rand5]}:${hora[rand6]}`,
      cod_ocorrencia: ano[rand],
      natureza: natureza[rand7],
      solicitante: nomes[rand9],
      doc_solicitante: `${rand10}`,
      fone_solicitante: `(91)98${rand10}`,
      autorPres: nomes[rand5],
      doc_autor: `${hora[rand5]}${hora[rand6]}${rand10}`,
      endAutor: locais[rand7],
      genAutor: "Masculino",
      vitima: nomes[rand6],
      doc_vitima: `${hora[rand5]}${rand10}${hora[rand]}`,
      endVitima: locais[rand16],
      fone_vitima: `(91)98${rand9}${mes[rand2]}${rand}${rand13}`,
      local_autor: "Seccional da Pedreira",
      local_vitima: "PS 14",
      apoio_recebido: "Rondac",
      desc_apoio: descricao[rand17],
      bo_pc: bool[rand8],
      tco_pc: bool[rand13],
      aut_entrega_pc: bool[rand14],
      auto_apreensao_pc: bool[rand13],
      auto_entrega_gmb: bool[rand8],
      auto_apreensao_gmb: bool[rand14],
      outros_doc: bool[rand8],
      tipo_doc: `${rand11}${rand}${rand7}`,
      prod_apreendido: objetos[rand7],
      encaminham_obj: "Seccional da Pedreira",
      testemunha1: nomes[rand11],
      doc_test1: `${ano[rand6]}${rand10}${hora[rand11]}`,
      end_test1: locais[rand17],
      bairro_test1: "Pedreira",
      fone_teste1: `(91)98${rand13}${ano[rand2]}${dia[rand6]}${rand14}`,
      testemunha2: nomes[rand12],
      doc_test2: `${rand10}${dia[rand5]}${mes[rand6]}`,
      end_test2: locais[rand18],
      bairro_test2: "Pedreira",
      fone_teste2: `(91)98${rand19}${hora[rand2]}${mes[rand6]}${rand16}`,
      gm_part1: nomes[rand],
      gm_part2: nomes[rand2],
      gm_part3: nomes[rand3],
      gm_part4: "",
      gm_part5: "",
      gm_part6: "",
      historico: relato[rand15],
      condutor: nomes[rand4],
      matricula_condutor: `${ano[rand5]}${mes[rand]}${rand11}`,
      placa_condutor: `${dia[rand]}${rand13}`,
      lotacao_condutor: "Distrito 4",
      coordenador: chefia[rand7],
      inspetoria: inspetorias[rand7],
      superior_serv: chefia[rand20],
      estado: "PA",
      cidade: "Belém",
      endereco: locais[rand19],
      bairro: "Pedreira",
      numero: `${rand3}${rand6}${rand}`,
      cep: `${rand6}${rand2}${rand5}${rand5}${rand4}-${rand}${rand}${rand2}`,
              
    });
  }

  return knex("registro_ocorrencia").insert(arr2);
};
