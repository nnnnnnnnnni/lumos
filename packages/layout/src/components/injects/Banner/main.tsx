import { UserComponent, useEditor, useNode } from "@craftjs/core";
import { Banner as _Banner } from "../../../../../libs/src/Banner";
import { Section } from "../../../../../libs/src/Basic";
import { craftProps } from "./settings";

export const Banner: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const a = useEditor();
  console.log(a)
  return <_Banner ref={(ref) => ref && connect(drag(ref))} />;
};

Banner.craft = craftProps;
