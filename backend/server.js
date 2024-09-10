import express, { json } from 'express'
import cors from 'cors'
import cliente from './config/db.js'
import {insRequests, delRequests, updateQuantities} from './controllers/requestsController.js'
import {insProducts, delProducts, updatePriceProducts} from './controllers/requestsController.js'

const server = express()

const products = []

const produtos = []

server.use(express.json())
server.use(cors())

// Products Home Page

server.get('/home', async (req, res) => {
    
    try {
        const resultado = await cliente.query('SELECT * FROM products')
        res.json(resultado.rows)
    }

    catch(ex){
        console.log(ex)
    }
})

server.post('/home/filter', async (req, res) => { //GET SÓ ACEITA REQ.PARAMS

    const {min, max} = req.body

    const minPrice = parseFloat(min)
    const maxPrice = parseFloat(max)

    try {
        const resultado = await cliente.query('SELECT * FROM products WHERE price BETWEEN $1 AND $2', [minPrice, maxPrice])
        res.json(resultado.rows)
    }

    catch(ex){
        console.log(ex)
    }
})

server.post('/home', async (req, res) => {
    const {product, price, image} = req.body

    try {
        await insProducts(product, price, image)

        const newProduct = {id, product, price, image}
        produtos.push(newProduct)

        res.status(201),json(newProduct)
    }

    catch(error) {
        res.status(500).json(error)
    }
})

server.delete('/home/:id', async (req, res) => {
    const {id} = req.params

    try {
        await delProducts(id)

        const index = produtos.findIndex(produtos => produtos.id === parseInt(id))

        produtos.splice(index, 1)
        res.status(200).json({message: 'Produto removido com sucesso'})
    }

    catch (error) {
        console.log(error)
    }
})

server.put('/home/:id', async (req, res) => {
    const {id} = req.params
    const {price} = req.body

    try {
        await updatePriceProducts(id, price)

        res.status(200).json({message: 'Price atualizado'})
    }

    catch (error) {
        console.log(error)
    }
})

// Fim Products Home Page

// Products Sale Page

server.get('/sale', async (req, res) => {

    try {
        const resultado = await cliente.query('SELECT * FROM requests')
        res.json(resultado.rows)
    }

    catch(ex) {
        console.log(ex)
    }
})

server.post('/sale', async (req, res) => {
    const {id, price, product, image, quantities} = req.body

    try{
        await insRequests(id, price, product, image, quantities)

        const newRequest = {id, price, product, image, quantities}
        products.push(newRequest)

        res.status(201).json(newRequest)
    }

    catch(error) {
        res.status(500).json({error})
    }
})

server.delete('/sale/:id', async (req, res) => {
    const {id} = req.params

    try {
        await delRequests(id)

        const index = products.findIndex(product => product.id === parseInt(id))

        products.splice(index, 1)
        res.status(200).json({message: 'Produto removido com sucesso'})
    }

    catch (error) {
        console.log(error)
    }
})

server.put('/sale/:id', async (req, res) => {
    const {id} = req.params
    const {quantities} = req.body

    try {
        await updateQuantities(id, quantities)

        res.status(200).json({message: 'Quantidade Atualizada'})
    }

    catch (error) {
        console.log(error)
    }
})

// Fim Products Sale Page

//Está mantendo conexão com banco de dados aberta enquanto o servidor está rodando
process.on('SIGTERM', async () => {
    console.log('Fechando Servidor...')

    await cliente.end()
    console.log('Desconectado')

    process.exit(0)
})
//

server.listen({
    port: 3000
})
