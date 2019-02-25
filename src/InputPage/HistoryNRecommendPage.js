import React, { useState } from "react"
import { BackIcon, RelateIcon, } from "../BaseComponents/SVGIcons"
import InputText from "../BaseComponents/InputText"
import CustomHead from "../middleComponents/CustomHead"
import { getSearchHistory, addSearchHistory, } from "../Api/SearchHistory"
import HistoryPage from "./HistoryPage"
import SearchRecommendPage from "./SearchRecommendPage"
import { withRouter, } from "react-router-dom"
import styled from 'styled-components'

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

function HistoryNRecommendPage(props) {
  const historys = getSearchHistory();
  const [selectedHistory, setSelectedHistory] = useState(historys.length > 0 ? historys[0] : null);
  const {
    recommendQuery, // last time query in global state
    setRecommendQuery, // record last time query in global state
    hide, // function to hide current page
    setSearchQuery, // record query in global state, search page can access
    history // router history object
  } = props;

  function handleChange(e) {
    setRecommendQuery(e.target.value);
  }
  function handleBack() {
    hide();
  }
  function handleInputKeyDown(e) {
    e.persist();
    if (e.key === "Enter") {
      handleInputEnter(e);
    } else if (e.key === "ArrowUp") {
      handleInputArrowUp(e);
    } else if (e.key === "ArrowDown") {
      handleInputArrowDown(e);
    }
  }
  function handleInputEnter(e) {
    console.log("input enter!");
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
  function handleInputArrowUp(e) {
    if (!recommendQuery) {
      const historys = getSearchHistory();
      const index = historys.indexOf(selectedHistory);
      const newSelectedHistory = historys[index > 0 ? index - 1 : historys.length - 1];
      setSelectedHistory(newSelectedHistory);
    }
  }
  function handleInputArrowDown() {
    if (!recommendQuery) {
      const historys = getSearchHistory();
      const index = historys.indexOf(selectedHistory);
      const newSelectedHistory = historys[index < historys.length - 1 ? index + 1 : 0];
      setSelectedHistory(newSelectedHistory);
    }
  }
  return (
    <Container>
      <CustomHead
        left={<BackIcon small primary onClick={handleBack} />}
        middle={
          <InputText 
            autoFocus
            placeholder="搜索 Twitter"
            value={recommendQuery}
            onChange={handleChange} 
            onKeyDown={handleInputKeyDown}
          />
        }
        right={ <RelateIcon small primary /> }
      />
      {
        recommendQuery
          ? <SearchRecommendPage 
              query={recommendQuery}
            /> 
          : <HistoryPage 
              selected={selectedHistory}
            />
      }
    </Container>
  );
}
export default  withRouter(HistoryNRecommendPage);
