import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import PopupMenu from '../middleComponents/PopupMenu';
import { positionType, defaultPosition } from '../propTypes';
import { hide } from '../actionCreators/userSettingPopup';
import { show, setup as setupModal } from '../actionCreators/modal';

function UserSettingPopupMenu({
  showSelf, hidePopup, setModal, showModal, position,
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
  return <PopupMenu show={showSelf} hide={hidePopup} items={items} position={position} />;
}
UserSettingPopupMenu.propTypes = {
  hidePopup: func.isRequired,
  showModal: func.isRequired,
  setModal: func.isRequired,
  showSelf: bool.isRequired,
  position: positionType,
};
UserSettingPopupMenu.defaultProps = {
  position: defaultPosition,
};

const mapStateToProps = state => ({
  position: state.userSettingPopup.position,
  showSelf: state.userSettingPopup.show,
});

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(hide()),
  setModal: config => dispatch(setupModal(config)),
  showModal: () => dispatch(show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSettingPopupMenu);
