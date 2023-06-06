import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  font-family : ${theme.fonts.body};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.button};
`;

const error = (theme) => `
  font-size: ${theme.fontSizes.button};
  color: ${theme.colors.text.error};
`;

const success = (theme) => `
  font-size: ${theme.fontSizes.button};
  color: ${theme.colors.text.success};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
  font-size : ${theme.fontSizes.body};
  font-family : ${theme.fonts.heading};
  font-weight : ${theme.fontWeights.bold};
`;

const h5 = (theme) => `
  font-size :  ${theme.fontSizes.h5};
  font-weight : ${theme.fontWeights.bold};
`;

const h4 = (theme) => `
  font-size :  ${theme.fontSizes.h4};
  font-weight : ${theme.fontWeights.bold};
`;
const variants = {
  body,
  label,
  caption,
  error,
  success,
  hint,
  title,
  h5,
  h4,
};

export const StyledText = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

export const Text = ({ children, variant, trsKey, defaultValue, style }) => {
  const { t } = useTranslation();
  const content = trsKey ? t(trsKey, defaultValue) : children;

  return (
    <StyledText variant={variant} style={style}>
      {content}
    </StyledText>
  );
};

Text.defaultProps = {
  variant: "body",
};
