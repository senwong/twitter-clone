import React from 'react';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import { SettingsContainer } from './index';
import Head from '../container/settingPages/Head';

export default function Password() {
  return (
    <SettingsContainer>
      <Head title="更改密砝" />
      <PrimaryGap />
    </SettingsContainer>
  );
}
