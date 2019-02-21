import React from "react";
import styled from 'styled-components'

const FakeHeader = styled.div`
  height: 98px;
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  transition-property: transform;
  transition-duration: 0.2s;
  z-index: 2;
  transform: ${props => props.isShort && 'translateY(-49px)'};
`;
export default class ScrollToggleHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastWindowScrollTop: null,
      isHeadShort: false,
    };
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
  }
  handleWindowScroll(e) {
    this.state.lastWindowScrollTop && this.setState({isHeadShort: e.target.scrollingElement.scrollTop > this.state.lastWindowScrollTop,});
    this.setState({lastWindowScrollTop: e.target.scrollingElement.scrollTop})
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll)
  }
  render() {
    return (
      <div>
        <FakeHeader />
        <Header isShort={this.state.isHeadShort} >
          {this.props.head}
        </Header>
        <div>
          {this.props.main}
        </div>
      </div>
    );
  }
}
