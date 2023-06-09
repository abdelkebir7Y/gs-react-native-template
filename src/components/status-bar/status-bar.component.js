import React from "react";
import { StatusBar as EXStatusBar } from "react-native";
import { useTheme } from "styled-components/native";

export const StatusBar = () => {
  const theme = useTheme();
  return (
    <EXStatusBar style="light" backgroundColor={theme.colors.brand.secondary} />
  );
};
