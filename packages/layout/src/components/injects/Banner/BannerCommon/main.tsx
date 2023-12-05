import { UserComponent, useNode } from "@craftjs/core";
import { BannerCommon as _BannerCommon } from "../../../../../../libs/src/Banner";

export const BannerCommon: UserComponent<{}> = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerCommon ref={(ref) => ref && connect(drag(ref))} />;
};
