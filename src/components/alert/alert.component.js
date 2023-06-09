import React from "react";
import DropdownAlert from "react-native-dropdownalert";
import styled, { useTheme } from "styled-components/native";

import { alertHolder } from "../../utils/use-alert.util";

import { Text } from "../typography/text.component";

const DropdownAlertWrapper = styled(DropdownAlert)`
  z-index: 111111;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.text.inverse};
`;

const Message = styled(Text)`
  color: ${({ theme }) => theme.colors.text.inverse};
`;

export const ALert = () => {
  const theme = useTheme();

  return (
    <DropdownAlertWrapper
      ref={(ref) => alertHolder.setAlertRef(ref)}
      successColor={theme.colors.ui.success}
      infoColor={theme.colors.ui.info}
      warnColor={theme.colors.ui.warning}
      errorColor={theme.colors.ui.error}
      renderTitle={(_, { title }) => <Title variant="h5">{title}</Title>}
      renderMessage={(_, { message }) => <Message>{message}</Message>}
    />
  );
};
