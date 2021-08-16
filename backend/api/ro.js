const queries = require("./queries");

module.exports = (app) => {
  const { existsOrError } = app.api.validation;

  const save = (req, res) => {
    try {
      const ro = {
        /*   id: req.body.id,
            dtSistema: req.body.dtSistema,
            dtOcorrencia: req.body.dtOcorrencia,
            hrChamada: req.body.hrChamada,
            inOcorrencia: req.body.inOcorrencia,
            termOcorrencia: req.body.termOcorrencia,
            meioChamada: req.body.meioChamada,
            estadoOcorrencia: req.body.estadoOcorrencia,
            cidadeOcorrencia: req.body.cidadeOcorrencia,
            bairroOcorrencia: req.body.bairroOcorrencia,
            numOcorrencia: req.body.numOcorrencia,
            cepOcorrencia: req.body.cepOcorrencia,
            codOcorrencia: req.body.codOcorrencia,
            naturezaOcorrencia: req.body.naturezaOcorrencia,
            solicit: req.body.solicit,
            doc: req.body.doc,
            tel: req.body.tel,
            endOcorrencia: req.body.endOcorrencia,
            userId: req.body.userId,
            categoryId: req.body.categoryId
        */
        ...req.body,
      };
      if (req.params.id) ro.id = req.params.id;
      if (ro.meioChamada) {
        if (ro.meioChamada.trim().toLowerCase() === "outros") {
          ro.meioChamada = ro.meioChamadaOutros;
        }
      }
      delete ro.meioChamadaOutros;

      if (ro.id) {
        app
          .db("registro_ocorrencia")
          .update(ro)
          .where({ id: ro.id })
          .then((_) => res.status(204).send())
          .catch((err) => res.status(500).send(err));
      } else {
        app
          .db("registro_ocorrencia")
          .insert(ro)
          .then((_) => res.status(204).send())
          .catch((err) => res.status(500).send(err));
      }
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  const remove = async (req, res) => {
    try {
      const rowsDeleted = await app
        .db("registro_ocorrencia")
        .where({ id: req.params.id })
        .del();

      try {
        existsOrError(rowsDeleted, "Artigo não foi encontrado!");
      } catch (msg) {
        return res.status(400).send(msg);
      }

      res.status(204).send();
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  const limit = 20;
  const get = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, data, natureza, hora } = req.query;
      const dataInicial = req.query.dataInicial
        ? req.query.dataInicial
        : "0001-01-01";
      const dataFinal = req.query.dataFinal
        ? req.query.dataFinal
        : "9999-01-01";

      if (registro) paramOfConsult = { id: registro };
      if (natureza) paramOfConsult = { ...paramOfConsult, natureza: natureza };

      const page = req.query.page || 1;
      const result = await app
        .db("registro_ocorrencia")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .first();
      const count = parseInt(result.count);
      const getRos = await app
        .db("registro_ocorrencia")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .limit(limit)
        .offset(page * limit - limit);

      const registroFormated = getRos.map((registro) => {
        const dataFormatada = registro.dt_ocorrencia
          .split("-")
          .reverse()
          .join("/");

        return { ...registro, dt_ocorrencia: dataFormatada };
      });

      res.json({ data: registroFormated, count, limit });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = async (req, res) => {
    const responsavel = await app
        .db("registro_ocorrencia")
        .join("users", "registro_ocorrencia.id_administrativo", "=", "users.id")
        .select("users.nome_funcional")
        .where("registro_ocorrencia.id","=",req.params.id)
        .first();

    app
      .db("registro_ocorrencia")
      .select()
      .table("registro_ocorrencia")
      .where({ id: req.params.id })
      .first()
      .then((ro) => {
        const [date, time] = ro.dth_sistema.split(" ");
        const dateFormated = date.split("-").reverse().join("/");

        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = ro.dt_ocorrencia
          .split("-")
          .reverse()
          .join("/");

        res.json({
          ...ro,
          dth_sistema: formatedDtsistema,
          dt_ocorrencia: formatedDtocorrencia,
          responsavel: responsavel
        });
      })
      .catch((err) => res.status(500).send(err));
  };
  
  const updateState = async (req, res) => {
    try {
      const ro = {
        state: req.body.state,
        state_description: req.body.state_description,
        id_administrativo: req.body.id_administrativo,
      };

      const status = await app
        .db("registro_ocorrencia")
        .where({ id: req.params.id })
        .update({ 
          state: ro.state,
          state_description: ro.state_description,
          id_administrativo: ro.id_administrativo
        });

      res.json({
        data: status,
        msg: `Documento: RO de Entrega número ${ro.id} modificado com sucesso`,
      });
      console.log({status})
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { save, remove, get, getById, updateState };
};

/*

const bo_pc = ro.bo_pc.toString();
        const bo = bo_pc == true ? "Sim" : "Não";

        const tco_pc = ro.tco_pc.toString();
        const tco = tco_pc == true ? "Sim" : "Não";

        const aut_entrega_pc = ro.aut_entrega_pc.toString();
        const entrega = aut_entrega_pc == true ? "Sim" : "Não";

        const aut_apreensao_pc = ro.auto_apreensao_pc.toString();
        const apreensao = aut_apreensao_pc == true ? "Sim" : "Não";

        const aut_entrega_gmb = ro.auto_entrega_gmb.toString();
        const entrega_gmb = aut_entrega_gmb == true ? "Sim" : "Não";

        const aut_apreensao_gmb = ro.auto_apreensao_gmb.toString();
        const apreensao_gmb = aut_apreensao_gmb == true ? "Sim" : "Não";

        const outros_doc = ro.outros_doc.toString();
        const outros = outros_doc == true ? "Sim" : "Não";

const getByCategory = async (req, res) => {
  const page = req.query.page || 1;
  const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
  const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';

  let paramOfConsult = {};
  let { registro, data, natureza, solicit } = req.query;

  if (registro) paramOfConsult = { "a.id": registro };
  if (natureza) paramOfConsult = { ...paramOfConsult, "a.naturezaOcorrencia": natureza };
  if (data) data = data.trim();//tira o espaço em branco, final e começo
  else data = "";

  if (solicit) solicit = solicit.trim();
  //tira o espaço em branco, final e começo
  else solicit = "";
  app
    .db({ a: "ros", u: "users" })
    .select(
      "a.id",
      "a.solicit",
      "a.doc",
      "a.tel",
      "a.endOcorrencia",
      "a.dtSistema",
      "a.dtOcorrencia",
      "a.hrChamada",
      "a.inOcorrencia",
      "a.termOcorrencia",
      "a.meioChamada",
      "a.estadoOcorrencia",
      "a.cidadeOcorrencia",
      "a.bairroOcorrencia",
      "a.numOcorrencia",
      "a.cepOcorrencia",
      "a.codOcorrencia",
      "a.naturezaOcorrencia",
      "a.autorPres",
      "a.endAutor",
      "a.genAutor",
      "a.docAutor",
      "a.nomeVitima",
      "a.endVitima",
      "a.genVitima",
      "a.docVitima",
      "a.localAutor",
      "a.localVitima",
      "a.apoioRecebido",
      "a.descApoio",
      { author: "u.email" }
    )
    .limit(limit)
    .offset(page * limit - limit)
    .whereRaw("?? = ??", ["u.id", "a.userId"])
    .where(paramOfConsult) // filtra pelo registro ou pelo solicit
    .where("dtOcorrencia", ">=", dataInicial)
    .andWhere("dtOcorrencia", "<=", dataFinal)
    // .where("hrChamada", "<", "18:00")
    .where("a.solicit", "like", `%${solicit}%`)
    .orderBy("a.id", "desc")
    .then((ros) => {
      const rosFormated = ros.map(ro => {
        const dataFormatada = ro.dtOcorrencia.split('-').reverse().join('/');

        return { ...ro, dtOcorrencia: dataFormatada };
      });

      res.json(rosFormated);
    })
    .catch((err) => res.status(500).send(err));
};
*/