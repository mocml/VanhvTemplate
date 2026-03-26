import { Appearance } from "react-native";

const palette = {
  primary: '#028894',
  primary_contrast: '#FFFFFF',
  secondary: '#EE5D0A',
  reject: "#E74A3B",
  error: '#E74A3B',
  text: '#181818',
  placeholder: '#888888',
  text_secondary: '#666666',
  icon: '#7D7D7D',
  borderInput: '#F0F0F0',
  white: '#FFFFFF',
  black: '#000000',
  border: '#CCCCCC',
  
  // Statuses
  processing: "#007AFF",
  pending: "#FF9500",
  rejected: "#FD4848",
  approved: "#34C759",
};

const lightTheme = { ...palette };
const darkTheme = { ...palette }; // Adjust values for dark theme

const systemTheme = Appearance.getColorScheme();
const Colors = systemTheme === 'dark' ? darkTheme : lightTheme;

export default Colors;
