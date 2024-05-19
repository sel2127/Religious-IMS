import {
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
    SET_PASSWORD_UPDATE,
  } from "../actions/passwordActions";
  
  // Initial state
  const initialState = {
    loading: false,
    error: null,
    passwordUpdate: '',
  };
  
  // Password reducer
  const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case UPDATE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case UPDATE_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case SET_PASSWORD_UPDATE:
          return {
            ...state,
            passwordUpdate: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default passwordReducer;