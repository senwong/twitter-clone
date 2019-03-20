import React from 'react';
import PropTypes from 'prop-types';
import { UserCardWithoutDesc } from '../middleComponents/Cards';

function RelatedUsersListWithoutDesc({ users }) {
  return (
    <>
      {
        users && users.length > 0
          ? users.map(u => <UserCardWithoutDesc key={u.id} user={u} />)
          : <h1>没有推荐的用户</h1>
      }
    </>
  );
}
RelatedUsersListWithoutDesc.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isV: PropTypes.bool.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
};

export default RelatedUsersListWithoutDesc;
