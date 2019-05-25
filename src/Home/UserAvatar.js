import React from "react";
import withUserInfo from "./withUserInfo";
import Avatar from "../BaseComponents/Avatar";

export default withUserInfo(
  ({ user }) => user && user.avatarSrc && <Avatar user={user} />
);
