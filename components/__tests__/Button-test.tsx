import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@/components/Button"; // Adjust the import based on your file structure
import { ThemedText } from "@/components/ThemedText";

describe("Button Component", () => {
  it("renders correctly", () => {
    const tree = render(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("given text, should render with the correct text", () => {
    const { getByText } = render(
      <Button>
        <ThemedText>Click Me</ThemedText>
      </Button>
    );

    const button = getByText("Click Me");

    expect(getByText("Click Me")).toBeTruthy();
  });

  it("given on press function, should call the onPress handler when clicked", () => {
    const handlePress = jest.fn();
    const { getByText } = render(
      <Button onPress={handlePress}>
        <ThemedText>Click Me</ThemedText>
      </Button>
    );

    const button = getByText("Click Me");

    fireEvent.press(button);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it("given disabled state, disabled prop should be true", () => {
    const handlePress = jest.fn();

    const { getByText } = render(
      <Button onPress={handlePress} disabled={true}>
        <ThemedText>Click Me</ThemedText>
      </Button>
    );

    const button = getByText("Click Me");

    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(handlePress).toHaveBeenCalledTimes(0);
  });
});
