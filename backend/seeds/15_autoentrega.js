exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dth_sistema: "2020-07-08",
        dt_ocorrencia: "2020-07-08",
        natureza_ocorrencia:"Furto",
        matricula:"123458",
        condutor:"Manuel Carlos",
        funcao_condutor:"motorista",
        conduzido:"Jairo Quadros",
        doc_conduzido:"12345678910",
        recebedor:"Mauricio Meireles",
        doc_recebedor:"10987654321",
        funcao_recebedor:"guarda",
        lotacao_recebedor:"distrito 3",
        testemunha1:"César Melo",
        doc_testemunha1:"7548564",
        testemunha2:"Maria Lurdes",
        doc_testemunha2:"7885241",
        integrid_conduzido:"Sem Escoriações",
        relato:"O auto de entrega foi entregue conforme o auto de entrega deve ser entregue!",
        coordenador:"Fernando Silva",
        inspetoria:"DOP",
        superior_servico:"Pedro Orestes",
        // ro_Id: 203 ,
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
      "Alexa Amazon Bezos"
    ];

    const natureza = [
        "Roubo",
        "Furto",
        "Assédio",
        "Tráfico",
        "Violência Doméstica",
        "Atentado",
      ];
  
    const funcao = [
      "motorista",
      "guarda",
      "motoqueiro",
      "adjunto",
      "escudeiro",
      "encarregado"
    ];
  
    const relato = [
    "O auto de entrega foi entregue conforme o auto de entrega deve ser entregue!",
    "Auto de Entrega bem entregue e deu tudo certo",
    "Apesar de entregue, o auto de entrega quase não pode ser entrege",
    "Auto de entrega realizao com sucesso"
    ]
    
    const integridade = [
      "Vítima Fatal",
      "Vítima com Escoriações Leves",
      "Vítima em estado grave",
      "Apenas Danos Materiais",
      "Danos ao meio ambiente",
      "Danos à área Florestal",
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

    const state = [
      "OK",
      "ERROR"
    ]
  
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
      const rand8 = Math.floor(Math.random() * 4);
      const rand9 = Math.floor(Math.random() * 14);
      const rand10 = Math.floor(Math.random() * 14);
      const rand11 = Math.floor(Math.random() * 14);
      const rand12 = Math.floor(Math.random() * 14);
      const rand13 = Math.floor(Math.random() * 14);
      const rand15 = Math.floor(Math.random() * 6);
      const rand17 = Math.floor(Math.random() * 2);
      
  
      arr2.push({
        dth_sistema: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        natureza_ocorrencia:natureza[rand7],
        matricula:`${ano[rand]}${mes[rand2]}${rand16}`,
        condutor:nomes[rand9],
        funcao_condutor:funcao[rand7],
        conduzido:nomes[rand10],
        doc_conduzido:`${ano[rand5]}${mes[rand6]}${dia[rand4]}`,
        recebedor:nomes[rand11],
        doc_recebedor:`${ano[rand]}${mes[rand7]}${dia[rand2]}`,
        funcao_recebedor:funcao[rand7],
        lotacao_recebedor:"distrito 3",
        testemunha1:nomes[rand12],
        doc_testemunha1:`${ano[rand]}${mes[rand]}${dia[rand7]}`,
        testemunha2:nomes[rand13],
        doc_testemunha2:`${mes[rand]}${mes[rand2]}${dia[rand6]}`,
        integrid_conduzido:integridade[rand7],
        relato:relato[rand8],
        coordenador:chefia[rand15],
        inspetoria:inspetorias[rand7],
        superior_servico:chefia[rand7],
        // ro_Id: rand16,
        // state:state[rand17]
      });
    }
  
    // Deletes ALL existing entries
    return knex("auto_entrega").insert(arr2);
  };
  