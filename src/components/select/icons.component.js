import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export const ArrowIconDown = () => {
  const theme = useTheme();
  return (
    <Ionicons name="chevron-up" size={24} color={theme.colors.text.primary} />
  );
};

export const ArrowIconUp = () => {
  const theme = useTheme();
  return (
    <Ionicons name="chevron-down" size={24} color={theme.colors.text.primary} />
  );
};
