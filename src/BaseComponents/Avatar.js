import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MakeHoverUserInfo from '../middleComponents/MakeHoverUserInfo';

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
  onClick, xsmall, small, middle, large, user, hoverable,
}) {
  const Content = () => (
    <StyledImg
      src={user && user.avatarSrc}
      alt={user && user.nickName}
      onClick={onClick}
      xsmall={xsmall}
      small={small}
      middle={middle}
      large={large}
    />
  );
  return (
    hoverable
      ? (
        <MakeHoverUserInfo user={user}>
          <Content />
        </MakeHoverUserInfo>
      )
      : <Content />
  );
}
const UserType = PropTypes.shape({
  nickName: PropTypes.string,
  name: PropTypes.string,
  isV: PropTypes.bool,
  desc: PropTypes.string,
});
Avatar.propTypes = {
  user: UserType,
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  middle: PropTypes.bool,
  large: PropTypes.bool,
};
Avatar.defaultProps = {
  user: null,
  hoverable: false,
  onClick: null,
  xsmall: false,
  small: false,
  middle: false,
  large: false,
};
