import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_USER_ID,
  FETCH_ACTIVITIES_SUCCESS,
  SET_COMPANIES,
  SET_CURRENT_ACTIVITY_ID,
  SET_ACTIVE_COMPANY,
  ADD_ACTIVITY_SUCCESS,
  ADD_COMPANY,
  GET_TYPES_SUCCESS
} from '../actions/constants';

import { setAuthorizationToken } from '../../services/api';

const DEFAULT_STATE = {
  currentUserToken: '',
  userId: '',
  loginError: '',
  userProfile: {},
  activities: [],
  currentActivityId: '',
  newActivityId: null,
  companies: [],
  company: {},
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
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.activities
      };
    case SET_COMPANIES:
      return {
        ...state,
        companies: action.companies
      };
    case SET_CURRENT_ACTIVITY_ID:
      return {
        ...state,
        currentActivityId: action.activityId
      };
    case SET_ACTIVE_COMPANY:
      return {
        ...state,
        company: action.company
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
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.company]
      };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: [...state.activities, action.activity],
        newActivityId: action.activity._id
      };
    case 'persist/REHYDRATE':
      setAuthorizationToken(action.payload.currentUserToken);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
