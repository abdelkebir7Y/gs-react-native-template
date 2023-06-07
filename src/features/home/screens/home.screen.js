import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";

import {
  Button,
  ImageInput,
  Input,
  Select,
  Spacer,
  Switch,
  Text,
} from "../../../components";
import { TextArea } from "../../../components";

const Container = styled.ScrollView`
  flex: 1;
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Component = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.space[1]};
`;

const ComponentVariant = styled(Text)`
  width: ${({ theme }) => theme.sizes[4]};
`;

export const Home = ({ navigation: { navigate } }) => {
  const [enableSwitch, setEnableSwitch] = useState(true);
  const { control } = useForm({});

  return (
    <Container>
      <Text variant="h4">Components :</Text>
      <Text variant="h5">Button :</Text>
      <Spacer size="medium" />
      <Component>
        <ComponentVariant>Normal : </ComponentVariant>
        <Button titleTrsKey={"button.login"} />
      </Component>
      <Component>
        <ComponentVariant>width = 200px : </ComponentVariant>
        <Button titleTrsKey={"button.login"} width="200px" />
      </Component>
      <Component>
        <ComponentVariant>loading : </ComponentVariant>
        <Button titleTrsKey={"button.login"} width="200px" loading />
      </Component>
      <Component>
        <ComponentVariant>Outlined : </ComponentVariant>
        <Button titleTrsKey={"button.login"} width="200px" outlined />
      </Component>
      <Component>
        <ComponentVariant>Disabled : </ComponentVariant>
        <Button titleTrsKey={"button.login"} width="200px" disabled />
      </Component>

      <Spacer size="xl" />

      <Text variant="h5">Text :</Text>
      <Spacer size="medium" />
      <Component>
        <ComponentVariant>Default : </ComponentVariant>
        <Text trsKey={"greeting"} />
      </Component>
      <Component>
        <ComponentVariant>caption : </ComponentVariant>
        <Text trsKey={"greeting"} variant="caption" />
      </Component>
      <Component>
        <ComponentVariant>hint : </ComponentVariant>
        <Text trsKey={"greeting"} variant="hint" />
      </Component>
      <Component>
        <ComponentVariant>label : </ComponentVariant>
        <Text trsKey={"greeting"} variant="label" />
      </Component>
      <Component>
        <ComponentVariant>Title : </ComponentVariant>
        <Text trsKey={"greeting"} variant="title" />
      </Component>
      <Component>
        <ComponentVariant>h5 : </ComponentVariant>
        <Text trsKey={"greeting"} variant="h5" />
      </Component>
      <Component>
        <ComponentVariant>h4 : </ComponentVariant>
        <Text trsKey={"greeting"} variant="h4" />
      </Component>
      <Component>
        <ComponentVariant>error : </ComponentVariant>
        <Text trsKey={"greeting"} variant="error" />
      </Component>
      <Component>
        <ComponentVariant>success : </ComponentVariant>
        <Text trsKey={"greeting"} variant="success" />
      </Component>

      <Spacer size="xl" />

      <Text variant="h5">Input :</Text>
      <Spacer size="medium" />
      <ImageInput labelTrsKey="image input :" />
      <Input
        labelTrsKey="input :"
        control={control}
        name="test"
        placeholderTrsKey="placeholder"
      />
      <Select
        items={[{ value: 1, label: "item " }]}
        labelTrsKey="select :"
        control={control}
        name="select"
        placeholderTrsKey="placeholder"
      />
      <TextArea
        labelTrsKey="textarea :"
        control={control}
        name="textarea"
        placeholderTrsKey="placeholder"
      />

      <Spacer size="xl" />

      <Text variant="h5">Switch :</Text>
      <Spacer size="medium" />
      <Component>
        <Switch
          isEnabled={enableSwitch}
          toggleSwitch={() => setEnableSwitch(!enableSwitch)}
        />
      </Component>
      <Spacer size="xxl" />
    </Container>
  );
};
