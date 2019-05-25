import React from "react";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import LayOut from "./LayOut";
import Text from "../BaseComponents/Text";

export default function Password() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改密码" />}
      rightAside={<Text>更改密码</Text>}
    />
  );
}
