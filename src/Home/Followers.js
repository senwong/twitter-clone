import React from 'react';
import { connect } from 'react-redux';
import { userType } from '../propTypes';
import Text from '../BaseComponents/Text';

function Followers({ user }) {
  return (
    <div style={{ padding: '9px 18px' }}>
      <div style={{ display: 'inline-block', marginRight: '9px' }}>
        <Text bold>
          {user.following}
          {' '}
          正在关注
        </Text>
      </div>
      <div style={{ display: 'inline-block' }}>
        <Text bold>
          {user.followers}
          {' '}
          关注者
        </Text>
      </div>
    </div>
  );
}
Followers.propTypes = {
  user: userType.isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser,
});

export default connect(mapStateToProps)(Followers);
