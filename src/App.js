import React from 'react'
import {Route} from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => {
          return (b.id !== book.id)
        }).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
          )}
        />
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
