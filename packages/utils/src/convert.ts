export const convertNumberToPx = (value: number) => {
  return `${value}px`;
};

export const convertAnyToNumber = (value: any) => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    return parseInt(value, 10);
  }

  return 0;
};
