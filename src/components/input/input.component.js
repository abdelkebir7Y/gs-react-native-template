import React from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const Container = styled.View``;

const Label = styled(Text)`
  color: ${({ theme, invalid }) =>
    invalid ? theme.colors.text.error : theme.colors.text.primary};
  text-align: left;
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.colors.text.error};
`;

const TextInputWrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px
    ${({ theme, invalid }) =>
      invalid ? theme.colors.text.error : theme.colors.ui.tertiary};
  border-radius: 8px;
  width: 100%;
  height: 54px;
  z-index: -1;
`;

const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Input = ({
  control,
  name,
  labelTrsKey,
  placeholderTrsKey,
  rules,
  ...textInputProps
}) => {
  const {
    field: { onChange, value },
    fieldState: { error, invalid },
  } = useController({ control, name, rules });

  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Container>
      <Label variant="label" invalid={invalid} trsKey={labelTrsKey} />
      <Spacer />
      <TextInputWrapper invalid={invalid}>
        <TextInput
          value={value}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          placeholderTextColor={theme.colors.text.disabled}
          selectionColor={theme.colors.text.primary}
          cursorColor={theme.colors.text.primary}
          placeholder={t(placeholderTrsKey)}
          {...textInputProps}
        />
      </TextInputWrapper>
      {invalid && <Error variant="hint">{error.message} </Error>}
    </Container>
  );
};
