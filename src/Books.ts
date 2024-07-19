// const books: Books[] = []

// const fakeApi = 'https://freetestapi.com/api/v1/books'

import __data from './Data.json'
export type Book = typeof data[0]

const data = [...__data]

export const getBooks = ()=> {
    return data
} 


export const getBooksWithQuery = (query: Partial<Book>)=> {
    console.log(query)
    console.log('data', data)
    return data.find(b => {
        if(query.author && b.author.toLowerCase().includes(query.author.toLowerCase())){
            return true
        }
        if(query.id && +query.id == b.id){
            return true
        }
        if(query.description && b.description.toLowerCase().includes(query.description.toLowerCase())){
            return true
        }
        if(query.title && b.title.toLowerCase().includes(query.title.toLowerCase())){
            return true
        }
    }) ?? []
}

export const addBook = (body: Book) => {
    data.push(body) 
}