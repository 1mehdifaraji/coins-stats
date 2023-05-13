type Capitalize = (value: string) => string;
type HandleDecimals = (value: number) => string;

export const capitalize: Capitalize = (value) =>
  value?.charAt(0).toUpperCase() + value.slice(1);

export const handleDecimals: HandleDecimals = (value: number): string =>
  value?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
