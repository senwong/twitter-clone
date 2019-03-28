import React from 'react';
import { func } from 'prop-types';
import PopupMenu from '../middleComponents/PopupMenu';
import { positionType, defaultPosition } from '../propTypes';

export default function UserSettingPopupMenu({
  hidePopup, setModal, showModal, position,
}) {
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
  return <PopupMenu hide={hidePopup} items={items} position={position} />;
}
UserSettingPopupMenu.propTypes = {
  hidePopup: func.isRequired,
  showModal: func.isRequired,
  setModal: func.isRequired,
  position: positionType,
};
UserSettingPopupMenu.defaultProps = {
  position: defaultPosition,
};
