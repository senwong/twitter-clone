import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "照片圈人",
  list: [
    {
      key: 1,
      list: [
        {
          key: 1,
          type: "radio-group",
          title: "照片圈人",
          subTitle: "允许人们在照片上圈你，并在他们圈你的时候接收通知",
          radios: [
            { key: 1, title: "任何人都能圈出你" },
            { key: 2, title: "只有你关注的人能圈出你" },
            { key: 3, title: "关闭" }
          ]
        }
      ]
    }
  ]
};
function Tagging() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="照片圈人" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Tagging;
