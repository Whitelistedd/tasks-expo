import { RootState, store as realStore } from "@/redux/store";
import {
  render as rtlRender,
  RenderOptions,
} from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Define initial state and create mock store
const INITIAL_STATE = { tasks: [] }; // Or use the state shape from your reducer
const mockStore = configureStore([]);
let store = mockStore(INITIAL_STATE);

// Custom render function that wraps components with Provider
const reduxRender = (
  ui: React.JSX.Element,
  initialState?: RootState | {},
  useRealStore?: boolean,
  options?: RenderOptions
) => {
  if (initialState) {
    store = mockStore(initialState);
  }
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Provider store={useRealStore ? realStore : store}>{children}</Provider>
    ),
    ...options,
  });
};

// Re-export all from React Testing Library for convenience
export * from "@testing-library/react-native";

// Override render method to use reduxRender
export { reduxRender as render, store };
