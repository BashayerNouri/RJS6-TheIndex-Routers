import React, { Component } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

class BookTable extends Component {
  state = { filteredBooks: this.props.books };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title} `.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  // book = this.props.book;

  render() {
    const bookRows = this.props.filteredBooks.map(book => (
      <BookRow key={book.id} book={book} />
    ));
    return (
      <>
        <SearchBar onChange={this.filterBooks} />
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </>
    );
  }
}

export default BookTable;
