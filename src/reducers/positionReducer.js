const initialState = {
  left: null,
  right: null,
  top: null,
  bottom: null,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POSITION':
      return action.position;
    default:
      return state;
  }
}
export default reducer;
