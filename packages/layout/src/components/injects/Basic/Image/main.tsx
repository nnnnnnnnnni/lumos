import { UserComponent, useNode } from "@craftjs/core";
import { Img as _Image } from "@libs";

export const Image: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Image ref={(ref) => ref && connect(drag(ref))} />;
};
