import axios from 'axios';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}
 
export function login(code) {
  return dispatch => {
    return axios.post(`${BASE_URL}/auth/google/callback`, code)
    .then(res => {
      const token = res.data
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setToken(token));
    })
    .catch(err => {
      var errObj = Object.keys(err).length ? err : null;
      dispatch(setLoginError(errObj));
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setToken({}));
  }
}

export function catchLoginErr(err) {
  return dispatch => {
    dispatch(setLoginError(err));
  }
}

export function setToken(token) {
  return {
    token,
    type: SET_TOKEN
  }
}

export function setLoginError(errObj) {
  return {
    type: SET_LOGIN_ERROR,
    errObj
  }
}
