export const convertAnyToPx = (value?: any) => {
  if (typeof value == "number") {
    return `${value}px`;
  }

  if (typeof value == "string") {
    if (value === "100%") return value;
    else {
      return parseInt(value, 10) + "px";
    }
  }

  return "0px";
};

export const convertAnyToNumber = (value?: any, returnZero = true): number | undefined => {
  if (value == "undefined" || value == null) {
    return returnZero ? 0 : undefined;
  }
  // 匹配数字部分和单位部分的正则表达式
  const regex = /^(\d+(?:\.\d+)?)(px|%|rem|em|vw|vh)?$/;

  // 提取数字和单位
  const matches = value.match(regex);

  if (matches) {
    const number = parseFloat(matches[1]);

    // 单位转换
    const unit = matches[2];
    if (unit === "px") {
      return Number(number);
    } else if (unit === "%") {
      return Number(number) / 100;
    } else if (unit === "rem") {
      // 假设1rem等于16px
      return Number(number) * 16;
    } else if (unit === "em" || unit === "vw" || unit === "vh") {
      return Number(number) * 16;
    }
  }

  // 如果无法匹配到数字和单位，则返回原始值
  return value;
};
