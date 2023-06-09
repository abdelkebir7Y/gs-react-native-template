import React from "react";
import { ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";

import { Text } from "../typography/text.component";

const Container = styled.TouchableHighlight`
  background-color: ${({ bgColor }) => bgColor};
  border-width: ${({ outlined }) => (outlined ? "1px" : "0px")};
  border-color: ${({ theme }) => theme.colors.ui.primary};
  border-radius: ${({ theme }) => theme.sizes[0]};
  height: 48px;
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[3]};
  justify-content: center;
`;

const Content = styled(Text)`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ color }) => color};
  text-align: center;
`;

export const Button = ({
  bgColor,
  color,
  width = "auto",
  titleTrsKey,
  loading,
  disabled = false,
  outlined = false,
  onPress = () => {},
}) => {
  const theme = useTheme();

  const textColor =
    color ?? outlined
      ? bgColor ?? theme.colors.ui.primary
      : theme.colors.text.inverse;

  const backgroundColor = disabled
    ? theme.colors.ui.disabled
    : bgColor ?? (outlined ? "#0000" : theme.colors.ui.primary);

  const underlayColor = bgColor ?? theme.colors.ui.primary;

  const borderColor = disabled
    ? theme.colors.ui.disabled
    : bgColor ?? theme.colors.ui.primary;

  return (
    <Container
      bgColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      underlayColor={`${underlayColor}77`}
      onPress={onPress}
      disabled={disabled || loading}
      outlined={outlined}
    >
      {loading ? (
        <ActivityIndicator size="large" color={textColor} />
      ) : (
        <Content color={textColor} trsKey={titleTrsKey} variant="hint" />
      )}
    </Container>
  );
};
