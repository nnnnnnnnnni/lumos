import { UserComponent, useNode } from "@craftjs/core";
import { Section as _Section } from "../../../../../../libs/src/Basic";

export const Section: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Section ref={(ref) => ref && connect(drag(ref))} />;
};
