import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { useFonts as useExFonts } from "expo-font";

export const useFonts = () => {
  const [fontsLoaded] = useExFonts({
    Montserrat_400Regular,
  });

  return fontsLoaded;
};
