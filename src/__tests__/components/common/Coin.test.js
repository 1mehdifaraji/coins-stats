import { render } from "@testing-library/react";
import Coin from "components/common/Coin";

describe("Coin component", () => {
  it("Coin component renders correctly", () => {
    const { getByTestId } = render(<Coin />);
    const element = getByTestId("coin");

    expect(element).toBeInTheDocument();
  });

  it("Coin favourite svg render", () => {
    const { getByTestId } = render(<Coin fav />);
    const element = getByTestId("star-svg");

    expect(element).toHaveClass("fill-yellow-300");
    expect(element).not.toHaveClass("fill-gray-500");
  });

  it("Coin is hidden if toggle is on", () => {
    const { getByTestId } = render(<Coin toggle fav={false} />);
    const element = getByTestId("coin");

    expect(element).toHaveClass("hidden");
  });
});
