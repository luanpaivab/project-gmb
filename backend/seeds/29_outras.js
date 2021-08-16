exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        solicitante: "GMB-00735",
        inspetoria: "DABEN",
        fone: "(91)98852-1235",
        posto_servico: "Prç Batista Campos",
        relato_solicitacao: "Solicito um documento institucional afim de apresentar o mesmo a um pedido judicial de comprovação de serviço",
        dt_processo: "2020-07-10",
        dth_sist: "2020-07-10",
        id_user_register:4
      },
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
        solicitante: `GMB-00${rand5}`,
        inspetoria: inspetorias[rand2],
        fone: `(91)98${rand0}${ano[rand1]}-${dia[rand0]}${mes[rand1]}`,
        posto_servico: postos[rand3],
        relato_solicitacao: "Solicito um documento institucional afim de apresentar o mesmo a um pedido judicial de comprovação de serviço",
        dt_processo: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        dth_sist: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
      });
    }
  
    // Deletes ALL existing entries
    return knex("outras_solicitacoes").insert(arr2);
  };
  