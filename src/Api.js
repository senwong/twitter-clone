import axios from 'axios';

const url = 'http://localhost:3000';

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
  return makeCancelable(axios.get(`${url}/tweets`));
}

export function getUserById(userId) {
  return makeCancelable(axios.get(`${url}/user?id=${userId}`));
}

/**
 *
 * @param {String} name user name
 */
export function getUserByName(name) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/user?name=${name}`)
      .then(user => resolve(user.data))
      .catch(err => reject(err));
  });
}
// explore page, get global trendings
export function getGlobalTrends() {
  return makeCancelable(axios.get(`${url}/trends?limit=5`));
}
// get all trends
export function getTrends() {
  return makeCancelable(axios.get(`${url}/trends`));
}
