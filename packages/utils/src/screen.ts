import {
  DEFAULT_SCREEN_DESKTOP,
  DEFAULT_SCREEN_MOBILE,
  DEFAULT_SCREEN_TABLET,
  convertAnyToNumber,
} from ".";

export const isDesktop = (width: number | string) =>
  convertAnyToNumber(width) === DEFAULT_SCREEN_DESKTOP || width === "100%";

export const isMobile = (width: number | string) =>
  convertAnyToNumber(width) === DEFAULT_SCREEN_MOBILE;

export const isTablet = (width: number | string) =>
  convertAnyToNumber(width) === DEFAULT_SCREEN_TABLET;
