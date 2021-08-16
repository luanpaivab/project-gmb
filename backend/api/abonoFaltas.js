module.exports = (app) => {
    const limitStats = 15;
    
    const getAbono = async (req, res) => {
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
          .db("abono_falta")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("solicitante", "like", `%${placa}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("data_solicitacao", ">=", dataInicial)
          .andWhere("data_solicitacao", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const trocas = await app
          .db("abono_falta")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("solicitante", "like", `%${placa}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("data_solicitacao", ">=", dataInicial)
          .andWhere("data_solicitacao", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const trocasFormated = trocas.map(troca => {
          const dataFormatada = troca.data_solicitacao.split('-').reverse().join('/');
        
                return { ...troca, data_solicitacao: dataFormatada };
              });
  
        res.json({ data: trocasFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("abono_falta")
        .join("users", "abono_falta.id_administrativo", "=", "users.id")
        .select("users.nome_funcional")
        .where("abono_falta.id","=",req.params.id)
        .first();

      app
      .db("abono_falta")
        .select()
        .table("abono_falta")
        .where({ id: req.params.id })
        .first()
        .then((troca) => {
          const [date, time] = troca.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = troca.data_solicitacao.split("-").reverse().join("/");
          const formatedDtfalta = troca.data_falta.split("-").reverse().join("/");
          
          res.json({ ...troca, dth_sist: formatedDtsistema, data_falta: formatedDtfalta, data_solicitacao: formatedDtocorrencia, responsavel: responsavel, });
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
            .db("abono_falta")
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
  
    return { getAbono, getById, updateState };
  };
  