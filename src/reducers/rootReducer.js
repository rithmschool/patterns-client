import {
  SET_TOKEN,
  SET_LOGIN_ERROR,
  SET_USER,
  SET_ACTIVITIES,
  TOGGLE_MODAL,
} from '../actions/auth';

const DEFAULT_STATE = {
  currentUserToken: '',
  loginError: '',
  userProfile: {},
  activities: [],
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
    case TOGGLE_MODAL:
      let toggle = !state.modal;
      return {
        ...state,
        modal: toggle
      };
    default:
      return state;
  }
}
