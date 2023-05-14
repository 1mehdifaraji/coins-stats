import { capitalize } from "utils/utils";

describe("Capitalize", () => {
  it("Capitalizes string correctly", () => {
    const string = "react application";
    expect(capitalize(string)).toEqual("React application");
  });
});
