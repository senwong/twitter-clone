import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactRouterPropTypes from "react-router-prop-types";
import { connect } from "react-redux";
import PrimaryGap from "../BaseComponents/PrimaryGap";
import { getRecommendScreenName } from "../Api";
import Text from "../BaseComponents/Text";
import TextInput from "./TextInput";
import SubTitle from "./SubTitle";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import LayOut from "./LayOut";
import { setScreenName } from "../actionCreators/currentUser";
import SaveButton from "./SaveButton";
import { whiteBackground } from "../themes";

function Warning({ value }) {
  return (
    <div>
      {(!value || value.length <= 4) && (
        <Text small warning>
          你的用户名长度必须大于4个字符
        </Text>
      )}
      {value && value.length >= 15 && (
        <Text small warning>
          你的用户名长度必须少于15个字符
        </Text>
      )}
    </div>
  );
}
Warning.propTypes = {
  value: PropTypes.string.isRequired
};

const RecommendNamesWrapper = styled.div`
  padding: 14px 9px;
  ${whiteBackground}
`;
const StyledButton = styled.button`
  border: none;
  background: none;
  display: block;
  &:hover {
    text-decoration: underline solid rgb(27, 149, 224);
  }
`;

// setting name page
function ScreenName({ history, globalStateName, setGlobalStateName }) {
  const [name, setName] = useState(globalStateName);
  const [recommendNames, setRecommendNames] = useState();
  function handleChange(e) {
    setGlobalStateName(e.target.value);
  }
  useEffect(() => {
    const p = getRecommendScreenName();
    p.promise.then(res => setRecommendNames(res.data));
    return () => {
      p.cancel();
    };
  }, []);
  function handleSave() {
    setGlobalStateName(name);
    history.goBack();
  }
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改用户名" />}
      rightAside={(
<>
  <TextInput
            labelText="用户名"
            value={name}
            placeholder="选择你的用户名"
            onChange={handleChange}
            WarningLabel={() => <Warning value={name} />}
          />
  <SubTitle>建议</SubTitle>
  <RecommendNamesWrapper>
            {recommendNames &&
              recommendNames.map(recName => (
                <StyledButton
                  type="button"
                  key={recName}
                  onClick={() => setName(recName)}
                  style={{ marginBottom: "9px" }}
                >
                  <Text primary>{recName}</Text>
                </StyledButton>
              ))}
          </RecommendNamesWrapper>
  <PrimaryGap />
  <SaveButton
            onClick={handleSave}
            disabled={
              !name ||
              name === globalStateName ||
              name.length <= 4 ||
              name.length >= 15
            }
          />
</>
)}
    />
  );
}
ScreenName.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  globalStateName: PropTypes.string.isRequired,
  setGlobalStateName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  globalStateName: state.currentUser && state.currentUser.name
});
const mapDispathToProps = dispatch => ({
  setGlobalStateName: name => dispatch(setScreenName(name))
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(ScreenName);
