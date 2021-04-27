/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../reducers/books';
import image from '../assets/circle-progress.png';
// eslint-disable-next-line react/prop-types
const Book = ({ book: { ID, Title, category } }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (event) => {
    event.preventDefault();
    dispatch(REMOVE_BOOK(ID));
  };
  return (
    <Card className="container card">
      <Card.Body className="d-flex flex-row justify-content-between align-items-center">
        <Card.Text>
          <div className="d-flex flex-column">
            <span className="category">{category}</span>
            <span className="header">{Title}</span>
            <a href="#" className="category mb-3 mr-3">
              Suzzane Collins
            </a>
            <div className="d-flex flex-row ">
              <a href="#" className="category mr-1">
                Like
              </a>
              <a
                href="#"
                className="category remove-book mr-1 px-1"
                onClick={(event) => {
                  handleRemoveBook(event);
                }}
              >
                Remove
              </a>
              <a href="#" className="category">
                Edit
              </a>
            </div>
          </div>
        </Card.Text>
        <div className="d-flex align-items-center">
          <img className="progress-image" src={image} alt="progress-circle" />
          <div className="ml-3">
            <h5>25%</h5>
            <span>Completed</span>
          </div>
        </div>
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
