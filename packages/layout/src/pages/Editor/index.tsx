"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport } from "../../editor/Viewport";
import { Flex } from "@mantine/core";
import { componentList } from "../../config";

export const EditorPage = () => {
  return (
    <Flex w={"100vw"} h={"100vh"}>
      {/* <Editor resolver={{...componentList}} onRender={RenderNode}> */}
      <Editor resolver={{...componentList}}>
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
              <componentList.Banner />
              <componentList.InfoCard />
              <componentList.ApplyButton />
              <componentList.LinkButton />
              <componentList.ShareCard />
              <componentList.StepsCard />
              <componentList.Text />
              <componentList.Image />
              <componentList.Section />
              <componentList.Box />
              <componentList.Video />
            </Element>
          </Frame>
        </Viewport>
      </Editor>
    </Flex>
  );
};
