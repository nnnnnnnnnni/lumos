import { useEditor } from "@craftjs/core";
import React, { useEffect, useMemo } from "react";
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
  position: relative;
  ${({ $enabled }) => ($enabled ? "background-color: white;" : "")}
`;

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    actions: { setOptions },
    nodes
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    nodes: query.getNodes()
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

  const isEmptyContainer = useMemo(() => {
    return Object.keys(nodes).length == 1;
  }, [nodes])

  console.log()

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
        bg={"#f0f0f0"}
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

          {!isEmptyContainer && (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "rgba(24, 139, 230, 0.05)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Drag components here
            </div>
          )}
        </RenderContainer>
      </Flex>
      <Sidebar />
    </Flex>
  );
};
