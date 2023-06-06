import React from "react";
import { useTranslation } from "react-i18next";
import { I18nManager } from "react-native";
import * as Updates from "expo-updates";
import styled from "styled-components/native";

import { storeLanguage } from "../../utils/async-storage.util";
const Container = styled.View`
  flex-direction: row;
`;

const Item = styled.Pressable`
  margin: 0px ${({ theme }) => theme.space[1]};
`;

const Icon = styled.Image`
  height: ${({ theme }) => theme.sizes[2]};
  width: ${({ theme }) => theme.sizes[2]};
`;

const LANGUAGES = [
  {
    icon: require("../../assets/images/fr.png"),
    lng: "fr",
  },
  {
    icon: require("../../assets/images/ar.png"),
    lng: "ar",
  },
];

export const Languages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => async () => {
    if (i18n.resolvedLanguage === lng) {
      return;
    }
    I18nManager.forceRTL(lng === "ar");
    await storeLanguage(lng);
    Updates.reloadAsync();
  };

  return (
    <Container>
      {LANGUAGES.map(({ icon, lng }) => (
        <Item key={lng} onPress={changeLanguage(lng)}>
          <Icon source={icon} resizeMode="contain" />
        </Item>
      ))}
    </Container>
  );
};
