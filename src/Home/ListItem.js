import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const ListItemLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
`;
const ListItemMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;
const ListItemRight = styled.div`
  display: flex;
  align-items: center;
`;
function ListItem({ left, middle, right }) {
  return (
    <ListItemContainer>
      {
        left && <ListItemLeft>{left}</ListItemLeft>
      }
      {
        middle && <ListItemMiddle>{middle}</ListItemMiddle>
      }
      {
        right && <ListItemRight>{right}</ListItemRight>
      }
    </ListItemContainer>
  );
}
ListItem.propTypes = {
  left: node,
  middle: node,
  right: node,
};
ListItem.defaultProps = {
  left: null,
  middle: null,
  right: null,
};
export default ListItem;
