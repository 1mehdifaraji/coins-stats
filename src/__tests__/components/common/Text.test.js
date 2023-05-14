import { render } from "@testing-library/react";
import Text from "components/common/Text";

describe("Text component", () => {
  it("Text component exists in document", () => {
    const { getByTestId } = render(<Text />);
    const element = getByTestId("text");

    expect(element).toBeInTheDocument();
  });

  it("Text custom className applies to component", () => {
    const { getByTestId } = render(<Text className="custom-class" />);
    const element = getByTestId("text");

    expect(element).toHaveClass("capitalize dark:text-white");
    expect(element).toHaveClass("custom-class");
  });

  it("Text noCursor prop classes", () => {
    const { getByTestId } = render(<Text noCursor />);
    const element = getByTestId("text");

    expect(element).toHaveClass("select-none cursor-default");
  });
});
