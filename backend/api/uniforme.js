module.exports = (app) => {
    const limitStats = 15;
  
    const getUniforme = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, nome, matricula, placa } = req.query;
        const dataInicial = req.query.dataInicial
          ? req.query.dataInicial
          : "0001-01-01";
        const dataFinal = req.query.dataFinal
          ? req.query.dataFinal
          : "9999-01-01";
  
        if (registro) paramOfConsult = { id: registro };
        
        if (nome) nome = nome.trim();
        //tira o espaço em branco, final e começo
        else nome = "";
        if (matricula) matricula = matricula.trim();
        //tira o espaço em branco, final e começo
        else matricula = "";
        if (placa) placa = placa.trim();
        //tira o espaço em branco, final e começo
        else placa = "";
  
        const page = req.query.page || 1;
        const result = await app
          .db("solicitacao_uniforme")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("servidor", "like", `%${nome}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("placa", "like", `%${placa}%`)
          .where("dt_requerimento", ">=", dataInicial)
          .andWhere("dt_requerimento", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const SolicitUniforme = await app
          .db("solicitacao_uniforme")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("servidor", "like", `%${nome}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("placa", "like", `%${placa}%`)
          .where("dt_requerimento", ">=", dataInicial)
          .andWhere("dt_requerimento", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);
  
        const SolicitUniformeFormated = SolicitUniforme.map((uniforme) => {
          const dataFormatada = uniforme.dt_requerimento.split("-").reverse().join("/");
  
          return { ...uniforme, dt_requerimento: dataFormatada };
        });
  
        res.json({ data: SolicitUniformeFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("solicitacao_uniforme")
        .join("users", "solicitacao_uniforme.id_user_register", "=", "users.id")
        .select("users.nome_funcional")
        .where("solicitacao_uniforme.id","=",req.params.id)
        .first();
  
      app
        .db("solicitacao_uniforme")
        .select()
        .where({ id: req.params.id })
        .first()
        .then((uniforme) => {
          const [date, time] = uniforme.dth_sist.split(" ");
          const dateFormated = date.split("-").reverse().join("/");
  
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = uniforme.dt_requerimento
            .split("-")
            .reverse()
            .join("/");
  
          res.json({
            ...uniforme,
            responsavel: responsavel,
            dth_sist: formatedDtsistema,
            dt_requerimento: formatedDtocorrencia,
          });
        })
        .catch((err) => res.status(500).send(err));
    };
  
    const updateState = async (req, res) => {
      try {
        const uniforme = {
          state: req.body.state,
          state_description: req.body.state_description,
          responsavel: req.body.user_id,
        };
  
        const status = await app
          .db("solicitacao_uniforme")
          .where({ id: req.params.id })
          .update({ 
            state: uniforme.state,
            state_description: uniforme.state_description,
            user_id: uniforme.responsavel
          });
  
        res.json({
          data: status,
          msg: `Documento: uniforme de Entrega número ${uniforme.id} modificado com sucesso`,
        });
        console.log({status})
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    return { getUniforme, getById, updateState };
  };