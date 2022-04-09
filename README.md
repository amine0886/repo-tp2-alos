# repo-tp2-alos
tp2
creation un repertoir
* mkdir projet-alos2
* cd projet alos2
* npm init y
* code . 

nous avont le ficheir package.json dont notre repertoire
*npm install express pour installer la librairie express
on cree un ficher index.js sur vscode apres on fait la creation du serveur Express dans ce fichier 
    const express = require('express') // pour importer la librairie express et ses fonctions dans notre code.
    const app = express()  //
   
pour le momet ke serveur et peparer mais pas encor lancer et pou le lancé on ajout la fonction ;
      app.listen(8080, () => {
      console.log("Serveur à l'écoute")
        })
maintenanant en lançant la commande node index.js dans le terminal est le serveur vas commancé a nous afficher sur localhost:8080 depuis notre navigateur

maintenant on ramane notre api books db.json dans le repertoire

const express = require('express')
const app = express()
const books = require('./db.json')

app.get('/books', (req,res) => {
    res.status(200).json(books)
})

app.get('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const book = books.find(books => book.id === id)
    res.status(200).json(books)
})
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
    
 dans le terminal on arret le serveur avec ctrl+c et on relance node index.js a nouveau mais cette foire pour ne par repeté cette etap a chaque fois il existe la librairie Nodemon qui permet de relancer automatiquement le serveur node on instalon 
  *npm i -g nodemon
  apres * nodemon index.js danc ce cas le serveur vas lance automatiquement
  
  sur le fichier index.js
  
  const express = require('express')
const app = express()
const books = require('./db.json')

// Middleware
app.use(express.json())

app.get('/books', (req,res) => {
    res.status(200).json(books)
})
<!--  -->
app.get('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const book = books.find(books => book.id === id)
    res.status(200).json(books)
})
<!--  -->

app.post('/books', (req,res) => {
    books.push(req.body)
    res.status(200).json(books)
})
