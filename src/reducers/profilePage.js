const initState = {
  show: false,
};

const profilePage = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE_PAGE':
      return Object.assign({}, state, {
        show: !state.show,
      });
    default:
      return state;
  }
};
export default profilePage;