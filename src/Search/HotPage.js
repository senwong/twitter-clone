import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { searchHot } from '../Api';
import UserCard from '../middleComponents/UserCard';
import TweetCard from '../container/TweetCard';
import PrimaryGap from '../BaseComponents/PrimaryGap';

const Container = styled.div`
  border-top: 1px solid rgb(230, 236, 240);
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const Title = styled.div`
  padding: 9px;
  font-weight: 700;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const Check = styled.div`
  padding: 14px 9px;
  color: rgb(29, 161, 242);
  font-weight: 700;
`;

function HotPage({ query }) {
  const [users, setUsers] = useState();
  const [tweets, setTweets] = useState();

  useEffect(() => {
    const p = searchHot(query);
    p.promise.then(
      (res) => {
        setUsers(res.data.newUsers);
        setTweets(res.data.tweets);
      },
      () => {},
    );
    return () => {
      p.cancel();
    };
  }, [query]);
  return (
    <div>
      {
        users && users.length > 0
          ? (
            <div>
              <Container>
                <Title>用户</Title>
                {users.map(u => <UserCard key={u.id} user={u} />)}
                <Check>查看全部</Check>
              </Container>
              <PrimaryGap />
            </div>
          )
          : <div />
      }
      <div>
        {tweets && tweets.map(t => <TweetCard key={t.id} tweet={t} />)}
      </div>
    </div>
  );
}
HotPage.propTypes = {
  query: PropTypes.string.isRequired,
};
export default HotPage;
