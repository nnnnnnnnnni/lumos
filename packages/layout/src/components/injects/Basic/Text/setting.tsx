import { UserComponent } from "@craftjs/core";
import { TextProps } from '@libs'
import { ComponentSettings } from "../../../../editor/Settings";

export const craftProps: UserComponent<TextProps>["craft"] = {
  // A user-friendly name for the User Component. The value here will be used to set the node.data.displayName property.
  displayName: "lumos-Section",
  // Specify default values for the props T
  props: {
    style: {},
  },
  //A map of React Components to share the same Node context. This components will be able access the useNode hook
  related: {
    settings: () => <ComponentSettings needBasicStyles />,
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
