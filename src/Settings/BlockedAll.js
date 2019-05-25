import React from "react";
import BlockedLayout from "./BlockedLayout";

function BlockedAll() {
  return (
    <BlockedLayout
      contentTitle="你没有屏蔽任何人"
      contentSubTitle="当你屏蔽某人后，那个人就不能关注你或向你发私信，你也不会看到来自他们的通知。"
      href="https://support.twitter.com/articles/20171399"
    />
  );
}
export default BlockedAll;
