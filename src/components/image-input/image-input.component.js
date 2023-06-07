import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styled, { useTheme } from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: left;
`;

const IconWrapper = styled.Pressable`
  height: ${({ theme }) => theme.sizes[3]};
  aspect-ratio: 1;
  border: 1px ${({ theme }) => theme.colors.ui.tertiary};
  border-radius: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Icon = styled.Image`
  height: 100%;
  width: 100%;
`;

const ImageWrapper = styled.View`
  height: ${({ theme }) => theme.sizes[4]};
  aspect-ratio: 1;
  border: 1px ${({ theme }) => theme.colors.ui.tertiary};
  border-radius: ${({ theme }) => theme.space[2]};
  overflow: hidden;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const DeleteIcon = styled(Ionicons)`
  position: absolute;
  top: 0px;
  right: 0px;
  padding-left: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const ImageInput = ({ labelTrsKey }) => {
  const [image, setImage] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const theme = useTheme();

  const takeImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    if (!permissionGranted) {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (granted) {
        await takeImage();
      }
    } else {
      await takeImage();
    }
  };

  const removeImage = () => setImage(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const { granted } = await ImagePicker.getCameraPermissionsAsync();
      setPermissionGranted(granted);
    };
    requestPermissions();
  }, []);

  return (
    <>
      <Label variant="label" trsKey={labelTrsKey} />
      <Spacer />
      {image ? (
        <ImageWrapper>
          <Image source={{ uri: image }} />
          <DeleteIcon
            name="close-circle"
            size={42}
            onPress={removeImage}
            color={theme.colors.text.error}
          />
        </ImageWrapper>
      ) : (
        <>
          <IconWrapper onPress={pickImage}>
            <Icon source={require("../../assets/images/placeholder.png")} />
          </IconWrapper>
        </>
      )}
    </>
  );
};
