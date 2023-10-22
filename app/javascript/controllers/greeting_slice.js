import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessageFromAPI = createAsyncThunk(
  'greeting/fetchMessage',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/random_greeting');
    return response.data.message;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: "Hello, World!",
  reducers: {},
  extraReducers: (builder) => {
    // Agrega el manejador de éxito para el thunk
    builder.addCase(fetchMessageFromAPI.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default greetingSlice.reducer;