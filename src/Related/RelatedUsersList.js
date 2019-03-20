import React from 'react';
import PropTypes from 'prop-types';
import { UserCard } from '../middleComponents/Cards';

function RelatedUsersList({ users }) {
  return (
    <>
      {
        users && users.length > 0
          ? users.map(u => <UserCard key={u.id} user={u} />)
          : <h1>没有推荐的用户</h1>
      }
    </>
  );
}
RelatedUsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isV: PropTypes.bool.isRequired,
    desc: PropTypes.string.isRequired,
  })),
};
RelatedUsersList.defaultProps = {
  users: null,
};

export default RelatedUsersList;
