import { StyleSheet, ViewProps, View, TouchableOpacity } from "react-native";

import { TaskType } from "@/types/task";
import { ThemedText } from "./ThemedText";
import { CloseSVG } from "@/assets/svg/Close";
import { Colors } from "@/constants/Colors";

export type TaskProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  task: TaskType;
  onTaskDelete: (id: number) => void;
};

export function Task({
  style,
  lightColor,
  darkColor,
  task,
  onTaskDelete,
  ...rest
}: TaskProps) {
  return (
    <View style={styles.shadow}>
      <View style={styles.container} {...rest}>
        <View style={styles.text}>
          <ThemedText testID="task_title" type="subtitle">
            {task.name}
          </ThemedText>
          {task.desc && (
            <>
              <View testID="task_line" style={styles.line} />
              <ThemedText type="desc">{task.desc}</ThemedText>
            </>
          )}
        </View>
        <TouchableOpacity
          testID="delete_button"
          onPress={() => onTaskDelete(task.id)}
          style={styles.deleteButton}
        >
          <CloseSVG />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#00000050",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "none",
    borderRadius: 16,
  },
  container: {
    borderRadius: 16,
    padding: 15,
    margin: 2,
    overflow: "hidden",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  text: {
    flex: 1,
    gap: 2,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  deleteButton: {
    backgroundColor: Colors.general.error,
    borderRadius: 50,
    padding: 3,
  },
});
