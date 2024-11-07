import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import React, { ForwardedRef } from "react";

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  label?: string;
};

export const ThemedInput = React.forwardRef(function ThemedInput(
  { style, lightColor, darkColor, label, ...otherProps }: ThemedInputProps,
  ref: ForwardedRef<TextInput>
) {
  const inputColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "input"
  );

  return (
    <View style={styles.container}>
      {label && <ThemedText type="desc">{label}</ThemedText>}
      <TextInput
        ref={ref}
        style={[{ borderColor: inputColor }, styles.input, style]}
        {...otherProps}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 8,
    padding: 8,
  },
});
