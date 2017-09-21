export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_ACTIVE_ACTIVITY = 'SET_ACTIVE_ACTIVITY';
export const ADD_COMPANY = 'ADD_COMPANY';
export const SET_ACTIVE_COMPANY = 'SET_ACTIVE_COMPANY';
export const CHANGE_ASSET = 'CHANGE_ASSET';

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

export function addCompany(company) {
  return {
    type: ADD_COMPANY,
    company
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
