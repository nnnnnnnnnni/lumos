import { UserComponent } from "@craftjs/core";
import { componentSettingProps } from "../../../editor/type";
import { Setting } from "../../../editor/Toolbar";

export const settings: componentSettingProps[] = [
  {
    title: "Title",
    desc: "",
    type: "string",
    deafultValue: "Banner Title",
    show: true,
  },
  {
    title: "Description",
    desc: "",
    type: "string",
    deafultValue: "Banner Description",
    show: true,
  },
  {
    title: "Title Tip",
    desc: "",
    type: "string",
    deafultValue: "Banner Tip",
    show: true,
  },
];

export const craftProps: UserComponent["craft"] = {
  displayName: "lumos-Banner",
  props: {},
  related: {
    setting: Setting,
  },
  custom: {
    settings,
  },
  rules: {
    canDrag(node, helpers) {
      return true;
    },
    canDrop(node, helpers, monitor) {
      return true;
    },
    canMoveIn(canMoveIn, self, helpers) {
      return true;
    },
    canMoveOut(canMoveOut, self, helpers) {
      return true;
    },
  },
};
