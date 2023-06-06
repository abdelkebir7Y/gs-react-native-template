import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";

const Container = styled.TouchableHighlight`
  background-color: ${({ bgColor, disabled, theme }) =>
    disabled ? theme.colors.ui.quinary : bgColor};
  border-radius: ${({ theme }) => theme.sizes[0]};
  height: 48px;
  width: ${({ width }) => width};
  justify-content: center;
`;

const Content = styled(Text)`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.button};
  text-align: center;
`;

export const Button = ({
  bgColor = "#61B55D",
  color = "#F4F4F4",
  width = "100%",
  titleTrsKey,
  loading,
  disabled = false,
  onPress = () => {},
}) => {
  return (
    <Container
      bgColor={bgColor}
      width={width}
      underlayColor={`${bgColor}ee`}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size="large" color={color} />
      ) : (
        <Content color={color} trsKey={titleTrsKey} />
      )}
    </Container>
  );
};
