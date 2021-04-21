import { useSelector } from 'react-redux';

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
        <tr key={book.ID}>
          <td>
            {book.ID}
            {' '}
          </td>
          <td>
            {book.Title}
            {' '}
          </td>
          <td>
            {book.category}
            {' '}
          </td>
        </tr>

      ))}

    </table>
  );
};

export default BooksList;
