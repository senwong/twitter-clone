import React, {
  useState, useEffect, useRef, useReducer, memo,
} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { func, shape, element } from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import InputText from '../BaseComponents/InputText';
import { whiteBackground } from '../themes';
import SearchHistorys from './SearchHistorys';
import SearchRecommends from './SearchRecommends';
import { getSearchHistory, addSearchHistory } from '../Api/SearchHistory';
import { useClickOutsideEl, useMediaQuery } from '../utilitys';

const Wrapper = styled.div`
  margin: 10px 0;
  flex: 1 0 0px;
  min-height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100px;
  max-height: calc(80vh - 53px);
  overflow: auto;
  ${whiteBackground};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
  @media (max-width: 600px) {
    position: fixed;
    top: 43px;
    left: 0;
    right: 0px;
    bottom: 0px;
    max-height: none;
  }
`;

/*
in wide screen mode
  behaviors to show
    focus event and previous state is hide
      if query
        show search recommend
      else
        show history
  behaviors to hide
    click other places except self
    input enter event

in narrow screen mode
  behaviors to show
    focus event and previous state is hide
      if query
        show search recommend
      else
        show history
      history.push()
  behaviors to hide
    click other places except self
    input enter event
      history.goBack()
    back button
*/
function useDropdownVisibility(history, backIconRef, selectedHistory, containerEl, query) {
  const isNarrowScreen = useMediaQuery('(max-width: 1000px)');
  const historyKey = useRef();
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_HISTORY': {
        return {
          ...state,
          historyVisible: true,
          searchRecommendVisible: false,
        };
      }
      case 'SHOW_SEARCH_RECOMMEND': {
        return {
          ...state,
          historyVisible: false,
          searchRecommendVisible: true,
        };
      }
      case 'HIDE_ALL': {
        return {
          ...state,
          historyVisible: false,
          searchRecommendVisible: false,
        };
      }
      default:
        return state;
    }
  };
  const initialState = {
    historyVisible: false,
    searchRecommendVisible: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { historyVisible, searchRecommendVisible } = state;
  const showHistory = () => dispatch({ type: 'SHOW_HISTORY' });
  const showSearchRcommend = () => dispatch({ type: 'SHOW_SEARCH_RECOMMEND' });
  const hideAll = () => dispatch({ type: 'HIDE_ALL' });

  // show
  function handleFocus({ target: { value } }) {
    if (historyVisible === false && searchRecommendVisible === false) {
      if (value) showSearchRcommend();
      else showHistory();
      const {
        key, pathname, search, state: locationState,
      } = history.location;
      if (isNarrowScreen && (!locationState || !locationState.dropdownFocus)) {
        historyKey.current = key;
        history.push({ pathname, search, state: { dropdownFocus: true } });
      }
    }
  }
  useEffect(() => {
    if (historyVisible && query) {
      showSearchRcommend();
    }
    if (searchRecommendVisible && !query) {
      showHistory();
    }
  }, [historyVisible, searchRecommendVisible, query]);

  function handleKeyDown({ key, target: { value } }) {
    if (key === 'Enter') {
      hideAll();
      const { state: locationState } = history.location;
      if (isNarrowScreen && locationState && locationState.dropdownFocus) {
        history.goBack();
        const { pathname, search } = history.location;
        history.replace({ pathname, search, state: { dropdownFocus: false } });
      }
      setTimeout(() => {
        if (value) {
          history.push({
            pathname: '/twitter-clone/search',
            search: `q=${value}`,
          });
        } else if (selectedHistory) {
          history.push({
            pathname: '/twitter-clone/search',
            search: `q=${selectedHistory}`,
          });
        }
      }, 100);
    }
  }

  useClickOutsideEl(() => {
    hideAll();
    if (isNarrowScreen && history.location.state && history.location.state.dropdownFocus) {
      history.goBack();
      // reset dropdownFocu to false
      const { pathname, search } = history.location;
      history.replace({ pathname, search, state: { dropdownFocus: false } });
    }
  }, containerEl, backIconRef);

  // back button trick this function, key is destination location's key
  function handleHistoryChange({ key }) {
    if (isNarrowScreen && key === historyKey.current) {
      hideAll();
    }
  }
  useEffect(() => {
    const unlisten = history.listen(handleHistoryChange);
    return () => {
      unlisten();
    };
  }, []);
  return [historyVisible, searchRecommendVisible, handleFocus, handleKeyDown];
}

function useSearchHistorys() {
  const initialState = {
    selectedHistory: '',
    historys: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_HISTORY': {
        return { ...state, selectedHistory: action.value };
      }
      case 'SET_SEARCH_HISTORYS': {
        return { ...state, historys: action.value };
      }
      default:
        return state;
    }
  };
  const [
    {
      selectedHistory,
      searchHistorys,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const setSearchHistorys = value => dispatch({ type: 'SET_SEARCH_HISTORYS', value });
  const setSelectedHistory = value => dispatch({ type: 'SET_SELECTED_HISTORY', value });
  // initialize get historys
  useEffect(() => {
    const allHistorys = getSearchHistory();
    if (allHistorys.length > 0) {
      setSearchHistorys(allHistorys);
      setSelectedHistory(allHistorys[0]);
    }
  }, []);

  function handleEnter({ target: { value } }) {
    if (value) {
      addSearchHistory(value);
    }
  }
  function handleArrowUp({ target: { value } }) {
    if (!value && searchHistorys) {
      const index = searchHistorys.indexOf(selectedHistory);
      const newSelectedHistory = searchHistorys[index > 0 ? index - 1 : searchHistorys.length - 1];
      setSelectedHistory(newSelectedHistory);
    }
  }
  function handleArrowDown({ target: { value } }) {
    if (!value && searchHistorys) {
      const index = searchHistorys.indexOf(selectedHistory);
      const newSelectedHistory = searchHistorys[index < searchHistorys.length - 1 ? index + 1 : 0];
      setSelectedHistory(newSelectedHistory);
    }
  }
  function handleKeydown(e) {
    switch (e.key) {
      case 'Enter':
        handleEnter(e);
        break;
      case 'ArrowUp':
        handleArrowUp(e);
        break;
      case 'ArrowDown':
        handleArrowDown(e);
        break;
      default:
    }
  }
  return [selectedHistory, searchHistorys, handleKeydown];
}

/**
 * @param {object} history react-router-dom history object
 * @param {function} onShow inform upper component that dropdown menu is visible
 * @param {function} onHide inform upper component that dropdown menu is invisible
 * @param {object} backIconRef back button ref, when it clicks don't directly invoke hide, but hide
 * by history listener
 */
function SearchBar({
  history, onShow, onHide, backIconRef,
}) {
  const containerEl = useRef();

  const [selectedHistory, searchHistorys, handleKeydownHistory] = useSearchHistorys();
  const [query, setQuery] = useState('');
  const [
    showHistory, showSearchRcommend, handleFocus, handleKeyDownVisibility,
  ] = useDropdownVisibility(history, backIconRef, selectedHistory, containerEl, query);

  function handleKeyDown(e) {
    handleKeydownHistory(e);
    handleKeyDownVisibility(e);
  }

  useEffect(() => {
    const { pathname, search } = window.location;
    if (pathname === '/twitter-clone/search') {
      const value = queryString.parse(search).q;
      setQuery(value);
    }
  }, []);

  useEffect(() => {
    if ((showHistory || showSearchRcommend) && (onShow && typeof onShow === 'function')) {
      onShow();
    }
    if (!showHistory && !showSearchRcommend && onHide && typeof onHide === 'function') {
      onHide();
    }
  }, [showHistory, showSearchRcommend]);

  return (
    <Wrapper ref={containerEl}>
      <InputText
        placeholder="搜索 Twitter"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        showDelete={showHistory || showSearchRcommend}
      />
      {
        (showHistory || showSearchRcommend)
        && (
          <ContentWrapper>
            <Content>
              {
                showHistory && (
                  <SearchHistorys selected={selectedHistory} historys={searchHistorys} />
                )
              }
              {
                showSearchRcommend && <SearchRecommends query={query} />
              }
            </Content>
          </ContentWrapper>
        )
      }
    </Wrapper>
  );
}
SearchBar.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  onShow: func,
  onHide: func,
  backIconRef: shape({
    current: element,
  }),
};
SearchBar.defaultProps = {
  onShow: null,
  onHide: null,
  backIconRef: { current: null },
};
export default memo(withRouter(SearchBar));
