

import express, { Response } from 'express'
import { getBooks } from './Books'

const app = express()
const PORT = 3000


app.use((req, res: Response, next)=> {
    res.on('error', (x)=> {
        console.log('error', x)
    })
    next()
})

app.get('/Books', (req, res)=>{
    const books = getBooks()
    res.send(books)
})
app.get('/Books/:id', ()=>{console.log('get books')})
app.get('/Books/search', ()=>{
    
})
app.post('/books', ()=>{

})



app.listen(PORT, ()=> {
    console.log('App runing on port: ', PORT)
})

