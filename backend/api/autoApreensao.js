module.exports = (app) => {
    const limitStats = 15;
    
    const getAuto = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, ro, produto, condutor  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        if (ro) paramOfConsult = {...paramOfConsult, "ro_id": ro};
        if (produto) produto = produto.trim(); //tira o espaço em branco, final e começo
        else produto = "";
        if (condutor) condutor = condutor.trim(); //tira o espaço em branco, final e começo
        else condutor = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("auto_apreensao")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("produto", "like", `%${produto}%`)
          .where("condutor", "like", `%${condutor}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const autoApreensao = await app
          .db("auto_apreensao")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("produto", "like", `%${produto}%`)
          .where("condutor", "like", `%${condutor}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const autoApreensaoFormated = autoApreensao.map(auto => {
          const dataFormatada = auto.dt_ocorrencia.split('-').reverse().join('/');
        
                return { ...auto, dt_ocorrencia: dataFormatada };
              });
  
        res.json({ data: autoApreensaoFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("auto_apreensao")
        .join("users", "auto_apreensao.id_administrativo", "=", "users.id")
        .select("users.nome_funcional")
        .where("auto_apreensao.id","=",req.params.id)
        .first();
  
      app
        .db("auto_apreensao")
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
  
          res.json({ ...auto, responsavel: responsavel, dth_sistema: formatedDtsistema,
            dt_ocorrencia: formatedDtocorrencia, });
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
          .db("auto_apreensao")
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
  
    return { getAuto, getById, updateState };
  };
  
  // "a.id",
  // "a.dth_sistema",
  // "a.dt_ocorrencia",
  // "a.produto",
  // "a.condutor",
  // "a.matricula",
  // "a.funcao_condutor",
  // "a.recebedor",
  // "a.doc_recebedor",
  // "a.funcao_recebedor",
  // "a.lotacao_recebedor",
  // "a.ass_condutor",
  // "a.ass_recebedor",
  // "a.coordenador",
  // "a.inspetoria",
  // "a.superior_servico",
  // "r.id" 