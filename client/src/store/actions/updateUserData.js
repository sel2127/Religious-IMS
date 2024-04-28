import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (updatedUserData, thunkAPI) => {
    try {
      const response = await axios.put('http://localhost:5000/api/update-profile', updatedUserData, {
        withCredentials: true, // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      return response.data.user || updatedUserData; // Adjust based on your API response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Handle errors (dispatch a separate action if needed)
    }
  }
);