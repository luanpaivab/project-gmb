module.exports = (app) => {
    const limitStats = 20;
    
    const getSimGbel = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, hora, bairro, guarnicao  } = req.query;
        const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
        const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
        
        if (registro) paramOfConsult = { "id": registro };
        
        if (hora) hora = hora.trim(); //tira o espaço em branco, final e começo
        else hora = "";
        
        if (bairro) bairro = bairro.trim(); //tira o espaço em branco, final e começo
        else bairro = "";
        
        if (guarnicao) guarnicao = guarnicao.trim(); //tira o espaço em branco, final e começo
        else guarnicao = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("sim")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("bairro", "like", `%${bairro}%`)
          .where("hr_ocorrencia", "like", `%${hora}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const getSim = await app
          .db("sim")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("bairro", "like", `%${bairro}%`)
          .where("hr_ocorrencia", "like", `%${hora}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const getSimFormated = getSim.map(sim => {
          const dataFormatada = sim.dt_ocorrencia.split('-').reverse().join('/');
        
                return { ...sim, dt_ocorrencia: dataFormatada };
              });
  
        res.json({ data: getSimFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
        .db("sim")
        .join("users", "sim.operador", "=", "users.id")
        .select("users.nome_funcional")
        .where("sim.id","=",req.params.id)
        .first();

      app
      .db("sim")
        .select()
        .table("sim")
        .where({ id: req.params.id })
        .first()
        .then((sim) => {
          const [date, time] = sim.dth_sistema.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = sim.dt_ocorrencia.split("-").reverse().join("/");
          
          res.json({ ...sim, dth_sistema: formatedDtsistema, dt_ocorrencia: formatedDtocorrencia, operador:responsavel });
        })
        .catch((err) => res.status(500).send(err));
      };

      const save = async (req, res) => {
        try {
          const dados = { ...req.body };
          const formatedDtocorrencia = dados.dt_ocorrencia.split("/").reverse().join("-");
          
            const inserir = await app
              .db("sim")
              .insert({...dados, dt_ocorrencia: formatedDtocorrencia})
              
            res.json(inserir)
        } catch (error) {
          res.status(500).send(error);
        }
      };
  
    return { getSimGbel, getById, save };
  };
  