exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dth_sist: "2020-07-08",
        dt_solicitacao: "2020-07-08",
        solicitante:"Luan Paiva Barbosa",
        matricula:"0315303-000",
        inspetoria:"DOP",
        posto_servico:"Ver-o-Rio",
        opcaoUm:"Julho/2022",
        opcaoDois:"Dezembro/2022",
        opcaoTres:"Janeiro/2022"
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

    const postos = [
        "Portal da Amazonia",
        "Ver-o-rio",
        "ver-o-peso",
        "Prç República",
        "BRT",
        "Apoio Semob"
    ]
  
    const inspetorias = [
      "DOP",
      "DAGUA",
      "TATICO",
      "RONDAC",
      "ROMU",
      "NTI",
    ];

    const op1 = [
        "Janeiro/2023",
        "Julho/2022",
        "Dezembro/2022",
        "Outubro/2022"
      ];

      const op2 = [
        "Fevereiro/2022",
        "Março/2022",
        "Abril/2022",
        "Maio/2022"
      ];

      const op3 = [
        "Junho/2022",
        "Agosto/2022",
        "Setembro/2022",
        "Novembro/2022"
      ];

      const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
    const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
    const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  
  
    for (let i = 0; i < arr.length; i++) {

      const rand0 = Math.floor(Math.random() * 4);
      const rand1 = Math.floor(Math.random() * 4);
      const rand2 = Math.floor(Math.random() * 4);
      const rand3 = Math.floor(Math.random() * 6);
      const rand4 = Math.floor(Math.random() * 6);
      const rand5 = Math.floor(Math.random() * 200);
      const rand6 = Math.floor(Math.random() * 14);
      
  
      arr2.push({
        dth_sist: `20${ano[rand0]}-${mes[rand2]}-${dia[rand3]}`,
        dt_solicitacao: `20${ano[rand0]}-${mes[rand2]}-${dia[rand3]}`,
        solicitante:nomes[rand6],
        matricula:`0315303-${rand5}`,
        inspetoria:inspetorias[rand4],
        posto_servico:postos[rand3],
        opcaoUm:op1[rand0],
        opcaoDois:op2[rand1],
        opcaoTres:op3[rand2]
      });
    }
  
    // Deletes ALL existing entries
    return knex("formulario_ferias").insert(arr2);
  };
  