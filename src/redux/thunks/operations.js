import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTweetAPI, deleteTweetAPI, getTweetsAPI } from 'services/API';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getTweetsAPI();

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTweet = createAsyncThunk(
  'tweets/deleteTweet',
  async (id, thunkAPI) => {
    try {
      const data = await deleteTweetAPI(id);
      return data.id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTweet = createAsyncThunk(
  'tweets/addTweet',
  async (tweet, thunkAPI) => {
    try {
      const data = await addTweetAPI(tweet);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// export const toogleFollow = createAsyncThunk(
//   'tweets/toogleFollow',
//   async (card, thunkAPI) => {
//     try {
//       const data = await toogleFollowAPI(card);
//       return data.card;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
