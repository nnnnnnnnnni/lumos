"use client";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";
import { Viewport } from "../../editor/Viewport";
import { Flex } from "@mantine/core";
import { componentList } from "../../config";
import { Fragment, useMemo } from "react";
import { EditorContainerProvier } from "../../editor/widthContext";

const EditableArea = () => {
  const { query } = useEditor();

  const haveNodes = useMemo(() => {
    const nodes = query.getNodes();
    return Object.keys(nodes).length > 1;
  }, []);

  return (
    <Viewport>
      <Frame>
        <Element
          canvas
          is={"div"}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {!haveNodes && "Drag components here"}
        </Element>
      </Frame>
    </Viewport>
  );
};

export const EditorPage = () => {
  return (
    <EditorContainerProvier>
      <Flex w={"100vw"} h={"100vh"}>
        {/* <Editor resolver={{...componentList}} onRender={RenderNode}> */}
        <Editor resolver={{ ...componentList, Fragment }}>
          <EditableArea />
        </Editor>
      </Flex>
    </EditorContainerProvier>
  );
};
