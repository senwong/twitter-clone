import React from "react";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";
import LayOut from "./LayOut";

const data = {
  title: "辅助功能",
  list: [
    {
      key: 1,
      title: "视力",
      list: [
        {
          key: 1,
          type: "radio-group",
          title: "文字大小",
          radios: [
            { key: 1, title: "小" },
            { key: 2, title: "默认" },
            { key: 3, title: "中" },
            { key: 4, title: "大" }
          ]
        }
      ]
    },
    {
      key: 2,
      list: [
        {
          key: 1,
          type: "checkbox",
          title: "撰写图片描述",
          subTitle: "添加为视障人士说明图片内容的功能。"
        }
      ]
    },
    {
      key: 3,
      title: "动态效果",
      list: [
        {
          key: 1,
          type: "link",
          title: "视频自动播放",
          subTitle: "仅开启无线网络时",
          to: "/settings/autoplay"
        }
      ]
    }
  ]
};
export default function Accessibility() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="辅助功能" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
