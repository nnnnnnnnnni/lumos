import { UserComponent, useNode, Element } from "@craftjs/core";
import { Box as _Box } from "../../../../../../libs/src/Basic";

export const Box: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return <_Box ref={(ref) => ref && connect(drag(ref))}>
    <Element is="div" canvas id="Box-Container"> 

    </Element>
  </_Box>;
};
