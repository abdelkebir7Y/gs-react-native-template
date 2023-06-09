import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-reanimated";

import { ALert, StatusBar } from "./src/components";
import { RootNavigator } from "./src/infrastructures/navigation/root.navigator";
import { ThemeContextProvider } from "./src/infrastructures/theme";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";
import i18n from "./src/translations";
import { getLanguage } from "./src/utils/storage.util";
import { useFonts } from "./src/utils/use-fonts.util";

export default function App() {
  const isFontsLoaded = useFonts();

  getLanguage().then((language) => {
    if (language) {
      i18n.changeLanguage(language);
    }
  });

  if (!isFontsLoaded) {
    return;
  }

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar />
          <ALert />
        </NavigationContainer>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
