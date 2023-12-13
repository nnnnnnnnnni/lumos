import { useEditor } from "@craftjs/core";
import React, { useEffect } from "react";
import styled from "styled-components";

import { Sidebar } from "../DataSider";
import { ListWrapper } from "../ToolList";
import { Header } from "./Header";
import { Flex } from "@mantine/core";
import { useEditorContainer } from "../WidthContext";
import { convertAnyToPx } from "@utils";

const RenderContainer = styled.div<{
  $enabled: boolean;
  $width?: string | number;
}>`
  flex: 1;
  height: 100%;
  width: ${({ $width }) => $width || "100%"};
  transition: all 0.3s ease;
  overflow: auto;
  padding-bottom: 8px;
  margin: 0 auto;
  ${({ $enabled }) => ($enabled ? "background-color: white;" : "")}
`;

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { width } = useEditorContainer();

  useEffect(() => {
    if (!window) return;

    window.requestAnimationFrame(() => {
      window.parent.postMessage({ LANDING_PAGE_LOADED: true }, "*");

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);
  return (
    <Flex
      direction={"row"}
      w={"100%"}
      h={"100%"}
      pos={"fixed"}
      style={{ overflow: "hidden" }}
    >
      <ListWrapper />
      <Flex
        style={{
          flex: 1,
          borderLeft: "1px solid #f0f0f0",
          borderRight: "1px solid #f0f0f0",
        }}
        bg={'#f0f0f0'}
        h={"100%"}
        direction={"column"}
        className="page-container"
      >
        <Header />
        <RenderContainer
          $enabled={enabled}
          className="craftjs-renderer"
          id="app-container"
          $width={convertAnyToPx(width)}
        >
          {children}
        </RenderContainer>
      </Flex>
      <Sidebar />
    </Flex>
  );
};
