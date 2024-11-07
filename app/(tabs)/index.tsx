import {
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from "expo-status-bar";
import { ThemedInput } from "@/components/ThemedInput";
import { Button } from "@/components/Button";
import { PlusSVG } from "@/assets/svg/Plus";
import { useRef } from "react";
import { useAppSelector } from "@/redux/store";

export default function HomeScreen() {
  const descInputRef = useRef<TextInput>(null);
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar translucent={false} backgroundColor="black" />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedView style={styles.top}>
          <ThemedView style={styles.topInputs}>
            <ThemedInput
              onSubmitEditing={() => descInputRef?.current?.focus()}
              label="Name"
              returnKeyType="next"
            />
            <ThemedInput ref={descInputRef} label="Desc" />
          </ThemedView>
          <Button style={styles.topButton}>
            <PlusSVG />
          </Button>
        </ThemedView>
        {/* <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: Try it</ThemedText>
          <ThemedText>
            Edit{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            to see changes. Press{" "}
            <ThemedText type="defaultSemiBold">
              {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
            </ThemedText>{" "}
            to open developer tools.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          <ThemedText>
            Tap the Explore tab to learn more about what's included in this
            starter app.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
          <ThemedText>
            When you're ready, run{" "}
            <ThemedText type="defaultSemiBold">
              npm run reset-project
            </ThemedText>{" "}
            to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
            directory. This will move the current{" "}
            <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
            <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
        </ThemedView> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    flex: 1,
  },
  top: {
    flex: 1,
    gap: 15,
  },
  topInputs: {
    flexDirection: "column",
    gap: 10,
  },
  topButton: {
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
  },
  container: {
    padding: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
