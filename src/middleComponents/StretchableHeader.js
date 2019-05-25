import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { node, bool } from "prop-types";
import { whiteBackground } from "../themes";

const HeaderContainer = styled.header``;
const FakeHeader = styled.div`
  height: 106px;
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
  transform: ${props => props.isShort && "translateY(-49px)"};
  ${whiteBackground};
`;
const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
export default function StretchableHeader({ stretchable, children }) {
  const [lastWindowScrollTop, setLastWindowScrollTop] = useState(null);
  const [isHeadShort, setIsHeadShort] = useState(false);
  let isInOneSecond = false;
  function handleWindowScroll(e) {
    if (!stretchable) return;
    isInOneSecond = true;
    setTimeout(() => {
      isInOneSecond = false;
    }, 1000);

    if (lastWindowScrollTop) {
      // in one second scroll over than 50px
      const dis = e.target.scrollingElement.scrollTop - lastWindowScrollTop;
      if (dis > 30 && isInOneSecond) {
        setIsHeadShort(true);
      }
      if (dis < 0) {
        setIsHeadShort(false);
      }
    }
    setLastWindowScrollTop(e.target.scrollingElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });
  return (
    <HeaderContainer>
      <FakeHeader />
      <Header isShort={isHeadShort}>
        <ContentWrapper>{children}</ContentWrapper>
      </Header>
    </HeaderContainer>
  );
}
StretchableHeader.propTypes = {
  children: node.isRequired,
  stretchable: bool
};
StretchableHeader.defaultProps = {
  stretchable: true
};
