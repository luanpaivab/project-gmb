module.exports = (app) => {
    const limitStats = 15;
    
    const getAcidentes = async (req, res) => {
      try {
      let paramOfConsult = {};
      let { registro, tipo } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';

      if (registro) paramOfConsult = { "id": registro };
      
      if (tipo) tipo = tipo.trim();//tira o espaço em branco, final e começo
      else tipo = "";
        const page = req.query.page || 1;
        const result = await app
          .dbPop("acidente_transito")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_acidente", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const acidenteTransito = await app
          .dbPop("acidente_transito")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_acidente", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const acidenteFormated = acidenteTransito.map(acidente => {
            const dataFormatada = acidente.dt_ocorrencia.split('-').reverse().join('/');
    
            return { ...acidente, dt_ocorrencia: dataFormatada };
          });
  
        res.json({ data: acidenteFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
        .dbPop("acidente_transito")
        .select()
        .table("acidente_transito")
        .where({ id: req.params.id })
        .first()
        .then((acidente) => {
          const [date, time] = acidente.dth_sistema.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " - " + time;
          const formatedDtocorrencia = acidente.dt_ocorrencia.split("-").reverse().join("/");
          
          res.json({ ...acidente, dth_sistema: formatedDtsistema, dt_ocorrencia: formatedDtocorrencia });
        })
        .catch((err) => res.status(500).send(err));
      };
  
    return { getAcidentes, getById };
  };
  