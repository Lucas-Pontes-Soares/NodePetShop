//configurar o express

const express =  require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => { //expoprtar uma função que irá configurar o aplicativo e retorna a variavel app
    const app = express()

    app.use(bodyParser.urlencoded({ extended: true })) //conseguir ler urlencoded
    app.use(bodyParser.json()) //conseguir ler json

    consign()                   //importando
        .include('controllers') //incluindo o controllers
        .into(app)

    return app
}

