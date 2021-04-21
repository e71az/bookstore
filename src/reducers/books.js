import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookCreator',
  initialState: {
    booksArray: [
      {
        ID: Math.floor(Math.random() * 101),
        Title: 'Harry Potter 2',
        Category: 'Magic',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.booksArray.append(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
