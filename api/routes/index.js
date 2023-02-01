const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute.js')
const turmas = require('./turmasRoute.js')
const niveis = require('./niveisRoute.js')

module.exports = app => {
    app.use(bodyParser.json(),bodyParser.urlencoded({extended:false}),
    pessoas,
    niveis,
    turmas)
}