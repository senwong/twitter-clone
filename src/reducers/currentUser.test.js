import reducer from './currentUser';
import { currentUser } from '../actionTypes';

const initialState = {
  name: 'initial name',
  phone: 123456,
  email: 'initial@email.com'
};
describe('currentUser reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it('showld set name', () => {
    expect(reducer(initialState, {
      type: currentUser.setScreenName,
      name: 'new name',
    })).toEqual({
      name: 'new name',
      phone: 123456,
      email: 'initial@email.com'
    });
  });
  it('showld set phone', () => {
    expect(reducer(initialState, {
      type: currentUser.setPhone,
      phone: 88888888,
    })).toEqual({
      name: 'initial name',
      phone: 88888888,
      email: 'initial@email.com'
    });
  });
  it('showld set email', () => {
    expect(reducer(initialState, {
      type: currentUser.setEmail,
      email: 'new@email.com',
    })).toEqual({
      name: 'initial name',
      phone: 123456,
      email: 'new@email.com'
    });
  });
});
