import React, { Component } from 'react';
// import React, { Component, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { PullDownIcon, WattingIcon } from '../BaseComponents/SVGIcons';
import { grayBorderBottom } from '../themes';

const Container = styled.div`
  position: relative;
  transform: ${props => `translateY(${props.translateY}px)`};
  transition-property: transform;
  transition-duration: ${props => `${props.transitionDuration}ms`};
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
  transform: ${props => props.isTurnUp && 'rotate(180deg)'};
`;
const GreyHr = styled.div`
  height: 1px;
  ${grayBorderBottom}
`;
const REFRESHHEIGHT = 57;
const damping = 1;
// class component
export default class PullDownRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTouchY: 0,
      mainTranslateY: 0,
      isLoading: false,
      isTurnArrowUp: false,
      transitionDuration: 0,
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.throttledHandleTouchMove = throttle(
      this.handleTouchMove,
      20,
      { leading: true, trailing: false },
    );
  }

  handleTouchStart(e) {
    this.setState({
      firstTouchY: e.touches[0].clientY,
      transitionDuration: 0,
    });
  }

  handleTouchMove(e) {
    e.persist();
    const { firstTouchY } = this.state;
    if (document.scrollingElement.scrollTop > 0) {
      return;
    }
    const dis = e.touches[0].clientY - firstTouchY;
    if (dis <= 0) return;
    const newDamping = damping + (dis / 12) * 0.1;
    const mainTranslateY = Math.round(dis / newDamping);
    this.setState({
      mainTranslateY,
    });
    if (mainTranslateY > REFRESHHEIGHT) {
      this.setState({
        isTurnArrowUp: true,
      });
    }
  }

  handleTouchEnd(e) {
    const { onRefresh } = this.props;
    const { mainTranslateY } = this.state;
    this.throttledHandleTouchMove.cancel();
    e.persist();
    this.setState({
      isTurnArrowUp: false,
    });
    if (mainTranslateY > REFRESHHEIGHT) {
      this.setState({
        isLoading: true,
      });
      onRefresh().then(() => {
        this.setState({
          isLoading: false,
          transitionDuration: 250,
          mainTranslateY: 0,
        });
      });
      this.setState({
        mainTranslateY: REFRESHHEIGHT,
      });
    } else {
      this.setState({
        mainTranslateY: 0,
        transitionDuration: 250,
      });
    }
  }

  render() {
    const {
      isTurnArrowUp, isLoading, transitionDuration, mainTranslateY,
    } = this.state;
    const { children } = this.props;
    return (
      <Container
        transitionDuration={transitionDuration}
        translateY={mainTranslateY}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.throttledHandleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <ActionsContainer
          isTurnUp={isTurnArrowUp}
        >
          {isLoading ? <WattingIcon large /> : <PullDownIcon large secondary />}
        </ActionsContainer>
        <GreyHr />
        {children}
      </Container>
    );
  }
}

// export default function PullDownRefresh({ onRefresh, children }) {
//   const damping = 2;
//   let firstTouchY;
//   let mainTranslateY;
//   const REFRESHHEIGHT = 57;
//   const selfEl = useRef();
//   const [isRefressWatting, setIsRefressWatting] = useState(false);
//   const [isTurnArrowUp, setIsTurnArrowUp] = useState(false);

//   function handleTouchStart(e) {
//     firstTouchY = e.touches[0].clientY;
//     selfEl.current.style.transitionDuration = 0;
//   }
//   function handleTouchMove(e) {
//     e.persist();
//     if (document.scrollingElement.scrollTop > 0) {
//       return;
//     }
//     if (!firstTouchY) {
//       firstTouchY = e.touches[0].clientY;
//       return;
//     }
//     const dis = e.touches[0].clientY - firstTouchY;
//     mainTranslateY = Math.round(dis / damping);
//     console.log(mainTranslateY);
//     if (dis > 0) {
//       selfEl.current.style.transform = `translateY(${mainTranslateY}px)`;
//     }
//     // if (mainTranslateY > REFRESHHEIGHT && !isTurnArrowUp) {
//     //   setIsTurnArrowUp(true);
//     // }
//   }
//   function handleTouchEnd(e) {
//     e.persist();
//     setIsTurnArrowUp(false);
//     if (mainTranslateY > REFRESHHEIGHT) {
//       setIsRefressWatting(true);
//       onRefresh().then(() => {
//         setIsRefressWatting(false);
//         selfEl.current.style.transitionDuration = '250ms';
//         selfEl.current.style.transform = 'translateY(0px)';
//       });
//       selfEl.current.style.transform = `translateY(${REFRESHHEIGHT}px)`;
//     } else {
//       selfEl.current.style.transitionDuration = '250ms';
//       selfEl.current.style.transform = 'translateY(0px)';
//     }
//     mainTranslateY = 0;
//   }
//   console.log('rerender');
//   return (
//     <Container
//       ref={selfEl}
//       onTouchStart={handleTouchStart}
//       onTouchMove={throttle(handleTouchMove, 20, { leading: true, trailing: false })}
//       onTouchEnd={handleTouchEnd}
//     >
//       <ActionsContainer
//         isTurnUp={isTurnArrowUp}
//       >
//         {isRefressWatting ? <WattingIcon large /> : <PullDownIcon large secondary />}
//       </ActionsContainer>
//       <GreyHr />
//       {children}
//     </Container>
//   );
// }
PullDownRefresh.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
