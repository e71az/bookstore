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

    <Card className="text-center container">

      <Card.Body className="card d-flex flex-row justify-content-between">
        <Card.Title>{ID}</Card.Title>
        <Card.Text>
          {Title}
        </Card.Text>
        <Card.Text>
          {category}
        </Card.Text>
        <Button
          variant="primary"
          type="button"
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
