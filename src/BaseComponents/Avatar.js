import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  border-radius: 50%;
  width: ${props =>
    props.xsmall
      ? "24px"
      : props.small
      ? "28px"
      : props.large
      ? "95px"
      : "46px"};
  height: ${props =>
    props.xsmall
      ? "24px"
      : props.small
      ? "28px"
      : props.large
      ? "95px"
      : "46px"};
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
Avatar.proptypes = {
  user: PropTypes.shape({
    avatarSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};
