import { getUserInfo } from "./dataMock"
const initState = {
  currentUser: getUserInfo(),
  language: "简体中文",
  country: "美国",
  personalization: 0, //个性化与数据设置
  tweetCardUser: null,
  recommendQuery: "",
  searchQuery: "",
  showTweetCardPop: false,
  showProfilePage: false,
  showHistoryNRecPage: false,
  showUserSettingPopupPage: false,
  // modal
  showModal: false,
  modalConfig: {},
  modalOnConfirm: () => {},
  modalOnCancel: () => {},
}
export default function reducer(state = initState, action) {
  switch(action.type) {
    case "TOGGLE_TWEET_CARD_POP":
      return Object.assign({}, state, {
        showTweetCardPop: !state.showTweetCardPop,
        tweetCardUser: action.user,
      });
    case "TOGGLE_PROFILE_PAGE":
      return Object.assign({}, state, {
        showProfilePage: !state.showProfilePage
      });
    case "SET_HISTORY_REM_PAGE_VISIBILITY": {
      return Object.assign({}, state, {
        showHistoryNRecPage: action.show
      });
    }
    case "SET_RECOMMEND_QUERY": {
      return Object.assign({}, state, {
        recommendQuery: action.query
      })
    }
    case "SET_SEARCH_QUERY": {
      return Object.assign({}, state, {
        searchQuery: action.query
      })
    }
    case "SET_CURRENT_USER": {
      return Object.assign({}, state, {
        currentUser: action.user
      })
    }
    case "SET_SCREEN_NAME": {
      return Object.assign({}, state, {
        currentUser: Object.assign({}, state.currentUser, {name: action.name})
      })
    }
    case "SET_PHONE": {
      return Object.assign({}, state, {
        currentUser: Object.assign({}, state.currentUser, {phone: action.phone})
      })
    }
    case "SET_EMAIL": {
      return Object.assign({}, state, {
        currentUser: Object.assign({}, state.currentUser, {email: action.email})
      })
    }
    case 'SET_USER_SETTING_POPUP_PAGE': {
      return Object.assign({}, state, {
        showUserSettingPopupPage: action.show,
      })
    }
    // modal
    case 'TOGGLE_MODAL': {
      return Object.assign({}, state, {
        showModal: !state.showModal,
      });
    }
    case 'SET_MODAL': {
      return Object.assign({}, state, {
        modalConfig: action.modalConfig
      });
    }
    case 'SET_MODAL_ON_CONFIRM': {
      return Object.assign({}, state, {
        modalOnConfirm: action.onConfirm
      });
    }
    case 'SET_MODAL_ON_CANCEL': {
      return Object.assign({}, state, {
        modalOnCancel: action.onCancel
      });
    }

    default:
      return state;
  }
}