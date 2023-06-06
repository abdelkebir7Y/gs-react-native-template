import React, { useContext } from "react";
import { Pressable, StatusBar, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

import { TOP_BAR_HEIGHT } from "../../_constant";
import { ThemeContext } from "../../infrastructures/theme";
import { AuthContext } from "../../services/authentication/authentication.context";

import { Spacer } from "../spacer/spacer.component";
import { Switch } from "../switch/switch.component";
import { Text } from "../typography/text.component";
import { Languages } from "./languages.component";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  flex: 1;
  overflow: hidden;
`;

const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  padding-top: ${StatusBar.currentHeight ?? 0}px;
  height: ${TOP_BAR_HEIGHT + StatusBar.currentHeight}px;
  width: 100%;
  overflow: hidden;
`;

const UserWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const User = styled(Text)`
  color: ${({ theme }) => theme.colors.text.inverse};
`;

const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Divider = styled.View`
  width: 60%;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ theme }) => theme.colors.ui.disabled};
  align-self: center;
`;

const ItemContainer = styled.TouchableHighlight`
  margin: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
  border-radius: 4px;
`;

const ItemWrapper = styled.View`
  padding: ${({ theme }) => theme.space[2]};
  flex-direction: row;
  align-items: center;
`;

const ItemValues = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;

const FooterText = styled(Text)`
  color: ${({ theme, colorVariant = "disabled" }) =>
    theme.colors.text[colorVariant]};
  font-size: 12px;
`;

const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-horizontal: ${({ theme }) => theme.space[1]};
`;

const DRAWER_ITEMS_FIRST_SECTION = [
  {
    name: "home",
    iconName: "home",
    routeName: "home/home",
  },
];

const DRAWER_ITEMS_FOURTH_SECTION = [
  {
    name: "logout",
    iconName: "log-out",
  },
];

export const DrawerContent = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const user = { lastName: "solutions", firstName: "Green" };
  const theme = useTheme();

  const onItemPressed = (route) => () => {
    navigation.navigate(route);
  };
  const goToWebSite = () => {
    console.log("go to website ");
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <Ionicons name="person-circle-sharp" size={46} color="#F4F4F4" />
          <Spacer position="right" />
          <View>
            <User variant="hint">
              {user?.firstName} {user?.lastName}
            </User>
          </View>
        </UserWrapper>
      </Header>
      <Content>
        {DRAWER_ITEMS_FIRST_SECTION.map(({ name, iconName, routeName }) => (
          <ItemContainer
            key={name}
            onPress={onItemPressed(routeName)}
            underlayColor={`${theme.colors.brand.primary}33`}
          >
            <ItemWrapper>
              <Ionicons
                color={theme.colors.brand.primary}
                size={24}
                name={iconName}
              />
              <Spacer position="right" size="medium" />
              <Text trsKey={`navigation.${name}`} />
            </ItemWrapper>
          </ItemContainer>
        ))}
        <Spacer />
        <Divider />
        <ItemContainer disabled>
          <ItemWrapper>
            <Ionicons
              name="language"
              size={24}
              color={theme.colors.brand.primary}
            />
            <Spacer position="right" size="medium" />
            <Text trsKey="settings.language" />
            <ItemValues>
              <Languages />
            </ItemValues>
          </ItemWrapper>
        </ItemContainer>
        <ItemContainer disabled>
          <ItemWrapper>
            <Ionicons
              name="contrast-outline"
              size={24}
              color={theme.colors.brand.primary}
            />
            <Spacer position="right" size="medium" />
            <Text trsKey="settings.dark_mode" />
            <ItemValues>
              <Switch isEnabled={isDarkMode} toggleSwitch={toggleDarkMode} />
            </ItemValues>
          </ItemWrapper>
        </ItemContainer>
        <Spacer />
        <Divider />
        {DRAWER_ITEMS_FOURTH_SECTION.map(({ name, iconName, routeName }) => (
          <ItemContainer
            key={name}
            onPress={logout}
            underlayColor={`${theme.colors.brand.primary}33`}
          >
            <ItemWrapper>
              <Feather
                size={24}
                name={iconName}
                color={theme.colors.brand.primary}
              />
              <Spacer position="right" size="medium" />
              <Text trsKey={`settings.${name}`} />
            </ItemWrapper>
          </ItemContainer>
        ))}
        <Footer>
          <LogoContainer>
            <FooterText>{"© Copyright 2023  "}</FooterText>
            <Pressable onPress={goToWebSite}>
              <FooterText colorVariant="success">Greensolutions</FooterText>
            </Pressable>
          </LogoContainer>
        </Footer>
      </Content>
    </Container>
  );
};
