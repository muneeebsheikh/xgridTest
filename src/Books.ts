// const books: Books[] = []

// const fakeApi = 'https://freetestapi.com/api/v1/books'

import data from './Data.json'
export type Book = typeof data[0]

export const getBooks = ()=> {
    return data
} 


export const getBooksWithQuery = (query: Partial<Book>)=> {
    return data.find(x => x == query)
}

