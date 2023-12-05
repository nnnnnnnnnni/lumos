import { UserComponent, useNode } from "@craftjs/core";
import { ApplyButton as _ApplyButton } from "../../../../../../libs/src/Button";

export const ApplyButton: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_ApplyButton ref={(ref) => ref && connect(drag(ref))} />;
};
