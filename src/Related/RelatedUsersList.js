import React from "react";
import { arrayOf } from "prop-types";
import UserCard from "../middleComponents/UserCard";
import { userType } from "../propTypes";

function RelatedUsersList({ users }) {
  return (
    <>
      {users && users.length > 0 ? (
        users.map(u => <UserCard key={u.id} user={u} />)
      ) : (
        <h1>没有推荐的用户</h1>
      )}
    </>
  );
}
RelatedUsersList.propTypes = {
  users: arrayOf(userType)
};
RelatedUsersList.defaultProps = {
  users: null
};

export default RelatedUsersList;
