import { StyleSheet, FlatList, FlatListProps } from "react-native";

import { TaskType } from "@/types/task";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeTask } from "@/redux/slices/tasks";
import { Task } from "./Task";

export type TasksProps = Partial<FlatListProps<TaskType>> & {
  lightColor?: string;
  darkColor?: string;
};

export function Tasks({ style, ...rest }: TasksProps) {
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleTaskDelete = (id: number) => {
    dispatch(removeTask({ id }));
  };

  return (
    <FlatList
      contentContainerStyle={[styles.tasks, style]}
      data={tasks}
      renderItem={({ item }) => (
        <Task onTaskDelete={handleTaskDelete} task={item} />
      )}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  tasks: {
    gap: 15,
    padding: 20,
  },
});
