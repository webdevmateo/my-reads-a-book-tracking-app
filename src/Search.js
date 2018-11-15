import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './components/Book'

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      books: this.props.books,
      results: [],
      query: ''
    }
  }

  componentDidMount() {
    console.log(this.state.books);
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
        response.forEach(b => {
          let match = this.state.books.filter(B => B.id === b.id);
          b.shelf = match[0] ? match[0].shelf : 'none';
        });
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

