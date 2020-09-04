/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';
import { RootState } from 'types/RootState';

export const initialReducers: InjectedReducersType = Object.keys(
  {} as RootState,
).reduce((result, reducerKey) => {
  // Create empty reducers for keys that don't have loaded dynamic reducer yet
  // They will be replaced by the real one
  // See https://github.com/rt2zz/redux-persist/pull/1047/files
  result[reducerKey] = (state = null) => state;
  return result;
}, {});

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    return combineReducers({
      ...initialReducers,
      ...injectedReducers,
    });
  }
}
