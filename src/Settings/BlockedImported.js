import React from "react";
import BlockedLayout from "./BlockedLayout";

function BlockedImported() {
  return (
    <BlockedLayout
      contentTitle="你还没有导入要屏蔽的账号列表"
      contentSubTitle="查看如何导入屏蔽列表。"
      href="https://support.twitter.com/articles/20171399"
    />
  );
}
export default BlockedImported;
