import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TypeListContainer = styled.div`
  display: flex;
  transition: transform 0.2s;
  width: fit-content;
  @media (min-width: 400px){
    width: 100%;
  }
`;
const TypeItem = styled(NavLink)`
  flex: 1 1 0;
  color: rgb(101, 119, 134);
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  padding: 14px;
  word-break: keep-all;
  &.active {
    color: rgb(29, 161, 242);
    border-bottom-color: rgb(29, 161, 242);
  }
`;

function SearchTypeList({ linkContainer, linkRef, query }) {
  return (
    <TypeListContainer ref={linkContainer}>
      <TypeItem
        innerRef={linkRef}
        to={`/search?q=${encodeURI(query)}`}
        isActive={(_, location) => location.search.indexOf('type=') < 0}
      >
        热门
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=live`}
        isActive={(_, location) => location.search.indexOf('type=live') > -1}
      >
        最新
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=user`}
        isActive={(_, location) => location.search.indexOf('type=user') > -1}
      >
        用户
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=image`}
        isActive={(_, location) => location.search.indexOf('type=image') > -1}
      >
        照片
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=video`}
        isActive={(_, location) => location.search.indexOf('type=video') > -1}
      >
        视频
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=news`}
        isActive={(_, location) => location.search.indexOf('type=news') > -1}
      >
        新闻
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=periscope`}
        isActive={(_, location) => location.search.indexOf('type=periscope') > -1}
      >
        博客
      </TypeItem>
    </TypeListContainer>
  );
}
SearchTypeList.propTypes = {
  linkContainer: PropTypes.func.isRequired,
  linkRef: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default SearchTypeList;
