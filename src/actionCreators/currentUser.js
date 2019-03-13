import { currentUser } from '../actionTypes';

const setScreenName = name => ({
  type: currentUser.setScreenName,
  name,
});
const setPhone = phone => ({
  type: currentUser.setPhone,
  phone,
});
const setEmail = email => ({
  type: currentUser.setEmail,
  email,
});
export default {
  setScreenName,
  setPhone,
  setEmail,
};
