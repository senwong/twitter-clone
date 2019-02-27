import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ArrowRight, CheckedIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';
import Head from '../container/settingPages/Head';

const Container = styled.div`
  background-color: rgb(230, 236, 240);
  height: 100%;
`;
export default function Settings({ user, match }) {
  return (
    <Container>
      <Head title="设置" />
      <SubTitle>
        @
        {user.name}
      </SubTitle>
      {
        [
          { url: `${match.url}/account`, title: '账号' },
          { url: `${match.url}/safety`, title: '隐私和安全' },
          { url: `${match.url}/notifications`, title: '通知' },
          { url: `${match.url}/content_preferences`, title: '内容偏好' },
        ].map(({ title, url }) => <LinkItem key={title} to={url} title={title} />)
      }
      <SubTitle>通用</SubTitle>
      {
        [
          { url: `${match.url}/data`, title: '数据使用' },
          { url: `${match.url}/accessibility`, title: '辅助功能' },
          { url: `${match.url}/about`, title: '关于应用' },
        ].map(({ url, title }) => <LinkItem key={title} to={url} title={title} />)
      }
    </Container>
  );
}
Settings.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export function SettingsContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
SettingsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-Items: center;
  padding: 14px 9px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  text-decoration: none;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
export function LinkItem({ to, title, subTitle }) {
  return (
    <Item to={to}>
      <div>
        <Text>{title}</Text>
        <br />
        {subTitle && <Text small secondary>{subTitle}</Text>}
      </div>
      <ArrowRight xsmall secondary />
    </Item>
  );
}
LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
LinkItem.defaultProps = {
  subTitle: '',
};

export function SubTitle({ children }) {
  return (
    <div style={{ padding: '14px 9px' }}>
      <Text large secondary>{children}</Text>
    </div>
  );
}
SubTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(230, 236, 240);
  background-color: rgb(255, 255, 255);
  padding: 14px 9px;
`;
const Left = styled.div`
  flex: 1 1 0;
`;
export function CheckBox({ title, subTitle }) {
  return (
    <CheckBoxContainer>
      <Left>
        <Text>{title}</Text>
        <div style={{ paddingTop: '9px' }}>
          <Text secondary small>{subTitle}</Text>
        </div>
      </Left>
      <CheckBoxInput />
    </CheckBoxContainer>
  );
}
CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
CheckBox.defaultProps = {
  subTitle: '',
};

const CheckBoxInputContainer = styled.div`
  position: relative;
  padding: 9px;
`;
const FakeCheckBoxInput = styled.div`
  height: 18px;
  width: 18px;
  border: 2px solid rgb(101, 119, 134);
  margin: -9px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.checked && css`
    border-color: rgb(29, 161, 242);
    background-color: rgb(29, 161, 242);
  `}
`;
const CheckBoxInput = styled.input`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`;
export function CheckboxInput() {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }
  return (
    <CheckBoxInputContainer>
      <FakeCheckBoxInput checked={checked}>
        {checked && <CheckedIcon xsmall white />}
      </FakeCheckBoxInput>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleChange} />
    </CheckBoxInputContainer>
  );
}

const CustomizedInputContainer = styled.div`
  padding: 9px;
  background-color: rgb(255, 255, 255);
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid rgb(170, 184, 194);;
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.3125;
  color: rgb(20, 23, 26);
  display: block;
  width: 100%;
  padding: 9px 0;
  :read-only{
    color: rgb(101, 119, 134);
  }
  :not(:read-only):focus {
    border-bottom: 2px solid rgb(29, 161, 242);
    margin-bottom: 0;
    outline: none;
  }
`;
export function CustomizedInput({ labelText, WarningLabel, ...otherProps }) {
  return (
    <CustomizedInputContainer>
      <label htmlFor="customized-input">
        <Text secondary>{labelText}</Text>
        <StyledInput type="text" name="customized-input" id="customized-input" {...otherProps} />
      </label>
      {WarningLabel && <WarningLabel />}
    </CustomizedInputContainer>
  );
}
CustomizedInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  WarningLabel: PropTypes.func,
};
CustomizedInput.defaultProps = {
  WarningLabel: () => <></>,
};
