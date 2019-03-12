const initState = {
  show: false,
  config: {},
  onConfirm: () => {}, // confirm callback
  onCancel: () => {}, // cancel callback
};

const modal = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return Object.assign({}, state, {
        show: !state.show,
      });
    }
    case 'SET_MODAL': {
      return Object.assign({}, state, {
        config: action.config,
      });
    }
    case 'SET_MODAL_ON_CONFIRM': {
      return Object.assign({}, state, {
        onConfirm: action.onConfirm,
      });
    }
    case 'SET_MODAL_ON_CANCEL': {
      return Object.assign({}, state, {
        onCancel: action.onCancel,
      });
    }
    default:
      return state;
  }
};
export default modal;
