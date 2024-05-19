import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (updatedUserData, thunkAPI) => {
    try {
      const response = await axios.put('http://localhost:5000/api/updateprofile', updatedUserData, {
        withCredentials: true, // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      } 

      return updatedUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Handle errors 
    }
  }
);