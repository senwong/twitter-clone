import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "个性化与数据",
  list: [
    {
      key: 1,
      title: "个性化",
      list: [
        {
          key: 1,
          type: "checkbox",
          title: "个性化广告",
          subTitle:
            "你会一直在 Twitter 上看到基于你 Twitter 动态的广告。启用此设置后，Twitter 会把你的 Twitter 动态和来自我们合作伙伴的其它网上动态和信息结合起来，对 Twitter 上下的广告进行进一步个性化。"
        },
        {
          key: 2,
          type: "checkbox",
          title: "根据推断的身份个性化",
          subTitle:
            "Twitter 将始终根据你提供的信息以及你用于登录的设备来个性化你的体验。启用此设置后，Twitter 也可能会根据对你的身份的其他推断来个性化设置，例如你尚未用于登录 Twitter 的设备和浏览器，或与链接到你的 Twitter 账号的邮件地址和电话号码类似的邮件地址和电话号码。"
        },
        {
          key: 3,
          type: "checkbox",
          title: "根据你去过的地方个性化",
          subTitle:
            "Twitter 一直使用一些信息，例如你在哪里注册以及你的当前位置，以帮助向你展示更相关的内容。启用此设置后，Twitter 可能会根据你去过的地方个性化。"
        }
      ]
    },
    {
      key: 2,
      title: "数据",
      list: [
        {
          key: 1,
          type: "checkbox",
          title: "跟踪你在网上哪里看到 Twitter 内容",
          subTitle:
            "Twitter 使用此数据对你的体验进行个性化。网页浏览历史绝不会和你的姓名、邮件地址或电话号码一起存储。"
        },
        {
          key: 2,
          type: "checkbox",
          title: "与 Twitter 的业务合作伙伴分享你的数据",
          subTitle:
            "该设置让 Twitter 与特定业务合作伙伴分享非公开数据（如你已看过的内容和你的兴趣等），用于广告和品牌营销等用途。"
        }
      ]
    }
  ]
};
function Personalization() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="个性化与数据" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Personalization;
