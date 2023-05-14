import { render } from "@testing-library/react";
import Skeleton from "components/common/Skeleton";

describe("Skeleton component", () => {
  it("Skeleton component exists in document", () => {
    const { getByTestId } = render(<Skeleton />);
    const element = getByTestId("skeleton");

    expect(element).toBeInTheDocument();
  });

  it("Skeleton custom className applies to component", () => {
    const { getByTestId } = render(<Skeleton className="custom-class" />);
    const element = getByTestId("skeleton");

    expect(element).toHaveClass(
      "animate-pulse bg-gray-300 dark:bg-gray-600 rounded-md"
    );
    expect(element).toHaveClass("custom-class");
  });
});
