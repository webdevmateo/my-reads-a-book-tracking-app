import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './components/Book'

class Search extends React.Component {

  state = {
    books: [],
    results: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  updateQuery = (query) => {
    this.setState(
      {query: query},
      this.handleSearch
    )
  }

  handleSearch = () => {
    const query = this.state.query;

    if (query === '' || query === undefined) {
      return this.setState({
        results: []
      })
    }

    BooksAPI.search(query.trim())
    .then((response) => {
      console.log(response);
      if (response.error) {
        return this.setState({
          results: []
        })
      } else {
        return this.setState({
          results: response
        })
      }
    })
  }

  render() {

    const updateShelf = this.props.updateShelf;

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search">
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(e) => this.updateQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.results.map((book) => {
                    return (
                      <Book
                        key={book.id}
                        book={book}
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

export default Search

