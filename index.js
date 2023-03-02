// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Configuration
require('dotenv').config()
const app = express()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.set('strictQuery', true)
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// Routes and contoller
app.get('/', (req, res)=>{
    res.send('Home page')
})

const bookController = require('./controllers/books_controller.js')
app.use('/books', bookController)

app.get('*', (req, res) =>{
    res.status(404).send('Get error/stub')
})

app.listen(PORT)