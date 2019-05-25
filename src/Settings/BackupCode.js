import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "备用码"
};
function BackupCode() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="备用码" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default BackupCode;
