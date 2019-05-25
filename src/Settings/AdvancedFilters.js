import React from "react";
import LayOut from "./LayOut";
import MakeSettingPanel from "./MakeSettingPanel";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";

const data = {
  title: "高级过滤",
  list: [
    {
      key: 1,
      title: "隐藏来自以下用户的通知：",
      list: [
        {
          key: 1,
          type: "checkbox",
          title: "你未关注的用户"
        },
        {
          key: 2,
          type: "checkbox",
          title: "未关注你的用户"
        },
        {
          key: 3,
          type: "checkbox",
          title: "新账号用户"
        },
        {
          key: 4,
          type: "checkbox",
          title: "使用默认头像的用户"
        },
        {
          key: 5,
          type: "checkbox",
          title: "没有验证邮件地址的用户"
        },
        {
          key: 6,
          type: "checkbox",
          title: "没有验证手机号码的用户"
        }
      ]
    }
  ]
};
function AdvancedFilters() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="高级过滤" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default AdvancedFilters;
