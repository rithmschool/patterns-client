import axios from 'axios';
import { PATTERNS_API_URL } from '../config';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function postAuth(code) {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${PATTERNS_API_URL}/auth/google/callback`, code)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

export function postActivity(userId, activityBody) {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${PATTERNS_API_URL}/users/${userId}/activities`, activityBody)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

export function getLoginResource(path) {
  return new Promise((resolve, reject) => {
    return axios
      .get(path)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

export function fetchTypes() {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${PATTERNS_API_URL}/types`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

/**
 * POST type to the patterns API 
 * @param  {String} typeId - the id of the type 
 * @param  {Object} typeBody - the payload for the axios POST 
 * @return {[type]}
 */

export function postType(typeId, typeBody) {
  return new Promise((resolve, reject) => {
    return axios
      .post(`${PATTERNS_API_URL}/types/${typeId}/assets`, typeBody)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

export function updateStage(stageId, stageBody) {
  return new Promise((resolve, reject) => {
    return axios
      .patch(`${PATTERNS_API_URL}/stages/${stageId}`, stageBody)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}
