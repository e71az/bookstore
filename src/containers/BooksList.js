import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const { booksArray } = useSelector((state) => state.books);

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>

      { booksArray.map((book) => (
        <Book key={book.ID} book={book} />
      ))}

    </table>
  );
};

export default BooksList;
