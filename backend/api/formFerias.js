module.exports = (app) => {
    const limitStats = 15;
    
    const getFerias = async (req, res) => {
      try {
        let paramOfConsult = {};
        let { registro, matricula, inspetoria, opcao1, opcao2, opcao3  } = req.query;
 
        if (registro) paramOfConsult = { "id": registro };
        
        if (matricula) matricula = matricula.trim(); //tira o espaço em branco, final e começo
        else matricula = "";
        
        if (inspetoria) inspetoria = inspetoria.trim(); //tira o espaço em branco, final e começo
        else inspetoria = "";
           
        if (opcao1) opcao1 = opcao1.trim(); //tira o espaço em branco, final e começo
        else opcao1 = "";
        
        if (opcao2) opcao2 = opcao2.trim(); //tira o espaço em branco, final e começo
        else opcao2 = "";
        
        if (opcao3) opcao3 = opcao3.trim(); //tira o espaço em branco, final e começo
        else opcao3 = "";
            
        const page = req.query.page || 1;
        const result = await app
          .db("formulario_ferias")
          .count("id as count")
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("opcaoUm", "like", `%${opcao1}%`)
          .where("opcaoDois", "like", `%${opcao2}%`)
          .where("opcaoTres", "like", `%${opcao3}%`)
          .first();
        const count = parseInt(result.count);
        const formulario = await app
          .db("formulario_ferias")
          .select()
          .where(paramOfConsult) // filtra pelos campos escolhidos
          .where("inspetoria", "like", `%${inspetoria}%`)
          .where("matricula", "like", `%${matricula}%`)
          .where("opcaoUm", "like", `%${opcao1}%`)
          .where("opcaoDois", "like", `%${opcao2}%`)
          .where("opcaoTres", "like", `%${opcao3}%`)
          .limit(limitStats)
          .offset(page * limitStats - limitStats);

          const formularioFormated = formulario.map(form => {
            const dataFormatada = form.dt_solicitacao.split('-').reverse().join('/');
          
                  return { ...form, dt_solicitacao: dataFormatada };
                });
  
          res.json({ data: formularioFormated, count, limitStats });
      } catch (error) {
        res.status(500).send(error);
        console.log(error)
      }
    };
  
    const getById = async (req, res) => {
      const responsavel = await app
      .db("formulario_ferias")
      .join("users", "formulario_ferias.id_administrativo", "=", "users.id")
      .select("users.nome_funcional")
      .where("formulario_ferias.id","=",req.params.id)
      .first();

      app
      .db("formulario_ferias")
        .select()
        .table("formulario_ferias")
        .where({ id: req.params.id })
        .first()
        .then((ferias) => {
          const [date, time] = ferias.dth_sist.split(' ');
          const dateFormated = date.split("-").reverse().join("/");
          
          const formatedDtsistema = dateFormated + " " + time;
          const formatedDtocorrencia = ferias.dt_solicitacao.split("-").reverse().join("/");
 
          res.json({ ...ferias, dth_sist: formatedDtsistema, dt_solicitacao: formatedDtocorrencia, responsavel: responsavel});
        })
        .catch((err) => res.status(500).send(err));
      };

      const updateState = async (req, res) => {
        try {
          const form = {
            id: req.body.id,
            state: req.body.state,
            state_description: req.body.state_description,
            id_administrativo: req.body.id_administrativo,
          };
    
          const status = await app
            .db("formulario_ferias")
            .where({ id: form.id })
            .update({ state: form.state })
            .update({ state_description: form.state_description })
            .update({ id_administrativo: form.id_administrativo });
    
          res.json({
            data: status,
            // msg: `Documento: Auto de Entrega número ${form.id} modificado com sucesso`,
          });
        } catch (error) {
          res.status(500).send(error);
        }
      };
  
    return { getFerias, getById, updateState };
  };
  