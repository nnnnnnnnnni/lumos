import { UserComponent, useNode } from "@craftjs/core";
import { ShareCard as _ShareCard } from "../../../../../../libs/src/Card";

export const ShareCard: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_ShareCard ref={(ref) => ref && connect(drag(ref))} />;
};
