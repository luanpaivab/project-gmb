const admin = require("./admin");
const jwt = require("jwt-simple");
const { authSecret } = require("../.env");
const multer = require('multer')
const multerConfig = require('./multer')
const multerConfig3 = require('./multer3')

const verifyUser = (setor) => (req, res, next) => {
  const authToken = req.headers["authorization"].split(" ")[1];

  // console.log('token', authToken);

  try {
    if (authToken) {
      const payload = jwt.decode(authToken, authSecret);

      if (payload.setor !== setor && payload.setor !== "MASTER") {
        return res
          .status(403)
          .json({ msg: "Usuário não pertence a este setor da " + setor });
      }

      console.log(payload);
      res.locals.payload = payload;

      next();
    } else {
      res.send({ message: "No token provided" });
    }
  } catch (e) {
    console.log(e);

    next(e);
  }

  // res.send(false);
};

const verifyUserSubSetor = (subSetor) => (req, res, next) => {
  const verify = res.locals.payload;
  if (
    verify.sub_setor !== subSetor &&
    verify.sub_setor !== "SUB_MASTER"
  ) {
    return res
      .status(403)
      .json({ msg: `Usuário não pertence ao sub setor ${subSetor}` });
  }
  next()
};

module.exports = (app) => {
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);
  app.post("/validateToken", app.api.auth.validateToken);

  /*-------------IBAGENS GBel------------------- */

  app
    .route("/upload")
    .all(app.config.passport.authenticate())
    .post(multer(multerConfig).single("file"), app.api.upload.saveImgs)
    .get(app.api.upload.getImgs);

    app
    .route("/upload/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.upload.getById)

  /*-------------IBAGENS ASSINATURAS------------------- */

  app
    .route("/assinaturas")
    .all(app.config.passport.authenticate())
    .post(multer(multerConfig3).single("file"), app.api.assinatura.saveImgs)
    .get(app.api.assinatura.getImgs);

  app
    .route("/assinatura/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.assinatura.getAssinanteId)

  app
    .route("/assinaturaid/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.assinatura.getById)

  /*-------------------------------- */

  app
    .route("/users")
    .all(app.config.passport.authenticate())
    .post(verifyUser('MASTER'),admin(app.api.users.save))
    .get(verifyUser('DEN'),admin(app.api.users.get));

  app
    .route("/users/:id")
    .all(app.config.passport.authenticate())
    .put(verifyUser('MASTER'),admin(app.api.users.update))
    .get(verifyUser('DEN'),admin(app.api.users.getById))
    .delete(admin(app.api.users.remove));

  app
    .route("/categories")
    .all(app.config.passport.authenticate())
    .get(app.api.category.get)
    .post(admin(app.api.category.save));

  app
    .route("/categories/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById)
    .put(admin(app.api.category.save))
    .delete(admin(app.api.category.remove));

  app
    .route("/ros")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('PLANEJAMENTO'), app.api.ro.get)
    .post(verifyUser("DOP"),verifyUserSubSetor('PLANEJAMENTO'),app.api.ro.save);

  app
    .route("/ros/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('PLANEJAMENTO'),app.api.ro.getById)
    .put(verifyUser("DOP"),verifyUserSubSetor('PLANEJAMENTO'),app.api.ro.updateState)
    .delete(admin(app.api.ro.remove));

  app
    .route("/readaptados")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('SUB_MASTER'), app.api.userStats.getReadaptados);

  app
    .route("/ativos")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('SUB_MASTER'),app.api.userStats.getAtivos);

  app
    .route("/grupamento/:grupamento")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('SUB_MASTER'),app.api.userStats.getGrupamento);

  app
    .route("/porte")
    .all(app.config.passport.authenticate())
    .get(verifyUser("DOP"),verifyUserSubSetor('SUB_MASTER'),app.api.userStats.getPorte);

//--------DOP - PLANEJAMENTO------------
  app
    .route("/relatorioalgemacao")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioAlgemacao.getRelatorio);

  app
    .route("/relatorioalgemacao/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioAlgemacao.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioAlgemacao.updateState);

  app
    .route("/autoentrega")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoEntrega.getAuto);

  app
    .route("/autoentrega/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoEntrega.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoEntrega.updateState);
  
  app
    .route("/autoapreensao")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoApreensao.getAuto);

  app
    .route("/autoapreensao/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoApreensao.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.autoApreensao.updateState);
  
  app
    .route("/relatoriomissao")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioMissao.getRelatorio);

  app
    .route("/relatoriomissao/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioMissao.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioMissao.updateState)

  app
    .route("/comunicadointerno")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.comunicadoInterno.getComunicado);

  app
    .route("/comunicadointerno/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.comunicadoInterno.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.comunicadoInterno.updateState);

  app
    .route("/relatoriodisparo")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioDisparo.getRelatorio);

  app
    .route("/relatoriodisparo/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioDisparo.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.relatorioDisparo.updateState);

  app
    .route("/formularioferias")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.formFerias.getFerias);

  app
    .route("/formularioferias/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.formFerias.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.formFerias.updateState);

//------------PROCESSOS INTERNOS-----
  app
    .route("/trocaservico")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaServico.getTroca);

  app
    .route("/trocaservico/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaServico.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.trocaServico.updateState);


  app
    .route("/trocahorario")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaHorario.getTroca);

  app
    .route("/trocahorario/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaHorario.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.trocaHorario.updateState);


  app
    .route("/trocaturno")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaTurno.getTroca);

  app
    .route("/trocaturno/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.trocaTurno.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.trocaTurno.updateState);


  app
    .route("/abonofalta")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.abonoFaltas.getAbono);

  app
    .route("/abonofalta/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.abonoFaltas.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.abonoFaltas.updateState);


  app
    .route("/outrassolicitacoes")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.outrasSolicit.getOutras);

  app
    .route("/outrassolicitacoes/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('PROTOCOLO'),app.api.outrasSolicit.getById)
    .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.outrasSolicit.updateState);


  app
    .route("/remunerados")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('REMUNERADOS'),app.api.remunerados.getRemunerados);

  app
    .route("/remunerados/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser('DOP'), verifyUserSubSetor('REMUNERADOS'),app.api.remunerados.getById)
    // .put(verifyUser('DOP'), verifyUserSubSetor('PLANEJAMENTO'),app.api.remunerados.updateState);


  /*-------------SIM------------------ */

  app
    .route("/sim")
    .all(app.config.passport.authenticate())
    .get(verifyUser("SIM"), app.api.sim.getSimGbel)
    .post(verifyUser("SIM"), app.api.sim.save);

  app
    .route("/sim/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("SIM"),app.api.sim.getById);
  
    /*-------------ALMOXARIFADO------------------ */

  app
    .route("/almoxarifado")
    .all(app.config.passport.authenticate())
    .post(verifyUser("ALMOXARIFADO"), app.api.almoxarifado.save)
    .get(verifyUser("ALMOXARIFADO"), app.api.almoxarifado.getEstoque);
    
  app
    .route("/almoxarifado/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("ALMOXARIFADO"), app.api.almoxarifado.getById)
    .put(verifyUser("ALMOXARIFADO"), app.api.almoxarifado.update)
    .delete(verifyUser("ALMOXARIFADO"), app.api.almoxarifado.remove);

  app
    .route("/uniforme")
    .all(app.config.passport.authenticate())
    .get(verifyUser("ALMOXARIFADO"), app.api.uniforme.getUniforme);

  app
    .route("/uniforme/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("ALMOXARIFADO"),app.api.uniforme.getById)
    .put(verifyUser('ALMOXARIFADO'), app.api.uniforme.updateState);

  app
    .route("/materiais")
    .all(app.config.passport.authenticate())
    .get(verifyUser("ALMOXARIFADO"), app.api.materiais.getMateriais);

  app
    .route("/materiais/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("ALMOXARIFADO"),app.api.materiais.getById)
    .put(verifyUser('ALMOXARIFADO'), app.api.materiais.updateState);

  /*-------------TRANSPORTE------------------ */

  app
    .route("/checklistvtr")
    .all(app.config.passport.authenticate())
    .get(verifyUser("TRANSPORTE"),app.api.checklistVtr.getVtr);

  app
    .route("/checklistvtr/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("TRANSPORTE"),app.api.checklistVtr.getById);

  app
    .route("/checklistmoto")
    .all(app.config.passport.authenticate())
    .get(verifyUser("TRANSPORTE"),app.api.checklistMoto.getMoto);

  app
    .route("/checklistmoto/:id")
    .all(app.config.passport.authenticate())
    .get(verifyUser("TRANSPORTE"),app.api.checklistMoto.getById);


};
