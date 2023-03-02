const express = require('express')
const Book = require('../models/book.js')
const book_router = express.Router()

book_router.get('/', (req, res) => {
    res.send('books')
})

module.exports = book_router