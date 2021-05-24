const routes = require('express').Router();
const multer = require('multer');
const multerConfi = require('./config/multer')




routes.post('/posts', multer(multerConfi).single('file'), async(req, res) => {
    console.log(req);

    const name = req.file.filename

    return res.json({ url: `http://localhost:3333/tmp/uploads/${name}`, name: name});

 });


 module.exports = routes;