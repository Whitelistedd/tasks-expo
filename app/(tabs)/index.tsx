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
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addTask, removeTask } from "@/redux/slices/tasks";
import { Task } from "@/components/Task";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const descInputRef = useRef<TextInput>(null);
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [error, setError] = useState("");

  const handleAddingTask = () => {
    if (!nameValue) {
      return setError("Please Put in a title");
    }
    setError("");
    dispatch(addTask({ name: nameValue, desc: descValue }));
    setNameValue("");
    setDescValue("");
  };

  const handleTaskDelete = (id: number) => {
    dispatch(removeTask({ id }));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar translucent={false} backgroundColor="black" />
      <FlatList
        contentContainerStyle={styles.tasks}
        data={tasks}
        renderItem={({ item }) => (
          <Task onTaskDelete={handleTaskDelete} task={item} />
        )}
        ListHeaderComponent={
          <ThemedView style={styles.top}>
            <ThemedView style={styles.topInputs}>
              <ThemedInput
                onSubmitEditing={() => descInputRef?.current?.focus()}
                label="Name"
                onChange={(e) => setNameValue(e.nativeEvent.text)}
                returnKeyType="next"
                value={nameValue}
              />
              <ThemedInput
                onChange={(e) => setDescValue(e.nativeEvent.text)}
                ref={descInputRef}
                label="Desc"
                value={descValue}
              />
              {error && (
                <ThemedText style={styles.error} type="desc">
                  {error}
                </ThemedText>
              )}
            </ThemedView>
            <Button onPress={() => handleAddingTask()} style={styles.topButton}>
              <PlusSVG />
            </Button>
            {tasks.length === 0 && (
              <ThemedText style={styles.noTasksText}>No Tasks</ThemedText>
            )}
          </ThemedView>
        }
      />
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
    marginBottom: 30,
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
    gap: 20,
  },
  tasks: {
    gap: 15,
    padding: 20,
  },
  noTasksText: {
    textAlign: "center",
  },
  error: {
    color: Colors.general.error,
  },
});
