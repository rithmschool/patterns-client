import {
  SET_TOKEN,
  SET_LOGIN_ERROR
} from '../actions/auth';

const DEFAULT_STATE = {
  currentUser: '',
  loginError: ''
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
    default:
      return state;
  }
}
