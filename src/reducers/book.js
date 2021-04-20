import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const book = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {

      };
      break;
    case REMOVE_BOOK:
      return {

      };
      break;
    default:
      return state;
  }
};
export default book;
