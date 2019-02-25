
import React, { useState, useEffect } from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, SubTitle, } from "./index"
import Head from "../container/settingPages/Head"
import { CustomizedInput } from "./index"
import { getRecommendScreenName } from "../dataMock"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import Text from "../BaseComponents/Text"

export default function ScreenName(props) {
  const [name, setName ] = useState(props.name);
  const [recommendNames, setRecommendNames] = useState([]);
  function handleChange(e) {
    setName(e.target.value);
  }
  useEffect(() => {
    setRecommendNames(getRecommendScreenName());
  }, []);
  function handleSave() {
    props.setName(name);
    props.history.goBack();
  }
  return (
    <SettingsContainer>
      <Head title="更改用户名"/>
      <CustomizedInput
        value={name} 
        label="用户名" 
        placeholder="选择你的用户名"
        onChange={handleChange} 
        WarningLabel={() => <Warning value={name}/>}
      />
      <SubTitle>建议</SubTitle>
      <div style={{padding: "14px 9px", backgroundColor: "white"}}>
        {
          recommendNames.map((name, i) =>
            <div key={i} onClick={() => setName(name)} style={{marginBottom: "9px"}} >
              <Text primary >{name}</Text>
            </div>
          )
        }
      </div>
      <PrimaryGap/>
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: "9px", backgroundColor: 'white'}}>
        <CustomizedButton 
          filled 
          onClick={handleSave} 
          disabled={
            !name || 
            name === props.name ||
            name.length <= 4 || 
            name.length >= 15
          }
        >保存</CustomizedButton>
      </div>
    </SettingsContainer>
  );
}
function Warning({value}) {
  return (
      <div>
      {
        (!value || value.length <= 4) && 
        <Text small warning >你的用户名长度必须大于4个字符</Text>
      }
      {
        value && value.length >= 15 && 
        <Text small warning >你的用户名长度必须少于15个字符</Text>
      }
    </div>
  )
}
