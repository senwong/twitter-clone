import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import { PullDownIcon, WattingIcon } from "../BaseComponents/SVGIcons";

const Container = styled(animated.div)`
  position: relative;
`;
const Actions = styled.div`
  position: absolute;
  height: ${props => `${props.height}px`};
  top: ${props => `-${props.height}px`};
  width: 100%;
  left: 0;
`;
const IconsWrapper = styled.div`
  position: relavtive;
  height: 100%;
`;
const ActionIconWrapper = styled(animated.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled(animated.div)`
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const REFRESH_HEIGHT = 65;
const damping = 120;

export default function PullDownRefresh({ onRefresh, children }) {
  const [isScrolledToTop, setIsScrolledToTop] = useState(false);
  useEffect(() => {
    setIsScrolledToTop(document.scrollingElement.scrollTop === 0);
    function handleScroll() {
      setIsScrolledToTop(document.scrollingElement.scrollTop === 0);
    }
    document.scrollingElement.addEventListener(
      "scroll",
      throttle(handleScroll, 50)
    );
    return () => {
      document.body.removeEventListener("scroll", throttle(handleScroll, 50));
    };
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [
    bind,
    {
      delta: [, y],
      down
    }
  ] = useGesture();

  useEffect(() => {
    if (isScrolledToTop) {
      if (isLoading) {
        setTranslateY(REFRESH_HEIGHT);
      } else if (!down) {
        setTranslateY(0);
      } else {
        setTranslateY(Math.max(0, y / (1 + y / damping)));
      }
    }
  }, [isScrolledToTop, down, isLoading, y]);
  useEffect(() => {
    if (!down && translateY > REFRESH_HEIGHT) {
      setIsLoading(true);
    }
    if (isLoading) {
      onRefresh().then(() => {
        setIsLoading(false);
      });
    }
  }, [down, translateY, isLoading]);
  const props = useSpring({
    transform: `translateY(${translateY}px)`
  });
  const arrowIconProps = useSpring({
    transform: `rotateZ(${translateY >= REFRESH_HEIGHT ? 180 : 0}deg)`,
    opacity: isLoading ? 0 : 1
  });
  const loadingIconProps = useSpring({
    opacity: isLoading ? 1 : 0
  });

  // console.log(
  //   `isScrolledToTop: ${isScrolledToTop},`,
  //   `translateY: ${translateY},`,
  //   `down: ${down},`,
  //   `isLoading: ${isLoading},`
  // );

  return (
    <Container style={props}>
      <Actions height={REFRESH_HEIGHT}>
        <IconsWrapper>
          <ActionIconWrapper style={arrowIconProps}>
            <PullDownIcon secondary large />
          </ActionIconWrapper>
          <ActionIconWrapper style={loadingIconProps}>
            <WattingIcon secondary large />
          </ActionIconWrapper>
        </IconsWrapper>
      </Actions>
      <ContentContainer {...bind()}>{children}</ContentContainer>
    </Container>
  );
}

PullDownRefresh.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
