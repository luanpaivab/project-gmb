module.exports = (app) => {
    const limitStats = 15;
    
    const getComunicado = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, hora, condutor, inspetoria  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (hora) hora = hora.trim(); //tira o espaço em branco, final e começo
        else hora = "";
        
        if (condutor) condutor = condutor.trim(); //tira o espaço em branco, final e começo
        else condutor = "";
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("comunicado_interno")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("condutor", "like", `%${condutor}%`)
          .where("hr_comunicado", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_comunicado", ">=", dataInicial)
          .andWhere("dt_comunicado", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const comunicado = await app
          .db("comunicado_interno")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("condutor", "like", `%${condutor}%`)
          .where("hr_comunicado", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_comunicado", ">=", dataInicial)
          .andWhere("dt_comunicado", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const comunicadoFormated = comunicado.map(com => {
          const dataFormatada = com.dt_comunicado.split('-').reverse().join('/');
        
                return { ...com, dt_comunicado: dataFormatada };
              });
  
        res.json({ data: comunicadoFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
      .db("comunicado_interno")
      .join("users", "comunicado_interno.id_administrativo", "=", "users.id")
      .select("users.nome_funcional")
      .where("comunicado_interno.id","=",req.params.id)
      .first();

      app
      .db("comunicado_interno")
        .select()
        .table("comunicado_interno")
        .where({ id: req.params.id })
        .first()
        .then((com) => {
          const [date, time] = com.dth_sistema.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = com.dt_comunicado.split("-").reverse().join("/");
          
          res.json({ ...com, dth_sistema: formatedDtsistema, dt_comunicado: formatedDtocorrencia, responsavel: responsavel });
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
            .db("comunicado_interno")
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
  
    return { getComunicado, getById, updateState };
  };
  