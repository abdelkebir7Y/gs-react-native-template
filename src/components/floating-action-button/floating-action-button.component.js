import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";

const Container = styled.View`
  height: 8%;
  max-height: 64px;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4%;
  bottom: 2%;
`;

const PrimaryButton = styled.TouchableHighlight`
  height: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ui.primary}bb;
  border: 1px ${({ theme }) => theme.colors.ui.primary};
  border-radius: 50px;
  padding: 4px;
`;

const ActionsContainer = styled.View`
  width: 85%;
  position: absolute;
  bottom: 115%;
`;

const SecondaryButton = styled.TouchableHighlight`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ui.tertiary}bb;
  border: 1px ${({ theme }) => theme.colors.ui.tertiary};
  border-radius: 50px;
  margin: 2px 0px;
`;

export const FAB = ({ actions = [], onPress = () => {}, Icon }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <PrimaryButton
        onPress={actions?.length ? toggle : onPress}
        underlayColor={theme.colors.ui.primary + "77"}
      >
        {Icon || (
          <MaterialCommunityIcons
            size={32}
            name={open ? "close" : "plus"}
            color={theme.colors.text.inverse}
          />
        )}
      </PrimaryButton>
      {open && (
        <ActionsContainer>
          {actions.map(
            ({ Icon: NestedIcon, onPress: onPressHandler }, index) => (
              <SecondaryButton
                key={index}
                onPress={onPressHandler}
                underlayColor={theme.colors.ui.secondary + "77"}
              >
                {NestedIcon}
              </SecondaryButton>
            )
          )}
        </ActionsContainer>
      )}
    </Container>
  );
};
