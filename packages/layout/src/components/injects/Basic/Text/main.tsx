import { UserComponent, useNode } from "@craftjs/core";
import { Text as _Text } from "../../../../../../libs/src/Basic";

export const Text: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Text ref={(ref) => ref && connect(drag(ref))} />;
};
