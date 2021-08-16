module.exports = (app) => {
  const limitStats = 15;

  const getRoubosFurtos = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, arma } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';

      if (registro) paramOfConsult = { id: registro };

      if (arma) arma = arma.trim(); //tira o espaço em branco, final e começo
      else arma = "";
      
      // if (data) data = data.trim();//tira o espaço em branco, final e começo
      // else data = "";
      
      const page = req.query.page || 1;
      const result = await app
        .dbPop("roubo_furto")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_armamento", "like", `%${arma}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        // .where("dt_ocorrencia", "like", `%${data}%`)
        .count("id as count")
        .first();
      const count = parseInt(result.count);

      const roubosFurtos = await app
        .dbPop("roubo_furto")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_armamento", "like", `%${arma}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        // .where("dt_ocorrencia", "like", `%${data}%`)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

      const roubosFurtosFormated = roubosFurtos.map(rf => {
        const dataFormatada = rf.dt_ocorrencia.split('-').reverse().join('/');

        return { ...rf, dt_ocorrencia: dataFormatada };
      });

      res.json({ data: roubosFurtosFormated, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = (req, res) => {
    app
      .dbPop("roubo_furto")
      .select()
      .table("roubo_furto")
      .where({ id: req.params.id })
      .first()
      .then((roubo) => {
        const [date, time] = roubo.dth_sistema.split(' ');
        const dateFormated = date.split("-").reverse().join("/");

        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = roubo.dt_ocorrencia.split("-").reverse().join("/");

        res.json({ ...roubo, dth_sistema: formatedDtsistema, dt_ocorrencia: formatedDtocorrencia });
      })
      .catch((err) => res.status(500).send(err));
  };
  return { getRoubosFurtos, getById };
};