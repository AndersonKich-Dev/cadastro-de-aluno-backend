const routes = require('express').Router();
const multer = require('multer');
const multerConfi = require('./config/multer')

const AlunoController = require('./controllers/alunoController')
const AvatarController = require('./controllers/avatarController')


routes.post('/upload', multer(multerConfi).single('file'), async(req, res) => {

    return res.json({ url: `http://localhost:3333/tmp/uploads/${req.file.filename}`, name: req.file.filename});

 });

 routes.post('/aluno', AlunoController.create);
 routes.get('/aluno', AlunoController.get);
 routes.delete('/aluno/:id', AlunoController.remove);
 routes.get('/aluno/:id', AlunoController.getById);
 routes.put('/aluno/:id', AlunoController.create);

 routes.delete('/aluno/avatar/:id', AvatarController.remove);


 module.exports = routes;