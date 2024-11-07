import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Button({
  style,
  lightColor,
  darkColor,
  children,
  ...otherProps
}: ButtonProps) {
  const buttonColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "button"
  );

  return (
    <TouchableOpacity
      style={[{ backgroundColor: buttonColor }, styles.button, style]}
      {...otherProps}
    >
      {children}
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 16,
  },
});
