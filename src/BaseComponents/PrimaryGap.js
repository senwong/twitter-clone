import React from 'react';
import styled from 'styled-components';
import { lightBlueBackground } from '../themes';

const Div = styled.div`
  height: 9px;
  ${lightBlueBackground}
`;
export default function CustomHr() {
  return <Div />;
}
