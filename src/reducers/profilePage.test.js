import reducer from './profilePage';
import { profilePage } from '../actionTypes';

describe('profile page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      show: false,
    });
  });
  it('showld set show true', () => {
    expect(reducer(undefined, {
      type: profilePage.show,
    })).toEqual({
      show: true,
    });
  });
  it('showld set show false', () => {
    expect(reducer(undefined, {
      type: profilePage.hide,
    })).toEqual({
      show: false,
    });
  });
});
