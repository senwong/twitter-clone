import { show, hide, setRecommendQuery, setSearchQuery } from './recommendPage';
import { recommendPage } from '../actionTypes';

describe('recommendPage action creator', () => {
  it('should create an action to show recommendPage', () => {
    const expectedAction = {
      type: recommendPage.show,
    };
    expect(show()).toEqual(expectedAction)
  });
  it('should create an action to hide recommendPage', () => {
    const expectedAction = {
      type: recommendPage.hide,
    };
    expect(hide()).toEqual(expectedAction)
  });
  it('should create an action to set recommend query', () => {
    const query = 'some query';
    const expectedAction = {
      type: recommendPage.setRecommendQuery,
      query,
    };
    expect(setRecommendQuery(query)).toEqual(expectedAction)
  });
  it('should create an action to set search query', () => {
    const query = 'some query';
    const expectedAction = {
      type: recommendPage.setSearchQuery,
      query,
    };
    expect(setSearchQuery(query)).toEqual(expectedAction)
  });
});
