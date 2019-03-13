import React from 'react';
import PropTypes from 'prop-types';
import PopupPage from '../middleComponents/PopupPage';

export default function UserSettingPopupPage({ hidePopup, setModal, showModal }) {
  function handleBlockClick() {
    hidePopup();
    setModal({
      type: 'secondary',
      title: '屏蔽 @sarah_edo？@sarah_edo 将不能关注你或查看你的推文，你也不会看到来自 @sarah_edo 的推文或通知。',
      onConfirm: () => {},
      onCancel: () => {},
    });
    showModal();
  }
  const items = [
    { title: '添加到列表' },
    { title: '查看列表' },
    { title: '查看瞬间' },
    { title: '隐藏' },
    { title: '屏蔽', warning: true, onClick: handleBlockClick },
    { title: '举报' },
  ];
  return <PopupPage hide={hidePopup} items={items} />;
}
UserSettingPopupPage.propTypes = {
  hidePopup: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};
