import { modal } from '../actionTypes';

const initState = {
  show: false,
  title: '',
  type: 'primary',
  onConfirm: null, // confirm callback
  onCancel: null, // cancel callback
};
export default (state = initState, action) => {
  switch (action.type) {
    case modal.show: {
      return Object.assign({}, state, {
        show: true,
      });
    }
    case modal.hide: {
      return Object.assign({}, state, {
        show: false,
      });
    }
    case modal.setup: {
      console.log({ action });
      return Object.assign({}, state, {
        type: action.config && action.config.type,
        title: action.config && action.config.title,
        onConfirm: action.config && action.config.onConfirm,
        onCancel: action.config && action.config.onCancel,
      });
    }
    default:
      return state;
  }
};
