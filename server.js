import express from 'express'

const app = express()
app.use(express.json())

const users = []

//Salvar usuarios na variavel e dar o ok!
app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.send('Ok, salvo!')

})

//Listar os usuarios.
app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000)


/*  (req = request / res = response) REQUISIÇÃO---> E <---RESPSOTAS
    ROTA--
    1) Tipo de Rota / Método HTTP
        get ----> Listar
        post ---> Criar
        put ----> Editar vários
        patch --> Editar 1 (Especifico)
        delete -> Deletar

    2) Endereço 
*/