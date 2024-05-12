import axios from 'axios';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from '../actions/authAction';
import { donateSuccess, donateFailure } from '../actions/donationAction';

export const loginUser = (phone, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/user/login', { phone, password });
    const userData = response.data.user;

    // Check if userData.event exists and if eventDate is a valid date
    if (userData.event && userData.event.eventDate instanceof Date && !isNaN(userData.event.eventDate)) {
      userData.event.eventDate = userData.event.eventDate.toISOString(); // Serialize the date
    }

    dispatch(loginSuccess({ message: 'Login successful', user: userData }));
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      dispatch(loginFailure('Invalid phone number or password'));
    } else {
      dispatch(loginFailure('Login failed. Please try again later.'));
    }
    throw error;
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/user/register', userData);
    dispatch(registerSuccess(response.data.user));
  } catch (error) {
    dispatch(registerFailure(error.response.data.message));
  }
};

// export const donateUser = (formData) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/donations', formData, {withCredentials:true});
//     dispatch(donateSuccess(response.data));
//   } catch (error) {
//     dispatch(donateFailure(error.response.data.message));
//   }
// };
