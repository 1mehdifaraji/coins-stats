import { render } from "@testing-library/react";
import Drawer from "components/layout/Drawer";

describe("Drawer component", () => {
  it("Drawer component exists in document", () => {
    const { getByTestId } = render(<Drawer />);
    const elementOverlay = getByTestId("drawer-overlay");
    const element = getByTestId("drawer");

    expect(element).toBeInTheDocument();
    expect(elementOverlay).toBeInTheDocument();
  });
  it("Drawer isOpen styles", () => {
    const { getByTestId } = render(<Drawer isOpen />);
    const elementOverlay = getByTestId("drawer-overlay");
    const element = getByTestId("drawer");

    expect(document.body).toHaveStyle("overflow: hidden");
    expect(element).not.toHaveClass("-translate-x-full");
    expect(elementOverlay).toHaveClass("visible opacity-100 cursor-pointer");
    expect(elementOverlay).not.toHaveClass("invisible opacity-0");
  });
});
