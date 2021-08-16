module.exports = (app) => {
  const limitStats = 15;
  
  const getVeiculos = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, veiculo, ano } = req.query;
      const dataInicial = req.query.dataInicial ? req.query.dataInicial : '0001/01/01';
      const dataFinal = req.query.dataFinal ? req.query.dataFinal : '9999/01/01';
      
      if (registro) paramOfConsult = { "id": registro };
      
      if (veiculo) veiculo = veiculo.trim(); //tira o espaço em branco, final e começo
      else veiculo = "";
      
      if (ano) ano = ano.trim(); //tira o espaço em branco, final e começo
      else ano = "";
      const page = req.query.page || 1;
      
      const result = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_veiculo", "like", `%${veiculo}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .first();
      const count = parseInt(result.count);
      const veiculoRoubado = await app
        .dbPop("roubo_de_veiculos")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("tipo_veiculo", "like", `%${veiculo}%`)
        .where("dt_ocorrencia", ">=", dataInicial)
        .andWhere("dt_ocorrencia", "<=", dataFinal)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

        const veiculoRoubadoFormated = veiculoRoubado.map(veiculo => {
          const dataFormatada = veiculo.dt_ocorrencia.split('-').reverse().join('/');

        return { ...veiculo, dt_ocorrencia: dataFormatada };
      });

      /* ------------------ FILTROS POR ANO E MÊS ---------------------- */

      
      const janeiro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-01-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();
      
      const fevereiro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%-02-%`)
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
        
      const marco = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-03-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();
      
      const abril = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%-04-%`)
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
      
        const maio = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-05-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();
      
      const junho = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-06-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();
      
      const julho = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%-07-%`)
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
        
      const agosto = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-08-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();
      
      const setembro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%-09-%`)
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
      
        const outubro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-10-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();

      const novembro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%-11-%`)
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
      
        const dezembro = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
      .where("dt_ocorrencia", "like", `%-12-%`)
      .where("dt_ocorrencia", "like", `%${ano}%`)
      .first();

      const dadosAno = await app
      .dbPop("roubo_de_veiculos")
      .count("id as count")
        .where("dt_ocorrencia", "like", `%${ano}%`)
        .first();
      
      res.json({ data: veiculoRoubadoFormated, count, limitStats, dadosAno, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  const getById = async (req, res) => {
    // const img = await app
    //     .dbPop("roubo_de_veiculos")
    //     .join("imgbel153", "roubo_de_veiculos.id_foto", "=", "imgbel153.id")
    //     .select("imgbel153.filename")
    //     .where("roubo_de_veiculos.id_foto","=",req.params.id)
    //     .first();
    
    app
    .dbPop("roubo_de_veiculos")
      .select()
      .table("roubo_de_veiculos")
      .where({ id: req.params.id })
      .first()
      .then((veiculo) => {
        const [date, time] = veiculo.dth_sistema.split(' ');
        const dateFormated = date.split("-").reverse().join("/");
        
        const formatedDtsistema = dateFormated + " " + time;
        const formatedDtocorrencia = veiculo.dt_ocorrencia.split("-").reverse().join("/");
        
        res.json({ ...veiculo, dth_sistema:formatedDtsistema,  dt_ocorrencia: formatedDtocorrencia });
      })
      .catch((err) => res.status(500).send(err));
    };
    
    return { getVeiculos, getById };
    /* 
    if (hora) hora = hora.trim(); //tira o espaço em branco, final e começo
      else hora = "";
      if (data) data = data.trim(); //tira o espaço em branco, final e começo
      else data = "";
      
    // .where("hr_ocorrencia", "like", `%${hora}%`)
    // .where("dt_ocorrencia", "like", `%${data}%`)
    
    */
    // /*app
    //       .db("roubo_de_veiculos")
    //       .insert(veiculo)
    //       .then((_) => res.status(204).send())
    //       .catch((err) => res.status(500).send(err)); */
    // const save = async (req, res) => {
    //   const veiculo = { ...req.body };
    //   try {
    //     if (veiculo.id) {
    //       const updateVeiculo = await app
    //         .db("roubo_de_veiculos")
    //         .update(veiculo)
    //         .where({ id: veiculo.id });
    //       res.json({ data: updateVeiculo });
    //     } else {
    //       const saveVeiculo = await app
    //         .db("roubo_de_veiculos")
    //         .insert(veiculo);
    //       res.json({ data: saveVeiculo });
    //     }
    //   } catch (error) {
    //     res.status(500).send(err);
    //   }
    // };
  };