const initState = {
  show: false,
  user: null,
};

const tweetCardPopup = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_TWEET_CARD_POP':
      return Object.assign({}, state, {
        show: !state.show,
        user: action.user,
      });
    default:
      return state;
  }
};
export default tweetCardPopup;
