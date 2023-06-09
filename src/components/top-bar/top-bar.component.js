import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

import { TOP_BAR_HEIGHT } from "../../_constant";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  z-index: 111;
`;
const ContentWrapper = styled.SafeAreaView``;

const Content = styled.View`
  height: ${TOP_BAR_HEIGHT}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${({ theme }) => theme.space[1]};
`;

const Section = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ align }) =>
    align === "center" ? "center" : "flex-start"};
`;

const Logo = styled.Image`
  height: 40px;
  width: 120px;
`;

export const TopBar = ({ navigation }) => {
  const theme = useTheme();

  const toggleDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Section>
            <Feather
              name="menu"
              size={38}
              color={theme.colors.text.inverse}
              onPress={toggleDrawer}
            />
          </Section>
          <Section align="center">
            <Logo
              source={require("../../assets/images/green-solutions-logo.png")}
              resizeMode="contain"
            />
          </Section>
          <Section />
        </Content>
      </ContentWrapper>
    </Container>
  );
};
