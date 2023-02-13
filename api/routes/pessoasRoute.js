const { Router } = require('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController.js')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagarPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .post('/pessoas/:estidanteId/cancela', PessoaController.cancelaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)


module.exports = router