import { recommendPage } from '../actionTypes';

const initState = {
  show: false,
  recommendQuery: '',
  searchQuery: '',
};
export default (state = initState, action) => {
  switch (action.type) {
    case recommendPage.setHistoryNRecPage: {
      return Object.assign({}, state, {
        show: action.show,
      });
    }
    case recommendPage.setRecommendQuery: {
      return Object.assign({}, state, {
        recommendQuery: action.query,
      });
    }
    case recommendPage.setSearchQuery: {
      return Object.assign({}, state, {
        searchQuery: action.query,
      });
    }
    default:
      return state;
  }
};
