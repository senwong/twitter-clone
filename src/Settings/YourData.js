import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "你的Twitter数据"
};
function YourData() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="你的Twitter数据" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default YourData;
