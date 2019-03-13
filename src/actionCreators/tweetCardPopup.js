import { tweetCardPopup } from '../actionTypes';

const show = user => ({
  type: tweetCardPopup.show,
  user,
});
const hide = user => ({
  type: tweetCardPopup.hide,
  user,
});
export default {
  show,
  hide,
};
