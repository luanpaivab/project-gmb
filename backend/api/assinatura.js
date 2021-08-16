const multer = require("multer");
const multerConfig = require("../config/multer");

module.exports = (app) => {
  // UPLOAD DE IBAGENS

  const saveImgs = async (req, res) => {
    // const autor = {
    //     user_id: req.body.user_id,
    //   };

    const dados = { ...req.file };
    const inserir = await app.db("imgs_ass").insert({ ...dados });

    console.log(req.file);
    res.json({ data: inserir });
  };

  const getImgs = async (req, res) => {
    const inserir = await app.db("imgs_ass").select();

    console.log(req.file);
    res.json({ data: inserir });
  };

  const getAssinanteId = async (req, res) => {
    app
      .db("imgs_ass")
      .select()
      .where("user_id", "=", req.params.id)
      .first()
      .then((imagem) => {
        console.log(imagem);
        res.json(imagem);
      })
      .catch((err) => res.status(500).send(err));

    //  res.json({ ...auto, responsavel: responsavel, dth_sistema: formatedDtsistema,
    //    dt_ocorrencia: formatedDtocorrencia, });
  };
  
  const getById = async (req, res) => {
    app
      .db("imgs_ass")
      .select()
      .where({id: req.params.id})
      .first()
      .then((imagem) => {
        console.log(imagem);
        res.json(imagem);
      })
      .catch((err) => res.status(500).send(err));

    //  res.json({ ...auto, responsavel: responsavel, dth_sistema: formatedDtsistema,
    //    dt_ocorrencia: formatedDtocorrencia, });
  };

  return { getImgs, saveImgs, getAssinanteId, getById };
};
