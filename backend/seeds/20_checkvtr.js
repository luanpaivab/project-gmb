exports.seed = function (knex, Promise) {
  const arr = [];

  arr[43] = 1;

  let arr2 = [
    {
      dth_sist: "2020-07-08",
      dt_ocor: "2020-07-08",
      inspetoria: "DOP",
      motorista: "Fernando Silva",
      encarregado: "Inspetor Orestes",
      auxiliar_vtr: "Luan Paiva",
      prefixo_vtr: "GMB",
      placa_vtr: "GMB-0001",
      hr_saida: "17:22",
      hr_chegada: "23:30",
      odometro_saida: "12540",
      odometro_chegada: "12562",
      odometro_total: "22",
      combustivel_recebido:"20l",
      tipo_combustivel: "Gasolina",
      qtd_litros: "32l",
      km_abastec: "400km",
      hr_abastecimento: "18:40",
      
      acendedor: "S/A",
      alarme: "S/A",
      antena: "S/A",
      arCondicionado: "S/A",
      bancos_encosto: "S/A",
      buzina: "S/A",
      chave_roda: "S/A",
      cinto_seguranca: "S/A",
      desembacador: "S/A",
      embreagem: "S/A",
      extindor_incendio: "S/A",
      farol_alto: "S/A",
      farol_baixo: "S/A",
      farol_minimo: "S/A",
      fechamento_janelas: "S/A",
      freios_maos: "S/A",
      freios_pe: "S/A",
      giroflex: "S/A",
      gps: "S/A",
      lataria: "S/A",
      limp_p_brisa_diant: "S/A",
      limp_p_brisa_tras: "S/A",
      luz_placa: "S/A",
      luz_freio: "S/A",
      luz_re: "S/A",
      luz_interna: "S/A",
      luzes_painel: "S/A",
      macaco: "S/A",
      nv_agua_radiador: "S/A",
      nv_oleo_freio: "S/A",
      nv_oleo_motor: "S/A",
      odometro: "S/A",
      para_brisa: "S/A",
      para_choq_diant: "S/A",
      para_choq_tras: "S/A",
      pedais: "S/A",
      piscas_alerta: "S/A",
      estepe: "S/A",
      estado_pneus: "S/A",
      portas_travas: "S/A",
      quebra_sol: "S/A",
      radio: "S/A",
      retrovisor_diant: "S/A",
      retrovisor_tras: "S/A",
      retrovisor_interno: "S/A",
      seta_direita: "S/A",
      seta_esquerda: "S/A",
      sirene: "S/A",
      tapetes: "S/A",
      triangulo_sinal: "S/A",
      velocimetro: "S/A",
      ventilador: "S/A",
      vidro_janelas: "S/A",

      citar_checklist:
        "A viatura não se encontra alterada desde seu ultimo checklist, está do jeito que foi entregue aos servidores e votou no mesmo estado, com isso relato aqui que não houve alterações",
      fatos_observados:
        "Visto que não houve alterações na viatura, não tem o porquê ter mais este campo, e mesmo se tivesse alterações, possívelmente poderia ser descrito as alterações e obs da viatura em um único campo, mas de novo, apenas testanto e inserindo dados que futuramente serão dados oficiais",
      data_entrega: "2020-07-10",
      coordenador: "Carlos Andrade",
      superior_servico: "Antonio Carlos",
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
    "A viatura foi recebida e aqui diante deste campo de recebimento é possível dizer de que maneira a vtr foi recebida, será que teve alguma alteração? talvez! só vendo no campo de alteração para saber, aqui é apenas o de recebimento",
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
      dt_ocor: `20${ano[rand]}-${mes[rand2]}-${dia[rand3]}`,
      inspetoria: inspetorias[rand8],
      motorista: nomes[rand10],
      encarregado: nomes[rand11],
      auxiliar_vtr: nomes[rand12],
      prefixo_vtr: "GMB",
      placa_vtr: `GMB-00${rand15}`,
      hr_saida: `${hora[rand]}:${hora[rand2]}`,
      hr_chegada: `${hora[rand3]}:${hora[rand4]}`,
      odometro_saida: "12540",
      odometro_chegada: "12562",
      odometro_total: "22",
      combustivel_recebido:"20l",
      tipo_combustivel: "Gasolina",
      qtd_litros: litros[rand6],
      km_abastec: "400km",
      hr_abastecimento: `${hora[rand5]}:${hora[rand6]}`,

      acendedor: check[rand18],
      alarme: check[rand18],
      antena: check[rand18],
      arCondicionado: check[rand19],
      bancos_encosto: check[rand18],
      buzina: check[rand19],
      chave_roda: check[rand20],
      cinto_seguranca: check[rand18],
      desembacador: check[rand20],
      embreagem: check[rand20],
      extindor_incendio: check[rand18],
      farol_alto: check[rand18],
      farol_baixo: check[rand19],
      farol_minimo: check[rand18],
      fechamento_janelas: check[rand19],
      freios_maos: check[rand19],
      freios_pe: check[rand19],
      giroflex: check[rand19],
      gps: check[rand18],
      lataria: check[rand18],
      limp_p_brisa_diant: check[rand18],
      limp_p_brisa_tras: check[rand18],
      luz_placa: check[rand18],
      luz_freio: check[rand18],
      luz_re: check[rand18],
      luz_interna: check[rand20],
      luzes_painel: check[rand20],
      macaco: check[rand20],
      nv_agua_radiador: check[rand20],
      nv_oleo_freio: check[rand20],
      nv_oleo_motor: check[rand20],
      odometro: check[rand18],
      para_brisa: check[rand18],
      para_choq_diant: check[rand18],
      para_choq_tras: check[rand18],
      pedais: check[rand18],
      piscas_alerta: check[rand18],
      estepe: check[rand18],
      estado_pneus: check[rand18],
      portas_travas: check[rand19],
      quebra_sol: check[rand18],
      radio: check[rand18],
      retrovisor_diant: check[rand19],
      retrovisor_tras: check[rand19],
      retrovisor_interno: check[rand20],
      seta_direita: check[rand19],
      seta_esquerda: check[rand20],
      sirene: check[rand18],
      tapetes: check[rand18],
      triangulo_sinal: check[rand20],
      velocimetro: check[rand20],
      ventilador: check[rand20],
      vidro_janelas: check[rand20],

      citar_checklist: alteracoes[rand14],
      fatos_observados:
        "Visto que não houve alterações na viatura, não tem o porquê ter mais este campo, e mesmo se tivesse alterações, possívelmente poderia ser descrito as alterações e obs da viatura em um único campo, mas de novo, apenas testanto e inserindo dados que futuramente serão dados oficiais",
      data_entrega: `20${ano[rand4]}-${mes[rand5]}-${dia[rand6]}`,
      coordenador: nomes[rand7],
      superior_servico: nomes[rand17],
    });
  }

  // Deletes ALL existing entries
  return knex("checklist").insert(arr2);
};
