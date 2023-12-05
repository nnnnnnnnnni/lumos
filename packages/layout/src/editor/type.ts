export type componentSettingTypeField =
  | "string"
  | "number"
  | "boolean"
  | "file"
  | "Date";

export interface componentSettingProps {
  title: string;
  desc?: string;
  type: componentSettingTypeField;
  deafultValue?: any;
  enum?: any[];
  show?: boolean;
  styles?: {
    desktop?: Record<string, any>;
    tablet?: Record<string, any>;
    mobile?: Record<string, any>;
  };
}