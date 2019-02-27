
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import { SettingsContainer, SubTitle, CustomizedInput } from './index';
import Head from '../container/settingPages/Head';
import { getRecommendScreenName } from '../dataMock';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Text from '../BaseComponents/Text';

function Warning({ value }) {
  return (
    <div>
      {
        (!value || value.length <= 4)
        && <Text small warning>你的用户名长度必须大于4个字符</Text>
      }
      {
        value && value.length >= 15
        && <Text small warning>你的用户名长度必须少于15个字符</Text>
      }
    </div>
  );
}
Warning.propTypes = {
  value: PropTypes.string.isRequired,
};

// setting name page
export default function ScreenName({ history, globalStateName, setGlobalStateName }) {
  const [name, setName] = useState(globalStateName);
  const [recommendNames, setRecommendNames] = useState();
  function handleChange(e) {
    setGlobalStateName(e.target.value);
  }
  useEffect(() => {
    setRecommendNames(getRecommendScreenName());
  }, []);
  function handleSave() {
    setGlobalStateName(name);
    history.goBack();
  }
  return (
    <SettingsContainer>
      <Head title="更改用户名" />
      <CustomizedInput
        labelText="用户名"
        value={name}
        placeholder="选择你的用户名"
        onChange={handleChange}
        WarningLabel={() => <Warning value={name} />}
      />
      <SubTitle>建议</SubTitle>
      <div style={{ padding: '14px 9px', backgroundColor: 'white' }}>
        {
          recommendNames && recommendNames.map(recName => (
            <button type="button" key={recName} onClick={() => setName(recName)} style={{ marginBottom: '9px' }}>
              <Text primary>{recName}</Text>
            </button>
          ))
        }
      </div>
      <PrimaryGap />
      <div style={{
        display: 'flex', justifyContent: 'flex-end', padding: '9px', backgroundColor: 'white',
      }}
      >
        <CustomizedButton
          filled
          onClick={handleSave}
          disabled={
            !name
            || name === globalStateName
            || name.length <= 4
            || name.length >= 15
          }
        >
保存
        </CustomizedButton>
      </div>
    </SettingsContainer>
  );
}
ScreenName.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  globalStateName: PropTypes.string.isRequired,
  setGlobalStateName: PropTypes.func.isRequired,
};
