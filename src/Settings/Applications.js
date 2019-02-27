import React from 'react';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import { SettingsContainer, SubTitle } from './index';
import Head from '../container/settingPages/Head';

export default function Applications() {
  return (
    <SettingsContainer>
      <Head title="应用和会话" />
      <PrimaryGap />
      <SubTitle>会话</SubTitle>
    </SettingsContainer>
  );
}
