import { I18nManager } from "react-native";
import styled from "styled-components/native";

export const RtlView = styled.View`
  transform: scaleX(${I18nManager.isRTL ? -1 : 1});
`;
