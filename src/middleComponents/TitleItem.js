import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../BaseComponents/Text';

const Container = styled.div`
  padding: 9px;
  border-bottom: ${props => props.isRear && '1px solid rgb(230, 236, 240)'};
`;

export default function TitleItem({
  title, subtitle, rear, primary,
}) {
  return (
    <Container isRear={rear}>
      <Text large bold primary={primary}>{title}</Text>
      {subtitle && <Text small secondary>{subtitle}</Text>}
    </Container>
  );
}
TitleItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rear: PropTypes.bool,
  primary: PropTypes.bool,
};
TitleItem.defaultProps = {
  subtitle: '',
  rear: false,
  primary: false,
};
