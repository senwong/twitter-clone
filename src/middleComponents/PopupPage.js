import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

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
  @media (min-width: 600px) and (max-width: 1000px) {
    justify-content: center;
  }
  @media (min-width: 1000px) {
    background-color: transparent;
  }
`;
const ContentWrapper = styled.div`
  background-color: white;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    width: 90vw;
    max-width: 600px;
  }
  @media (min-width: 1000px) {
    width: auto;
    position: absolute;
    top: ${props => `${props.position.top}px`};
    right: ${props => `${props.position.right}px`};
    left: ${props => `${props.position.left}px`};
    bottom: ${props => `${props.position.bottom}px`};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
  }

`;
const Item = styled.div`
  padding: 14px 18px;
  color: ${props => (props.warning ? 'rgb(224, 36, 94)' : 'inherit')};
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 248, 250);
  }
  transition-property: background-color;
  transition-duration: 0.2s;
`;
const Cancel = styled.div`
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 248, 250);
  }
  transition-property: background-color;
  transition-duration: 0.2s;
  padding: 14px 18px;
  border-top: 1px solid rgb(230, 236, 240);
`;

function PopupPage({
  history, location, items, hide, position,
}) {
  const contentRef = useRef();
  function handleWrapperClick(e) {
    if (e.target !== contentRef.current && !contentRef.current.contains(e.target)) {
      hide();
      history.goBack();
    }
  }
  function handlePopstate() {
    // 安卓返回键
    hide();
  }
  useEffect(() => {
    history.push(location.pathname);
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  return (
    <Wrapper
      onClick={handleWrapperClick}
    >
      <ContentWrapper
        ref={contentRef}
        position={position}
      >
        {
          items.map(({ title, warning, onClick }) => (
            <Item
              key={title}
              warning={warning}
              onClick={onClick}
            >
              {title}
            </Item>
          ))
        }
        <Cancel onClick={() => hide()}>取消</Cancel>
      </ContentWrapper>
    </Wrapper>
  );
}
export default withRouter(PopupPage);
PopupPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    warning: PropTypes.bool,
  })).isRequired,
  hide: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  position: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
  }),
};
PopupPage.defaultProps = {
  position: {
    left: null,
    right: null,
    top: null,
    bottom: null,
  },
};
