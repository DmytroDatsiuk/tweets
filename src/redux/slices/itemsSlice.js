import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, addTweet, deleteTweet } from 'redux/thunks/operations.js';

// import { toggleFollow } from 'services/API';
import { downFollow, toggleFollow, upFollow } from 'services/API';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    tweets: [],
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tweets = action.payload;
      })
      .addCase(fetchTweets.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addTweet.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tweets.unshift(action.payload);
      })
      .addCase(addTweet.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteTweet.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tweets = state.tweets.filter(el => el.id !== action.payload);
      })

      .addCase(deleteTweet.rejected, state => {
        state.isLoading = false;
      })
      .addCase(upFollow.pending, state => {
        state.isLoading = true;
      })
      .addCase(upFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tweets.findIndex(
          tweet => tweet.id === action.payload.id
        );
        state.tweets.splice(index, 1, action.payload);
      })
      .addCase(upFollow.rejected, state => {
        state.isLoading = false;
      })

      .addCase(downFollow.pending, state => {
        state.isLoading = true;
      })
      .addCase(downFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tweets.findIndex(
          tweet => tweet.id === action.payload.id
        );
        state.tweets.splice(index, 1, action.payload);
      })
      .addCase(downFollow.rejected, state => {
        state.isLoading = false;
      })

      .addCase(toggleFollow.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tweets.findIndex(
          tweet => tweet.id === action.payload.id
        );
        state.tweets.splice(index, 1, action.payload);
      })
      .addCase(toggleFollow.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const itemsReducer = itemsSlice.reducer;
