import React from "react";
import { Platform, Switch as RNSwitch } from "react-native";
import { useTheme } from "styled-components/native";

import { RtlView } from "../utility/rtl-view.component";

export const Switch = ({ isEnabled, toggleSwitch }) => {
  const theme = useTheme();
  const thumbColor =
    Platform.OS === "ios"
      ? "white"
      : isEnabled
      ? theme.colors.ui.primary
      : theme.colors.ui.tertiary;

  return (
    <RtlView>
      <RNSwitch
        trackColor={{
          false: theme.colors.ui.tertiary + "cc",
          true: theme.colors.ui.primary + "cc",
        }}
        thumbColor={thumbColor}
        ios_backgroundColor={theme.colors.ui.tertiary + "cc"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </RtlView>
  );
};
