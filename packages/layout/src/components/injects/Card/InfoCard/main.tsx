import { UserComponent, useNode } from "@craftjs/core";
import { InfoCard as _InfoCard } from "../../../../../../libs/src/Card";

export const InfoCard: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_InfoCard ref={(ref) => ref && connect(drag(ref))} />;
};
