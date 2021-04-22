import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_BOOK } from '../reducers/books';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => {
  const { booksArray } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Books:
        {booksArray.ID}
      </h1>
      <button type="button" onClick={() => dispatch(CREATE_BOOK())}>
        Add Book
      </button>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
