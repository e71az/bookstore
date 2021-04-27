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

    <Card className="text-center container card">

      <Card.Body className="d-flex flex-row justify-content-around">
        <Card.Text>
          <div className="d-flex flex-column">
            <span className="category">
              {' '}
              {category}
              {' '}
            </span>
            <span className="header">
              {' '}
              {Title}
              {' '}
            </span>
            <span className="category">Suzzane</span>
            <div className="d-flex flex-row justify-content-between">
              <button type="button" className="category">Like</button>
              <button
                type="button"
                className="category"
                onClick={(event) => {
                  handleRemoveBook(event);
                }}
              >
                Remove
              </button>
              <button type="button" className="category">Edit</button>
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          {category}
        </Card.Text>
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
