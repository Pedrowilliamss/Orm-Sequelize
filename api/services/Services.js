const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id) {
        //
    }

    async criaRegistro(dados) {
        //
    }

    async atualizaRegistro(dadosAtualizados, id, transação = {}) {
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {id:id}}, transação)
    }

    async atualizaRegistros(dadosAtualizados, where, transação = {}) {
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {...where}}, transação)
    }

    async excluiRegistro(id) {
        //
    }
}

module.exports = Services;