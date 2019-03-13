import reducer from './userSettingPopup';
import { userSettingPopup } from '../actionTypes';

describe('userSettingPopup page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      show: false,
    });
  });

  it('showld set show true', () => {
    expect(reducer(undefined, {
      type: userSettingPopup.show,
    })).toEqual({
      show: true,
    });
  });

  it('showld set show false', () => {
    expect(reducer(undefined, {
      type: userSettingPopup.hide,
    })).toEqual({
      show: false,
    });
  });
});
