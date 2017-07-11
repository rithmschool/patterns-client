import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  LOG_OUT,
  SET_USER,
  SET_ACTIVITIES,
  SET_COMPANIES,
  TOGGLE_MODAL,
  SET_ACTIVE_ACTIVITY,
  ADD_COMPANY,
  SET_ACTIVE_COMPANY,
  setAuthorizationToken,
} from '../actions/auth';

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
      }
    case 'persist/REHYDRATE':
      setAuthorizationToken(action.payload.currentUserToken);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
