import React, { useEffect, useRef, useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import styled from 'styled-components';
import { RelateIcon, BackIcon } from '../BaseComponents/SVGIcons';
import Layout from '../layout/Layout';
import SearchTypesHead from './SearchTypesHead';
import SearchResultContent from './SearchResultContent';
import SearchBar from './SearchBar';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import StretchableHeader from '../middleComponents/StretchableHeader';

const BackIconWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  transition-property: backgournd-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export default function Search({ history }) {
  const [searchQuery, setSearchQuery] = useState('');
  const backIconRef = useRef();
  // component mounted, component will unmount
  useEffect(() => {
    const { location: { search } } = history;
    setSearchQuery(queryString.parse(search).q);
  }, []);

  const [stretchable, setStretchable] = useState(true);
  return (
    <Layout
      narrowHead={(
        <StretchableHeader stretchable={stretchable}>
          <HeadBarLayOut
            left={(
              <BackIconWrapper onClick={() => history.goBack()} ref={backIconRef}>
                <BackIcon small primary />
              </BackIconWrapper>
            )}
            middle={(
              <SearchBar
                onShow={() => setStretchable(false)}
                onHide={() => setStretchable(true)}
                backIconRef={backIconRef}
              />
            )}
            right={<RelateIcon small primary />}
          />
          <SearchTypesHead query={searchQuery} />
        </StretchableHeader>
      )}
      main={(
        <div style={{ width: '100%', height: '100%' }}>
          <SearchResultContent query={searchQuery} />
        </div>
      )}
    />
  );
}
Search.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
