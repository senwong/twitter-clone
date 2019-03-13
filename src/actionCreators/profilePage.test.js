import { hide, show } from './profilePage';
import { profilePage } from '../actionTypes';

describe('profilePage action creator', () => {
  it('should create an action to hide profilePage', () => {
    const expectedAction = {
      type: profilePage.hide,
    };
    expect(hide()).toEqual(expectedAction)
  });
  it('should create an action to show profilePage', () => {
    const expectedAction = {
      type: profilePage.show,
    };
    expect(show()).toEqual(expectedAction)
  });
});
