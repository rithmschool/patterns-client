import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_ACTIVITIES,
  setAuthorizationToken,
} from '../actions/auth';

import {
  SET_COMPANIES,
  TOGGLE_MODAL,
  SET_ACTIVE_ACTIVITY,
  ADD_COMPANY,
  SET_ACTIVE_COMPANY,
  ADD_ASSET,
  CHANGE_ASSET,
} from '../actions/action'

const DEFAULT_STATE = {
  currentUserToken: '',
  loginError: '',
  userProfile: {},
  activities: [],
  activity: {},
  companies: [],
  company: {},
  modal: false,
}

export default (state=DEFAULT_STATE, action={type:null}) => {
  switch (action.type){
    case SET_TOKEN:
      return Object.keys(action).length > 1 ? {
        ...state,
        currentUserToken: action.token,
        loginError: null
      } : {};
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.errObj
      };
    case LOG_OUT:
      return {...DEFAULT_STATE};
    case SET_USER:
      return {
        ...state,
        userProfile: action.userObj
      };
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.activities
      };
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.companies
      };
    case TOGGLE_MODAL:
      let toggle = !state.modal;
      return {
        ...state,
        modal: toggle
      };
    case SET_ACTIVE_ACTIVITY:
      return {
        ...state,
        activity: action.activity
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies:[...state.companies, action.company]
      };
    case SET_ACTIVE_COMPANY:
      return {
        ...state,
        company: action.company
      };
    case ADD_ASSET:
      let newStageAsset = [
        ...state.activity.stages[0].assets,
        Object.assign({}, state.company)
      ];
      let firstStage = {
        ...state.activity.stages[0],
        assets: newStageAsset
      };
      let stages = [
        firstStage,
        ...state.activity.stages.slice(1)
      ];
      let activity = {...state.activity, stages};
      let activities = [activity];
      return {
        ...state,
        activity,
        activities,
      };
    case CHANGE_ASSET:
      let oldStageIdx = state.activity.stages.findIndex(val => {
        return val._id === action.changeObj.prev;
      });
      let oldArr = state.activity.stages[oldStageIdx].assets;
      let oldAssetIdx = oldArr.findIndex(val => {
        return val._id === action.changeObj.assetId;
      });
      let oldStageAssetsArr = [...oldArr.slice(0, oldAssetIdx), ...oldArr.slice(oldAssetIdx + 1)];
      let oldStage = {
        ...state.activity.stages[oldStageIdx],
        assets: oldStageAssetsArr,
      };
      let newStageIdx = state.activity.stages.findIndex(val => {
        return val._id === action.changeObj.next;
      });
      let newArr = state.activity.stages[newStageIdx].assets;
      let newStageAssetsArr = [...newArr, Object.assign({}, state.company)];
      let newStage = {
        ...state.activity.stages[newStageIdx],
        assets: newStageAssetsArr,
      };
      let changeObj = {};
      changeObj[oldStageIdx] = oldStage;
      changeObj[newStageIdx] = newStage;
      let newStagesArr = [];
      for (let i = 0; i < state.activity.stages.length; i++) {
        if (changeObj.hasOwnProperty(i)) {
          newStagesArr.push(changeObj[i]);
        } else {
          newStagesArr.push(Object.assign({}, state.activity.stages[i]));
        }
      }
      let changeActivity = {
        ...state.activity,
        stages: newStagesArr,
      };
      let changeActivities = [changeActivity];
      return {
        ...state,
        activity: changeActivity,
        activities: changeActivities,
      };
    case 'persist/REHYDRATE':
      setAuthorizationToken(action.payload.currentUserToken);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
