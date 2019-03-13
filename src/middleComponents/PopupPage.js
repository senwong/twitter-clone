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
`;
const ContentWrapper = styled.div`
  background-color: white;
`;
const Item = styled.div`
  padding: 14px 18px;
  color: ${props => (props.warning ? 'rgb(224, 36, 94)' : 'inherit')};
`;
const Cancel = styled.div`
  padding: 14px 18px;
  border-top: 1px solid rgb(230, 236, 240);
`;

function PopupPage({
  history, location, items, hide,
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
};
