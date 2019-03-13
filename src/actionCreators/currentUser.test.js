import { setScreenName, setPhone, setEmail } from './currentUser';
import { currentUser } from '../actionTypes';

describe('currentUser action creator', () => {
  it('should create an action to set screen name', () => {
    const name = "Jhon";
    const expectedAction = {
      type: currentUser.setScreenName,
      name: name,
    };
    expect(setScreenName(name)).toEqual(expectedAction)
  });
  it('should create an action to set phone', () => {
    const phone = 123456;
    const expectedAction = {
      type: currentUser.setPhone,
      phone: phone,
    };
    expect(setPhone(phone)).toEqual(expectedAction)
  });
  it('should create an action to set email', () => {
    const email = 'wss@gmail.com';
    const expectedAction = {
      type: currentUser.setEmail,
      email: email,
    };
    expect(setEmail(email)).toEqual(expectedAction)
  });
});
