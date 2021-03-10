//importar a dependencia do slite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


//utilizar o objeto de banco de dados para nossas opreações
db.serialize(() => {
    //com comandos sql, eu vou:

    // 1 criar uma tabela

    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    //2 inserir dados na tabela

    // const query = `
    //     INSERT INTO places (
    //         image, 
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    // ) VALUES (?,?,?,?,?,?,?)
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Scavenger",
    //     "Rua oito, casa 14",
    //     "Ilha bela",
    //     "Maranhão",
    //     "São Luís",
    //     "Resíduos Eletrônicos, Lâmpadas, Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData) //passar função por referência, só o nome sem o (), para que ela seja executada depois, se tiver o () ela é chamada imediatamente

    //3 consultar os dados da tabela

    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // })

    //4 deletar um dado da tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

})