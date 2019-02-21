export const toggleTweetCardPop = user => ({
  type: "TOGGLE_TWEET_CARD_POP",
  user
})
export const toggleProfilePage = () => ({
  type: "TOGGLE_PROFILE_PAGE",
})

export const setHistoryNRecPage = show => ({
  type: "SET_HISTORY_REM_PAGE_VISIBILITY",
  show,
})
export const setRecommendQuery = query => ({
  type: "SET_RECOMMEND_QUERY",
  query,
})
export const setSearchQuery = query => ({
  type: "SET_SEARCH_QUERY",
  query,
})
export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  user,
})
export const setScreenName = name => ({
  type: "SET_SCREEN_NAME",
  name,
})
export const setPhone = phone => ({
  type: "SET_PHONE",
  phone,
})
export const setEmail = email => ({
  type: "SET_EMAIL",
  email,
})
export const setUserSettingPopupPage = show => ({
  type: 'SET_USER_SETTING_POPUP_PAGE',
  show,
})
// modal
export const toggleModal = () => ({
  type: 'TOGGLE_MODAL',
})
export const setModal = modalConfig => ({
  type: 'SET_MODAL',
  modalConfig,
})
export const setModalOnConfirm = onConfirm => ({
  type: 'SET_MODAL_ON_CONFIRM',
  onConfirm,
})
export const setModalOnCancel = onCancel => ({
  type: 'SET_MODAL_ON_CANCEL',
  onCancel,
})

