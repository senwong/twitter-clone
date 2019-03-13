import Mock from 'mockjs';
import { currentUser } from '../actionTypes';

const { Random } = Mock;
const initState = {
  id: Random.natural(),
  avatarSrc: Random.dataImage('100x100'),
  name: Random.first(),
  nickName: Random.cname(),
  isV: Random.boolean(),
  desc: Random.cparagraph(),
  followers: Math.round(Math.random() * 10),
  following: Math.round(Math.random() * 100),
  phone: Random.integer(10000000000, 99999999999),
  email: Random.email(),
  location: 'United States',
  birthday: '1995年1月22日',
  registerTime: '2005年1月',
  personalization: null,
  language: null,
  country: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case currentUser.setScreenName: {
      return Object.assign({}, state, { name: action.name });
    }
    case currentUser.setPhone: {
      return Object.assign({}, state, { phone: action.phone });
    }
    case currentUser.setEmail: {
      return Object.assign({}, state, { email: action.email });
    }
    default:
      return state;
  }
};
