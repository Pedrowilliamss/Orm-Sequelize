const { Router } = require('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController.js')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagarPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)


module.exports = router