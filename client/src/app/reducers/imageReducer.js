import { createSlice } from '@reduxjs/toolkit';

const savedImagePreview = localStorage.getItem("imagePreview");

const initialState = {
  imagePreview: savedImagePreview || '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImagePreview: (state, action) => {
      state.imagePreview = action.payload;
      localStorage.setItem("imagePreview", action.payload);
    },
  },
});

export const { setImagePreview } = imageSlice.actions;

export default imageSlice.reducer;