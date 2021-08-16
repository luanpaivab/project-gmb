exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[93] = 1;
  
    let arr2 = [
      {
        dt_ocorrencia: "2020-07-08",
        produto:"coxinha",
        matricula:"123458",
        condutor:"Manuel Carlos",
        funcao_condutor:"Motorista",
        recebedor:"Mauricio Meireles",
        doc_recebedor:"10987654321",
        funcao_recebedor:"guarda",
        lotacao_recebedor:"distrito 3",
        coordenador:"Fernando Silva",
        inspetoria:"DOP",
        superior_servico:"Pedro Orestes",
        // ro_Id: 203 
        id_user_register:2
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

    const produto = [
        "Celular",
        "Carteira",
        "Carro",
        "Sofá",
        "Notebook",
        "Bolsa",
      ];
  
    const funcao = [
      "Motorista",
      "Guarda",
      "Motoqueiro",
      "Adjunto",
      "Escudeiro",
      "Encarregado"
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
  
    const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
    const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
    const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
    const letra = ["A", "C", "F", "O", "P", "G", "H", "D", "B", "M"];
  
    for (let i = 0; i < arr.length; i++) {

    min = Math.ceil(1);
    max = Math.floor(400);
    rand15 = Math.floor(Math.random() * (max - min)) + min;

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
  
      arr2.push({
        dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        produto:produto[rand7],
        matricula:`${ano[rand]}${mes[rand2]}${dia[rand3]}`,
        condutor:nomes[rand9],
        funcao_condutor:funcao[rand7],
        recebedor:nomes[rand11],
        doc_recebedor:`${ano[rand]}${mes[rand2]}${dia[rand3]}`,
        funcao_recebedor:funcao[rand7],
        lotacao_recebedor:"distrito 3",
        coordenador:nomes[rand12],
        inspetoria:inspetorias[rand7],
        superior_servico:nomes[rand13],
        // ro_Id: rand15
      });
    }
  
    // Deletes ALL existing entries
    return knex("auto_apreensao").insert(arr2);
  };
  