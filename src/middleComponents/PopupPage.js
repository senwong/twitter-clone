import React, { useEffect, useRef } from "react"
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
  color: ${props => props.warning ? 'rgb(224, 36, 94)' : 'inherit'};
`;
const Cancel = styled.div`
  padding: 14px 18px;
  border-top: 1px solid rgb(230, 236, 240);
`;

function PopupPage(props) {
  const contentRef = useRef();
  const { history, location, toggle, items } = props;
  function handleWrapperClick(e) {
    if(e.target !== contentRef.current && !contentRef.current.contains(e.target)) {
      hide();
    }
  }
  function hide() {
    history.goBack();
    toggle(false);
  }
  function handlePopstate(e) {
    // 安卓返回键
    console.log('popstate pop', e)
    toggle(false);
  }
  useEffect(() => {
    history.push(location.pathname);
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate)
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
          items.map(({title, ...itemProps}, i) =>
            <Item key= {i} {...itemProps}>{title}</Item>
          )
        }
        <Cancel onClick={() => hide()}>取消</Cancel>
      </ContentWrapper>
    </Wrapper>
  );
}
export default withRouter(PopupPage);