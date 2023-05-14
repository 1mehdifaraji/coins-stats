import { handleDecimals } from "utils/utils";

describe("Handle number decimals", () => {
  it("Show only two digits of decimals", () => {
    const number = 34.6737;
    expect(handleDecimals(number)).toEqual("34.67");

    const numberSecond = 19;
    expect(handleDecimals(numberSecond)).toEqual("19.00");
  });

  it("Format number with LocaleString", () => {
    const number = 323254.6737;
    expect(handleDecimals(number)).toEqual("323,254.67");
  });
});
