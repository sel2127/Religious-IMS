// donationReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { donateSuccess, donateFailure } from '../actions/donationAction';

const initialState = {
  status: null,
  error: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    // Additional reducers can be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(donateSuccess, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(donateFailure, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default donationSlice.reducer;
