import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.div`
  border-radius: 9999px;
  padding: 0 1em;
  line-height: 1.3125;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(29, 161, 242);
  /* customize property */
  font-size: ${props => props.large ? '18px' : '14px'};
  min-height: ${props => {
    if (props.small) return '28px';
    if (props.large) return '46px';
    return '37px';
  }};
  color: ${props => props.filled ? 'white' : 'rgb(29, 161, 242)'};
  background-color: ${props => props.filled ? 'rgb(29, 161, 242)' : 'white'};
`;
export default function CustomizedButton({ disabled, onClick, ...props}) {
  return (
    <Button {...props} onClick={disabled ? null : onClick}>
      {props.children}
    </Button>
  )
}
CustomizedButton.propTypes = {
  filled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}