import { useNode } from "@craftjs/core";
import { useEditorContainer } from "../WidthContext";
import { mediaStyles, mediaStylesProps } from "./type";
import { CSSProperties, useCallback, useMemo } from "react";

export const useChangeBasicSettings = () => {
  const { currentScreen } = useEditorContainer();
  const { actions, componentStylesProps } = useNode((node) => ({
    componentStylesProps: node.data.props.styles as mediaStylesProps,
  }));

  const currentScreenStyle = useMemo(() => componentStylesProps[currentScreen], [componentStylesProps, currentScreen])

  const handleSetPropByCsskey = useCallback(
    (cssKey: keyof CSSProperties, value: any) => {
      actions.setProp((props: mediaStyles) => {
        if (props?.styles) {
          if (props.styles[currentScreen]) {
            (props.styles[currentScreen] as any)[cssKey] = value;
          } else {
            props.styles[currentScreen] = {
              [cssKey]: value,
            };
          }
        } else {
          props.styles = {
            [currentScreen]: {
              [cssKey]: value,
            },
          };
        }
      });
    },
    [currentScreen]
  );

  return {
    componentStylesProps,
    currentScreen,
    currentScreenStyle,
    handleSetPropByCsskey,
  };
};
