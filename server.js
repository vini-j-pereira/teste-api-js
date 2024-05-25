import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


//Salvar usuarios na variavel e dar o ok!
app.post('/usuarios', async (req, res) => {

   await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

//Listar os usuarios.
app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    }else{
     users = await prisma.user.findMany()
    }

    

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
         data: {
             email: req.body.email,
             name: req.body.name,
             age: req.body.age
         }
     })
 
     res.status(201).json(req.body)
 
 })

 app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: " Usuário deletado com sucesso!"})

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

    viniciusjosepereira
    KNkWE0kaPCxc0os7
*/