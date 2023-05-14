import { render } from "@testing-library/react";
import Modal from "components/layout/Modal";

describe("Modal component", () => {
  it("Modal component exists in document", () => {
    const { getByTestId, baseElement } = render(<Modal isOpen />);
    const element = getByTestId("modal");

    expect(baseElement).toMatchSnapshot();
    expect(element).toBeInTheDocument();
  });
});
