

import express, { Request, Response } from 'express'
import { addBook, Book, getBooks, getBooksWithQuery } from './Books'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// app.use(json.par)
var jsonParser = bodyParser.json()
app.use((req, res: Response, next)=> {
    res.on('error', (x)=> {
        console.log('error', x)
        res.status(500)
    })
    next()
})

app.get('/Books', (req, res)=>{
    const books = getBooks()
    res.send(books)
})
app.get('/Books/search', (req, res)=>{
    const query = req.query as Partial<Book>
    const books = getBooksWithQuery(query)
    res.send(books)
})
app.get('/Books/:id', (req, res)=>{
    const id: number = +req.params['id'] 
    const books = getBooksWithQuery({
        id: id
    })
    res.send(books)
})

app.post('/books',jsonParser, (req: Request, res)=>{
    addBook(req.body)
    res.send("Book Added")
})



app.listen(PORT, ()=> {
    console.log('App runing on port: ', PORT)
})

