export const toggleModal = () => ({
  type: 'TOGGLE_MODAL',
});
export const setModal = modalConfig => ({
  type: 'SET_MODAL',
  modalConfig,
});
export const setModalOnConfirm = onConfirm => ({
  type: 'SET_MODAL_ON_CONFIRM',
  onConfirm,
});
export const setModalOnCancel = onCancel => ({
  type: 'SET_MODAL_ON_CANCEL',
  onCancel,
});