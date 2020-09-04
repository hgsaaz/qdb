import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectUsername, selectUser } from './selectors';
import { actions } from './slice';
import { UserErrorType, UserInfo } from './types';
import { message } from 'antd';
import Endpoints from 'config/endpoints';

/**
 * Github repos request/response handler
 */
export function* getUser() {
  // Select username from store
  const username: string = yield select(selectUsername);
  const user: UserInfo = yield select(selectUser);
  if (username.length === 0) {
    return;
  }
  const requestURL = `${Endpoints.user.fetch}${username}`;
  try {
    // Call our request helper (see 'utils/request')
    if (user === null) {
      const userdetails = yield call(request, requestURL);
      yield put(actions.saveUser(userdetails));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(UserErrorType.USER_NOT_FOUND));
      message.error('This is an error message');
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadUser.type, getUser);
}
