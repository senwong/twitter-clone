import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, } from "./index"
import Head from "../container/settingPages/Head"

export default function YourData() {
  return (
    <SettingsContainer>
      <Head title="你的数杮" />
      <PrimaryGap/>
    </SettingsContainer>
  )
}