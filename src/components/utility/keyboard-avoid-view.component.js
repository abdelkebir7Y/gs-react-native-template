import React from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
} from "react-native";
import styled from "styled-components/native";

const Container = styled(RNKeyboardAvoidingView)`
  flex: 1;
`;

export const KeyboardAvoidingView = ({ style, children }) => {
  return (
    <Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style}
    >
      {children}
    </Container>
  );
};
