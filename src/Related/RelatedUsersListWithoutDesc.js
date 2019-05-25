import React from "react";
import { arrayOf } from "prop-types";
import UserCardWithoutDesc from "../middleComponents/UserCardWithoutDesc";
import { userType } from "../propTypes";

function RelatedUsersListWithoutDesc({ users }) {
  return (
    <>
      {users && users.length > 0 ? (
        users.map(u => <UserCardWithoutDesc key={u.id} user={u} />)
      ) : (
        <h1>没有推荐的用户</h1>
      )}
    </>
  );
}
RelatedUsersListWithoutDesc.propTypes = {
  users: arrayOf(userType).isRequired
};

export default RelatedUsersListWithoutDesc;
