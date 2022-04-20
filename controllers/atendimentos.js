//controlar quais são as rotas

//req.params
//req.query
//req.header

const Atendimento = require('../models/atendimento')

module.exports = app => { //exportando
    //rotas
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        console.log(atendimento)
        Atendimento.adiciona(atendimento, res)
    })

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    });

   app.patch('/atendimentos/:id', (req, res) => {     
       const id = parseInt(req.params.id)
       const valores = req.body

       Atendimento.altera(id, valores, res)
   })

   app.delete('/atendimentos/:id', (req, res) => {
       const id = parseInt(req.params.id)

       Atendimento.deleta(id, res)
   })
}