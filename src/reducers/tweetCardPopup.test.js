import reducer from './tweetCardPopup';
import { tweetCardPopup } from '../actionTypes';

describe('tweetCardPopup page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      show: false,
      user: null,
    });
  });

  it('showld set show true', () => {
    const user = 'user';
    expect(reducer(undefined, {
      type: tweetCardPopup.show,
      user,
    })).toEqual({
      show: true,
      user: user,
    });
  });

  it('showld set show false', () => {
    const user = 'user';
    expect(reducer(undefined, {
      type: tweetCardPopup.hide,
      user,
    })).toEqual({
      show: false,
      user: user,
    });
  });
});
