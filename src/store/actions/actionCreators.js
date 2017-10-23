import {
  SET_CURRENT_ACTIVITY_ID,
  SET__CURRENT_COMPANY_ID,
  ADD_COMPANY_FAIL,
  ADD_ACTIVITY_FAIL,
  ADD_ACTIVITY_SUCCESS,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAIL,
  ADD_STAGE,
  ADD_STAGE_FAIL,
  UPDATE_STAGE_FAIL
} from './constants';

import {
  postStage,
  postType,
  fetchTypes,
  postActivity,
  patchStage,
  patchActivity
} from '../../services/api';

import { fetchActivitiesRequest, fetchCompaniesRequest } from './auth';

//Activity
function addActivitySuccess(activity) {
  return {
    type: ADD_ACTIVITY_SUCCESS,
    activity
  };
}

export function addActivityRequest(userId, activityInfo) {
  return dispatch =>
    postActivity(userId, activityInfo)
      .then(res => dispatch(addActivitySuccess(res)))
      .then(() => dispatch(fetchActivitiesRequest()))
      .catch(err => dispatch(addActivityError(err)));
}

export function updateActivityRequest(activityId, activityInfo) {
  return dispatch => 
  patchActivity(activityId, activityInfo)
  .then(res => )
}

function addActivityError(error) {
  return {
    type: ADD_ACTIVITY_FAIL,
    error
  };
}

export function setCurrentActivityId(activityId) {
  return {
    type: SET_CURRENT_ACTIVITY_ID,
    activityId
  };
}

function addStageSuccess(stage) {
  return {
    type: ADD_STAGE,
    stage
  };
}

export function addStageRequest(stageInfo) {
  return dispatch =>
    postStage(stageInfo)
      .then(res => dispatch(addStageSuccess(res)))
      .catch(err => dispatch(addStageError(err)));
}

function addStageError(error) {
  return {
    type: ADD_STAGE_FAIL,
    error
  };
}

//Types
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

//Company
export function addCompanyRequest(companyTypeId, companyInfo) {
  return dispatch =>
    postType(companyTypeId, companyInfo)
      .then(res => dispatch(fetchCompaniesRequest()))
      .catch(err => dispatch(addCompanyError(err)));
}

function addCompanyError(error) {
  return {
    type: ADD_COMPANY_FAIL,
    error
  };
}

export function setCurrentCompanyId(companyId) {
  return {
    type: SET__CURRENT_COMPANY_ID,
    companyId
  };
}

export function updateStageAssets(stageId, stageBody) {
  return dispatch =>
    patchStage(stageId, stageBody)
      .then(res => dispatch(fetchActivitiesRequest()))
      .catch(err => dispatch(updateStageFail(err)));
}

export function updateStageFail(error) {
  return {
    type: UPDATE_STAGE_FAIL,
    error
  };
}
