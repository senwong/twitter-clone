import React from "react";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import MakeSettingPanel from "./MakeSettingPanel";

const data = {
  title: "电子邮件通知"
};
function EmailNotifications() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="电子邮件通知" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default EmailNotifications;
