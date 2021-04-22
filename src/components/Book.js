// eslint-disable-next-line react/prop-types
const Book = ({ book: { ID, Title, category } }) => (
  <tr>
    <td>{ID}</td>
    <td>{Title}</td>
    <td>{category}</td>
  </tr>
);

export default Book;
