import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { RootState } from 'types';

const selectDomain = (state: RootState) => state.user || initialState;

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
