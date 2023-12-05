import { UserComponent, useNode } from "@craftjs/core";
import { Video as _Video } from "../../../../../../libs/src/Basic";

export const Video: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Video ref={(ref) => ref && connect(drag(ref))} />;
};
