import jwtDecode from 'jwt-decode';
import { PATTERNS_API_URL } from '../../config';
import {
  getLoginResource,
  postAuth,
  setAuthorizationToken
} from '../../services/api';

import { getTypes } from './actionCreators';

import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_USER_ID,
  SET_ACTIVITIES,
  SET_COMPANIES
} from './constants';

export function login(code) {
  return (dispatch, getState) => {
    return postAuth(code)
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
        dispatch(setUserId(userId));
        return getLoginResource(
          `${PATTERNS_API_URL}/users/${userId}/activities`
        );
      })
      .then(ares => {
        dispatch(setActivities(ares));
        return dispatch(getTypes());
        //return getLoginResource(`${PATTERNS_API_URL}/types`);
      })
      .then(types => {
        let companyId = getState().typeId.Company;
        //types.find(obj => obj.name === 'Company')._id;
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
      });
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

export function setUserId(userId) {
  return {
    type: SET_USER_ID,
    userId
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