// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Configuration
require('dotenv').config()
const app = express()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
const bookController = require('./controllers/books_controller.js')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.set('strictQuery', true)
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Connected!'))
app.use(cors())

// Routes and contoller
app.get('/', (req, res)=>{
    res.send('Home page')
})

app.use('/books', bookController)

app.get('*', (req, res) =>{
    res.status(404).send('404')
})

app.listen(PORT)