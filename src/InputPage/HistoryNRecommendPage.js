import React from "react"
import { BackIcon, RelateIcon, } from "../BaseComponents/SVGIcons"
import InputText from "../BaseComponents/InputText"
import CustomHead from "../middleComponents/CustomHead"
import { getSearchHistory, addSearchHistory, } from "../Api/SearchHistory"
import HistoryPage from "./HistoryPage"
import SearchRecommendPage from "./SearchRecommendPage"
import { withRouter, } from "react-router-dom"
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgb(255, 255, 255);
`;

class HistoryNRecommendPage extends React.Component {
  constructor(props) {
    super(props);
    const historys = getSearchHistory();
    this.state = {
      selectedHistory: historys.length > 0 ? historys[0] : null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this)
    this.handleInputEnter = this.handleInputEnter.bind(this)
    this.handleInputArrowDown = this.handleInputArrowDown.bind(this)
    this.handleInputArrowUp = this.handleInputArrowUp.bind(this)
  }
  handleChange(e) {
    this.props.setRecommendQuery(e.target.value)
  }
  handleBack() {
    this.props.hide();
  }
  handleInputKeyDown(e) {
    e.persist();
    if (e.key === "Enter") {
      this.handleInputEnter(e);
    } else if (e.key === "ArrowUp") {
      this.handleInputArrowUp(e);
    } else if (e.key === "ArrowDown") {
      this.handleInputArrowDown(e)
    }
  }
  handleInputEnter(e) {
    if (e.target.value) {
      this.props.setSearchQuery(e.target.value);
      addSearchHistory(e.target.value)
      this.props.history.push(`/search?q=${e.target.value}`)
      this.props.hide();
    } else if (getSearchHistory().length > 0) {
      this.props.setSearchQuery(this.state.selectedHistory);
      this.props.history.push(`/search?q=${this.state.selectedHistory}`)
      this.props.hide();
    } else {
      this.props.hide();
    }
  }
  handleInputArrowUp(e) {
    if (!this.props.recommendQuery) {
      const historys = getSearchHistory();
      const index = historys.indexOf(this.state.selectedHistory)
      const selectedHistory = historys[index > 0 ? index - 1 : historys.length - 1]
      this.setState({selectedHistory: selectedHistory})
    }
  }
  handleInputArrowDown() {
    if (!this.props.recommendQuery) {
      const historys = getSearchHistory();
      const index = historys.indexOf(this.state.selectedHistory)
      const selectedHistory = historys[index < historys.length - 1 ? index + 1 : 0]
      this.setState({selectedHistory: selectedHistory}) 
    }
  }
  render() {
    return (
      <Container>
        <CustomHead
          left={<BackIcon small primary onClick={this.handleBack} />}
          middle={
            <InputText 
              autoFocus
              placeholder="杜索 Twitter"
              value={this.props.recommendQuery}
              onChange={this.handleChange} 
              onKeyDown={this.handleInputKeyDown}
            />
          }
          right={ <RelateIcon small primary /> }
        />
        {
          this.props.recommendQuery
            ? <SearchRecommendPage 
                query={this.props.recommendQuery}
              /> 
            : <HistoryPage 
                selected={this.state.selectedHistory}
              />
        }
      </Container>
    );
  }
}
export default  withRouter(HistoryNRecommendPage);
