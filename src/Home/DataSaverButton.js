import React, { useState } from 'react';
import ToggleButton from '../BaseComponents/ToggleButton';

export default function DataSaverButton() {
  const [isDataSaver, setDataSaver] = useState(false);
  return <ToggleButton checked={isDataSaver} onClick={() => setDataSaver(!isDataSaver)} />;
}
