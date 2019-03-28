import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';
import { BigVIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';
import MakeHoverUserInfo from './MakeHoverUserInfo';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.isTwoLine ? 'column' : 'row')};
  justify-content: flex-start;
  align-items: ${props => (props.isTwoLine ? 'flex-start' : 'center')};
`;
const textDecorationColor = theme('mode', {
  light: 'black',
  dark: 'white',
});
const UserLink = styled(Link)`
  &:hover {
    text-decoration-color: ${textDecorationColor};
    text-decoration-line: underline;
    text-decoration-style: solid;
  }
`;
/**
 * +------------------------------------------------+
 * | nick name | verified acount icon | screen name |
 * +------------------------------------------------+
 * isTwoLine
 * +------------------------------------------------+
 * | nick name   | verified acount icon |           |
 * | screen name |                      |           |
 * +------------------------------------------------+
 * @param {Object} user  the user infomation
 * @param {bool} isTwoLine place screen name on the new line
 */
function UserName({
  user, isTwoLine, hoverable,
}) {
  const Content = () => (
    <Container
      isTwoLine={isTwoLine}
    >
      <div>
        {user && user.nickName && (
          <UserLink to={user.name}>
            <Text bold>{user.nickName}</Text>
          </UserLink>
        )}
        {user && user.isV && <BigVIcon xsmall primary />}
        &nbsp;
      </div>
      {user && user.name && (
        <Text secondary>
          @
          {user.name}
        </Text>
      )}
    </Container>
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
UserName.propTypes = {
  user: UserType,
  isTwoLine: PropTypes.bool,
  hoverable: PropTypes.bool,
};
UserName.defaultProps = {
  user: null,
  isTwoLine: false,
  hoverable: true,
};
export default UserName;
