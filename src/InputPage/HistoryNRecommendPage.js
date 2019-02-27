import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { BackIcon, RelateIcon } from '../BaseComponents/SVGIcons';
import InputText from '../BaseComponents/InputText';
import CustomHead from '../middleComponents/CustomHead';
import { getSearchHistory, addSearchHistory } from '../Api/SearchHistory';
import HistoryPage from './HistoryPage';
import SearchRecommendPage from './SearchRecommendPage';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 2;
  background-color: rgb(255, 255, 255);
`;

function HistoryNRecommendPage({
  recommendQuery, // last time query in global state
  setRecommendQuery, // record last time query in global state
  hide, // function to hide current page
  setSearchQuery, // record query in global state, search page can access
  history, // router history object
}) {
  const historys = getSearchHistory();
  const [selectedHistory, setSelectedHistory] = useState(historys.length > 0 ? historys[0] : null);

  function handleChange(e) {
    setRecommendQuery(e.target.value);
  }
  function handleBack() {
    hide();
  }

  function handleInputEnter(e) {
    if (e.target.value) {
      setSearchQuery(e.target.value);
      addSearchHistory(e.target.value);
      history.push(`/search?q=${e.target.value}`);
      hide();
    } else if (getSearchHistory().length > 0) {
      setSearchQuery(selectedHistory);
      history.push(`/search?q=${selectedHistory}`);
      hide();
    } else {
      hide();
    }
  }
  function handleInputArrowUp() {
    if (!recommendQuery) {
      const searchHistorys = getSearchHistory();
      const index = searchHistorys.indexOf(selectedHistory);
      const newSelectedHistory = searchHistorys[index > 0 ? index - 1 : searchHistorys.length - 1];
      setSelectedHistory(newSelectedHistory);
    }
  }
  function handleInputArrowDown() {
    if (!recommendQuery) {
      const searchHistorys = getSearchHistory();
      const index = searchHistorys.indexOf(selectedHistory);
      const newSelectedHistory = searchHistorys[index < searchHistorys.length - 1 ? index + 1 : 0];
      setSelectedHistory(newSelectedHistory);
    }
  }
  function handleInputKeyDown(e) {
    e.persist();
    if (e.key === 'Enter') {
      handleInputEnter(e);
    } else if (e.key === 'ArrowUp') {
      handleInputArrowUp(e);
    } else if (e.key === 'ArrowDown') {
      handleInputArrowDown(e);
    }
  }
  return (
    <Container>
      <CustomHead
        left={<BackIcon small primary onClick={handleBack} />}
        middle={(
          <InputText
            autoFocus
            placeholder="杜索 Twitter"
            value={recommendQuery}
            onChange={handleChange}
            onKeyDown={handleInputKeyDown}
          />
)}
        right={<RelateIcon small primary />}
      />
      {
        recommendQuery
          ? (
            <SearchRecommendPage
              query={recommendQuery}
            />
          )
          : (
            <HistoryPage
              selected={selectedHistory}
            />
          )
      }
    </Container>
  );
}
HistoryNRecommendPage.propTypes = {
  recommendQuery: PropTypes.string.isRequired,
  setRecommendQuery: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(HistoryNRecommendPage);
