import React from 'react';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import { SettingsContainer } from './index';
import Head from '../container/settingPages/Head';

export default function Language() {
  return (
    <SettingsContainer>
      <Head title="更改语言" />
      <PrimaryGap />
    </SettingsContainer>
  );
}
