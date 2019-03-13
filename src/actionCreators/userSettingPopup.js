import { userSettingPopup } from '../actionTypes';

const show = () => ({
  type: userSettingPopup.show,
});
const hide = () => ({
  type: userSettingPopup.hide,
});
export default {
  hide,
  show,
};
