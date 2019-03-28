import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { whiteBackgroud } from '../themes';
import Avatar from '../BaseComponents/Avatar';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import UserName from './UserName';
import Text from '../BaseComponents/Text';
import { hide, setHideTimerId as setHideTimer } from '../actionCreators/userInfoPopover';

const Container = styled.div`
  ${whiteBackgroud}
  border-radius: 13px; 
  padding: 13px;
  position: fixed;
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
  max-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const FollowingWrapper = styled.span`
  margin-right: 18px;
`;
const MarginTop = styled.div`
  margin-top: 9px;
`;
/**
 * +------------+-----------------------------------------------+
 * |            |                                follow button  |
 * |   avatar   |                                               |
 * |            |                                               |
 * +------------+-----------------------------------------------+
 * | name                                                       |
 * | screenName                                                 |
 * +------------------------------------------------------------+
 * |                                                            |
 * |                        description                         |
 * |                                                            |
 * +------------------------------------------------------------+
 * |  xxx人正在关注    xx个关注者                                  |
 * +------------------------------------------------------------+
 * |你关注的人中没有人关注 / xxx 关注了此账号                         |
 * +------------------------------------------------------------+
 * @param {} param0
 */
function UserInfoPopover({
  position, user, hideSelf, hideTimerId, setHideTimerId,
}) {
  const delay = 300;
  function handleMouseEnter() {
    if (hideTimerId) {
      clearTimeout(hideTimerId);
    }
  }
  function handleMouseLeave() {
    const timerId = setTimeout(() => {
      hideSelf();
    }, delay);
    setHideTimerId(timerId);
  }
  if (!position.left || !position.top) return null;
  return (
    <Container
      left={position.left}
      top={position.top}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HeadWrapper>
        <Avatar user={user} />
        <CustomizedButton small>关注</CustomizedButton>
      </HeadWrapper>
      <MarginTop>
        <UserName user={user} isTwoLine hoverable={false} />
      </MarginTop>
      <MarginTop>
        <Text>{user.desc}</Text>
      </MarginTop>
      <MarginTop>
        <FollowingWrapper>
          <Text bold>{user.following}</Text>
          <Text secondary>正在关注</Text>
        </FollowingWrapper>
        <Text bold>{user.followers}</Text>
        <Text secondary>关注者</Text>
      </MarginTop>
      <MarginTop>
        <Text secondary>你关注的人中没有人关注</Text>
      </MarginTop>
    </Container>
  );
}
UserInfoPopover.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({

  }),
  hideSelf: PropTypes.func.isRequired,
  hideTimerId: PropTypes.number,
  setHideTimerId: PropTypes.func.isRequired,
};
UserInfoPopover.defaultProps = {
  user: null,
  hideTimerId: null,
};
const mapStateToProps = state => ({
  position: state.userInfoPopover.position,
  user: state.userInfoPopover.user,
  hideTimerId: state.userInfoPopover.hideTimerId,
});
const mapDispatchToProps = dispatch => ({
  hideSelf: () => dispatch(hide()),
  setHideTimerId: id => dispatch(setHideTimer(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfoPopover);
