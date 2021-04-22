import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../reducers/books';

// eslint-disable-next-line react/prop-types
const Book = ({ book: { ID, Title, category } }) => {
  const book = { ID, Title, category };
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{ID}</td>
      <td>{Title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => dispatch(REMOVE_BOOK(book))}>Remove Book</button></td>
    </tr>
  );
};
export default Book;
