import React from 'react';
import PropTypes from 'prop-types';
import PopupPage from '../middleComponents/PopupPage';

export default function UserSettingPopupPage({ toggle, toggleModal, setModal }) {
  console.log({toggle});
  function handleBlockClick() {
    toggle();
    toggleModal();
    setModal({
      title: '屏蔽 @sarah_edo？@sarah_edo 将不能关注你或查看你的推文，你也不会看到来自 @sarah_edo 的推文或通知。',
      hasConfirm: true,
      hasCancel: true,
      type: 'secondary',
    });
  }
  const items = [
    { title: '添加到列表' },
    { title: '查看列表' },
    { title: '查看瞬间' },
    { title: '隐藏' },
    { title: '屏蔽', onClick: handleBlockClick },
    { title: '举报' },
  ];
  return <PopupPage toggle={toggle} items={items} />;
}
UserSettingPopupPage.propTypes = {
  toggle: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};
