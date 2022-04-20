//subir o servidor no ar

const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const cors = require('cors');

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
        app.use((req, res, next) => {
            app.use(cors()); 
            //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
            res.header("Access-Control-Allow-Origin", "*");
            //Quais são os métodos que a conexão pode realizar na API
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        });
    }
})
