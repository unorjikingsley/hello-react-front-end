import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/random_greeting';

const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      // console.log('API response:', response.data)
      return response.data;
    } catch (e) {
      // console.error('API error:', e)
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export default fetchGreeting;
