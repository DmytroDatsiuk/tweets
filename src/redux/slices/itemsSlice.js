import { createSlice } from '@reduxjs/toolkit';
import {
  downFollow,
  toggleFollow,
  upFollow,
  fetchFirstPageTweets,
  fetchNextPageTweets,
} from 'services/API';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    tweets: [],
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFirstPageTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFirstPageTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tweets = action.payload;
      })
      .addCase(fetchNextPageTweets.rejected, state => {
        state.isLoading = false;
      })
      .addCase(fetchNextPageTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNextPageTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        action.payload.map(card => state.tweets.push(card));
      })
      .addCase(fetchFirstPageTweets.rejected, state => {
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
