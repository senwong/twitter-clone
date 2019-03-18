import actionTypes from '../actionTypes';

const initState = {
  id: 1,
  name: 'Kenneth',
  avatarSrc: 'http://dummyimage.com/100x100/79f2d9',
  nickName: '黎勇',
  isV: false,
  desc: '亲个本细照北地于集须老市。被该除温局活及理度部且习当。真所周者又内始叫备政确离型天方段决。土复又政布系战造用列道名工才。片而受装阶理该电进行了相立从精。',
  followers: 1,
  following: 15,
  phone: 38425393360,
  email: 'v.hfoess@qckax.mq',
  location: 'United States',
  birthday: '1995年1月22日',
  registerTime: '2005年1月',
  personalization: null,
  language: null,
  country: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENTUSER_SCREEN_NAME: {
      return { ...state, name: action.name };
    }
    case actionTypes.SET_CURRENTUSER_PHONE: {
      return { ...state, phone: action.phone };
    }
    case actionTypes.SET_CURRENTUSER_EMAIL: {
      return { ...state, email: action.email };
    }
    default:
      return state;
  }
};
