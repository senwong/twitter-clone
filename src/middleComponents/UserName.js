import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';
import { BigVIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.isTwoLine ? 'column' : 'row')};
  justify-content: flex-start;
  align-items: flex-start;
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
 * |           |                      |             |
 * | nick name | verified acount icon | screen name |
 * |           |                      |             |
 * +------------------------------------------------+
 * @param {Object} user infomation
 */
function UserName({ user, isTwoLine }) {
  return (
    <Container isTwoLine={isTwoLine}>
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
}
const UserType = PropTypes.shape({
  nickName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isV: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
});
UserName.propTypes = {
  user: UserType.isRequired,
  isTwoLine: PropTypes.bool,
};
UserName.defaultProps = {
  isTwoLine: false,
};
export default UserName;
