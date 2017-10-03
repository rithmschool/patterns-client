import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_COMPANY,
  ADD_ACTIVITY,
  ADD_COMPANY,
  CHANGE_ASSET,
  ADD_COMPANY_FAIL,
  ADD_ACTIVITY_FAIL,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAIL
} from './constants';

import { postType, fetchTypes, postActivity } from '../../services/api';

function addActivitySuccess(activity) {
  return {
    type: ADD_ACTIVITY,
    activity
  };
}

export function addActivityRequest(userId, activityInfo) {
  return dispatch =>
    postActivity(userId, activityInfo)
      .then(res => dispatch(addActivitySuccess(res)))
      .catch(err => dispatch(addActivityError(err)));
}

function addActivityError(error) {
  return {
    type: ADD_ACTIVITY_FAIL,
    error
  };
}

export function setActiveActivity(activity) {
  return {
    type: SET_ACTIVE_ACTIVITY,
    activity
  };
}

function getTypesSuccess(typeIds) {
  return {
    type: GET_TYPES_SUCCESS,
    typeIds
  };
}

function getTypesError(error) {
  return {
    type: GET_TYPES_FAIL,
    error
  };
}

export function getTypes() {
  return dispatch =>
    new Promise((resolve, reject) => {
      fetchTypes()
        .then(res => {
          dispatch(getTypesSuccess(res));
          return resolve();
        })
        .catch(err => {
          dispatch(getTypesError(err));
          return reject(err);
        });
    });
}

function addCompanySuccess(company) {
  return {
    type: ADD_COMPANY,
    company
  };
}

export function addCompanyRequest(companyTypeId, companyInfo) {
  return dispatch =>
    postType(companyTypeId, companyInfo)
      .then(res => dispatch(addCompanySuccess(res)))
      .catch(err => dispatch(addCompanyError(err)));
}

function addCompanyError(error) {
  return {
    type: ADD_COMPANY_FAIL,
    error
  };
}

export function setActiveCompany(company) {
  return {
    type: SET_ACTIVE_COMPANY,
    company
  };
}

export function changeAsset(stages) {
  return {
    type: CHANGE_ASSET,
    stages
  };
}
