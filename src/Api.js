import axios from "axios";
const url = 'http://localhost:3000';

export function getTweets() {
  return new Promise((resolve, reject) => {
    axios.get(url + '/tweets')
    .then(tweets => resolve(tweets.data))
    .catch(err => reject(err))   
  })
}

export function getUserById(userId) {
  return new Promise((resolve, reject) => {
    axios.get(url + '/user?id=' + userId)
      .then(user => resolve(user.data))
      .catch(err => reject(err))
  })
}
/**
 * 
 * @param {String} name user name 
 */
export function getUserByName(name) {
  return new Promise((resolve, reject) => {
    axios.get(url + '/user?name=' + name)
      .then(user => resolve(user.data))
      .catch(err => reject(err))
  })
}


