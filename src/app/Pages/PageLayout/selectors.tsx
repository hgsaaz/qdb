import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.user || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  userState => userState.username,
);

export const selectUser = createSelector(
  [selectDomain],
  userState => userState.user,
);

export const selectLoading = createSelector(
  [selectDomain],
  userState => userState.loading,
);
