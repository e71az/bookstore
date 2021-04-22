import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_BOOK } from '../reducers/books';

// eslint-disable-next-line react/prop-types
const Book = ({ book: { ID, Title, category } }) => {
  const book = { ID, Title, category };
  const { booksArray } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{ID}</td>
      <td>{Title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            // eslint-disable-next-line no-debugger
            // debugger;
            dispatch(REMOVE_BOOK(book));

            console.log(booksArray);
          }}
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
};
export default Book;
