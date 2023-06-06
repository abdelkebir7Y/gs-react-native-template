import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("@token");
    return token ?? "";
  } catch (e) {
    console.log(e);
  }
};

export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (e) {
    console.log(e);
  }
};

export const storeLanguage = async (language) => {
  try {
    await AsyncStorage.setItem("@language", language);
  } catch (e) {
    console.log(e);
  }
};

export const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem("@language");
    return language ?? "";
  } catch (e) {
    console.log(e);
  }
};
