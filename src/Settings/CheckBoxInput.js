import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { CheckedIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const CheckBoxContainer = styled.div`
  position: relative;
  border-bottom: 1px solid rgb(230, 236, 240);
  background-color: rgb(255, 255, 255);
  padding: 14px 9px;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CheckBoxIconWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin: -10px;
  border-radius: 9999px;
  position: relative;
  transition-property: background-color;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(101, 119, 134, 0.1);
  }
`;
const StyledCheckBoxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
`;
const FakeCheckBoxIcon = styled.div`
  height: 18px;
  width: 18px;
  border: 2px solid rgb(101, 119, 134);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.checked && css`
    border-color: rgb(29, 161, 242);
    background-color: rgb(29, 161, 242);
  `}
`;
const SubTitleWrapper = styled.div`
  padding-top: 9px;
`;
function CheckBox({ title, subTitle }) {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBoxContainer>
      <StyledLabel>
        <Text>{title}</Text>
        <CheckBoxIconWrapper>
          <FakeCheckBoxIcon checked={checked}>
            {
              checked && <CheckedIcon xsmall white />
            }
          </FakeCheckBoxIcon>
          <StyledCheckBoxInput
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </CheckBoxIconWrapper>
      </StyledLabel>
      {
        subTitle
        && (
          <SubTitleWrapper>
            <Text secondary small>{subTitle}</Text>
          </SubTitleWrapper>
        )
      }

    </CheckBoxContainer>
  );
}
CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
CheckBox.defaultProps = {
  subTitle: '',
};
export default CheckBox;
