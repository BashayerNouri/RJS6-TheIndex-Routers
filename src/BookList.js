// import React, { Component } from "react";

// class BookList extends Component {
//   state = { filteredBooks: this.props.books };
//   filterBooks = query => {
//     query = query.toLowerCase();
//     let filteredBooks = this.props.books.filter(book =>
//       `${book.title} `.toLowerCase().includes(query)
//     );
//     this.setState({ filteredBooks: filteredBooks });
//   };

//   render() {
//     const books = this.props.books.map(book => (
//       <div className="row" key={book.id}>
//         <div className="col col-3">{book.title}</div>
//         <div className="col col-3">{book.authors}</div>
//         <div className="col col-3">{book.color}</div>
//       </div>
//     ));
//     console.log(books);

//     return (
//       <>
//         <>{books}</>
//       </>
//     );
//   }
// }
// export default BookList;
