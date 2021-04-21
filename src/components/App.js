import React from 'react';
import { useSelector } from 'react-redux';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

const App = () => {
  const { booksArray } = useSelector((state) => state.books);

  return (
    <div>
      <h1>
        Books:
        {console.log(booksArray)}
      </h1>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
