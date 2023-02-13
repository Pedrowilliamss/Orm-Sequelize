// const database = require('../models')
const Services = require('../services/Services')
const nivelServices = new Services('Niveis')

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
          const TodosOsNiveis = await nivelServices.pegaTodosOsRegistros()
          return res.status(200).json(TodosOsNiveis)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
      static async pegaUmNivel(req,res) {
        const { id } = req.params
        try{
            const UmNivel = await database.Niveis.findOne( { 
                where: { 
                    id: Number (id) 
                }
            } )
            return res.status(200).json(UmNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
    
      static async criaNivel(req, res) {
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
    
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }
    
      static async atualizaNivel(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Niveis.update(novasInfos,{ where: { id:Number(id) }})
            const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number (id) }})
            return res.status.jsoo(nivelAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
      }
    
      static async apagaNivel(req,res) {
        const { id } = req.params
    
        try {
            const nivelApagada = await database.Niveis.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({Mensagem: `O id ${id} foi apagado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
      }

      static async restauraNivel(req,res) {
        const { id } = req.params

        try {
          await database.Niveis.restore( {
            where: {id: Number(id)}
          })
          return res.status(200).json({Mensagem: `O id ${id} foi restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = NivelController