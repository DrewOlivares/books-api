// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

const bookSchema= new Schema({
    title: {type: String, required: true},
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book