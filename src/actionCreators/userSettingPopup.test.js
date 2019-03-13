import { show, hide } from './userSettingPopup';
import { userSettingPopup } from '../actionTypes';

describe('userSettingPopup action creator', () => {
  it('should create an action to show userSettingPopup', () => {
    const expectedAction = {
      type: userSettingPopup.show,
    };
    expect(show()).toEqual(expectedAction)
  });
  it('should create an action to hide userSettingPopup', () => {
    const expectedAction = {
      type: userSettingPopup.hide,
    };
    expect(hide()).toEqual(expectedAction)
  });
});
