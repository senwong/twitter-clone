import axios from 'axios';

import './data-mock/data-mock';

const server = 'http://localhost:3000';
const api = axios.create({
  baseURL: server,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

function makeCancelable(promise) {
  let hasCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled ? reject(new Error({ isCanceled: true })) : resolve(val)),
      err => (hasCanceled ? reject(new Error({ isCanceled: true })) : reject(err)),
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
}
// get all tweets
export function getTweets() {
  return makeCancelable(api.get('/tweets'));
}

export function getUserById(userId) {
  return makeCancelable(api.get(`/user?id=${userId}`));
}

/**
 *
 * @param {String} name user name
 */
export function getUserByName(name) {
  return new Promise((resolve, reject) => {
    api.get(`/user?name=${name}`)
      .then(user => resolve(user.data))
      .catch(err => reject(err));
  });
}
// explore page, get global trendings
export function getGlobalTrends() {
  return makeCancelable(api.get('/trends?limit=5'));
}
// get all trends
export function getTrends() {
  return makeCancelable(api.get('/trends'));
}
