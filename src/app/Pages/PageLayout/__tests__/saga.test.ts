import { put, takeLatest } from 'redux-saga/effects';
import * as slice from '../slice';

import { userSaga, getUser } from '../saga';
import { UserErrorType } from '../types';

describe('getUser Saga', () => {
  let username: any;
  let user: any;
  let getUserIterator: ReturnType<typeof getUser>;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach

  beforeEach(() => {
    getUserIterator = getUser();
    // const selectUsernameDescriptor = getUserIterator.next().value;
    // expect(selectUsernameDescriptor).toMatchSnapshot();
    // const selectUserDescriptor = getUserIterator.next().value;
    // expect(selectUserDescriptor).toMatchSnapshot();
  });

  it('should return error if username is empty', () => {
    // username = 'saasa';
    // const usernameErrorDescriptor = getUserIterator.next(username).value;
    // expect(usernameErrorDescriptor).toEqual(
    //   put(slice.actions.fetchUserError(UserErrorType.USERNAME_EMPTY)),
    // );
    // const iteration = getUserIterator.next();
    // expect(iteration.done).toBe(true);
  });

  it('should dispatch the saveUser action if it requests the data successfully', () => {
    username = '1';
    user = null;

    // console.log(getUserIterator.next().value);
    // console.log(getUserIterator.next().value);
    // const clone = getUserIterator.clone();
    // console.log(getUserIterator.next().value);
    // console.log(getUserIterator.next(user).value);
    // const putDescriptor = getUserIterator.next(user).value;
    // expect(putDescriptor).toEqual(put(slice.actions.saveUser(user)));
  });

  it('should dispatch the user not found error', () => {
    // username = 'test';
    // const putDescriptor = getUserIterator.throw({ response: { status: 404 } })
    //   .value;
    // expect(putDescriptor).toEqual(
    //   put(slice.actions.fetchUserError(UserErrorType.USER_NOT_FOUND)),
    //);
  });
});

describe('userSaga Saga', () => {
  const userSaga1 = userSaga();
  it('should start task to watch for loadUser action', () => {
    const takeLatestDescriptor = userSaga1.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(slice.actions.loadUser.type, getUser),
    );
  });
});
