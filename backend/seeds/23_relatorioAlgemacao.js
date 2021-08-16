exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dth_sistema: "2020-07-08",
        dt_ocorrencia: "2020-07-08",
        condutor:"Manuel Carlos",
        matricula_condutor: "11475",
        funcao_condutor:"Motorista",
        auto_presumivel:"Jairo Quadros",
        doc_autor:"12345678910",
        justificativa_algemacao:"Fuga",
        relatorio_ocorrencia:"A algemação do detido deu-se de modo que o mesmo, ao ser pego em flagrante, tentou a fuga e não obteve êxito",
        coordenador:"Fernando Silva",
        inspetoria:"DOP",
        superior_servico:"Pedro Orestes",
        // ro_Id: 20
        id_user_register:4
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
      "Alexa Amazon Bezos"
    ];

    const justificativa = [
        "Resistência",
        "Fuga"
    ]
  
    const relato = [
    "O suspeito foi algemado por desacato à autoridade, o mesmo se encontrava com comportamento de hostilidade, então foi tomado a providência da algemação",
    "O detido foi algemado, pois quando deu-se a voz de prisão, o meliante apresentou resistência e teve que ser contido imediatamente.",
    "A algemação do detido deu-se de modo que o mesmo, ao ser pego em flagrante, tentou a fuga e não obteve êxito"
    ]
    
    const funcao = [
        "motorista",
        "guarda",
        "motoqueiro",
        "adjunto",
        "escudeiro",
        "encarregado"
      ];
  
    const inspetorias = [
      "DOP",
      "DAGUA",
      "TATICO",
      "RONDAC",
      "ROMU",
      "NTI",
    ];

    const chefia = [
        "Orestes",
        "Fernando Silva",
        "Guilherme",
        "JP",
        "Wagner Mattos",
        "Luan Paiva",
      ];
  
    const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
    const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
    const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  
    for (let i = 0; i < arr.length; i++) {

    min = Math.ceil(1);
    max = Math.floor(400);
    rand16 = Math.floor(Math.random() * (max - min)) + min;

      const rand = Math.floor(Math.random() * 10);
      const rand2 = Math.floor(Math.random() * 10);
      const rand3 = Math.floor(Math.random() * 10);
      const rand4 = Math.floor(Math.random() * 10);
      const rand5 = Math.floor(Math.random() * 10);
      const rand6 = Math.floor(Math.random() * 10);
      const rand7 = Math.floor(Math.random() * 6);
      const rand8 = Math.floor(Math.random() * 3);
      const rand9 = Math.floor(Math.random() * 14);
      const rand10 = Math.floor(Math.random() * 14);
      const rand11 = Math.floor(Math.random() * 6);
      const rand12 = Math.floor(Math.random() * 6);
      const rand13 = Math.floor(Math.random() * 2);
  
      arr2.push({
        dth_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        condutor:nomes[rand9],
        funcao_condutor:funcao[rand7],
        matricula_condutor: `${ano[rand5]}${mes[rand]}${rand11}`,
        auto_presumivel:nomes[rand10],
        doc_autor:`${ano[rand5]}${mes[rand6]}${dia[rand4]}`,
        justificativa_algemacao:justificativa[rand13],
        relatorio_ocorrencia:relato[rand8],
        coordenador:chefia[rand11],
        inspetoria:inspetorias[rand7],
        superior_servico:chefia[rand12],
        // ro_Id: rand16
      });
    }
  
    // Deletes ALL existing entries
    return knex("relatorio_algemacao").insert(arr2);
  };
  