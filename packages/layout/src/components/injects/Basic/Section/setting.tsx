import { UserComponent } from "@craftjs/core";
import { SectionProps } from "../../../../../../libs/src/Basic"
import {
  DEFAULT_SCREEN_DESKTOP,
  getPX,
} from "../../../../../../libs/src/config";

export const craftProps: UserComponent<SectionProps>["craft"] = {
  // A user-friendly name for the User Component. The value here will be used to set the node.data.displayName property.
  displayName: "lumos-Section",
  // Specify default values for the props T
  props: {
    containerWidth: getPX(DEFAULT_SCREEN_DESKTOP)
  },
  //A map of React Components to share the same Node context. This components will be able access the useNode hook
  related: {
    settings: () => <div>123</div>,
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
