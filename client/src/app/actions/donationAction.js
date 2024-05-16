import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const donateUser = createAsyncThunk(
  'donation/donateUser',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/api/donations', formData, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
