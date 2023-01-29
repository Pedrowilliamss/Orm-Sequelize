const database = require('../models/pessoas');


class PessoaController {
    static async pegaTodasAsPessoas(req,res) {
        try {
            const todasAsPessoas = await database.Pessoas.findALL()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController