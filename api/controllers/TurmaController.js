const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      const {data_inicial, data_final} = req.query
      const where = { }
      data_inicial || data_final ? where.data_inicio = { } : null;
      data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
      data_final ? where.data_inicio[Op.lte] = data_final : null;
        try {
          const todasAsTurmas = await database.Turmas.findAll({where})
          return res.status(200).json(todasAsTurmas)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      } 

      // modelo da query WHERE
      // {
      //   where: {
      //     data_inicio: {
      //       [Op.gte]:data,
      //       [Op.lte]:data
      //     }
      //   }
      // }
    
      static async pegaUmaTurma(req,res) {
        const { id } = req.params
        try{
            const umaTurma = await database.Turmas.findOne( { 
                where: { 
                    id: Number (id) 
                }
            } )
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
    
      static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
    
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
    
      static async atualizaTurma(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Turmas.update(novasInfos,{ where: { id:Number(id) }})
            const TurmaAtualizada = await database.Turmas.findOne({ where: { id: Number (id) }})
            return res.status.json(TurmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
      }
    
      static async apagarTurma(req,res) {
        const { id } = req.params
    
        try {
            const turmaApagada = await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({Mensagem: `O id ${id} foi apagado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }

      static async restauraTurma(req, res) {
        const { id } = req.params
        try {
          await database.Turmas.restore( {where: { id: Number(id) } } )
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = TurmaController