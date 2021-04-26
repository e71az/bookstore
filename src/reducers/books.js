import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookCreator',
  initialState: {
    booksArray: [
      {
        Title: 'Theory of everything',
        category: 'Action',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
      {
        Title: 'Creative crafting',
        category: 'Biography',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
      {
        Title: 'Harry Potter',
        category: 'History',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
    ],
    filter: 'All',

  },

  reducers: {
    CREATE_BOOK: (state, action) => {
      state.booksArray.push(action.payload);
    },
    REMOVE_BOOK: (state, action) => ({
      booksArray: state.booksArray.filter((obj) => obj.ID !== action.payload),
    }),

    CHANGE_FILTER: (state, action) => ({
      filter: action.payload,
      booksArray: state.booksArray,
    }),
  },

});

export const { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } = bookSlice.actions;

export default bookSlice.reducer;
