import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';
import { BackIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';
import { UserCard } from '../middleComponents/Cards';
import { getRelatedUser } from '../dataMock';

const Header = styled.div`
  padding: 14px 9px;
  display: flex;
  align-Items: center;
  border-bottom: 1px solid rgb(101, 119, 134);
`;
export default function Related({ history }) {
  const [users, setUsers] = useState();
  useEffect(() => {
    setUsers(getRelatedUser());
  });
  return (
    <div>
      <Header>
        <BackIcon middle primary style={{ marginRight: '36.5px' }} onClick={() => history.goBack()} />
        <Text large bold>推荐关注</Text>
      </Header>
      {
        users && users.length > 0
          ? users.map(u => <UserCard key={u.id} user={u} />)
          : <h1>没有推荐的用户</h1>
      }
    </div>
  );
}
Related.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
