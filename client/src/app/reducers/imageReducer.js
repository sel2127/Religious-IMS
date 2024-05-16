import { SET_IMAGE_PREVIEW } from "../actions/imageAction";

const savedImagePreview = localStorage.getItem('imagePreview');

const initialState = {
  imagePreview: savedImagePreview || '',
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_PREVIEW:
      const newState = {
        ...state,
        imagePreview: action.payload,
      };
      localStorage.setItem('imagePreview', action.payload);
      return newState;
    default:
      return state;
  }
};

export default imageReducer;



// import { createSlice } from '@reduxjs/toolkit';

// const savedImagePreview = localStorage.getItem("imagePreview");

// const initialState = {
//   imagePreview: savedImagePreview || '',
// };

// const imageSlice = createSlice({
//   name: 'image',
//   initialState,
//   reducers: {
//     setImagePreview: (state, action) => {
//       state.imagePreview = action.payload;
//       localStorage.setItem("imagePreview", action.payload);
//     },
//   },
// });

// export const { setImagePreview } = imageSlice.actions;

// export default imageSlice.reducer;