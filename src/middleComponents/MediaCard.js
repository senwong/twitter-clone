import React, { useState } from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import { grayBorderBottom, grayHover, whiteBackgroud } from '../themes';

const MediaCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 9px;
  background-color: ${props => props.isTouching && 'rgba(230, 236, 240, 0.7)'};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition-duration: 0.2s;
  transition-property: background-color;
  ${whiteBackgroud}
  ${grayHover}
  ${grayBorderBottom}
`;
const MediaCardLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  flex: 1 1 0;
  align-self: flex-start;
`;
const MediaCardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 7 0;
  margin: 0 5px;
  align-self: center;
`;
const MediaCardHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MediaCardHeadLeft = styled.div`
  flex: 1 1 0;
`;
const MediaCardContent = styled.div`
  padding-top: 5px;
`;
/**
* -----—-----------------------------------------------------------------+
*|          | headLeft                                         headRight |
*|          |------------------------------------------------------------|
*|   left   |                                                            |
*|          |                        content                             |
*|          |                                                            |
* -------+---------------------------------------------------------------+
*/

export default function MediaCard({
  left, headLeft, headRight, content,
}) {
  const [isTouching, setIsTouching] = useState(false);

  function handleTouchStart() {
    setIsTouching(true);
  }
  function handleTouchMove() {
    setIsTouching(false);
  }
  function handleEnd() {
    setIsTouching(false);
  }
  return (
    <MediaCardContainer
      isTouching={isTouching}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <MediaCardLeft>
        {left}
      </MediaCardLeft>
      <MediaCardRight>
        <MediaCardHead>
          <MediaCardHeadLeft>{headLeft}</MediaCardHeadLeft>
          <div>{headRight}</div>
        </MediaCardHead>
        {
          content && <MediaCardContent>{content}</MediaCardContent>
        }
      </MediaCardRight>
    </MediaCardContainer>
  );
}
MediaCard.propTypes = {
  left: node.isRequired,
  headLeft: node.isRequired,
  headRight: node,
  content: node,
};
MediaCard.defaultProps = {
  headRight: <></>,
  content: <></>,
};
