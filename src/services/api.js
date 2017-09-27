import axios from 'axios';
import { PATTERNS_API_URL } from '../config';

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

