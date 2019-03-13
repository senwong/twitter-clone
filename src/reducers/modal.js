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
      return { ...state, show: true };
    }
    case modal.hide: {
      return { ...state, show: false };
    }
    case modal.setup: {
      return {
        ...state,
        type: action.config && action.config.type,
        title: action.config && action.config.title,
        onConfirm: action.config && action.config.onConfirm,
        onCancel: action.config && action.config.onCancel,
      };
    }
    default:
      return state;
  }
};
