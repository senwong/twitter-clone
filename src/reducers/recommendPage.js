import { recommendPage } from '../actionTypes';

const initState = {
  show: false,
  recommendQuery: '',
  searchQuery: '',
};
export default (state = initState, action) => {
  switch (action.type) {
    case recommendPage.setHistoryNRecPage: {
      return { ...state, show: action.show };
    }
    case recommendPage.setRecommendQuery: {
      return { ...state, recommendQuery: action.query };
    }
    case recommendPage.setSearchQuery: {
      return { ...state, searchQuery: action.query };
    }
    default:
      return state;
  }
};
