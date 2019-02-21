import React from 'react'
import PopupPage from "./PopupPage"

export default function TweetCardPopupPage({user, ...props}) {
  const items = [
    {title: "嵌入推文",},
    {title: `取消关注@${user.name}`},
    {title: `隐藏@${user.name}`},
    {title: `屏蔽@${user.name}`},
    {title: "举报推文", warning: true,},
  ];
  return <PopupPage items={items} {...props}/>;
}