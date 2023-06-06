import React from "react";
import styled from "styled-components/native";

import { Text } from "../../../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Home = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Text trsKey="welcome" />
    </Container>
  );
};
