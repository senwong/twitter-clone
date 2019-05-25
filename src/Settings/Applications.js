import React from "react";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import LayOut from "./LayOut";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "应用和会话",
  list: [
    {
      key: 1,
      title: "应用"
    },
    {
      key: 2,
      title: "会话"
    }
  ]
};
export default function Applications() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="应用和会话" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
