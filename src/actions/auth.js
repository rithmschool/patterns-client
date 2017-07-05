import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const SET_USER = 'SET_USER';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';

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
      const token = res.data;
      const userProfile = {
        name: `${jwtDecode(token).firstName} ${jwtDecode(token).lastName}`,
        picture: jwtDecode(token).picture,
      };
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setToken(token));
      dispatch(setUser(userProfile));
      const userId = jwtDecode(token).mongoId;
      return axios.get(`${BASE_URL}/users/${userId}/activities`)
      .then(ares => {
        dispatch(setActivities(ares.data));
      })
      .catch(error => console.log(error));
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
    type: SET_TOKEN,
    token
  }
}

export function setLoginError(errObj) {
  return {
    type: SET_LOGIN_ERROR,
    errObj
  }
}

export function setUser(userObj) {
  return {
    type: SET_USER,
    userObj
  }
}

export function setActivities(activities) {
  return {
    type: SET_ACTIVITIES,
    activities
  }
}
