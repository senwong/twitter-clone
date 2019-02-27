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
  history, location, toggle, items,
}) {
  const contentRef = useRef();
  function hide() {
    history.goBack();
    toggle(false);
  }
  function handleWrapperClick(e) {
    if (e.target !== contentRef.current && !contentRef.current.contains(e.target)) {
      hide();
    }
  }
  function handlePopstate() {
    // 安卓返回键
    toggle(false);
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
          items.map(({ title, warning }) => <Item key={title} warning={warning}>{title}</Item>)
        }
        <Cancel onClick={() => hide()}>取消</Cancel>
      </ContentWrapper>
    </Wrapper>
  );
}
export default withRouter(PopupPage);
PopupPage.propTypes = {
  toggle: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    warning: PropTypes.bool,
  })).isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};
