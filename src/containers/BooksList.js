import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const { booksArray } = useSelector((state) => state.books);
  // eslint-disable-next-line max-len
  const checkIfEmtpy = booksArray.length === 0 ? 'No books' : booksArray.map((book) => (<Book key={book.ID} book={book} />));

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {checkIfEmtpy}
    </table>
  );
};

export default BooksList;
