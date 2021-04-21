import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../reducers/books';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

const App = () => {
  const { booksArray } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Books:
        {console.log(booksArray)}
      </h1>
      <button type="button" onClick={() => dispatch(addBook())}>
        Add Book
      </button>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
