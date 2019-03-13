import { modal } from '../actionTypes';

const show = () => ({ type: modal.show });
const hide = () => ({ type: modal.hide });
const setup = config => ({
  type: modal.setup,
  config,
});
export default {
  show,
  hide,
  setup,
};
