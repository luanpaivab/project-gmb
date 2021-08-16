module.exports = (app) => {
  const limitStats = 15;

  const getAuto = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, ro, natureza, condutor } = req.query;
      const dataInicial = req.query.dataInicial
        ? req.query.dataInicial
        : "0001-01-01";
      const dataFinal = req.query.dataFinal
        ? req.query.dataFinal
        : "9999-01-01";

      if (registro) paramOfConsult = { id: registro };
      if (ro) paramOfConsult = { ...paramOfConsult, ro_id: ro };
      if (natureza) natureza = natureza.trim();
      //tira o espaço em branco, final e começo
      else natureza = "";
      if (condutor) condutor = condutor.trim();
      //tira o espaço em branco, final e começo
      else condutor = "";

      const page = req.query.page || 1;
      const result = await app
        .db("auto_entrega")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("natureza_ocorrencia", "like", `%${natureza}%`)
        .where("condutor", "like", `%${condutor}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .first();
      const count = parseInt(result.count);
      const autoEntrega = await app
        .db("auto_entrega")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("natureza_ocorrencia", "like", `%${natureza}%`)
        .where("condutor", "like", `%${condutor}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

      const autoEntregaFormated = autoEntrega.map((auto) => {
        const dataFormatada = auto.dt_ocorrencia.split("-").reverse().join("/");

        return { ...auto, dt_ocorrencia: dataFormatada };
      });

      res.json({ data: autoEntregaFormated, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = async (req, res) => {
    const responsavel = await app
        .db("auto_entrega")
        .join("users", "auto_entrega.id_administrativo", "=", "users.id")
        .select("users.nome_funcional")
        .where("auto_entrega.id","=",req.params.id)
        .first();

    app
      .db("auto_entrega")
      .select()
      .where({ id: req.params.id })
      .first()
      .then((auto) => {
        const [date, time] = auto.dth_sistema.split(" ");
        const dateFormated = date.split("-").reverse().join("/");

        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = auto.dt_ocorrencia
          .split("-")
          .reverse()
          .join("/");

        res.json({
          ...auto,
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
          .db("auto_entrega")
          .where({ id: auto.id })
          .update({ state: auto.state })
          .update({ state_description: auto.state_description })
          .update({ id_administrativo: auto.id_administrativo });
  
        res.json({
          data: status,
          // msg: `Documento: Auto de Entrega número ${auto.id} modificado com sucesso`,
        });
      console.log({status})
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { getAuto, getById, updateState };
};

// "auto_entrega.id",
// "ros.id"
// "a.dth_sistema",
// "a.dt_ocorrencia",
// "a.natureza_ocorrencia",
// "a.matricula",
// "a.condutor",
// "a.funcao_condutor",
// "a.conduzido",
// "a.doc_conduzido",
// "a.recebedor",
// "a.doc_recebedor",
// "a.funcao_recebedor",
// "a.lotacao_recebedor",
// "a.testemunha1",
// "a.doc_testemunha1",
// "a.testemunha2",
// "a.doc_testemunha2",
// "a.integrid_conduzido",
// "a.ass_condutor",
// "a.ass_recebedor",
// "a.ass_testemunha1",
// "a.ass_testemunha2",
// "a.relato",
// "a.coordenador",
// "a.inspetoria",
// "a.superior_servico",
