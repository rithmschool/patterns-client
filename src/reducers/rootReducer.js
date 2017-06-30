import {
  SET_TOKEN,
  SET_LOGIN_ERROR
} from '../actions/auth';

import { SET_CURRENT_ASSET } from '../actions/asset';

const DEFAULT_STATE = {
  currentUserToken: '',
  loginError: '',
  lastUpdated: ''
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
    case SET_CURRENT_ASSET:
      return {
        ...state,
        currentAsset: action.currentAssetObj
      };
    default:
      return state;
  }
}
