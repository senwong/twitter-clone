import React from "react"
import Text from "../BaseComponents/Text"
import styled from 'styled-components'

const Container = styled.div`
  padding: 9px;
  border-bottom:	${props => props.isRear && '1px solid rgb(230, 236, 240)'};
`;

export default function TitleItem({title, subtitle, rear, color, props}) {
  return (
    <Container isRear={rear} {...props}>
      <Text large bold {...color}>{title}</Text>
      {subtitle && <Text small secondary >{subtitle}</Text>}
    </Container>
  )
}