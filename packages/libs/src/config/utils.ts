export const getPX = (value: number | string) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  if (
    typeof value === "string" &&
    (value.includes("px") || value.includes("rem") || value.includes("em"))
  ) {
    return value;
  }
  return value;
};
