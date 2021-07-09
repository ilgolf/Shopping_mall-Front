import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from '@redux-saga/core/effects';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const SIGNUP = 'auth/SIGNUP';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const OAUTH_LOGIN = 'auth/OAUTH_LOGIN';
const OAUTH_LOGIN_SUCCESS = 'auth/OAUTH_LOGIN_SUCCESS';

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
})); // 비동기
export const logout = createAction(LOGOUT); // 동기
export const signup = createAction(SIGNUP, () => ({})); // 비동기
export const oauthLogin = createAction(OAUTH_LOGIN); // 비동기

const loginSaga = function* (action) {
  // action.payload.email, action.payload.password
  // login 요청
};
const signupSaga = function* (action) {
  // 회원가입 요청
};
const oauthLoginSaga = function* () {
  // oauth 로그인 요청
};

export const authSaga = function* () {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(OAUTH_LOGIN, oauthLoginSaga);
};

const initialState = {
  isLoggedIn: false,
  oauth_token: null,
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, action) => ({}),
    [LOGOUT_SUCCESS]: (state, action) => ({}),
    [SIGNUP_SUCCESS]: (state, action) => ({}),
    [OAUTH_LOGIN_SUCCESS]: (state, action) => ({}),
  },
  initialState
);

export default auth;
