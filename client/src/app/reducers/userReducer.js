

import { updateUserData } from '../actions/updateUserData';
  
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
     
      case updateUserData.pending.type:
        return {
          ...state,
          // Add loading state or UI indicator here (optional)
        };
        case updateUserData.fulfilled.type:
          return {
            ...state,
            userData: action.payload,
          };
        case updateUserData.rejected.type:
          console.error('Error updating user data:', action.payload?.error?.message);
          // Add error handling UI or logic here (optional)
          return state; // Or potentially return a modified state with an error flag
      default:
        return state;
    }
  }