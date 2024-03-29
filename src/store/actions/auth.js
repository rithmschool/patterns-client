import jwtDecode from 'jwt-decode';
import { PATTERNS_API_URL } from '../../config';
import {
  getLoginResource,
  postAuth,
  setAuthorizationToken
} from '../../services/api';

import {
  getTypes,
  setCurrentActivityId,
  setCurrentCompanyId
} from './actionCreators';
import sortByUpdatedAt from '../../helpers/sortByUpdatedAt';
import mostRecentlyUpdated from '../../helpers/mostRecentlyUpdated';
import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_USER_ID,
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_FAIL,
  FETCH_COMPANIES_SUCCESS
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

        return dispatch(fetchActivitiesRequest());
      })
      .then(activitiesAction => {
        var activityId = mostRecentlyUpdated(activitiesAction.activities);
        return dispatch(setCurrentActivityId(activityId));
      })
      .then(ares => {
        return dispatch(getTypes());
        //return getLoginResource(`${PATTERNS_API_URL}/types`);
      })
      .then(types => {
        return dispatch(fetchCompaniesRequest());
      })
      .then(companies => {
        var companyId = mostRecentlyUpdated(companies.companies);
        return dispatch(setCurrentCompanyId(companyId));
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

function fetchActivitiesError(error) {
  return {
    type: FETCH_ACTIVITIES_FAIL,
    error
  };
}

function fetchActivitiesSuccess(activities) {
  return (dispatch, getState) =>
    dispatch({
      type: FETCH_ACTIVITIES_SUCCESS,
      activities
    });
}

export function fetchActivitiesRequest() {
  return (dispatch, getState) =>
    getLoginResource(
      `${PATTERNS_API_URL}/users/${getState().userId}/activities`
    )
      .then(res =>
        dispatch(
          fetchActivitiesSuccess(
            res.reduce((t, v) => {
              t[v._id] = v;
              return t;
            }, {})
          )
        )
      )
      .catch(err => dispatch(fetchActivitiesError(err)));
}

export function fetchCompaniesRequest() {
  return (dispatch, getState) =>
    getLoginResource(
      `${PATTERNS_API_URL}/types/${getState().typeId.Company}/assets`
    )
      .then(res => {
        return dispatch(
          fetchCompaniesSuccess(
            res.assets.reduce((t, v) => {
              t[v._id] = v;
              return t;
            }, {})
          )
        );
      })
      .catch(err => {
        dispatch(fetchActivitiesError(err));
      });
}

function fetchCompaniesSuccess(companies) {
  return {
    type: FETCH_COMPANIES_SUCCESS,
    companies
  };
}
