import { profilePage } from '../actionTypes';

const show = () => ({
  type: profilePage.show,
});
const hide = () => ({
  type: profilePage.hide,
});

export default {
  show,
  hide,
};
