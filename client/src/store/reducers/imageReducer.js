// imageReducer.js
const initialState = {
    imagePreview: 'aba',
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IMAGE_PREVIEW':
        return { ...state, imagePreview: action.payload };
      default:
        return state;
    }
  };
  
  export default imageReducer;