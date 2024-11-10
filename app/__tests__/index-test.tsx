import { render, store } from "@/utils/test-utils";
import { cleanup, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../index";

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("index page", () => {
  it("renders correctly when there are no tasks", () => {
    const { toJSON } = render(<HomeScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("given tasks, renders correctly", () => {
    const initialState = {
      tasks: { tasks: [{ id: 1, name: "test", desc: "test" }] },
    };

    const tree = render(<HomeScreen />, initialState).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("given no name on add Task, should render an error", () => {
    const { getByTestId } = render(<HomeScreen />);

    const nameInput = getByTestId("name_input_task_add");

    fireEvent.changeText(nameInput, "");

    const addTaskButton = getByTestId("add_task_button");

    fireEvent.press(addTaskButton);

    const addTaskErrorMessage = getByTestId("add_task_error");

    expect(addTaskErrorMessage).toBeTruthy();
  });

  it("given a name on add Task, should render a task", () => {
    const { getByTestId } = render(
      <HomeScreen />,
      { tasks: { tasks: [] } },
      true
    );

    const nameInput = getByTestId("name_input_task_add");

    fireEvent.changeText(nameInput, "Name test");

    const addTaskButton = getByTestId("add_task_button");

    fireEvent.press(addTaskButton);

    const addedTask = getByTestId("task_title");

    expect(addedTask).toBeTruthy();
  });
});
