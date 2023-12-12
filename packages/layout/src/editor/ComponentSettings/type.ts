import { CSSProperties } from "styled-components";

export interface componentSettingItemProps {
    name: string;
    description?: string;
    tip?: string;
    type: 'string' | 'number' | 'boolean' | 'select' | 'color' | 'image' | 'array';
    enum?: (string | number)[];
    default?: any;
}

export interface componentSettingProps {
  fields?: componentSettingItemProps[];
  needBasicStyles?: boolean;
}

export interface mediaStylesProps {
  desktop?: CSSProperties;
  tablet?: CSSProperties;
  mobile?: CSSProperties;
}