import { I18nManager } from "react-native";
import { fonts } from "../config/constants";
import { useFonts } from "@expo-google-fonts/inter";

const getFont = () => {
  return I18nManager.isRTL ? fonts.mainAr : fonts.mainAr;
};

export default getFont;
