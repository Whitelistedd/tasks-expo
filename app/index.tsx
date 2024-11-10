import { StyleSheet, TextInput, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from "expo-status-bar";
import { ThemedInput } from "@/components/ThemedInput";
import { Button } from "@/components/Button";
import { PlusSVG } from "@/assets/svg/Plus";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addTask } from "@/redux/slices/tasks";
import { Colors } from "@/constants/Colors";
import { Tasks } from "@/components/Tasks";

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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar translucent={false} backgroundColor="black" />
      <Tasks
        contentContainerStyle={styles.tasks}
        ListHeaderComponent={
          <ThemedView style={styles.top}>
            <ThemedView style={styles.topInputs}>
              <ThemedInput
                onSubmitEditing={() => descInputRef?.current?.focus()}
                label="Name"
                testID="name_input_task_add"
                onChangeText={(text) => setNameValue(text)}
                returnKeyType="next"
                value={nameValue}
              />
              <ThemedInput
                onChangeText={(text) => setDescValue(text)}
                ref={descInputRef}
                label="Desc"
                value={descValue}
              />
              {error && (
                <ThemedText
                  testID="add_task_error"
                  style={styles.error}
                  type="desc"
                >
                  {error}
                </ThemedText>
              )}
            </ThemedView>
            <Button
              testID="add_task_button"
              onPress={() => handleAddingTask()}
              style={styles.topButton}
            >
              <PlusSVG />
            </Button>
            {tasks?.length === 0 && (
              <ThemedText style={styles.noTasksText}>No Tasks</ThemedText>
            )}
          </ThemedView>
        }
      />
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
