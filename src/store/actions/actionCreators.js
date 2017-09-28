import {
  TOGGLE_MODAL,
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_COMPANY,
  ADD_COMPANY,
  CHANGE_ASSET,
  ADD_COMPANY_FAIL,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAIL
} from './constants';

import { postType, fetchTypes } from '../../services/api';

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
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
    fetchTypes()
      .then(res => dispatch(getTypesSuccess(res)))
      .catch(err => dispatch(getTypesError(err)));
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
