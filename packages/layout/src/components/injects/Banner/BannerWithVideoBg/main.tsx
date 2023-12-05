import { UserComponent, useNode } from "@craftjs/core";
import { BannerWithVideoBg as _BannerWithVideoBg } from "../../../../../../libs/src/Banner";

export const BannerWithVideoBg: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerWithVideoBg ref={(ref) => ref && connect(drag(ref))} />;
};
