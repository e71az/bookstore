const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  bookObject: book,
});
const REMOVE_BOOK = (book) => ({
  type: 'REMOVE_BOOK',
  bookObject: book,
});

export { CREATE_BOOK, REMOVE_BOOK };
