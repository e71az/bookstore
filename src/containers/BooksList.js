import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { CHANGE_FILTER } from '../reducers/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    event.preventDefault();

    dispatch(CHANGE_FILTER(event.target.value));

    document.getElementById('exampleForm.ControlSelect1').value = 'All';
  };
  const { booksArray, filter } = useSelector((state) => state.books);
  console.log(booksArray);
  const displayBook = (book) => (<Book key={book.ID} book={book} />);
  const filteredArray = filter === 'All' ? booksArray : booksArray.filter((obj) => obj.category === filter);

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {filteredArray.map(displayBook)}
      </table>
    </div>
  );
};

export default BooksList;
