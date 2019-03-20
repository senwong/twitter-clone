import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import { ArrowDown } from '../BaseComponents/SVGIcons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const ContentWrapper = styled.div`
  border-radius: 9999px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const NameWrapper = styled.div`
  margin-left: 10px;
`;
const StyledArrowDown = styled(ArrowDown)`
  margin: 0px 5px;
`;

function UserNameBar({ user }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container>
      <ContentWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Avatar src={user.avatarSrc} middle />
        <NameWrapper>
          <Text bold>
            {user.name}
          </Text>
        </NameWrapper>
        <StyledArrowDown small secondary={!isHover} primary={isHover} />
      </ContentWrapper>
    </Container>
  );
}
UserNameBar.propTypes = {
  user: PropTypes.shape({
    avatarSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser,
});

export default connect(
  mapStateToProps,
)(UserNameBar);
