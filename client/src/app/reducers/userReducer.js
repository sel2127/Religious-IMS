const initialState = {
  userData: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'UPDATE_USER_DATA_PENDING': // New case for pending state (optional)
      return {
        ...state,
      };
    case 'UPDATE_USER_DATA_FULFILLED':
      return {
        ...state,
        userData: action.payload,
      };
    case 'UPDATE_USER_DATA_REJECTED': 
      console.error('Error updating user data:', action.error.message);
      return state; 
    default:
      return state;
  }
}