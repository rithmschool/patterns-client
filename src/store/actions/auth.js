import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { PATTERNS_API_URL } from '../../config';
import { getLoginResource, postAuth } from '../../services/api';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const SET_USER = 'SET_USER';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';
export const SET_COMPANIES = 'SET_COMPANIES';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function login(code) {
  return dispatch => {
    return (
      postAuth(code)
        // .post(`${PATTERNS_API_URL}/auth/google/callback`, code)
        .then(res => {
          const token = res;
          const userProfile = {
            name: `${jwtDecode(token).firstName} ${jwtDecode(token).lastName}`,
            picture: jwtDecode(token).picture
          };
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setToken(token));
          dispatch(setUser(userProfile));
          const userId = jwtDecode(token).mongoId;
          return getLoginResource(
            `${PATTERNS_API_URL}/users/${userId}/activities`
          );
        })
        .then(ares => {
          dispatch(setActivities(ares));
          return getLoginResource(`${PATTERNS_API_URL}/types`);
        })
        .then(types => {
          let companyId = types.find(obj => obj.name === 'Company')._id;
          return getLoginResource(
            `${PATTERNS_API_URL}/types/${companyId}/assets`
          );
        })
        .then(companies => {
          dispatch(setCompanies(companies.assets));
        })
        .catch(err => {
          var errObj = Object.keys(err).length ? err : null;
          dispatch(setLoginError(errObj));
        })
    );
  };
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(logoutUser());
  };
}

export function catchLoginErr(err) {
  return dispatch => {
    dispatch(setLoginError(err));
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  };
}

export function setLoginError(errObj) {
  return {
    type: SET_LOGIN_ERROR,
    errObj
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT
  };
}

export function setUser(userObj) {
  return {
    type: SET_USER,
    userObj
  };
}

export function setActivities(activities) {
  return {
    type: SET_ACTIVITIES,
    activities
  };
}

export function setCompanies(companies) {
  return {
    type: SET_COMPANIES,
    companies
  };
}
