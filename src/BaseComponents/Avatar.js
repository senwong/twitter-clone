import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  border-radius: 50%;
  width: ${(props) => {
    if (props.xsmall) return '24px';
    if (props.small) return '28px';
    if (props.large) return '95px';
    return '46px';
  }};
  height: ${(props) => {
    if (props.xsmall) return '24px';
    if (props.small) return '28px';
    if (props.large) return '95px';
    return '46px';
  }};
`;
export default function Avatar({ toggle, user, ...props }) {
  return (
    <StyledImg
      src={user.avatarSrc}
      alt={user.name}
      onClick={() => toggle && toggle()}
      {...props}
    />
  );
}
Avatar.propTypes = {
  toggle: PropTypes.func,
  user: PropTypes.shape({
    avatarSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
Avatar.defaultProps = {
  toggle: () => {},
  user: {
    avatarSrc: '',
    name: '',
  },
};
