import React from "react";
import LayOut from "./LayOut";
import MakeSettingPanel from "./MakeSettingPanel";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";

const data = {
  title: "视频自动播放",
  list: [
    {
      key: 1,
      list: [
        {
          key: 1,
          type: "radio-group",
          title: "视频自动播放",
          subTitle: "选择是否要在该设备上自动播放视频",
          radios: [
            { key: 1, title: "通过手机或无线网络" },
            { key: 2, title: "从不" }
          ]
        }
      ]
    }
  ]
};
function AutoPlay() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="视频自动播放" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default AutoPlay;
