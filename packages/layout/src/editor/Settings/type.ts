import { CSSProperties } from "styled-components";

export interface componentSettingItemProps {
  name: string;
  description?: string;
  tip?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "select"
    | "color"
    | "image"
    | "array";
  enum?: (string | number)[];
  default?: any;
}

export interface componentSettingProps {
  fields?: componentSettingItemProps[];
  needBasicStyles?: boolean;
}

export enum mediaKeys {
  desktop = "desktop",
  tablet = "tablet",
  mobile = "mobile",
}

export interface mediaStyles {
  styles?: mediaStylesProps;
}

export interface mediaStylesProps {
  [mediaKeys.desktop]?: CSSProperties;
  [mediaKeys.mobile]?: CSSProperties;
  [mediaKeys.tablet]?: CSSProperties;
}
