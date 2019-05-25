import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "更改语言"
};
function Language() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改语言" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Language;
