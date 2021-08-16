exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dt_solicitacao: "2020-07-10",
        inspetor: "DABEN",
        nome_solicitante: "GMB-00735",
        posto_solicitante: "Prç Batista Campos",
        fone_solicitante: "(91)98852-1235",
        nome_solicitado: "GMB-00992",
        posto_solicitado: "Prç República",
        fone_solicitado: "(91)99233-2021",
        dia_ser_trocadoUm: "2020-07-15",
        hr_serv_serTrocadoUm: "07:00",
        dia_solicitadoUm: "2020-07-14",
        hr_serv_solicitadoUm: "19:00",
        dia_ser_trocadoDois: "2020-07-17",
        hr_serv_serTrocadoDois: "07:00",
        dia_solicitadoDois: "2020-07-16",
        hr_serv_solicitadoDois: "19:00",
        id_user_register:1,
        // id_assin_solicitado: 497
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
      "DABEN",
    ];

    const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
    const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
    const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
    
  
    for (let i = 0; i < arr.length; i++) {

      const rand0 = Math.floor(Math.random() * 9);
      const rand1 = Math.floor(Math.random() * 9);
      const rand2 = Math.floor(Math.random() * 6);
      const rand3 = Math.floor(Math.random() * 6);
      const rand4 = Math.floor(Math.random() * 6);
      const rand5 = Math.floor(Math.random() * 999);
      const rand6 = Math.floor(Math.random() * 999);
      const rand7 = Math.floor(Math.random() * 9);
      const rand8 = Math.floor(Math.random() * 9);
      const rand9 = Math.floor(Math.random() * 9);
      
  
      arr2.push({
        dt_solicitacao: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        inspetor: inspetorias[rand2],
        nome_solicitante: `GMB-00${rand5}`,
        posto_solicitante: postos[rand3],
        fone_solicitante: `(91)98${rand0}${ano[rand1]}-${dia[rand0]}${mes[rand1]}`,
        nome_solicitado: `GMB-00${rand6}`,
        posto_solicitado: postos[rand4],
        fone_solicitado: `(91)98${rand1}${ano[rand0]}-${dia[rand1]}${mes[rand0]}`,
        dia_ser_trocadoUm: `20${ano[rand0]}-${mes[rand1]}-${dia[rand9]}`,
        hr_serv_serTrocadoUm: "07:00",
        dia_solicitadoUm: `20${ano[rand0]}-${mes[rand1]}-${dia[rand8]}`,
        hr_serv_solicitadoUm: "19:00",
        dia_ser_trocadoDois: `20${ano[rand0]}-${mes[rand1]}-${dia[rand0]}`,
        hr_serv_serTrocadoDois: "07:00",
        dia_solicitadoDois: `20${ano[rand0]}-${mes[rand1]}-${dia[rand1]}`,
        hr_serv_solicitadoDois: "19:00",

      });
    }
  
    // Deletes ALL existing entries
    return knex("troca_servico").insert(arr2);
  };
  