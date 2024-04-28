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
          // Add loading state or UI indicator here (optional)
        };
      case 'UPDATE_USER_DATA_FULFILLED':
        return {
          ...state,
          userData: action.payload,
        };
      case 'UPDATE_USER_DATA_REJECTED': // New case for error state (optional)
        console.error('Error updating user data:', action.error.message);
        // Add error handling UI or logic here (optional)
        return state; // Or potentially return a modified state with an error flag
      default:
        return state;
    }
  }