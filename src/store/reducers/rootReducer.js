import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_USER_ID,
  ADD_ACTIVITY_SUCCESS,
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_COMPANIES_SUCCESS,
  SET_CURRENT_ACTIVITY_ID,
  SET__CURRENT_COMPANY_ID,
  GET_TYPES_SUCCESS
} from '../actions/constants';

import { setAuthorizationToken } from '../../services/api';

const DEFAULT_STATE = {
  currentUserToken: '',
  userId: '',
  loginError: '',
  userProfile: {},
  activities: {},
  currentActivityId: '',
  newActivityId: null,
  companies: {},
  currentCompanyId: '',
  typeId: {}
};

export default (state = DEFAULT_STATE, action = { type: null }) => {
  switch (action.type) {
    case SET_TOKEN:
      return Object.keys(action).length > 1
        ? {
            ...state,
            currentUserToken: action.token,
            loginError: null
          }
        : {};
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.errObj
      };
    case LOG_OUT:
      return { ...DEFAULT_STATE };
    case SET_USER:
      return {
        ...state,
        userProfile: action.userObj
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId
      };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        newActivityId: action.activity._id
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.activities
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        companies: action.companies
      };
    case SET_CURRENT_ACTIVITY_ID:
      return {
        ...state,
        currentActivityId: action.activityId
      };
    case SET__CURRENT_COMPANY_ID:
      return {
        ...state,
        currentCompanyId: action.companyId
      };
    case GET_TYPES_SUCCESS:
      var typeId = action.typeIds.reduce((acc, type) => {
        acc[type.name] = type._id;
        return acc;
      }, {});

      return {
        ...state,
        typeId: typeId
      };
    case 'persist/REHYDRATE':
      setAuthorizationToken(action.payload.currentUserToken);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
