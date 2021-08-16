module.exports = (app) => {
    const limitStats = 15;
    
    const getSos = async (req, res) => {
      try {
      let paramOfConsult = {};
      let { registro, tipo, ano } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001-01-01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999-01-01';
      
      if (registro) paramOfConsult = { "id": registro };

      if (tipo) tipo = tipo.trim(); //tira o espaço em branco, final e começo
      else tipo = "";

      if (ano) ano = ano.trim(); //tira o espaço em branco, final e começo
      else ano = "";
      
      const page = req.query.page || 1;
        const result = await app
          .dbPop("sos_mulher")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_agressao", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .first();
        const count = parseInt(result.count);
        const sosMulher = await app
          .dbPop("sos_mulher")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("tipo_agressao", "like", `%${tipo}%`)
          .where("dt_ocorrencia", ">=", dataInicial)
          .andWhere("dt_ocorrencia", "<=", dataFinal)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const sosMulherFormated = sosMulher.map(sos => {
          const dataFormatada = sos.dt_ocorrencia.split('-').reverse().join('/');
        
                return { ...sos, dt_ocorrencia: dataFormatada };
              });

              const janeiro = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-01-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
              
              const fevereiro = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%-02-%`)
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
                
              const marco = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-03-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
              
              const abril = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%-04-%`)
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
              
                const maio = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-05-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
              
              const junho = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-06-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
              
              const julho = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%-07-%`)
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
                
              const agosto = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-08-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
              
              const setembro = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%-09-%`)
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
              
                const outubro = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-10-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
        
              const novembro = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%-11-%`)
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
              
                const dezembro = await app
              .dbPop("sos_mulher")
              .count("id as count")
              .where("dt_ocorrencia", "like", `%-12-%`)
              .where("dt_ocorrencia", "like", `%${ano}%`)
              .first();
        
              const dadosAno = await app
              .dbPop("sos_mulher")
              .count("id as count")
                .where("dt_ocorrencia", "like", `%${ano}%`)
                .first();
  
        res.json({ data: sosMulherFormated, count, limitStats, dadosAno, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro });
      } catch (error) {
        res.status(500).send(error);
      }
    };
  
    const getById = (req, res) => {
      app
        .dbPop("sos_mulher")
        .select()
        .table("sos_mulher")
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
  