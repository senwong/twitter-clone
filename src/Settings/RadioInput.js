import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RadioButtonWrapper = styled.div`
  padding: 9px;
  margin: -9px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${StyledLabel}:hover & {
    background-color: ${props => (props.checked ? 'rgba(29, 161, 242, 0.1)' : 'rgba(101, 119, 134, 0.1)')}
  }
  transition-property: background-color;
  transition-duration: 0.2s;
  border-radius: 9999px;
`;
const FakeRadioButon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  border: 2px solid;
  border-color: ${props => (props.checked ? 'rgb(29, 161, 242)' : 'rgb(101, 119, 134)')};
  position: relative;
  transition-property: border-color;
  transition-duration: 0.2s;
  background-color: rgb(255, 255, 255);
`;
const Circle = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  border-radius: 9999px;
  background-color: rgb(29, 161, 242);
`;
const StyledInput = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;
function RadioInput({
  title, name, checked, onChange,
}) {
  return (
    <StyledLabel>
      {title}
      <div style={{ position: 'relative' }}>
        <RadioButtonWrapper checked={checked}>
          <FakeRadioButon checked={checked}>
            { checked && <Circle />}
          </FakeRadioButon>
        </RadioButtonWrapper>
        <StyledInput type="radio" name={name} onChange={onChange} />
      </div>
    </StyledLabel>
  );
}
RadioInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default RadioInput;
