exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dth_sist:"2020-07-10",
        dt_solicitacao: "2020-07-10",
        inspetoria_solicitante: "DABEN",
        solicitante: "GMB-00735",
        posto_solicitante: "Prç Batista Campos",
        fone_solicitante: "(91)98852-1235",
        solicitado: "GMB-00992",
        posto_solicitado: "Prç República",
        fone_solicitado: "(91)99233-2021",
        dia_datroca_horario: "2020-07-15",
        do_horario: "Dia",
        para_horario: "Noite",
        id_user_register:1,
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
        dth_sist: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        dt_solicitacao: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        inspetoria_solicitante: inspetorias[rand2],
        solicitante: `GMB-00${rand5}`,
        posto_solicitante: postos[rand3],
        fone_solicitante: `(91)98${rand0}${ano[rand1]}-${dia[rand0]}${mes[rand1]}`,
        solicitado: `GMB-00${rand6}`,
        posto_solicitado: postos[rand4],
        fone_solicitado: `(91)98${rand1}${ano[rand0]}-${dia[rand1]}${mes[rand0]}`,
        dia_datroca_horario: `20${ano[rand0]}-${mes[rand1]}-${dia[rand8]}`,
        do_horario: "Dia",
        para_horario: "Noite",

      });
    }
  
    // Deletes ALL existing entries
    return knex("troca_horario").insert(arr2);
  };
  