import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  show,
  hide,
  setPosition,
  setHideTimerId as setHideTimer,
  setUser
} from "../actionCreators/userInfoPopover";
import { userType } from "../propTypes";

const Container = styled.div`
  display: flex;
  width: fit-content;
`;
function MakeHoverUserInfo({
  children,
  user,
  hideTimerId,
  showPopover,
  hidePopover,
  setHideTimerId,
  setPopoverPosition,
  setPopoverUser
}) {
  const delay = 300;
  let showTimerId = null;
  function handleMouseEnter({ target }) {
    if (showTimerId) return;
    if (hideTimerId) {
      clearTimeout(hideTimerId);
      setHideTimer(null);
    }
    showTimerId = setTimeout(() => {
      showTimerId = null;
      const { left, top, height } = target.getBoundingClientRect();
      setPopoverPosition({
        left,
        top: top + height + 10,
        right: null,
        bottom: null
      });
      setPopoverUser(user);
      showPopover();
    }, delay);
  }
  function handleMouseLeave() {
    if (showTimerId) {
      clearTimeout(showTimerId);
    }
    const timerId = setTimeout(() => {
      hidePopover();
      setHideTimer(null);
    }, delay);
    setHideTimerId(timerId);
  }
  useEffect(() => () => hidePopover(), []);
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </Container>
  );
}
MakeHoverUserInfo.propTypes = {
  user: userType,
  children: PropTypes.node.isRequired,
  showPopover: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
  hideTimerId: PropTypes.number,
  setHideTimerId: PropTypes.func.isRequired,
  setPopoverPosition: PropTypes.func.isRequired,
  setPopoverUser: PropTypes.func.isRequired
};
MakeHoverUserInfo.defaultProps = {
  user: null,
  hideTimerId: null
};
const mapStateToProps = state => ({
  hideTimerId: state.userInfoPopover.hideTimerId
});
const mapDispatchToProps = dispatch => ({
  showPopover: () => dispatch(show()),
  hidePopover: () => dispatch(hide()),
  setHideTimerId: id => dispatch(setHideTimer(id)),
  setPopoverPosition: position => dispatch(setPosition(position)),
  setPopoverUser: user => dispatch(setUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeHoverUserInfo);
/*

<MakeHoverUserInfo user={user}>
  <UserName />
</MakeHoverUserInfo>

function UserName ({ hoverable }) {
  return (
    hoverable
    ? (
      <MakeHoverUserInfo user={user}>
        <UserNameContent />
      </MakeHoverUserInfo>
    )
    : <UserName />
  );
}
*/
