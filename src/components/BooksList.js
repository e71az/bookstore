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
      <tr>
        <td>{booksArray[0].ID}</td>
        <td>{booksArray[0].Title}</td>
        <td>{booksArray[0].Category}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Learn Python The Hard Way</td>
        <td>Programming</td>
      </tr>
    </table>
  );
};

export default BooksList;
