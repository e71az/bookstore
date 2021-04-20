import { Provider } from 'react-redux';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div>
    <Provider>
      <BooksList />
      <BooksForm />
    </Provider>
  </div>
);

export default App;
