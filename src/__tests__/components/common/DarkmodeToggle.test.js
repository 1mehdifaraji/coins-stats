import { fireEvent, render } from "@testing-library/react";
import DarkmodeToggle from "components/DarkmodeToggle";

describe("DarkmodeToggle component", () => {
  it("DarkmodeToggle component renders correctly", () => {
    const { getByTestId } = render(<DarkmodeToggle />);
    const element = getByTestId("darkmode-toggle");

    expect(element).toBeInTheDocument();
  });

  it("Darkmode toggle onClick", () => {
    const handleDarkmode = jest.fn();

    const { getByTestId } = render(
      <DarkmodeToggle toggleDarkmode={handleDarkmode} />
    );
    const element = getByTestId("darkmode-toggle");

    fireEvent.click(element);

    expect(handleDarkmode).toHaveBeenCalled();
  });
  it("Darkmode enabled disabled", () => {
    const { getByTestId } = render(<DarkmodeToggle darkmode />);
    const element = getByTestId("darkmode-toggle");

    expect(element).not.toHaveClass("absolute");
  });
});
