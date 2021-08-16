module.exports = (app) => {
  const limitStats = 15;

  const getEstoque = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, produto } = req.query;

      if (registro) paramOfConsult = { id: registro };

      if (produto) produto = produto.trim();
      //tira o espaço em branco, final e começo
      else produto = "";

      const page = req.query.page || 1;
      const result = await app
        .db("almoxarifado")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("produto", "like", `%${produto}%`)
        .first();
      const count = parseInt(result.count);
      const estoque = await app
        .db("almoxarifado")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("produto", "like", `%${produto}%`)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

      res.json({ data: estoque, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = (req, res) => {
    app
      .db("almoxarifado")
      .select()
      .table("almoxarifado")
      .where({ id: req.params.id })
      .first()
      .then((ferias) => {
        res.json({ ...ferias });
      })
      .catch((err) => res.status(500).send(err));
  };


  const save = async (req, res) => {
    try {
      const dados = { ...req.body };
        const inserir = await app
          .db("almoxarifado")
          .insert(dados);
        
        res.json({data: inserir})

    } catch (error) {
      res.status(500).send(error);
    }
  };

  const remove = async (req, res) => {
    try {
      const deletado = await app
        .db("almoxarifado")
        .where({ id: req.params.id })
        .del();

      res.json({data: deletado});
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const update = async (req, res) => {
    try {
      const produto = { ...req.body };

      const status = await app
        .db("almoxarifado")
        .where({ id: produto.id })
        .update({ produto })
       

      res.json({
        data: status,
        msg: `${produto.produto} modificado com sucesso`,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { getEstoque, getById, save, remove, update };
};
