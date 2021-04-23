import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookCreator',
  initialState: {
    booksArray: [
      {
        Title: 'Theory of everything',
        category: 'Science',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
      {
        Title: 'Creative crafting',
        category: 'Arts',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
      {
        Title: 'Harry Potter',
        category: 'Fiction',
        ID: Math.floor(Math.random() * 1000) + 1,
      },
    ],
  },

  reducers: {
    CREATE_BOOK: (state, action) => {
      state.booksArray.push(action.payload);
    },
    REMOVE_BOOK: (state, action) => ({
      booksArray: state.booksArray.filter((obj) => obj.ID !== action.payload),
    }),
  },
});

export const { CREATE_BOOK, REMOVE_BOOK } = bookSlice.actions;

export default bookSlice.reducer;
