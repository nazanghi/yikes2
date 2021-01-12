const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
// const helmet = require('helmet')

const AppRouter = require("./routes/AppRouter")

const PORT = process.env.PORT ||3030

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'client', 'build')))
// app.use(helmet({contentSecurityPolicy: false}))

app.get('/', (request, response) => response.send({message: "It's a-me, a-server!"}))
app.use('/api', AppRouter) 

app.get('*', (request, response) => response.sendFile(path.join(__dirname, "client", 'build', 'index.html')))


app.listen(PORT, ()=> console.log(`you'se gots yeself a server on port: ${PORT}`))

