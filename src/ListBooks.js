import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './components/Shelf'

class ListBooks extends React.Component {


     render () {

      const books = this.props.books;
      const updateShelf = this.props.updateShelf;

          return (
               <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                 <div>
                    <Shelf
                      name="Currently Reading"
                      books={books.filter((book) => {
                        return book.shelf === 'currentlyReading';
                        })}
                      updateShelf={updateShelf}
                    />
                    <Shelf
                      name="Want to Read"
                      books={books.filter((book) => {
                        return book.shelf === 'wantToRead';
                      })}
                      updateShelf={updateShelf}
                    />
                    <Shelf
                      name="Read"
                      books={books.filter((book) => {
                        return book.shelf === 'read';
                      })}
                      updateShelf={updateShelf}
                    />
                 </div>
               </div>
               <div className="open-search">
                 <Link
                   to="/search">
                 </Link>
               </div>
             </div>
          )
     }
}

export default ListBooks