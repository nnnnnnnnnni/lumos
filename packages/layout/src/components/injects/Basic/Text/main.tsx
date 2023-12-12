import { UserComponent, useNode } from "@craftjs/core";
import { TextProps, Text as _Text } from "../../../../../../libs/src/Basic";
import { craftProps } from "./setting";
import styled from "styled-components";
import { mediaStylesProps } from "../../../../editor/Settings/type";
import { CSSProperties } from "react";
import { DEFAULT_SCREEN_DESKTOP, DEFAULT_SCREEN_MOBILE, DEFAULT_SCREEN_TABLET } from "../../../../../../libs/src/config";

const TextDom = styled(_Text)<TextProps & mediaStylesProps>`
  @media (min-width: ${DEFAULT_SCREEN_DESKTOP}px) {
    ${(props) => {
      let str = '';
      const styles = props.styles?.desktop || {};
      Object.keys(styles).forEach((key) => {
        const value = styles[key as keyof CSSProperties];
        str += `${key}: ${value};`
      })

      return str;
    }}
  };
  @media (min-width: ${DEFAULT_SCREEN_TABLET}px) {
    ${(props) => {
      let str = '';
      const styles = props.styles?.tablet || {};
      Object.keys(styles).forEach((key) => {
        const value = styles[key as keyof CSSProperties];
        str += `${key}: ${value};`
      })

      return str;
    }}
  };
  @media (min-width: ${DEFAULT_SCREEN_MOBILE}px) {
    ${(props) => {
      let str = '';
      const styles = props.styles?.mobile || {};
      Object.keys(styles).forEach((key) => {
        const value = styles[key as keyof CSSProperties];
        str += `${key}: ${value};`
      })

      return str;
    }}
  }
`

export const Text: UserComponent<TextProps> = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return <TextDom ref={(ref) => ref && connect(drag(ref))} {...props} />;
};

Text.craft = craftProps