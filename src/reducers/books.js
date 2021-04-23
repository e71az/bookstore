import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookCreator',
  initialState: {
    booksArray: [
      {
        Title: 'Theory of everything',
        category: 'Science',
        ID: Math.floor(Math.random() * 100) + 1,
      },
      {
        Title: 'Creative crafting',
        category: 'Arts',
        ID: Math.floor(Math.random() * 100) + 1,
      },
      {
        Title: 'Harry Potter',
        category: 'Fiction',
        ID: Math.floor(Math.random() * 100) + 1,
      },
    ],
    filter: 'All',
    filteredBooks: [],

  },

  reducers: {
    CREATE_BOOK: (state, action) => {
      state.booksArray.push(action.payload);
    },
    REMOVE_BOOK: (state, action) => ({
      booksArray: state.booksArray.filter((obj) => obj.ID !== action.payload),
    }),

    // eslint-disable-next-line max-len
    CHANGE_FILTER: (state, action) => ({
      filter: action.payload,
      booksArray: state.booksArray,
    }),
  },

});

export const { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } = bookSlice.actions;

export default bookSlice.reducer;
