import React from "react";
import { Switch as RNSwitch } from "react-native";
import { useTheme } from "styled-components/native";

import { RtlView } from "../utility/rtl-view.component";

export const Switch = ({ isEnabled, toggleSwitch }) => {
  const theme = useTheme();

  return (
    <RtlView>
      <RNSwitch
        trackColor={{
          false: theme.colors.ui.tertiary + "cc",
          true: theme.colors.ui.primary + "cc",
        }}
        thumbColor={
          isEnabled ? theme.colors.ui.primary : theme.colors.ui.tertiary
        }
        ios_backgroundColor={theme.colors.ui.tertiary + "cc"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </RtlView>
  );
};
