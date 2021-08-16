exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[43] = 1;
  
    let arr2 = [
      {
        dth_sist: "2020-07-10",
        solicitante: "Luan Paiva Barbosa",
        matricula:"0315303-000",
        placa: "GMB-00735",
        inspetoria: "DABEN",
        
        dt_opcaoUM: "2020-07-10",
        hr_opcaoUM: "07:00",
        posto_opcaoUM: "Prç Batista Campos",
        
        dt_opcaoDois: "2020-07-17",
        hr_opcaoDois: "07:00",
        posto_opcaoDois: "Ver-o-rio",
        
        dt_opcaoTres: "2020-07-24",
        hr_opcaoTres: "07:00",
        posto_opcaoTres: "BRT",
       
        dt_opcaoQuarta: "2020-08-01",
        hr_opcaoQuarta: "07:00",
        posto_opcaoQuarta: "Prç Batista Campos",
        
        dt_opcaoQuinta: "2020-08-08",
        hr_opcaoQuinta: "07:00",
        posto_opcaoQuinta: "Ver-o-Peso",
        
        dt_opcaoSexta: "2020-08-16",
        hr_opcaoSexta: "07:00",
        posto_opcaoSexta: "BRT",

        id_user_register: 2

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
        "Ver-o-Rio",
        "ver-o-Peso",
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
      const rand4 = Math.floor(Math.random() * 14);
      const rand5 = Math.floor(Math.random() * 999);
      const rand6 = Math.floor(Math.random() * 500);
      const rand7 = Math.floor(Math.random() * 10);
      const rand8 = Math.floor(Math.random() * 10);
      const rand9 = Math.floor(Math.random() * 10);
      const rand10 = Math.floor(Math.random() * 10);
      const rand11 = Math.floor(Math.random() * 10);
      const rand12 = Math.floor(Math.random() * 10);
      
  
      arr2.push({
        dth_sist: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        solicitante: nomes[rand4],
        matricula: `0315303-${rand6}`,
        placa: `GMB-00${rand5}`,
        inspetoria: inspetorias[rand2],
        
        dt_opcaoUM: `20${ano[rand0]}-${mes[rand1]}-${dia[rand7]}`,
        hr_opcaoUM: "07:00",
        posto_opcaoUM: "Prç Batista Campos",
        
        dt_opcaoDois: `20${ano[rand0]}-${mes[rand1]}-${dia[rand8]}`,
        hr_opcaoDois: "07:00",
        posto_opcaoDois: "Ver-o-rio",
        
        dt_opcaoTres: `20${ano[rand0]}-${mes[rand1]}-${dia[rand9]}`,
        hr_opcaoTres: "07:00",
        posto_opcaoTres: "BRT",
       
        dt_opcaoQuarta: `20${ano[rand0]}-${mes[rand1]}-${dia[rand10]}`,
        hr_opcaoQuarta: "07:00",
        posto_opcaoQuarta: "Apoio Semob",
        
        dt_opcaoQuinta: `20${ano[rand0]}-${mes[rand1]}-${dia[rand11]}`,
        hr_opcaoQuinta: "07:00",
        posto_opcaoQuinta: "Ver-o-Peso",
        
        dt_opcaoSexta: `20${ano[rand0]}-${mes[rand1]}-${dia[rand12]}`,
        hr_opcaoSexta: "07:00",
        posto_opcaoSexta: "Portal da Amazônia",

      });
    }
  
    // Deletes ALL existing entries
    return knex("plantao_remunerado").insert(arr2);
  };
  