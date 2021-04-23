import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../reducers/books';

const BooksForm = () => {
  const dispatch = useDispatch();
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  let book = { ID: null, Title: null, category: 'Action' };

  const handleChange = (bookProp, event) => {
    if (bookProp === 'title') {
      book.Title = event.target.value;
    } else {
      book.category = event.target.value;
    }
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="input"
          placeholder="Please enter title of the book"
          onChange={(event) => {
            handleChange('title', event);
          }}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          onChange={(event) => {
            handleChange('category', event);
          }}
        >
          {categories.map((category) => (
            <option key="i">{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          book.ID = Math.floor(Math.random() * 100) + 1;
          dispatch(CREATE_BOOK(book));
          book = { ID: null, Title: null, category: 'Action' };
          document.getElementById('exampleForm.ControlInput1').value = '';
          document.getElementById('exampleForm.ControlSelect1').value = 'Action';
        }}
      >
        Add book
      </Button>
    </Form>
  );
};
export default BooksForm;
