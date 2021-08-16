module.exports = (app) => {
    const limitStats = 15;
  
    const getMateriais = async (req, res) => {
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
          .db("requisicao_material")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("servidor", "like", `%${nome}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("placa", "like", `%${matricula}%`)
          .where("dt_solicitacao", ">=", dataInicial)
          .andWhere("dt_solicitacao", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const ReqMateriais = await app
          .db("requisicao_material")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("servidor", "like", `%${nome}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("placa", "like", `%${placa}%`)
          .where("dt_solicitacao", ">=", dataInicial)
          .andWhere("dt_solicitacao", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);
  
        const ReqMateriaisFormated = ReqMateriais.map((material) => {
          const dataFormatada = material.dt_solicitacao.split("-").reverse().join("/");
  
          return { ...material, dt_solicitacao: dataFormatada };
        });
  
        res.json({ data: ReqMateriaisFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("requisicao_material")
        .join("users", "requisicao_material.id_user_register", "=", "users.id")
        .select("users.nome_funcional")
        .where("requisicao_material.id","=",req.params.id)
        .first();
  
      app
        .db("requisicao_material")
        .select()
        .where({ id: req.params.id })
        .first()
        .then((material) => {
          const [date, time] = material.dth_sist.split(" ");
          const dateFormated = date.split("-").reverse().join("/");
  
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = material.dt_solicitacao
            .split("-")
            .reverse()
            .join("/");
  
          res.json({
            ...material,
            responsavel: responsavel,
            dth_sist: formatedDtsistema,
            dt_solicitacao: formatedDtocorrencia,
          });
        })
        .catch((err) => res.status(500).send(err));
    };
  
    const updateState = async (req, res) => {
      try {
        const material = {
          state: req.body.state,
          state_description: req.body.state_description,
          responsavel: req.body.user_id,
        };
  
        const status = await app
          .db("requisicao_material")
          .where({ id: req.params.id })
          .update({ 
            state: material.state,
            state_description: material.state_description,
            user_id: material.responsavel
          });
  
        res.json({
          data: status,
          msg: `Documento: material de Entrega número ${material.id} modificado com sucesso`,
        });
        console.log({status})
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    return { getMateriais, getById, updateState };
  };