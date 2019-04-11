import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getSearchRecommend } from '../Api';
import UserBar from '../middleComponents/UserBar';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import Text from '../BaseComponents/Text';

const Container = styled.div`
  /* position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background-color: rgb(255, 255, 255);
  z-index: 2; */
`;
const TopicItem = styled.div`
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
`;
const UserLink = styled.div`
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
`;

export default function SearchRecommendPage({ query }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const p = getSearchRecommend(query);
    p.promise.then(
      res => setData(res.data),
      () => {},
    );
    return () => {
      p.cancel();
    };
  }, [query]);
  const { topics, users, userLinked } = data;
  return (
    <Container>
      {topics && topics.length > 0
        ? topics.map(t => (
          <TopicItem key={t.id}>
            <Text bold>{t.title}</Text>
            <br />
            <Text secondary>{t.desc}</Text>
            <br />
          </TopicItem>
        ))
        : (
          <TopicItem>
            搜索&quot;
            {query}
            &quot;
          </TopicItem>
        )
      }
      <PrimaryGap />
      {
        users && users.length > 0 && users.map(u => <UserBar key={u.id} user={u} />)
      }
      {
        userLinked && (
        <UserLink>
          前往@
          {query}
        </UserLink>
        )
      }
    </Container>
  );
}
SearchRecommendPage.propTypes = {
  query: PropTypes.string.isRequired,
};
// SearchRecommendPage.defaultProps = {
//   query: '',
// };
