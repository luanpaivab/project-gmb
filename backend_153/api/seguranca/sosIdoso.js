module.exports = (app) => {
    const limitStats = 15;
    
    const getSos = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, tipo } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };

        if (tipo) tipo = tipo.trim(); //tira o espaço em branco, final e começo
        else tipo = "";
        
        const page = req.query.page || 1;
        const result = await app
          .dbPop("sos_idoso")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_agressao", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const sosIdoso = await app
          .dbPop("sos_idoso")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_agressao", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const sosIdosoFormated = sosIdoso.map(sos => {
          const dataFormatada = sos.dt_ocorrencia.split('-').reverse().join('/');
      
              return { ...sos, dt_ocorrencia: dataFormatada };
            });
  
        res.json({ data: sosIdosoFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
        .dbPop("sos_idoso")
        .select()
        .table("sos_idoso")
        .where({ id: req.params.id })
        .first()
        .then((sos) => {
          const [date, time] = sos.dth_sistema.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = sos.dt_ocorrencia.split("-").reverse().join("/");
          
          res.json({ ...sos, dth_sistema: formatedDtsistema, dt_ocorrencia: formatedDtocorrencia });
        })
        .catch((err) => res.status(500).send(err));
      };
  
    return { getSos, getById };
  };
  