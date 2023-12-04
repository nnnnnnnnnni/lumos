"use client";
import { Editor, Frame, Element } from "@craftjs/core";
import { Viewport } from "../../editor/Viewport";
import { RenderNode } from "../../editor/RenderNode";
import { Box, Flex } from "@mantine/core";
import { componentList } from "../../config";

export const EditorPage = () => {
  return (
    <Flex w={'100vw'} h={'100vh'}>
      <Editor resolver={{...componentList}} enabled={false} onRender={RenderNode}>
        <Viewport>
          <Frame>
            <Element
              canvas
              is={'div'}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <componentList.ApplyButton />
              <componentList.ApplyButton />
              <componentList.ApplyButton />
              <componentList.ApplyButton />
            </Element>
          </Frame>
        </Viewport>
      </Editor>
    </Flex>
  );
};
