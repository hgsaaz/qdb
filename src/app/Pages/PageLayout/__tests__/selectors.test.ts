import * as selectors from '../selectors';
import { RootState } from 'types';
import { UserInfo } from '../types';
import { initialState } from '../slice';

describe('Users selectors', () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it('should select the initial state', () => {
    expect(selectors.selectUsername(state)).toEqual(initialState.username);
  });

  it('should select username', () => {
    const username = 'test';
    state = {
      user: { ...initialState, username: username },
    };
    expect(selectors.selectUsername(state)).toEqual(username);
  });

  it('should select user', () => {
    const user = { email: 'test@test.com' } as UserInfo;
    state = {
      user: { ...initialState, user },
    };
    expect(selectors.selectUser(state)).toEqual(user);
  });

  it('should select loading', () => {
    const loading = true;
    state = {
      user: { ...initialState, loading: loading },
    };
    expect(selectors.selectLoading(state)).toEqual(loading);
  });
});
