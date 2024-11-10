import { fireEvent, render } from "@testing-library/react-native";
import { ThemedInput } from "../ThemedInput";

describe("Button Component", () => {
  it("renders correctly", () => {
    const tree = render(<ThemedInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("given label, should match snapshot render correctly", () => {
    const tree = render(<ThemedInput label="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("given label, should render it correctly", () => {
    const { getByText } = render(<ThemedInput label="Test" />);

    const label = getByText("Test");

    expect(label).toBeTruthy();
  });

  it("given value, contains correct given value", () => {
    const { getByTestId } = render(
      <ThemedInput value="Hello" testID="input" />
    );

    const input = getByTestId("input");
    expect(input.props.value).toBe("Hello");
  });

  it("on input text change, should update the input value", () => {
    const handleTextChange = jest.fn();

    const { getByTestId } = render(
      <ThemedInput onChangeText={handleTextChange} testID="input" />
    );

    const input = getByTestId("input");

    fireEvent.changeText(input, "Hello Test");

    expect(handleTextChange).toHaveBeenCalledWith("Hello Test");
  });
});
