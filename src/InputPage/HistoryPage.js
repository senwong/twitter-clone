import React from "react"
import { DeleteIcon, ExploreIcon, } from "../BaseComponents/SVGIcons";
import { getSearchHistory, deleteAllSearchHistory, deleteSearchHistory, } from "../Api/SearchHistory"
import styled from 'styled-components'
import Text from '../BaseComponents/Text'

const Container = styled.div`
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background-color: rgb(255, 255, 255);
  z-index: 2;
`;
const Padding = styled.div`
  padding: 18px 9px 9px 9px;
  text-align: center;
`;

const HeadContainer = styled.div`
  display: flex;
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
`;
const HeadLeft = styled.div`
  flex: 7 0 0;
  display: flex;
  align-items: center;
`;
const HeadRight = styled.div`
  flex: 0 0 0;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
  background-color: ${props => props.selected
    ? 'rgb(245, 248, 250)'
    : 'transparent'
  };
`;
const ItemLeft = styled.div`
  flex: 1 0 0;
  display: flex;
  align-items: center;
`;
const ItemMiddle = styled.div`
  flex: 7 0 0;
`;
const ItemRight = styled.div`
  flex: 0 0 0;
  display: flex;
  align-items: center;
`;

export default class HistorysPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDeleteAll() {
    deleteAllSearchHistory();
    this.forceUpdate();
  }
  handleDelete(h) {
    deleteSearchHistory(h);
    this.forceUpdate();
  }
  render() {
    const historys = getSearchHistory();
    return (
      <Container>
        {historys.length === 0 
          ? <Padding>
              <Text secondary>尝试搜索用户、话题或关键词</Text>
            </Padding>
          : (
            <React.Fragment>
              <HeadContainer>
                <HeadLeft>
                  最近搜索
                </HeadLeft>
                <HeadRight>
                  <DeleteIcon small primary onClick={this.handleDeleteAll}/>
                </HeadRight>
              </HeadContainer>
              {historys.map((h, i) => (
                <Item selected={this.props.selected === h} tabIndex="0" key={h}>
                  <ItemLeft>
                    <ExploreIcon xsmall />
                  </ItemLeft>
                  <ItemMiddle>
                    {h}
                  </ItemMiddle>
                  <ItemRight>
                    <DeleteIcon small primary onClick={() => this.handleDelete(h)}/>
                  </ItemRight>
                </Item>
              ))}
            </React.Fragment>
          )
        }
      </Container>
    )
  }
}