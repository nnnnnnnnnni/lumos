import { UserComponent, useNode } from "@craftjs/core";
import { StepsCard as _StepsCard } from "../../../../../../libs/src/Card";

export const StepsCard: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_StepsCard ref={(ref) => ref && connect(drag(ref))} />;
};
