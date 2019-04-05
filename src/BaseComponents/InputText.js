import React, { useState } from 'react';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components';
import { ExploreIcon, FilledDeleteIcon } from './SVGIcons';
import { lightBlueBackground, whiteBackground } from '../themes';

const Container = styled.div`
  ${props => (props.primary ? whiteBackground : lightBlueBackground)};
  border-color: ${props => (props.primary ? 'rgb(29, 161, 242)' : 'rgba(0, 0, 0, 0)')};
  display: flex;
  align-items: center;
  border-radius: 9999px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  width: 100%;
  padding: 9px;
  font-size: 14px;
  /* color: ${props => props.primary && 'rgb(29, 161, 242)'}; */
  :focus {
    outline: none;
  }
`;
const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 39px;
  min-width: 39px;
  border: none;
  background-color: none;
  border-radius: 9999px;
  transition-property: backgournd-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

const THEME = {
  primary: 'primary',
  secondary: 'secondary',
};

const InputText = ({
  placeholder, value, onChange, onKeyDown, onFocus, onBlur, showDelete, ariaLabel,
}) => {
  const [theme, setTheme] = useState(THEME.secondary);
  function handleDelete(event) {
    onChange({ target: { value: '' } });
    event.stopPropagation();
  }
  function handleFocus(e) {
    setTheme(THEME.primary);
    if (onFocus && typeof onFocus === 'function') {
      onFocus(e);
    }
  }
  function handleBlur(e) {
    setTheme(THEME.secondary);
    if (onBlur && typeof onBlur === 'function') {
      onBlur(e);
    }
  }
  function handleKeyDown(e) {
    e.persist();
    if (e.key === 'Enter') {
      e.target.blur();
    }
    if (onKeyDown && typeof onKeyDown === 'function') {
      onKeyDown(e);
    }
  }
  return (
    <Container primary={theme === THEME.primary}>
      <span style={{ paddingLeft: '9px', display: 'flex' }}>
        <ExploreIcon
          xsmall
          primary={theme === THEME.primary}
          secondary={theme === THEME.secondary}
        />
      </span>
      <Input
        type="text"
        primary={theme === THEME.primary}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
      {
        showDelete
        && value
        && (
          <DeleteButton
            type="button"
            onClick={handleDelete}
          >
            <FilledDeleteIcon small primary />
          </DeleteButton>
        )
      }
    </Container>
  );
};

InputText.propTypes = {
  value: string,
  placeholder: string,
  onChange: func,
  onKeyDown: func,
  onFocus: func,
  onBlur: func,
  showDelete: bool,
  ariaLabel: string,
};
InputText.defaultProps = {
  value: '',
  placeholder: '',
  onChange: null,
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  showDelete: false,
  ariaLabel: '',
};

export default InputText;
