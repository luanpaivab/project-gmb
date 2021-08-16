exports.seed = function (knex, Promise) {
    const arr = [];
  
    arr[100] = 1;
  
    let arr2 = [
      {
        dth_sist: "2020-07-10",
        dt_ocorrencia: "2020-07-10",
        hr_disparo: "18:40",
        perimetro: "Orla",
        relator: "Luciano Santos",
        matric_relator: "0315303-000",
        funcao_relator: "Tático",
        lotacao_relator: "Gbel-0012",
        registro_geral: "1234567",
        cpf_relator: "123.456.789-10",
        arma_utilizada: "Pistola",
        reg_sinarm: "01147852",
        marca_arma: "Tauros",
        num_serie_arma: "001.887",
        tipo_municao: "Bala",
        lote_municao: "96",
        qtd_municao: "2",
        testemunhaUm: "Dona Vilma",
        doc_testUm: "123.456.785-02",
        end_testeUm: "Pedro Miranda, 123",
        complemento_endTestUm: "Entre Mauriti e Estrela",
        bairro_testUm: "Pedreira",
        fone_testeUm: "3225-8874",
        testemunhaDois: "Dona Cleonice",
        doc_testDois: "987.778.547-10",
        end_testeDois: "Pedro Miranda,124",
        complemento_endTestDois: "Entre Mauriti e Estrela",
        bairro_testDois: "Pedreira",
        fone_testeDois: "3225-8877",
        relato: "O suspeito entrou em confronto conosco assim que avistou a viatura. Logo, foi necessário o uso da arma de fogo, nós guardas conseguimos fazer uma abordagem conforme os meios legais nos amparam e encaminhamos o meliante aos locais cabíveis para, assim, continuar o processo no viés jurídico",
        coordenador: "Fernando Silva",
        inspetoria: "DOP",
        superior_servico: "Pedro Orestes",
        estado: "PA",
        cidade: "Belém",
        endereco: "Tv. Estrela",
        bairro: "Pedreira",
        numero: "125",
        cep: "6678201",
        id_user_register:3
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
  
      const relato = [
        "O suspeito entrou em confronto conosco assim que avistou a viatura. Logo, foi necessário o uso da arma de fogo, nós guardas conseguimos fazer uma abordagem conforme os meios legais nos amparam e encaminhamos o meliante aos locais cabíveis para, assim, continuar o processo no viés jurídico",
        "Foi necesário o disparo devido a ousadia dos meliantes, que nos receberam na bala assim que avistaram a guarnição chegar ao local da ocorrência. Então da minha parte, os disparos foram legalmente perminentes.",
      ]
  
      
  
    const local = [
      "Via Pública",
      "Predio Público",
      "Posto de  Serviço",
      "Orla",
      "Area de Lazer",
      "Outros",
    ];
  
    const arma = [
      "Pistola",
      "Espingarda Calibre.12",
      "Pistola",
      "Revolver Calibre 38",
    ];
    
    const marca = [
      "Taurus",
      "Thompson",
      "Glock",
      "Remington",
      "Colt",
      "Magnun"
    ];
  
    const locais = [
      "Tv. Chaco",
      "Humaitá",
      "Tv Timbó",
      "Marques",
      "Av Pedro Miranda",
      "Tv Lomas",
    ];
  
    const funcao = [
        "Motorista",
        "Apoio",
        "Chefe de Setor",
        "Tático",
        "Suporte",
        "Planejamento",
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
    const hora = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
    const cpf = ["010", "081", "222", "147", "882", "551", "179", "819", "180", "145"];

  
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
      const rand8 = Math.floor(Math.random() * 4);
      const rand9 = Math.floor(Math.random() * 14);
      const rand11 = Math.floor(Math.random() * 14);
      const rand12 = Math.floor(Math.random() * 14);
      const rand14 = Math.floor(Math.random() * 2);
      const rand15 = Math.floor(Math.random() * 200);
      const rand16 = Math.floor(Math.random() * 3);
      const rand17 = Math.floor(Math.random() * 6);
      const rand18 = Math.floor(Math.random() * 6);
      const rand19 = Math.floor(Math.random() * 6);
      const rand20 = Math.floor(Math.random() * 6);
  
      arr2.push({
        dth_sist: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        dt_ocorrencia: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
        hr_disparo: `${hora[rand]}:${hora[rand2]}`,
        perimetro: local[rand20],
        relator: nomes[rand9],
        matric_relator: `0315303-${rand15}`,
        funcao_relator: funcao[rand7],
        lotacao_relator: `Gbel-0${rand15}`,
        registro_geral: `${rand10}`,
        cpf_relator: `${cpf[rand]}.${cpf[rand2]}.${cpf[rand3]}-${rand4}`,
        arma_utilizada: arma[rand8],
        reg_sinarm: `${cpf[rand4]}${rand9}${rand6}`,
        marca_arma: marca[rand19],
        num_serie_arma: `001.${rand15}`,
        tipo_municao: "Bala",
        lote_municao: "96",
        qtd_municao: "2",
        testemunhaUm: nomes[rand11],
        doc_testUm: `${ano[rand6]}${rand}${hora[rand11]}`,
        end_testeUm: locais[rand17],
        bairro_testUm: "Pedreira",
        fone_testeUm: `(91)98${rand19}${ano[rand2]}${dia[rand6]}${rand18}`,
        testemunhaDois: nomes[rand12],
        doc_testDois: `${rand}${dia[rand5]}${mes[rand6]}`,
        end_testeDois: locais[rand18],
        bairro_testDois: "Pedreira",
        fone_testeDois: `(91)98${rand19}${hora[rand2]}${mes[rand6]}${rand16}`,
        relato: relato[rand14],
        coordenador: chefia[rand7],
        inspetoria: inspetorias[rand7],
        superior_servico: chefia[rand20],
        estado: "PA",
        cidade: "Belém",
        endereco: locais[rand19],
        bairro: "Pedreira",
        numero: `${rand3}${rand6}${rand}`,
        cep: `${rand6}${rand2}${rand5}${rand5}${rand4}-${rand}${rand}${rand2}`,
                
      });
    }
  
    return knex("relatorio_disparo").insert(arr2);
  };
  