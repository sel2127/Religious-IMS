import { createSlice } from '@reduxjs/toolkit';
import { donateUser } from '../actions/donationAction';
import { toast } from 'react-toastify'; // Import the toast module here

const initialState = {
  status: 'idle',
  error: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(donateUser.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(donateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        // Trigger toast message for successful donation
        toast.success('Donation successful!');
      })
      .addCase(donateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        // Trigger toast message for failed donation
        toast.error('An error occurred during donation.');
      });
  },
});

export default donationSlice.reducer;
