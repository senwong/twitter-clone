import React from "react";
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

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: InputText.themes.secondary
    };
    this.inputRef = React.createRef();
    this.handleDelte = this.handleDelte.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  static themes = { primary: "primary", secondary: "secondary" };
  handleDelte() {
    this.props.onChange({ target: { value: "" } });
    this.inputRef.current.focus();
  }
  handleFocus(e) {
    this.setState({ theme: InputText.themes.primary });
    this.props.onFocus && this.props.onFocus(e);
  }
  handleBlur(e) {
    this.setState({ theme: InputText.themes.secondary });
  }
  handleKeyDown(e) {
    e.persist();
    if (e.key === "Enter") {
      e.target.blur();
    }
    this.props.onKeyDown(e);
    console.log(e);
  }
  render() {
    const { onChange, placeholder, value, ...other } = this.props;
    const theme = this.state.theme;
    return (
      <Container primary={theme === InputText.themes.primary}>
        <span style={{ paddingLeft: "9px", display: "flex" }}>
          <ExploreIcon xsmall primary={theme === InputText.themes.primary}  secondary={theme === InputText.themes.secondary} />
        </span>
        <Input
          type="text"
          primary={theme === InputText.themes.primary}
          value={value}
          onChange={onChange}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={this.inputRef}
          {...other}
        />
        {this.props.value && this.props.value.length > 0 ? (
          <span
            style={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "32px",
              minWidth: "32px",
              display: "flex"
            }}
            onClick={this.handleDelte}
          >
            <FilledDeleteIcon small primary/>
          </span>
        ) : (
          <div />
        )}
      </Container>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
};
