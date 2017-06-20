import {
  SET_CURRENT_USER,
  SET_LOGIN_ERROR
} from '../actions/auth'

const DEFAULT_STATE = {
  currentUser : '',
  loginError:''
}

export default (state=DEFAULT_STATE, action={type:null}) => {
  switch (action.type){
    case SET_CURRENT_USER:
      return Object.keys(action).length > 1 ? {
        ...state,
        currentUser: {
          googleId: action.googleId,
          firstName: action.firstName,
          lastName: action.lastName
        },
        // token: action.token,
        // refreshToken: action.refreshToken,
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