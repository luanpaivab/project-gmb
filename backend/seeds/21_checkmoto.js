exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      dth_sist: "2020-07-08",
      dt_serv: "2020-07-08",
      dt_entreg_moto: "2020-07-08",
      inspetoria: "DOP",
      motorista: "Fernando Silva",
      prefixo_moto: "GMB",
      placa_moto: "GMB-0001",
      hr_saida: "17:22",
      hr_chegada: "23:30",
      odometro_saida: 12540,
      odometro_chegada: 12562,
      odometro_total: 22,
      combusti_receb: "32l",
      combusti_entreg: "27l",
      tipo_combustivel: "Gasolina",
      qtd_litros: "32l",
      km_abastec: "400km",
      hr_abastec: "18:40",
      
      afogador: "S/A",
      amortecedores: "S/A",
      aparador_linha: "S/A",
      banco: "S/A",
      bateria: "S/A",
      bau: "S/A",
      buzina: "S/A",
      cabo_embreagem: "S/A",
      cabo_vela: "S/A",
      cabo_acelerador: "S/A",
      cabo_velocimetro: "S/A",
      cabos_freios: "S/A",
      calibragem_pneu: "S/A",
      capa_moto: "S/A",
      carenagens: "S/A",
      cavalete_central: "S/A",
      cavalete_lat: "S/A",
      chave_geral_moto: "S/A",
      descarga: "S/A",
      disco_freio: "S/A",
      embreagem: "S/A",
      espelhos_retrovisores: "S/A",
      estado_coroa: "S/A",
      estado_corrente: "S/A",
      estado_pinhao: "S/A",
      farol_alto: "S/A",
      farol_baixo: "S/A",
      fluidos_freios: "S/A",
      gps: "S/A",
      giroflex: "S/A",
      interruptor_emerg: "S/A",
      interruptor_farol: "S/A",
      interruptor_pisca: "S/A",
      jances: "S/A",
      lanterna: "S/A",
      lonas_freio: "S/A",
      luz_placa: "S/A",
      luz_freio: "S/A",
      luz_emergencia: "S/A",
      luzes_painel: "S/A",
      luzes_estroboscopicas: "S/A",
      manete_embreagem: "S/A",
      manete_freio: "S/A",
      motor: "S/A",
      nv_combustivel: "S/A",
      nv_fluido_bateria: "S/A",
      nv_fluido_freio: "S/A",
      nv_liq_radiador: "S/A",
      nv_oleo_motor: "S/A",
      nv_fluido_embreagem: "S/A",
      partida_eletrica: "S/A",
      pastilhas_freio: "S/A",
      pedal_partida: "S/A",
      pedais_garupa: "S/A",
      piscas: "S/A",
      pneus: "S/A",
      radiador: "S/A",
      sirene: "S/A",
      tambor_freio: "S/A",
      tampas: "S/A",
      tanque: "S/A",
      tensor_corrente: "S/A",
      torneira_combustivel: "S/A",
      varao_freio_tras: "S/A",
      vela: "S/A",
      velocimetro: "S/A",
      relato_checklist:
        "A motocicleta não se encontra alterada desde seu ultimo checklist, está do jeito que foi entregue aos servidores e votou no mesmo estado, com isso relato aqui que não houve alterações",
      fatos_observados:
        "Visto que não houve alterações na motocicleta, não tem o porquê ter mais este campo, e mesmo se tivesse alterações, possívelmente poderia ser descrito as alterações e obs da motocicleta em um único campo, mas de novo, apenas testanto e inserindo dados que futuramente serão dados oficiais",
      superior_serv: "Carlos Andrade",
    },
  ];

  const nomes = [
    "Mario Couto Pereira",
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
    "Alexa Amazon Brigs",
  ];

  const funcao = [
    "Motorista",
    "Apoio",
    "Chefe de Setor",
    "Tático",
    "Suporte",
    "Planejamento",
  ];

  const lotacao = [
    "Prc República",
    "Prc Batista Campos",
    "Ver-o-Peso",
    "Portal",
    "Bosque",
    "Nazaré",
  ];

  const recebimento = [
    "A viatura foi recebida conforme este documento está dizendo que a mesma está sendo recebida. Mais uma vez precisa-se fazer o teste com dados relativamente extensos para se tert uma noção dos dados que serão inseridos futuramente, agradeço que está lendo.",
    "A viatura foi recebida e aqui diante deste campo de recebimento é possível dizer de que maneira a mt foi recebida, será que teve alguma alteração? talvez! só vendo no campo de alteração para saber, aqui é apenas o de recebimento",
  ];

  const inspetorias = ["DOP", "DAGUA", "TATICO", "RONDAC", "ROMU", "GAT"];

  const check = ["S/A", "C/A", "N/E"];

  const alteracoes = [
    "A viatura não se encontra alterada desde seu ultimo checklist, está do jeito que foi entregue aos servidores e votou no mesmo estado, com isso relato aqui que não houve alterações",
    "Houveram alterações e relatei na lista acima, sobre estas alterações, comunicado meu total respaldo perante o ocorrido, apresentou-se falhas técnicas por parte do veículo, eximindo da culpa os guardas que nele estavam",
  ];

  const dia = ["01", "15", "07", "28", "13", "04", "21", "25", "11", "17"];
  const mes = ["01", "02", "03", "04", "05", "06", "07", "08", "12", "10"];
  const ano = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  const hora = ["10", "08", "20", "21", "18", "16", "17", "19", "18", "15"];
  const litros = [
    "50l",
    "18l",
    "27l",
    "21l",
    "10l",
    "15l",
    "22l",
    "8,60l",
    "60l",
    "5l",
  ];

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
    const rand8 = Math.floor(Math.random() * 6);
    const rand9 = Math.floor(Math.random() * 6);
    const rand10 = Math.floor(Math.random() * 14);
    const rand11 = Math.floor(Math.random() * 14);
    const rand12 = Math.floor(Math.random() * 14);
    const rand13 = Math.floor(Math.random() * 14);
    const rand14 = Math.floor(Math.random() * 2);
    const rand15 = Math.floor(Math.random() * 14);
    const rand17 = Math.floor(Math.random() * 14);
    const rand18 = Math.floor(Math.random() * 3);
    const rand19 = Math.floor(Math.random() * 3);
    const rand20 = Math.floor(Math.random() * 3);

    arr2.push({
      dth_sist: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      dt_serv: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      dt_entreg_moto: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      inspetoria: inspetorias[rand8],
      motorista: nomes[rand10],
      prefixo_moto: "GMB",
      placa_moto: `GMB-00${rand15}`,
      hr_saida: `${hora[rand]}:${hora[rand2]}`,
      hr_chegada: `${hora[rand3]}:${hora[rand4]}`,
      odometro_saida: 12540,
      odometro_chegada: 12562,
      odometro_total: 22,
      combusti_receb: "32l",
      combusti_entreg: "27l",
      tipo_combustivel: "Gasolina",
      qtd_litros: litros[rand6],
      km_abastec: "400km",
      hr_abastec: `${hora[rand5]}:${hora[rand6]}`,
      
      afogador: check[rand18],
      amortecedores: check[rand18],
      aparador_linha: check[rand18],
      banco: check[rand19],
      bateria: check[rand18],
      bau: check[rand19],
      buzina: check[rand20],
      cabo_embreagem: check[rand18],
      cabo_vela: check[rand20],
      cabo_acelerador: check[rand20],
      cabo_velocimetro: check[rand18],
      cabos_freios: check[rand18],
      calibragem_pneu: check[rand19],
      capa_moto: check[rand18],
      carenagens: check[rand19],
      cavalete_central: check[rand19],
      cavalete_lat: check[rand19],
      chave_geral_moto: check[rand19],
      descarga: check[rand18],
      disco_freio: check[rand18],
      embreagem: check[rand18],
      espelhos_retrovisores: check[rand18],
      estado_coroa: check[rand18],
      estado_corrente: check[rand18],
      estado_pinhao: check[rand18],
      farol_alto: check[rand20],
      farol_baixo: check[rand20],
      fluidos_freios: check[rand20],
      gps: check[rand20],
      giroflex: check[rand20],
      interruptor_emerg: check[rand20],
      interruptor_farol: check[rand18],
      interruptor_pisca: check[rand18],
      jances: check[rand18],
      lanterna: check[rand18],
      lonas_freio: check[rand18],
      luz_placa: check[rand18],
      luz_freio: check[rand18],
      luz_emergencia: check[rand18],
      luzes_painel: check[rand19],
      luzes_estroboscopicas: check[rand18],
      manete_embreagem: check[rand18],
      manete_freio: check[rand19],
      motor: check[rand19],
      nv_combustivel: check[rand20],
      nv_fluido_bateria: check[rand19],
      nv_fluido_freio: check[rand20],
      nv_liq_radiador: check[rand18],
      nv_oleo_motor: check[rand18],
      nv_fluido_embreagem: check[rand20],
      partida_eletrica: check[rand20],
      pastilhas_freio: check[rand20],
      pedal_partida: check[rand20],
      pedais_garupa: check[rand18],
      piscas: check[rand18],
      pneus: check[rand19],
      radiador: check[rand19],
      sirene: check[rand20],
      tambor_freio: check[rand19],
      tampas: check[rand20],
      tanque: check[rand18],
      tensor_corrente: check[rand18],
      torneira_combustivel: check[rand20],
      varao_freio_tras: check[rand20],
      vela: check[rand20],
      velocimetro: check[rand20],
      relato_checklist: alteracoes[rand14],
      fatos_observados:
        "Visto que não houve alterações na viatura, não tem o porquê ter mais este campo, e mesmo se tivesse alterações, possívelmente poderia ser descrito as alterações e obs da viatura em um único campo, mas de novo, apenas testanto e inserindo dados que futuramente serão dados oficiais",
      superior_serv: nomes[rand17],
    });
  }

  // Deletes ALL existing entries
  return knex("checklist_moto").insert(arr2);
};
