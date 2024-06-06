import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatHistory = createAsyncThunk('chat/fetchChatHistory', async (userId) => {
  const response = await axios.get(`/chats/${userId}`);
  return response.data;
});

export const sendMessage = createAsyncThunk('chat/sendMessage', async (message) => {
  const response = await axios.post('/chats', message);
  return response.data;
});

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
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export default chatSlice.reducer;
