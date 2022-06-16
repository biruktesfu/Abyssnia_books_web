import React, { Fragment, useEffect, useState } from "react";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  //get Books

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();
      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  //delete Books
  const deleteBooks = async id => {
    try {
      const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });

      setBooks(books.filter((books) => books.book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Books Title Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((books) => (
            <tr key={books.book_id}>
              <td>{books.title}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBooks(books.books_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListBooks;
