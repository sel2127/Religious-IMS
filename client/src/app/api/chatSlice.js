import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatHistory = createAsyncThunk(
  'chat/fetchChatHistory',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/chats/${userId}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ userId, message }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/chats`, { userId, ...message }, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export default chatSlice.reducer;
