import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";

import { Button, Input, SafeArea, Spacer } from "../../../components";
import { AuthContext } from "../../../services/authentication/authentication.context";

import { loginZodResolver } from "../helpers/zod-resolver.helper";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const Logo = styled.Image`
  height: 72px;
  width: 120px;
  border-radius: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary}99;
`;

const Content = styled(SafeArea)`
  flex: 1;
  padding: ${({ theme }) => theme.space[2]};
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.View`
  width: 100%;
  max-width: 600px;
  padding: ${({ theme }) => theme.space[2]};
  border: 1px ${({ theme }) => theme.colors.ui.primary};
  border-radius: ${({ theme }) => theme.space[2]};
`;

const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.space[2]};
`;

const BackgroundWrapper = styled.View`
  opacity: 0.7;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const Background = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Login = () => {
  const { login } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    resolver: loginZodResolver(),
  });

  const onSubmit = (data) => {
    console.log(data);
    login("token ");
  };

  return (
    <Container>
      <BackgroundWrapper>
        <Background
          source={require("../../../assets/images/bg.png")}
          resizeMode="cover"
        />
      </BackgroundWrapper>
      <Content>
        <Logo
          source={require("../../../assets/images/green-solutions-logo.png")}
          resizeMode="contain"
        />
        <Spacer size="xl" />
        <FormWrapper>
          <Form>
            <Input
              labelTrsKey="input.label.email"
              placeholderTrsKey="input.placeholder.email"
              control={control}
              name="email"
              autoComplete="email"
              keyboardType="email-address"
            />
            <Spacer />
            <Input
              labelTrsKey="input.label.password"
              placeholderTrsKey="input.placeholder.password"
              control={control}
              name="password"
              secureTextEntry
            />
            <Spacer size="xl" />
            <Button
              titleTrsKey="button.login"
              onPress={handleSubmit(onSubmit)}
            />
          </Form>
        </FormWrapper>
        <Spacer size="xxl" />
      </Content>
    </Container>
  );
};
