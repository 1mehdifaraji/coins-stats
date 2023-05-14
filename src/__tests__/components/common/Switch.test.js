import { render } from "@testing-library/react";
import Switch from "components/common/Switch";

describe("Switch toggle", () => {
  it("Switch component exists in document", () => {
    const { getByTestId } = render(<Switch />);
    const element = getByTestId("switch");

    expect(element).toBeInTheDocument();
  });

  it("Switch toggle true classes", () => {
    const { getByTestId } = render(<Switch toggle />);
    const element = getByTestId("switch");
    const toggleElement = getByTestId("switch-toggle");

    expect(element).toHaveClass("bg-green-400 dark:bg-green-600");
    expect(toggleElement).toHaveClass("translate-x-4");
  });

  it("Switch toggle false classes", () => {
    const { getByTestId } = render(<Switch toggle={false} />);
    const element = getByTestId("switch");
    const toggleElement = getByTestId("switch-toggle");

    expect(element).not.toHaveClass("bg-green-400 dark:bg-green-600");
    expect(toggleElement).not.toHaveClass("translate-x-4");
  });
});
