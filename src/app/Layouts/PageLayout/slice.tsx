import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, UserErrorType, UserInfo } from './types';

export const initialState: ContainerState = {
  user: null,
  error: null,
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action: PayloadAction<UserInfo>) {
      state.user = action.payload;
      state.loading = false;
    },
    loadUser(state, action: PayloadAction<string>) {
      state.username = action.payload;
      state.error = null;
    },
    fetchUserError(state, action: PayloadAction<UserErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
