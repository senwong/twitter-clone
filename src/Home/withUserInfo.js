import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { func } from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import { whiteBackground } from "../themes";
import { hide } from "../actionCreators/profilePage";
import { userType } from "../propTypes";

const WrapperButton = styled.button`
  ${whiteBackground}
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
  text-decoration: none;
  :focus {
    outline: none;
  }
  padding: 9px 18px 0;
`;

function withUserInfo(Component) {
  function Wrapper({ user, history, hideProfile }) {
    function handleClick() {
      hideProfile();
      history.push({
        pathname: `/${user.name}`
      });
    }
    return (
      <WrapperButton onClick={handleClick}>
        <Component user={user} />
      </WrapperButton>
    );
  }
  Wrapper.propTypes = {
    user: userType.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    hideProfile: func.isRequired
  };
  return Wrapper;
}

const mapStateToProps = state => ({
  user: state.currentUser
});
const mapDispatchToProps = dispatch => ({
  hideProfile: () => dispatch(hide())
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withUserInfo
);
