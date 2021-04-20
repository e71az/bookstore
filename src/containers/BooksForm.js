import { Button, Form } from 'react-bootstrap';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="input" placeholder="Please enter title of the book" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select">
          <option>{categories[0]}</option>
          <option>{categories[1]}</option>
          <option>{categories[2]}</option>
          <option>{categories[3]}</option>
          <option>{categories[4]}</option>
        </Form.Control>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default BooksForm;
