import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => (
  <table>
    <tr>
      <td>Book ID</td>
      <td>Title</td>
      <td>Category</td>
    </tr>
    props.add
    <tr><Book /></tr>
  </table>
);

const mapStateToProps = (state) => ({

});
// const mapDispatchToProps = (dispatch) => ({
//   add: () => dispatch({ type: add }),
// });
connectBooks = connect(mapStateToProps, null)(BooksList);
export default BooksList;
