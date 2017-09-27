import {
  TOGGLE_MODAL,
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_COMPANY,
  ADD_COMPANY,
  CHANGE_ASSET
} from './constants';

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
