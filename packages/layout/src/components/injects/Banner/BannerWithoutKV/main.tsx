import { UserComponent, useNode } from "@craftjs/core";
import { BannerWithoutKV as _BannerWithoutKV } from "../../../../../../libs/src/Banner";

export const BannerWithoutKV: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerWithoutKV ref={(ref) => ref && connect(drag(ref))} />;
};
