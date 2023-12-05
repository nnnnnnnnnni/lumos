import { FC } from "react";
import { UserComponentConfig } from "@craftjs/core";
import { componentSettingProps } from "../type";

export const Setting: FC<
  Pick<UserComponentConfig<componentSettingProps>, "custom">
> = (props) => {
  return <div>123123</div>;
};
