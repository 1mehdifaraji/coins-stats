import { render } from "@testing-library/react";
import Language from "components/common/Language";

describe("Language component", () => {
  it("Language component exists in document", () => {
    const { getByTestId } = render(<Language />);
    const element = getByTestId("language");

    expect(element).toBeInTheDocument();
  });

  it("Language component active mode styles", () => {
    const { getByTestId } = render(
      <Language currentLanguage="fa" value="fa" />
    );
    const element = getByTestId("language");

    expect(element).toHaveClass("border-2 border-blue-500 font-bold");
  });
});
