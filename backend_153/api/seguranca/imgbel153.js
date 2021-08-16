
module.exports = (app) => {
    // UPLOAD DE IBAGENS
    
    const saveImgs = async (req, res) => {
      
      // multer(multerConfig).single("file")
      console.log(req.file)
      const dados = {...req.file}
            const inserir = await app
              .dbPop("imgbel153")
              .insert(dados);

           res.json({data: inserir, dados: req.file})
    }
   
    const getImgs = async (req, res) => {
  
            const inserir = await app
              .dbPop("imgbel153")
              .select();
       
              console.log(req.file);
           res.json({data: inserir})
    }
    
    const getById = async (req, res) => {
      app
        .dbPop("imgbel153")
        .select()
        .where("key", "=", req.params.key)
        .first()
        .then((imagem) => {
          console.log(imagem);
          res.json(imagem);
        })
        .catch((err) => res.status(500).send(err));
  
      //  res.json({ ...auto, responsavel: responsavel, dth_sistema: formatedDtsistema,
      //    dt_ocorrencia: formatedDtocorrencia, });
    };
  
  
  
    return { getImgs, saveImgs, getById };
  };
  









// const morgan = require('morgan')
// const express = require('express')

// module.exports = (app) => {
//     app.use(express.json());
//     app.use(express.urlencoded({ extended: true }));
//     app.use(morgan("dev"));
// }