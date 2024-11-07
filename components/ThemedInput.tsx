import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const inputColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "input"
  );

  return (
    <TextInput
      style={[{ borderColor: inputColor }, styles.input, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, flex: 1 },
});
