import React, { useState, useRef } from "react";
import { ExploreIcon, FilledDeleteIcon } from "./SVGIcons";
import PropTypes from "prop-types";
import styled, { css } from 'styled-components'

const Container = styled.div`
  background: rgb(230, 236, 240);
  border-color: rgb(230, 236, 240);
  ${props => props.primary && css`
    background: #fff;
    border-color: rgb(29, 161, 242);
  `}
  display: flex;
  align-items: center;
  border-radius: 16.5px;
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
  primary: "primary",
  secondary: "secondary",
}

function InputText(props) {
  const { onChange, onFocus, onKeyDown, placeholder, value, ...other } = props;
  const [theme, setTheme] = useState(THEME.primary);
  const inputRef = useRef(null);
  function handleDelte() {
    onChange({ target: { value: "" } });
    inputRef && inputRef.current && inputRef.current.focus();
  }
  function handleFocus(e) {
    setTheme(THEME.primary);
    onFocus && typeof onFocus === 'function' && onFocus(e);
  }
  function handleBlur(e) {
    setTheme(THEME.secondary);
  }
  function handleKeyDown(e) {
    e.persist();
    if (e.key === "Enter") {
      e.target.blur();
    }
    onKeyDown && typeof onKeyDown === 'function' && onKeyDown(e);
    console.log(e);
  }
  return (
    <Container primary={theme === THEME.primary}>
      <span style={{ paddingLeft: "9px", display: "flex" }}>
        <ExploreIcon xsmall primary={theme === THEME.primary}  secondary={theme === THEME.secondary} />
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
        <span
          style={{
            justifyContent: "center",
            alignItems: "center",
            minHeight: "32px",
            minWidth: "32px",
            display: "flex"
          }}
          onClick={handleDelte}
        >
          <FilledDeleteIcon small primary/>
        </span>
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
  onKeyDown: PropTypes.func
};

export default InputText;
