import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "更改国家"
};
function Country() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改国家" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Country;
