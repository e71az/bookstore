/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../reducers/books';
// eslint-disable-next-line react/prop-types
const Book = ({ book: { ID, Title, category } }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (event) => {
    event.preventDefault();
    dispatch(REMOVE_BOOK(ID));
  };
  return (
    <Card className="container card">
      <Card.Body className="d-flex flex-row justify-content-between">
        <Card.Text>
          <div className="d-flex flex-column">
            <span className="category">
              {category}
            </span>
            <span className="header">
              {Title}
            </span>
            <a href="#" className="category mb-3">
              Suzzane Collins
            </a>
            <div className="d-flex flex-row ">
              <button type="button" className="category">
                Like
              </button>
              <button
                type="button"
                className="category"
                onClick={(event) => {
                  handleRemoveBook(event);
                }}
              >
                Remove
              </button>
              <button type="button" className="category">
                Edit
              </button>
            </div>
          </div>
        </Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button
          variant="primary"
          type="button"
          className="removebtn"
          onClick={(event) => {
            handleRemoveBook(event);
          }}
        >
          Remove Book
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Book;
