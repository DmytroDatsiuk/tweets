import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const tweetsAPI = axios.create({
//   baseURL: url,
// });

export const fetchFirstPageTweets = createAsyncThunk(
  'tweets/fetchFirstPage',
  async (_, thunkAPI) => {
    const url = new URL('https://6443546f466f7c2b4b51be7b.mockapi.io/users');
    url.searchParams.append('completed', false);
    url.searchParams.append('page', 1);
    url.searchParams.append('limit', 3);
    try {
      const data = (await axios.get(url)).data;

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchNextPageTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (page, thunkAPI) => {
    const url = new URL('https://6443546f466f7c2b4b51be7b.mockapi.io/users');
    url.searchParams.append('completed', false);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', 3);
    try {
      const data = (await axios.get(url)).data;

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  'tweets/toggleFollow',
  async (tweets, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://6443546f466f7c2b4b51be7b.mockapi.io/users/${tweets.id}`,
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
        `https://6443546f466f7c2b4b51be7b.mockapi.io/users/${tweets.id}`,
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
        `https://6443546f466f7c2b4b51be7b.mockapi.io/users/${tweets.id}`,
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
