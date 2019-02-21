import React from "react"
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;
const ContentWrapper = styled.div`
  background-color: white;
`;
const Item = styled.div`
  padding: 14px 18px;
  color: ${props => props.warning ? 'rgb(224, 36, 94)' : 'inherits'}
`;
const Cancel = styled.div`
  padding: 14px 18px;
  border-top: 1px solid rgb(230, 236, 240)
`;

class PopupPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.hide = this.hide.bind(this);
    this.contentRef = React.createRef();
    this.handlePopstate = this.handlePopstate.bind(this);
  }
  handleWrapperClick(e) {
    if(e.target !== this.contentRef.current && !this.contentRef.current.contains(e.target)) {
      this.hide();
    }
  }
  hide() {
    this.props.history.goBack();
    this.props.toggle(false);
  }
  handlePopstate(e) {
    // 安卓返回键
    console.log('popstate pop', e)
    this.props.toggle(false);
  }
  componentDidMount() {
    this.props.history.push(this.props.location.pathname);
    window.addEventListener('popstate', this.handlePopstate)
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopstate)
  }
  render() {
    const { items } = this.props;
    return (
      <Wrapper 
        onClick={this.handleWrapperClick}
      >
        <ContentWrapper 
          ref={this.contentRef}
        >
          {
            items.map(({title, ...itemProps}, i) =>
              <Item key= {i} {...itemProps}>{title}</Item>
            )
          }
          <Cancel onClick={() => this.hide()}>取消</Cancel>
        </ContentWrapper>
      </Wrapper>
    )
  }
}
export default withRouter(PopupPage);