import express from 'express'
import { createServer } from 'http'

const port = process.env.PORT || 3000
const app = express()
const server = createServer(app)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(200)
})

server.listen(port, () => console.log(`Server listening on port ${port}`) )
