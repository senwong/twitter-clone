import { recommendPage } from '../actionTypes';

const setHistoryNRecPage = show => ({
  type: recommendPage.setHistoryNRecPage,
  show,
});
const setRecommendQuery = query => ({
  type: recommendPage.setRecommendQuery,
  query,
});
const setSearchQuery = query => ({
  type: recommendPage.setSearchQuery,
  query,
});
export default {
  setHistoryNRecPage,
  setRecommendQuery,
  setSearchQuery,
};
