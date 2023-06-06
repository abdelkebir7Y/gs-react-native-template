import React, { useState } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styled, { useTheme } from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { ArrowIconDown, ArrowIconUp } from "./icons.component";

const Label = styled(Text)`
  color: ${({ theme, invalid }) =>
    invalid ? theme.colors.text.error : theme.colors.text.primary};
  text-align: left;
`;

const StyledDropDown = styled(DropDownPicker)`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};
  border: 1px
    ${({ theme, invalid }) =>
      invalid ? theme.colors.text.error : theme.colors.ui.tertiary};
  border-radius: 8px;
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.colors.text.error};
`;

export const Select = ({
  items,
  placeholderTrsKey,
  labelTrsKey,
  control,
  rules,
  name,
  ...otherProps
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState("");
  const {
    field: { onChange },
    fieldState: { error, invalid },
  } = useController({ control, name, rules });

  const [open, setOpen] = useState(false);

  return (
    <>
      <Label variant="label" invalid={invalid} trsKey={labelTrsKey} />
      <Spacer />
      <StyledDropDown
        ArrowUpIconComponent={ArrowIconDown}
        ArrowDownIconComponent={ArrowIconUp}
        placeholderStyle={styles.placeholder(theme.colors.text.disabled)}
        dropDownContainerStyle={styles.dropDownContainer(theme.colors)}
        invalid={invalid}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={t(placeholderTrsKey)}
        onChangeValue={onChange}
        textStyle={styles.textStyle(theme.colors.text.primary)}
        containerStyle={styles.containerStyle}
        hideSelectedItemIcon
        {...otherProps}
      />
      {invalid && <Error variant="hint">{error.message} </Error>}
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: (color) => ({
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    textAlign: "left",
    color,
  }),
  placeholder: (color) => ({
    color,
  }),
  dropDownContainer: (colors) => ({
    backgroundColor: colors.bg.primary,
    borderColor: colors.ui.tertiary,
  }),
  containerStyle: {
    zIndex: 111,
  },
});
