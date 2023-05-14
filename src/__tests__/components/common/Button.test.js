import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Button from "components/common/Button";

describe("Button component", () => {
  it("Button component exists in document", () => {
    const { getByTestId } = render(<Button />);
    const element = getByTestId("button");

    expect(element).toBeInTheDocument();
  });

  it("Button custom className applies to component", () => {
    const { getByTestId } = render(<Button className="custom-class" />);
    const element = getByTestId("button");

    expect(element).toHaveClass(
      "text-white outline-none font-bold transition-all scale-100 w-full py-2 rounded-xl text-sm"
    );
    expect(element).toHaveClass("custom-class");
  });

  it("Button disabled classes", () => {
    const { getByTestId } = render(<Button disabled />);
    const element = getByTestId("button");

    expect(element).toHaveClass("bg-gray-300 dark:bg-gray-700");
    expect(element).not.toHaveClass(
      "bg-blue-500 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900"
    );
  });

  it("Button onClick", async () => {
    const handleOnClick = jest.fn();

    const { getByTestId } = render(<Button onClick={handleOnClick} />);
    const element = getByTestId("button");

    fireEvent.click(element);

    expect(handleOnClick).toBeCalled();
    expect(element).toHaveClass("animate-wiggle");
  });
});
