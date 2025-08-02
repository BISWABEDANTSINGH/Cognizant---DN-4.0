import React from 'react';

function BookDetails({ books }) {
  if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="st2">
      <h1>Book Details</h1>
      {books.map((book) =>
        book.price > 500 ? (
          <div key={book.id} className="entry">
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ) : null
      )}
    </div>
  );
}

export default BookDetails;
