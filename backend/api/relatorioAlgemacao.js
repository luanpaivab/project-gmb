module.exports = (app) => {
  const limitStats = 15;

  const getRelatorio = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, condutor, superior } = req.query;
      const dataInicial = req.query.dataInicial
        ? req.query.dataInicial
        : "0001-01-01";
      const dataFinal = req.query.dataFinal
        ? req.query.dataFinal
        : "9999-01-01";

      if (registro) paramOfConsult = { id: registro };

      if (condutor) condutor = condutor.trim();
      //tira o espaço em branco, final e começo
      else condutor = "";

      if (superior) superior = superior.trim();
      //tira o espaço em branco, final e começo
      else superior = "";

      const page = req.query.page || 1;
      const result = await app
        .db("relatorio_algemacao")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("condutor", "like", `%${condutor}%`)
        .where("superior_servico", "like", `%${superior}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .first();
      const count = parseInt(result.count);
      const relatorio = await app
        .db("relatorio_algemacao")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("condutor", "like", `%${condutor}%`)
        .where("superior_servico", "like", `%${superior}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

      const relatorioFormated = relatorio.map((relato) => {
        const dataFormatada = relato.dt_ocorrencia
          .split("-")
          .reverse()
          .join("/");

        return { ...relato, dt_ocorrencia: dataFormatada };
      });

      res.json({ data: relatorioFormated, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = async (req, res) => {
    const responsavel = await app
      .db("relatorio_algemacao")
      .join("users", "relatorio_algemacao.id_administrativo", "=", "users.id")
      .select("users.nome_funcional")
      .where("relatorio_algemacao.id","=",req.params.id)
      .first();

    app
      .db("relatorio_algemacao")
      .select()
      .table("relatorio_algemacao")
      .where({ id: req.params.id })
      .first()
      .then((relato) => {
        const [date, time] = relato.dth_sistema.split(" ");
        const dateFormated = date.split("-").reverse().join("/");

        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = relato.dt_ocorrencia
          .split("-")
          .reverse()
          .join("/");

        res.json({
          ...relato,
          dth_sistema: formatedDtsistema,
          dt_ocorrencia: formatedDtocorrencia,
          responsavel: responsavel
        });
      })
      .catch((err) => res.status(500).send(err));
  };

  const updateState = async (req, res) => {
    try {
      const auto = {
        id: req.body.id,
        state: req.body.state,
        state_description: req.body.state_description,
        id_administrativo: req.body.id_administrativo,
      };

      const status = await app
        .db("relatorio_algemacao")
        .where({ id: auto.id })
        .update({ state: auto.state })
        .update({ state_description: auto.state_description })
        .update({ id_administrativo: auto.id_administrativo });

      res.json({
        data: status,
        // msg: `Documento: Auto de Entrega número ${auto.id} modificado com sucesso`,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { getRelatorio, getById, updateState };
};

/*module.exports = (app) => {
    const limitStats = 5;
  
    const getRelatorio = async (req, res) => {
      try {
        const page = req.query.page || 1;
        const result = await app
          .db("relatorio_algemacao")
          .count("id as count")
          .first();
        const count = parseInt(result.count);
        const relatorioAlgemacao = await app
          .db("relatorio_algemacao")
          .select()
          .limit(limitStats)
          .offset(page * limitStats - limitStats)
        
        
        res.json({ data: relatorioAlgemacao, count, limitStats });
      } catch (error) {
        res.status(500).send(err);
      }
    };
    const getById = (req, res) => {
      app
        .db("relatorio_algemacao")
        .select().table('relatorio_algemacao')
        .where({ id: req.params.id })
        .first()
        .then((relatorio) => res.json(relatorio))
        .catch((err) => res.status(500).send(err));
    };
  
    return { getRelatorio, getById };
  };
  */
