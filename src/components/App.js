import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import MainNavbar from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const App = () => (
  <div>
    <MainNavbar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
