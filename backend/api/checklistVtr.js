module.exports = (app) => {
    const limitStats = 15;
    
    const getVtr = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, hora, encarregado, inspetoria  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (hora) hora = hora.trim(); //tira o espaço em branco, final e começo
        else hora = "";
        
        if (encarregado) encarregado = encarregado.trim(); //tira o espaço em branco, final e começo
        else encarregado = "";
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("checklist")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("encarregado", "like", `%${encarregado}%`)
          .where("hr_chegada", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_ocor", ">=", dataInicial)
          .andWhere("dt_ocor", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const checkVtr = await app
          .db("checklist")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("encarregado", "like", `%${encarregado}%`)
          .where("hr_chegada", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_ocor", ">=", dataInicial)
          .andWhere("dt_ocor", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const checkVtrFormated = checkVtr.map(vtr => {
          const dataFormatada = vtr.dt_ocor.split('-').reverse().join('/');
        
                return { ...vtr, dt_ocor: dataFormatada };
              });
  
        res.json({ data: checkVtrFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
      .db("checklist")
        .select()
        .table("checklist")
        .where({ id: req.params.id })
        .first()
        .then((vtr) => {
          const [date, time] = vtr.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = vtr.dt_ocor.split("-").reverse().join("/");
          const formatedDtEntrega = vtr.data_entrega.split("-").reverse().join("/");
          
          res.json({ ...vtr, dth_sist: formatedDtsistema, dt_ocor: formatedDtocorrencia, data_entrega: formatedDtEntrega});
        })
        .catch((err) => res.status(500).send(err));
      };
  
    return { getVtr, getById };
  };
  