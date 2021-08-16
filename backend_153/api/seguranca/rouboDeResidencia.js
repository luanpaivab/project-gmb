module.exports = (app) => {
  const limitStats = 15;
  
  const getRoubo = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, arma } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';

      if (registro) paramOfConsult = { "id": registro };
      if (arma) arma = arma.trim();//tira o espaço em branco, final e começo
      else arma = "";    
      const page = req.query.page || 1;
      const result = await app
        .dbPop("roubo_residencia")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_armamento", "like", `%${arma}%`)
        .where("data_ocorrencia", ">=", dataInicial)
        .andWhere("data_ocorrencia", "<=", dataFinal)
        .count("id as count")
        .first();
      const count = parseInt(result.count);
      const rouboResid = await app
        .dbPop("roubo_residencia")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_armamento", "like", `%${arma}%`)
        .where("data_ocorrencia", ">=", dataInicial)
        .andWhere("data_ocorrencia", "<=", dataFinal)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);
        
        const rouboResidFormated = rouboResid.map(rr => {
          const dataFormatada = rr.data_ocorrencia.split('-').reverse().join('/');
  
          return { ...rr, data_ocorrencia: dataFormatada };
        });
      res.json({ data: rouboResidFormated, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = (req, res) => {
    app
      .dbPop("roubo_residencia")
      .select()
      .table("roubo_residencia")
      .where({ id: req.params.id })
      .first()
      .then((roubo) => {
        const [date, time] = roubo.data_hora_sistema.split(' ');
        const dateFormated = date.split("-").reverse().join("/");

        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = roubo.data_ocorrencia.split("-").reverse().join("/");

        res.json({ ...roubo, data_hora_sistema: formatedDtsistema, data_ocorrencia: formatedDtocorrencia });
      })
      .catch((err) => res.status(500).send(err));
  };

  return { getRoubo, getById };
};