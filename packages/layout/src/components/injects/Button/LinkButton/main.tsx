import { UserComponent, useNode } from "@craftjs/core";
import { LinkButton as _LinkButton } from "../../../../../../libs/src/Button";

export const LinkButton: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_LinkButton ref={(ref) => ref && connect(drag(ref))} />;
};
