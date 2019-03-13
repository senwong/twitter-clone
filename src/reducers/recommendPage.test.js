import reducer from './recommendPage';
import { recommendPage } from '../actionTypes';

describe('recommendPage page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      show: false,
      recommendQuery: '',
      searchQuery: '',
    });
  });

  it('showld set show true', () => {
    expect(reducer(undefined, {
      type: recommendPage.show,
    })).toEqual({
      show: true,
      recommendQuery: '',
      searchQuery: '',
    });
  });

  it('showld set show false', () => {
    expect(reducer(undefined, {
      type: recommendPage.hide,
    })).toEqual({
      show: false,
      recommendQuery: '',
      searchQuery: '',
    });
  });

  it('showld set recommend query', () => {
    const query = 'query';
    expect(reducer(undefined, {
      type: recommendPage.setRecommendQuery,
      query,
    })).toEqual({
      show: false,
      recommendQuery: query,
      searchQuery: '',
    });
  });

  it('showld set search query', () => {
    const query = 'query';
    expect(reducer(undefined, {
      type: recommendPage.setSearchQuery,
      query,
    })).toEqual({
      show: false,
      recommendQuery: '',
      searchQuery: query,
    });
  });
});
