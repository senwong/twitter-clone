import React from "react";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import LayOut from "./LayOut";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "停用账号"
};
export default function Deactivate() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="停用账号" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
