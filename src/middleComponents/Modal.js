import React from 'react';
import styled from 'styled-components';
import { string, func, oneOf } from 'prop-types';
import Text from '../BaseComponents/Text';
import CustomizedButton from '../BaseComponents/CustomizedButton';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 330px;
  box-sizing: border-box;
  background-color: white;
  padding: 37px 9px;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Modal({
  hide, type, title, onConfirm, onCancel,
}) {
  const contentRef = null;
  function handleContainerClick(e) {
    if (e.target !== contentRef.current && !contentRef.current.contains(e.target)) {
      hide();
    }
  }
  function handleConfirm(e) {
    hide();
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
    e.stopPropagation();
  }
  function handleCancel(e) {
    hide();
    if (onCancel && typeof onCancel === 'function') {
      onCancel();
    }
    e.stopPropagation();
  }

  return (
    <Container onClick={handleContainerClick}>
      <Content ref={contentRef}>
        <div style={{ marginTop: '14px', textAlign: 'center' }}>
          <Text
            primary={type === 'primary'}
            secondary={type === 'secondary'}
            warning={type === 'warning'}
          >
            {title}
          </Text>
        </div>
        {
          onConfirm && (
            <div style={{ marginTop: '18px', minWidth: '58px' }}>
              <CustomizedButton filled onClick={handleConfirm}>确认</CustomizedButton>
            </div>
          )
        }
        {
          onCancel && (
            <div style={{ marginTop: '9px', minWidth: '58px' }}>
              <CustomizedButton onClick={handleCancel}>取消</CustomizedButton>
            </div>
          )
        }
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  hide: func.isRequired,
  title: string.isRequired,
  type: oneOf(['primary', 'secondary', 'warning']).isRequired,
  onConfirm: func,
  onCancel: func,
};
Modal.defaultProps = {
  onConfirm: () => {},
  onCancel: () => {},
};
