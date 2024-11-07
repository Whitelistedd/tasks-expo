import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TasksType, TaskType } from "@/types/task";

interface TasksState {
  tasks: TasksType;
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      { payload: { name, desc } }: PayloadAction<{ name: string; desc: string }>
    ) => {
      const lastTaskId = state.tasks[state.tasks.length - 1]?.id || 0;
      state.tasks.push({ id: lastTaskId + 1, name, desc });
    },
    removeTask: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      console.log(id);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
