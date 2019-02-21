import React from "react";
import { PullDownIcon, WattingIcon } from "../BaseComponents/SVGIcons";
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  transform: ${props => 'translateY('+ props.translateY+'px)'};
`;
const ActionsContainer = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
  transition-property: transform;
  transition-duration: 0.2s;
  height: 3em;
  position: absolute;
  top: -3em;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgb(230, 236, 240);
  transform: ${props => props.isTurnUp && 'rotate(180deg)'};
`;
export default class PullDownRefresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTranslateY: 0,
      RefreshHeight: 42,
      isRefressWatting: false,
      firstTouchY: 0,
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }
  handleTouchStart(e) {
    this.setState({ firstTouchY: e.touches[0].clientY });
  }
  handleTouchMove(e) {
    e.persist();
    if (document.scrollingElement.scrollTop > 0) {
      return;
    }
    const dis = e.touches[0].clientY - this.state.firstTouchY;
    if (dis > 0) {
      this.setState({ mainTranslateY: Math.round(dis / 2) });
    }
  }
  handleTouchEnd() {
    console.log("touch end, this.state.mainTranslateY", this.state.mainTranslateY);
    if (this.state.mainTranslateY > this.state.RefreshHeight) {
      window.requestAnimationFrame(() => {
        this.setState({ isRefressWatting: true });
        console.log("touch end, dis: " + this.state.mainTranslateY);
        this.props.onRefresh().then(() => {
          this.setState({ isRefressWatting: false, mainTranslateY: 0 });
        });
        this.setState({ mainTranslateY: 42 });
      });
    } else {
      this.setState({ mainTranslateY: 0 });
    }
  }
  render() {
    return (
      <Container translateY={this.state.mainTranslateY}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <ActionsContainer
          isTurnUp={this.state.mainTranslateY > this.state.RefreshHeight}
        >
          {this.state.isRefressWatting ? <WattingIcon /> : <PullDownIcon large secondary />}
        </ActionsContainer>
        {this.props.children}
      </Container>
    );
  }
}