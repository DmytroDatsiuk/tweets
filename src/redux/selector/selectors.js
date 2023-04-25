import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/slices/constants';

export const selectTweets = state => state.items.tweets;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTweets = createSelector(
  [selectTweets, selectStatusFilter],
  (tweets, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return tweets.filter(tweet => !tweet.follow);
      case statusFilters.followings:
        return tweets.filter(tweet => tweet.follow);
      default:
        return tweets;
    }
  }
);
