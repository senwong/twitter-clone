import React from "react";
import withUserInfo from "./withUserInfo";
import Text from "../BaseComponents/Text";

export default withUserInfo(({ user }) => (
  <>
    <Text bold>{user.nickName}</Text>
    <br />
    <Text secondary>
@{user.name}</Text>
  </>
));
