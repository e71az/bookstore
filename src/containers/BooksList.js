import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { CHANGE_FILTER } from '../reducers/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    event.preventDefault();

    dispatch(CHANGE_FILTER(event.target.value));

    // document.getElementById('exampleForm.ControlSelect1').value = 'All';
  };
  const { booksArray, filter } = useSelector((state) => state.books);
  // eslint-disable-next-line max-len
  // const checkIfEmtpy = booksArray.length === 0 ? 'No books' : booksArray.map((book) => (<Book key={book.ID} book={book} />));

  console.log(booksArray);

  let checkIfEmtpy = booksArray;

  if (booksArray.length === 0 || booksArray === undefined) {
    checkIfEmtpy = 'No books';
  } else if (filter !== 'All') {
    checkIfEmtpy = booksArray.filter((obj) => obj.category === filter);

    checkIfEmtpy = checkIfEmtpy.map((book) => (
      <Book key={book.ID} book={book} />
    ));
  } else if (filter === 'All') {
    checkIfEmtpy = booksArray.map((book) => <Book key={book.ID} book={book} />);
  } else {
    checkIfEmtpy = 'idk what happened';
  }

  // const displayBook = (book) => (<Book key={book.ID} book={book} />);
  // eslint-disable-next-line max-len
  // const filteredArray = filter === 'All' ? booksArray : booksArray.filter((obj) => obj.category === filter);

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {checkIfEmtpy}
      </table>
    </div>
  );
};

export default BooksList;
