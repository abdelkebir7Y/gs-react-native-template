import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const storeToken = async (token) => {
  try {
    await storage.set("@token", token);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const token = await storage.getString("@token");
    return token ?? "";
  } catch (e) {
    console.log(e);
  }
};

export const clearToken = async () => {
  try {
    await storage.set("@token", "");
  } catch (e) {
    console.log(e);
  }
};

export const storeLanguage = async (language) => {
  try {
    await storage.set("@language", language);
  } catch (e) {
    console.log(e);
  }
};

export const getLanguage = async () => {
  try {
    const language = await storage.getString("@language");
    return language ?? "";
  } catch (e) {
    console.log(e);
  }
};
