module.exports = (app) => {
    const limitStats = 15;
    
    const getMoto = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, hora, motorista, inspetoria  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (hora) hora = hora.trim(); //tira o espaço em branco, final e começo
        else hora = "";
        
        if (motorista) motorista = motorista.trim(); //tira o espaço em branco, final e começo
        else motorista = "";
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("checklist_moto")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("motorista", "like", `%${motorista}%`)
          .where("hr_chegada", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_serv", ">=", dataInicial)
          .andWhere("dt_serv", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const checkMoto = await app
          .db("checklist_moto")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("motorista", "like", `%${motorista}%`)
          .where("hr_chegada", "like", `%${hora}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("dt_serv", ">=", dataInicial)
          .andWhere("dt_serv", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const checkMotoFormated = checkMoto.map(moto => {
          const dataFormatada = moto.dt_serv.split('-').reverse().join('/');
        
                return { ...moto, dt_serv: dataFormatada };
              });
  
        res.json({ data: checkMotoFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
      .db("checklist_moto")
        .select()
        .table("checklist_moto")
        .where({ id: req.params.id })
        .first()
        .then((moto) => {
          const [date, time] = moto.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = moto.dt_serv.split("-").reverse().join("/");
          const formatedDtEentrega = moto.dt_entreg_moto.split("-").reverse().join("/");
          
          res.json({ ...moto, dth_sist: formatedDtsistema, dt_serv: formatedDtocorrencia, dt_entreg_moto: formatedDtEentrega });
        })
        .catch((err) => res.status(500).send(err));
      };
  
    return { getMoto, getById };
  };
  