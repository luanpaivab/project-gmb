module.exports = (app) => {
    const limitStats = 15;
    
    const getRemunerados = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, inspetoria, placa  } = req.query;
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
        
        if (placa) placa = placa.trim(); //tira o espaço em branco, final e começo
        else placa = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("plantao_remunerado")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("placa", "like", `%${placa}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .first();
        const count = parseInt(result.count);
        const trocas = await app
          .db("plantao_remunerado")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("placa", "like", `%${placa}%`)
          .where("inspetoria", "like", `%${inspetoria}%`)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);
  
        res.json({ data: trocas, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
      .db("plantao_remunerado")
        .select()
        .table("plantao_remunerado")
        .where({ id: req.params.id })
        .first()
        .then((troca) => {
          const [date, time] = troca.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDt1 = troca.dt_opcaoUM.split("-").reverse().join("/");
          const formatedDt2 = troca.dt_opcaoDois.split("-").reverse().join("/");
          const formatedDt3 = troca.dt_opcaoTres.split("-").reverse().join("/");
          const formatedDt4 = troca.dt_opcaoQuarta.split("-").reverse().join("/");
          const formatedDt5 = troca.dt_opcaoQuinta.split("-").reverse().join("/");
          const formatedDt6 = troca.dt_opcaoSexta.split("-").reverse().join("/");
          
          res.json({ ...troca, dth_sist: formatedDtsistema, dt_opcaoUM: formatedDt1, dt_opcaoDois: formatedDt2, dt_opcaoTres: formatedDt3, dt_opcaoQuarta: formatedDt4, dt_opcaoQuinta: formatedDt5, dt_opcaoSexta: formatedDt6,});
        })
        .catch((err) => res.status(500).send(err));
      };
  
    return { getRemunerados, getById };
  };
  