import axios from 'axios';
import { useSelector } from 'react-redux';

// Action Types
export const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';
export const SET_PASSWORD_UPDATE = 'SET_PASSWORD_UPDATE';
// Action Creators
export const updatePasswordRequest = () => ({
  type: UPDATE_PASSWORD_REQUEST,
});

export const updatePasswordSuccess = () => ({
  type: UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordFailure = (error) => ({
  type: UPDATE_PASSWORD_FAILURE,
  payload: error,
});

export const setPasswordUpdate = (status) => ({
    type: SET_PASSWORD_UPDATE,
    payload: status,
  });

// Thunk function for updating the password
export const updatePassword = (newPassword) => async (dispatch) => {
  dispatch(updatePasswordRequest());

  try {
    const userId = useSelector(state => state.user.id); // Access userId from user slice of Redux state
    const response = await axios.post('http://localhost:5000/api/updatepassword', { userId, newPassword });
    dispatch(updatePasswordSuccess());
    // Handle any additional logic or dispatch further actions if needed

     // Access response data
  console.log(response.data);

  // Perform additional logic based on response
  if (response.data.status === 'success') {
    // Do something
  } else {
    // Do something else
  }
  } catch (error) {
    dispatch(updatePasswordFailure(error.message));
    // Handle any error scenarios or dispatch further actions if needed
  }
};