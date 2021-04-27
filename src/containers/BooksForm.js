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

  const handleSubmit = (event) => {
    event.preventDefault();
    book.ID = Math.floor(Math.random() * 1000) + 1;
    dispatch(CREATE_BOOK(book));
    book = { ID: null, Title: null, category: book.category };
    document.getElementById('exampleForm.ControlInput1').value = '';
    document.getElementById('exampleForm.ControlSelect1').value = 'Action';
  };

  return (
    <>
      <h5 className="new-book-header mt-5 mb-3">ADD NEW BOOK</h5>
      <Form className="add-book-form d-flex justify-content-between">
        <Form.Group
          className="add-book-title"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="input"
            placeholder="Book title"
            onChange={(event) => {
              handleChange('title', event);
            }}
          />
        </Form.Group>
        <Form.Group
          className="add-book-category"
          controlId="exampleForm.ControlSelect1"
        >
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
          className="add-book-button"
          variant="primary"
          type="submit"
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Add book
        </Button>
      </Form>
    </>
  );
};
export default BooksForm;
