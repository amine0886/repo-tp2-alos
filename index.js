/*const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello world');
});*/

const express = require('express')
const app = express()
const books = require('./db.json')

// Middleware
app.use(express.json())

app.get('/books', (req,res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const book = books.find(books => book.id === id)
    res.status(200).json(books)
})

app.post('/books', (req,res) => {
    books.push(req.body)
    res.status(200).json(books)
})

app.put('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let book = books.find(book => book.id === id)
    titel.name =req.titel.name,
    isbn.type =req.body.city,
    publishedDate.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let titele = books.find(titele => titele.id === id)
    books.splice(books.indexOf(titele),1)
    res.status(200).json(books)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})