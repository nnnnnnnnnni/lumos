import { UserComponent } from "@craftjs/core";
import { SectionProps } from "@libs";
import { ComponentSettings } from "../../../../editor/Settings";
import { DEFAULT_SCREEN_DESKTOP, convertAnyToPx } from "@utils";

export const craftProps: UserComponent<SectionProps>["craft"] = {
  // A user-friendly name for the User Component. The value here will be used to set the node.data.displayName property.
  displayName: "lumos-Section",
  // Specify default values for the props T
  props: {
    containerWidth: convertAnyToPx(DEFAULT_SCREEN_DESKTOP),
    style: {},
  },
  //A map of React Components to share the same Node context. This components will be able access the useNode hook
  related: {
    settings: () => <ComponentSettings />,
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
