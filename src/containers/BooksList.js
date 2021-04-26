import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { CHANGE_FILTER } from '../reducers/books';

const BooksList = () => {
  // eslint-disable-next-line no-debugger
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    event.preventDefault();

    dispatch(CHANGE_FILTER(event.target.value));

    // document.getElementById('exampleForm.ControlSelect1').value = 'All';
  };

  const { booksArray } = useSelector((state) => state.books);
  let { filter } = useSelector((state) => state.books);
  if (filter === undefined) {
    filter = 'All';
  }
  // eslint-disable-next-line max-len
  // const checkIfEmtpy = booksArray.length === 0 ? 'No books' : booksArray.map((book) => (<Book key={book.ID} book={book} />));

  console.log(booksArray);

  let checkIfEmtpy = booksArray;
  // eslint-disable-next-line no-debugger
  if (booksArray.length === 0 || booksArray === undefined) {
    checkIfEmtpy = 'No books';
    console.log(checkIfEmtpy);
  } else if (filter === 'All') {
    checkIfEmtpy = booksArray.map((book) => <Book key={book.ID} book={book} />);
    console.log(checkIfEmtpy);
  } else if (checkIfEmtpy.length > 0 && checkIfEmtpy !== undefined && checkIfEmtpy !== []) {
    checkIfEmtpy = booksArray.filter((obj) => obj.category === filter);
    console.log(checkIfEmtpy);

    checkIfEmtpy = checkIfEmtpy.map((book) => (
      <Book key={book.ID} book={book} />
    ));
    console.log(checkIfEmtpy);
  } else {
    checkIfEmtpy = 'idk what happened';
    console.log(checkIfEmtpy);
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
