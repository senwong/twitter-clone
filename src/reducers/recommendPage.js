const initState = {
  show: false,
  recommendQuery: '',
  searchQuery: '',
};

const recommendPage = (state = initState, action) => {
  switch (action.type) {
    case 'SET_HISTORY_REM_PAGE_VISIBILITY': {
      return Object.assign({}, state, {
        show: action.show,
      });
    }
    case 'SET_RECOMMEND_QUERY': {
      return Object.assign({}, state, {
        recommendQuery: action.query,
      });
    }
    case 'SET_SEARCH_QUERY': {
      return Object.assign({}, state, {
        searchQuery: action.query,
      });
    }
    default:
      return state;
  }
};
export default recommendPage;
