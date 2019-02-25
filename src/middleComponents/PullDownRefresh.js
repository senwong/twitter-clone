import React, { useState, } from "react";
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
  transform: ${props => props.isTurnUp && 'rotate(180deg)'};
`;
const GreyHr = styled.div`
  height: 1px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
export default function PullDownRefresh(props) {
  const [mainTranslateY, setMainTranslateY] = useState(0);
  const [isRefressWatting, setIsRefressWatting] = useState(false);
  const [firstTouchY, setFirstTouchY] = useState(0);
  const RefreshHeight = 42;
  const { onRefresh, children } = props;

  function handleTouchStart(e) {
    setFirstTouchY(e.touches[0].clientY);
  }
  function handleTouchMove(e) {
    e.persist();
    if (document.scrollingElement.scrollTop > 0) {
      return;
    }
    const dis = e.touches[0].clientY - firstTouchY;
    if (dis > 0) {
      setMainTranslateY(Math.round(dis / 2));
    }
  }
  function handleTouchEnd() {
    console.log("touch end, this.state.mainTranslateY", mainTranslateY);
    if (mainTranslateY > RefreshHeight) {
      window.requestAnimationFrame(() => {
        setIsRefressWatting(true);
        console.log("touch end, dis: " + mainTranslateY);
        onRefresh().then(() => {
          setIsRefressWatting(false);
          setMainTranslateY(0);
        });
        setMainTranslateY(RefreshHeight);
      });
    } else {
      setMainTranslateY(0);
    }
  }
  
  return (
    <Container translateY={mainTranslateY}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ActionsContainer
        isTurnUp={mainTranslateY > RefreshHeight}
      >
        {isRefressWatting ? <WattingIcon large/> : <PullDownIcon large secondary />}
      </ActionsContainer>
      <GreyHr />
      {children}
    </Container>
  );
}
