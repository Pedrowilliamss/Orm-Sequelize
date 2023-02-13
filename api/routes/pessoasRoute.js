const { Router } = require('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController.js')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:id', PessoaController.apagarPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)


module.exports = router