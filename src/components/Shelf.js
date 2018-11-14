import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

     render() {

          const books = this.props.books;
          const name = this.props.name;
          const updateShelf = this.props.updateShelf;

          return (
               <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="bookshelf-books">
                         <ol className="books-grid">
                              {
                                   books.map((book) => {
                                        return (
                                             <Book
                                                  book={book}
                                                  key={book.id}
                                                  updateShelf={updateShelf}
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