module.exports = (app) => {
  const limitStats = 5;

  const getReadaptados = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const result = await app
        .db("users")
        .count("readaptado as count")
        .where("readaptado", true)
        .first();
      const count = parseInt(result.count);
      const usersReadaptados = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where("readaptado", true)
        .where("deletado", false);

      res.json({ data: usersReadaptados, count, limitStats });
    } catch (error) {
      res.status(500).send(err);
    }
  };

  const getAtivos = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const resultAtivo = await app
        .db("users")
        .count("ativo as count")
        .where("ativo", true)
        .first();
      const resultInativo = await app
        .db("users")
        .count("ativo as count")
        .where("ativo", false)
        .first();
      const countAtivo = parseInt(resultAtivo.count);
      const countInativo = parseInt(resultInativo.count);

      const userAtivo = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where("ativo", true);
      const userInativo = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where("ativo", false);

      res.json({
        data: {
          userInativo,
          userAtivo,
        },
        countAtivo,
        countInativo,
        limitStats,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(err);
    }
  };

  const getGrupamento = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const result = await app
        .db("users")
        .count("grupamento as count")
        .where({ grupamento: req.params.grupamento })
        .first();
      const count = parseInt(result.count);

      const userGrupamento = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where({ grupamento: req.params.grupamento })
        .where("deletado", false);

      res.json({
        data: {
          userGrupamento,
        },
        count,
        limitStats,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(err);
    }
  };

  const getPorte = async (req, res) => {
    try {
      const page = req.query.page || 1;
      const resultPorte = await app
        .db("users")
        .count("porte as count")
        .where("porte", true)
        .first();
      const resultSemPorte = await app
        .db("users")
        .count("porte as count")
        .where("porte", false)
        .first();
      const countPorte = parseInt(resultPorte.count);
      const countSemPorte = parseInt(resultSemPorte.count);

      const userPorte = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where("porte", true)
        .where("deletado", false);
      const userSemPorte = await app
        .db("users")
        .select()
        .limit(limitStats)
        .offset(page * limitStats - limitStats)
        .where("porte", false)
        .where("deletado", false);

      res.json({
        data: {
          userSemPorte,
          userPorte,
        },
        countPorte,
        countSemPorte,
        limitStats,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(err);
    }
  };

  return { getReadaptados, getAtivos, getGrupamento, getPorte };
};
