import React from "react"
import styled from 'styled-components'

const StyledText = styled.span`
  line-height: 1.3125;
  font-weight: ${props => props.bold ? '700' : '400'};
  color: ${props => 
    props.secondary ? 'rgb(101, 119, 134)'
    : props.primary ? 'rgb(27, 149, 224)'
    : props.warning ? 'rgb(224, 36, 94)'
    : 'rgb(20, 23, 26)'
  };
  font-size: ${props => {
    if (props.small) return '12px';
    if (props.large) return '18px';
    if (props.xlarge) return '21px';
    return '14px';
  }};
`;
export default function Text(props) {
  return <StyledText {...props}>{props.children}</StyledText>;
}
/*

  color: ${props => 
    props.secondary ? 'rgb(101, 119, 134)'
    : props.primary ? 'rgb(27, 149, 224)'
    : props.warning ? 'rgb(224, 36, 94)'
    : 'rgb(20, 23, 26)'
  };
*/