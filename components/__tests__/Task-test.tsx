import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@/components/Button"; // Adjust the import based on your file structure
import { ThemedText } from "@/components/ThemedText";
import { Task } from "../Task";

describe("Task Component", () => {
  it("renders correctly", () => {
    const tree = render(
      <Task
        task={{ id: 1, name: "test title", desc: "test desc" }}
        onTaskDelete={() => {}}
      />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });

  it("given name, renders name correctly", () => {
    const { getByText } = render(
      <Task
        task={{ id: 1, name: "test title", desc: "" }}
        onTaskDelete={() => {}}
      />
    );

    const taskTitle = getByText("test title");

    expect(taskTitle).toBeTruthy();
  });

  it("given desc, renders desc correctly", () => {
    const { getByText } = render(
      <Task
        task={{ id: 1, name: "", desc: "test desc" }}
        onTaskDelete={() => {}}
      />
    );

    const taskTitle = getByText("test desc");

    expect(taskTitle).toBeTruthy();
  });

  it("given desc, renders text seperation line correctly", () => {
    const { getByTestId } = render(
      <Task
        task={{ id: 1, name: "", desc: "test desc" }}
        onTaskDelete={() => {}}
      />
    );

    const taskLine = getByTestId("task_line");

    expect(taskLine).toBeTruthy();
  });

  it("given onDeleteTask function, calls function with correct task id", () => {
    const handleTaskDelete = jest.fn();

    const { getByTestId } = render(
      <Task
        task={{ id: 5, name: "", desc: "test desc" }}
        onTaskDelete={handleTaskDelete}
      />
    );

    const deleteButton = getByTestId("delete_button");

    fireEvent.press(deleteButton, handleTaskDelete);

    expect(handleTaskDelete).toHaveBeenCalledWith(5);
  });
});
