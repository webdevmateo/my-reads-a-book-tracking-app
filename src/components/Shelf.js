import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

     render() {

          const books = this.props.books;
          const name = this.props.name;

          return (
               <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="bookshelf-books">
                         <ol className="books-grid">
                              {
                                   books.map((book) => {
                                        console.log(book);
                                        return (
                                             <Book
                                                  book={book}
                                                  key={book.id}
                                             />
                                        )
                                   })
                              }
                         </ol>
                    </div>
              </div>
          )
     }
}

export default Shelf