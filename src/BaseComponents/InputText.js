import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ExploreIcon, FilledDeleteIcon } from './SVGIcons';
import { lightBlueBackground, whiteBackgroud } from '../themes';

const Container = styled.div`
  ${props => (props.primary ? whiteBackgroud : lightBlueBackground)};
  border-color: ${props => (props.primary ? 'rgb(29, 161, 242)' : 'rgba(0, 0, 0, 0)')};
  display: flex;
  align-items: center;
  border-radius: 9999px;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  width: 100%;
  padding: 9px;
  font-size: 14px;
  color: ${props => props.primary && 'rgb(29, 161, 242)'};
  :focus {
    outline: none;
  }
`;

const THEME = {
  primary: 'primary',
  secondary: 'secondary',
};

function InputText({
  onChange, onFocus, onKeyDown, placeholder, value, ...other
}) {
  const [theme, setTheme] = useState(THEME.secondary);
  const inputRef = useRef(null);
  function handleDelte() {
    onChange({ target: { value: '' } });
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }
  function handleFocus(e) {
    setTheme(THEME.primary);
    if (onFocus && typeof onFocus === 'function') {
      onFocus(e);
    }
  }
  function handleBlur() {
    setTheme(THEME.secondary);
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
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        {...other}
      />
      {value && value.length > 0 ? (
        <button
          type="button"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '32px',
            minWidth: '32px',
            display: 'flex',
          }}
          onClick={handleDelte}
        >
          <FilledDeleteIcon small primary />
        </button>
      ) : (
        <div />
      )}
    </Container>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};
InputText.defaultProps = {
  value: '',
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  placeholder: '',
};

export default InputText;
