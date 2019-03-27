import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../BaseComponents/Text';
import { whiteBackgroud } from '../themes';

const Container = styled.div`
  padding: 0 10px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  ${whiteBackgroud}
`;
function Title({ children }) {
  return (
    <Container>
      <Text large bold>{children}</Text>
    </Container>
  );
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
