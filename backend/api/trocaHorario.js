module.exports = (app) => {
    const limitStats = 15;
    
    const getTroca = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, inspetoria, placa  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
        
        if (placa) placa = placa.trim(); //tira o espaço em branco, final e começo
        else placa = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("troca_horario")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("solicitante", "like", `%${placa}%`)
          .where("inspetoria_solicitante", "like", `%${inspetoria}%`)
          .where("dt_solicitacao", ">=", dataInicial)
          .andWhere("dt_solicitacao", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const trocas = await app
          .db("troca_horario")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("solicitante", "like", `%${placa}%`)
          .where("inspetoria_solicitante", "like", `%${inspetoria}%`)
          .where("dt_solicitacao", ">=", dataInicial)
          .andWhere("dt_solicitacao", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const trocasFormated = trocas.map(troca => {
          const dataFormatada = troca.dt_solicitacao.split('-').reverse().join('/');
        
                return { ...troca, dt_solicitacao: dataFormatada };
              });
  
        res.json({ data: trocasFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("troca_horario")
        .join("users", "troca_horario.id_administrativo", "=", "users.id")
        .select("users.nome_funcional")
        .where("troca_horario.id","=",req.params.id)
        .first();

      app
      .db("troca_horario")
        .select()
        .table("troca_horario")
        .where({ id: req.params.id })
        .first()
        .then((troca) => {
          const [date, time] = troca.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = troca.dt_solicitacao.split("-").reverse().join("/");
          const formatedDtdia = troca.dia_datroca_horario.split("-").reverse().join("/");
          
          res.json({ ...troca, dth_sist: formatedDtsistema, dt_solicitacao: formatedDtocorrencia, dia_datroca_horario:formatedDtdia, responsavel: responsavel, });
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
            .db("troca_horario")
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
  
    return { getTroca, getById, updateState };
  };
  