import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const tweetsAPI = axios.create({
  baseURL: 'https://6443546f466f7c2b4b51be7b.mockapi.io/tweets',
});

export const getTweetsAPI = async () => (await tweetsAPI.get()).data;

export const deleteTweetAPI = async id => (await tweetsAPI.delete(id)).data;

export const toggleFollow = createAsyncThunk(
  'tweets/toggleFollow',
  async (tweets, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://6443546f466f7c2b4b51be7b.mockapi.io/tweets/${tweets.id}`,
        {
          follow: !tweets.follow,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const upFollow = createAsyncThunk(
  'tweets/upFollow',
  async (tweets, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://6443546f466f7c2b4b51be7b.mockapi.io/tweets/${tweets.id}`,
        {
          follow: !tweets.follow,
          followers: tweets.followers + 1,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const downFollow = createAsyncThunk(
  'tweets/downFollow',
  async (tweets, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://6443546f466f7c2b4b51be7b.mockapi.io/tweets/${tweets.id}`,
        {
          follow: !tweets.follow,
          followers: tweets.followers - 1,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTweetAPI = async tweet =>
  (await tweetsAPI.post('', tweet)).data;
