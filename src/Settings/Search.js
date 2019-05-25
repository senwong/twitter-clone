import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "搜索设置",
  list: [
    {
      key: 1,
      list: [
        {
          key: 1,
          type: "checkbox",
          title: "隐藏敏感内容",
          subTitle: "这会防止在搜索结果中显示潜在的敏感内容。"
        },
        {
          key: 2,
          type: "checkbox",
          title: "移除你已屏蔽和隐藏的账号",
          subTitle: "使用此功能以移除来自你已屏蔽或隐藏的用户的搜索结果。"
        }
      ]
    }
  ]
};
function Search() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="搜索设置" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Search;
