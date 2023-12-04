import { useNode } from "@craftjs/core";
import {
    BannerCommon as _BannerCommon,
    BannerWithVideoBg as _BannerWithVideoBg,
    BannerWithoutKV as _BannerWithoutKV,
} from "../../../../../libs/src/Banner";

export const BannerCommon = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerCommon ref={(ref) => ref && connect(drag(ref))} />;
};

export const BannerWithVideoBg = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerWithVideoBg ref={(ref) => ref && connect(drag(ref))} />;
};


export const BannerWithoutKV = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_BannerWithoutKV ref={(ref) => ref && connect(drag(ref))} />;
};
