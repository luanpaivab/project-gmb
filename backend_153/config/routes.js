const admin = require("./admin");
const jwt = require("jwt-simple");

const multer = require('multer')
const multerConfig2 = require('./multer2')
const multerConfig3 = require('./multer3')

const verifyUser = (setor) => (req, res, next) => {
  const authToken = req.headers["authorization"].split(" ")[1];

  // console.log('token', authToken);

  try {
    if (authToken) {
      const payload = jwt.decode(authToken, 'woifasifnoncasnc78452155445');

      // if (payload.setor !== setor && payload.setor !== "MASTER") {
      //   return res
      //     .status(403)
      //     .json({ msg: "Usuário não pertence a este setor da " + setor });
      // }

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

// const verifyUserSubSetor = (subSetor) => (req, res, next) => {
//   const verify = res.locals.payload;
//   if (
//     verify.sub_setor !== subSetor &&
//     verify.sub_setor !== "SUB_MASTER"
//   ) {
//     return res
//       .status(403)
//       .json({ msg: `Usuário não pertence ao sub setor ${subSetor}` });
//   }
//   next()
// };

module.exports = (app) => {
  // app.post("/signup", app.api.user.save);
  // app.post("/signin", app.api.auth.signin);
  app.post("/validateToken", app.api.auth.validateToken);


  /*-------------IBAGENS 153------------------- */

  app
    .route("/imgbel153")
    .all(app.config.passport.authenticate())
    .post(multer(multerConfig2).single("file"), app.api.seguranca.imgbel153.saveImgs)
    .get(app.api.seguranca.imgbel153.getImgs);

    app
    .route("/imgbel153/:key")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.imgbel153.getById)


  /*############# Segurança GBEL153 #############*/

  app
    .route("/veiculosroubados")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.veiculoRoubado.getVeiculos);

  app
    .route("/veiculosroubados/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.veiculoRoubado.getById);

  app
    .route("/roubosefurtos")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.rouboFurto.getRoubosFurtos);

  app
    .route("/roubosefurtos/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.rouboFurto.getById);

  app
    .route("/rouboderesidencia")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.rouboDeResidencia.getRoubo);

  app
    .route("/rouboderesidencia/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.rouboDeResidencia.getById);

  app
    .route("/descarteirregular")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.descarteIrregular.getDescarte);

  app
    .route("/descarteirregular/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.descarteIrregular.getById);

  app
    .route("/acidentetransito")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.acidenteDeTransito.getAcidentes);

  app
    .route("/acidentetransito/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.acidenteDeTransito.getById);

  app
    .route("/denunciaincendio")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaDeIncendio.getDenuncia);

  app
    .route("/denunciaincendio/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaDeIncendio.getById);

  app
    .route("/sosmulher")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosMulher.getSos);

  app
    .route("/sosmulher/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosMulher.getById);

  app
    .route("/sosidoso")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosIdoso.getSos);

  app
    .route("/sosidoso/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosIdoso.getById);

  app
    .route("/sosmenores")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosMenores.getSos);

  app
    .route("/sosmenores/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.sosMenores.getById);

  app
    .route("/denunciavandalismo")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaVandalismo.getDenuncia);

  app
    .route("/denunciavandalismo/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaVandalismo.getById);

  app
    .route("/denunciatrafico")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaTrafico.getDenuncia);

  app
    .route("/denunciatrafico/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.seguranca.denunciaTrafico.getById);
};
