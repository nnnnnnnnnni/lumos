import { UserComponent, useNode } from "@craftjs/core";
import { CommonBanner as _CommonBanner, CommonBannerProps } from "@libs";
import { craftProps } from "./setting";
import { useMemo } from "react";
import { useEditorContainer } from "../../../../editor/WidthContext";
import { mediaKeys, mediaStyles } from "../../../../editor/Settings/type";
import { omit } from "lodash";

export const CommonBanner: UserComponent<CommonBannerProps & mediaStyles> = (props) => {
  const { currentScreen, isDesktop, isMobile, isTablet } = useEditorContainer();
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const _props = useMemo(() => {
    const _props = Object.assign({}, props);

    if (isTablet) {
      _props.style = Object.assign({}, props.styles?.[mediaKeys.tablet] || {});
    } else if (isMobile) {
      _props.style = Object.assign({}, props.styles?.[mediaKeys.mobile] || {});
    } else {
      _props.style = Object.assign({}, props.styles?.[mediaKeys.desktop] || {});
    }

    return omit(_props, ["styles"]);
  }, [props.styles, currentScreen]);

  return <_CommonBanner ref={(ref) => ref && connect(drag(ref))} {..._props} />;
};

CommonBanner.craft = craftProps;