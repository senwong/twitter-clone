import React from "react";
import LayOut from "./LayOut";
import MakeSettingPanel from "./MakeSettingPanel";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";

const data = {
  title: "已隐藏",
  list: [
    {
      key: 1,
      list: [
        {
          key: 1,
          type: "link",
          title: "已隐藏账号",
          to: "/settings/muted/all"
        },
        {
          key: 2,
          type: "link",
          title: "已隐藏的字词",
          to: "/settings/muted_keywords"
        }
      ]
    }
  ]
};
function Mute() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="已隐藏" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Mute;
