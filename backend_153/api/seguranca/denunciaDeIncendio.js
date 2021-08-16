module.exports = (app) => {
  const limitStats = 15;

  const getDenuncia = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, local } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';

      if (registro) paramOfConsult = { "id": registro };
      if (local) local = local.trim();//tira o espaço em branco, final e começo
      else local = "";
      const page = req.query.page || 1;
      const result = await app
        .dbPop("incendio")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("local_incendio", "like", `%${local}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .first();
      const count = parseInt(result.count);
      const denunciaIncendio = await app
        .dbPop("incendio")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("local_incendio", "like", `%${local}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

        const denunciaIncendioFormated = denunciaIncendio.map(denuncia => {
          const dataFormatada = denuncia.dt_ocorrencia.split('-').reverse().join('/');
  
          return { ...denuncia, dt_ocorrencia: dataFormatada };
        });

      res.json({ data: denunciaIncendioFormated, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = (req, res) => {
    app
      .dbPop("incendio")
      .select()
      .table("incendio")
      .where({ id: req.params.id })
      .first()
      .then((denuncia) => {
        const [date, time] = denuncia.dth_sistema.split(' ');
        const dateFormated = date.split("-").reverse().join("/");
        
        const formatedDtsistema = dateFormated + " - " + time;
        const formatedDtocorrencia = denuncia.dt_ocorrencia.split("-").reverse().join("/");
        
        res.json({ ...denuncia, dth_sistema: formatedDtsistema, dt_ocorrencia: formatedDtocorrencia });
      })
      .catch((err) => res.status(500).send(err));
    };

  return { getDenuncia, getById };
};
