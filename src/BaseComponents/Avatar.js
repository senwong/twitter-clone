import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  border-radius: 50%;
  width: ${(props) => {
    if (props.xsmall) return '24px';
    if (props.small) return '28px';
    if (props.middle) return '33px';
    if (props.large) return '95px';
    return '46px';
  }};
  height: ${(props) => {
    if (props.xsmall) return '24px';
    if (props.small) return '28px';
    if (props.middle) return '33px';
    if (props.large) return '95px';
    return '46px';
  }};
`;
export default function Avatar({
  src, onClick, xsmall, small, middle, large,
}) {
  return (
    <StyledImg
      src={src}
      alt="user avatar"
      onClick={onClick}
      xsmall={xsmall}
      small={small}
      middle={middle}
      large={large}
    />
  );
}
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  middle: PropTypes.bool,
  large: PropTypes.bool,
};
Avatar.defaultProps = {
  onClick: null,
  xsmall: false,
  small: false,
  middle: false,
  large: false,
};
