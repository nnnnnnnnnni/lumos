import { useEditor } from "@craftjs/core";
import React, { useEffect } from "react";
import styled from "styled-components";

import { Sidebar } from "./DataWrapper";
import { ListWrapper } from "./ListWrapper";
import { Header } from "./Header";
import { Flex } from "@mantine/core";

const RenderContainer = styled.div<{ $enabled: boolean }>`
  flex: 1;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  overflow: auto;
  padding-bottom: 8px;
  ${({ $enabled }) => ($enabled ? "background-color: #f7f7f7;" : "")}
`;

export const Viewport: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

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
        style={{ flex: 1 }}
        h={"100%"}
        direction={"column"}
        className="page-container"
      >
        <Header />
        <RenderContainer
          $enabled={enabled}
          className="craftjs-renderer"
          ref={(ref: any) => connectors.select(connectors.hover(ref, ""), "")}
        >
          {children}
        </RenderContainer>
      </Flex>
      <Sidebar />
    </Flex>
  );
};
