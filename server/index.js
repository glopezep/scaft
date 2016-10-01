import express from 'express'
import { createServer } from 'http'
import socketio from 'socket.io'

const port = 3000
const app = express()
const server = createServer(app)
const io = socketio(server)
let mensajes = []


let products = [
  { id: 1, name: 'Orange Juice', price: 120, type: 'Juice'},
  { id: 2, name: 'Lemon Juice', price: 90, type: 'Juice'},
  { id: 3, name: 'Mango Juice', price: 150, type: 'Juice' },
  { id: 4, name: 'Pera Juice', price: 110, type: 'Juice' },
  { id: 5, name: 'Granadillo Juice', price: 70, type: 'Juice' },
  { id: 6, name: 'Apple Juice', price: 55, type: 'Juice' }
]
let order = {
  id: 1,
  products: [
    { id: 1, name: 'Orange Juice', price: 120, type: 'Juice'},
    { id: 2, name: 'Lemon Juice', price: 90, type: 'Juice'},
    { id: 3, name: 'Mango Juice', price: 150, type: 'Juice' },
    { id: 4, name: 'Pera Juice', price: 110, type: 'Juice' }
  ]
}
let orders = [ order ]

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(200)
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('/api/orders', (req, res) => {
  res.json(orders)
})

io.on('connection', socket => {
  console.log(`a user connected ${socket}`)
  io.emit('fetchMensajes', mensajes)
  socket.on('disconnect', () => console.log('a user disconnect'))
  socket.on('conectado', (msg) => {
    mensajes.push(msg)
    io.emit('conectado', msg)
  })
})


server.listen(port, () => console.log(`Server listening on port ${port}`))
