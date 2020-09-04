import * as slice from '../slice';
import { ContainerState, UserInfo, UserErrorType } from '../types';

describe('User slice', () => {
  let state: ContainerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle loadUser', () => {
    const text = 'test';
    expect(slice.reducer(state, slice.actions.loadUser(text))).toEqual<
      ContainerState
    >({
      ...slice.initialState,
      username: text,
      error: null,
    });
  });

  it('should handle saveUser', () => {
    const userDetails = { email: 'test@test.com' } as UserInfo;
    expect(slice.reducer(state, slice.actions.saveUser(userDetails))).toEqual<
      ContainerState
    >({
      ...slice.initialState,
      loading: false,
      user: userDetails,
    });
  });

  it('should handle saveUser', () => {
    const userFetchError = UserErrorType.USER_NOT_FOUND;
    expect(
      slice.reducer(state, slice.actions.fetchUserError(userFetchError)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      loading: false,
      error: userFetchError,
    });
  });
});
