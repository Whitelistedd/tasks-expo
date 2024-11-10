import * as React from "react";
import renderer from "react-test-renderer";

import { ThemedText } from "@/components/ThemedText";
import { render } from "@testing-library/react-native";

describe("ThemedText component", () => {
  it(`renders correctly`, () => {
    const tree = render(<ThemedText>Snapshot test!</ThemedText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
