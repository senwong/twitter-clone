import React from 'react'
import PopupPage from "../middleComponents/PopupPage"

export default class UserSettingPopupPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlockClick = this.handleBlockClick.bind(this);
  }
  handleBlockClick() {
    this.props.toggle();
    this.props.toggleModal();
    this.props.setModal({
      title: '屏蔽 @sarah_edo？@sarah_edo 将不能关注你或查看你的推文，你也不会看到来自 @sarah_edo 的推文或通知。',
      hasConfirm: true,
      hasCancel: true,
      type: 'secondary',
    })
  }
  render() {
    const items = [
      {title: "添加到列表",},
      {title: "添加到列表"},
      {title: "查看列表"},
      {title: "查看瞬间"},
      {title: "隐藏"},
      {title: "屏蔽", onClick: this.handleBlockClick},
      {title: "举报"},
    ]
    const props = this.props
    return <PopupPage items={items} {...props}/>;
  }
}