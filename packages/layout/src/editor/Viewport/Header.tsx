import { useEditor, useNode } from "@craftjs/core";
import { Box, Button, Flex, Tooltip } from "@mantine/core";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { HoverContainer } from "../../components/common";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { DEFAULT_SCREEN_MOBILE, DEFAULT_SCREEN_TABLET, getPX } from "../../../../libs/src/config";
import { useEditorContainer } from "../widthContext";

export const Header = () => {
  const { width, setWidth } = useEditorContainer();
  const { enabled, canUndo, canRedo, actions } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  // actions?.setProp('ROOT', (prop) => {
  //   prop.enabled = enabled;
  // })

  const handleSwitch = useCallback((mode: number) => {
    if(mode === 1) {
      setWidth("100%");
    } else if(mode === 2) {
      setWidth(getPX(DEFAULT_SCREEN_TABLET));
    } else {
      setWidth(getPX(DEFAULT_SCREEN_MOBILE));
    }
  }, []);

  return (
    <Flex
      align={"center"}
      w={"100%"}
      px={"10px"}
      py={"3px"}
      bg={"#d4d4d4"}
      justify={"space-between"}
    >
      {enabled ? (
        <Flex gap={"sm"} w={"200px"}>
          <Tooltip label="Undo" position="bottom">
            <HoverContainer
              style={{
                cursor: !canUndo ? "not-allowed" : "pointer",
                opacity: !canUndo ? 0.3 : 1,
              }}
              onClick={() => actions.history.undo()}
            >
              <ArrowUturnLeftIcon width={14} />
            </HoverContainer>
          </Tooltip>
          <Tooltip label="Redo" position="bottom">
            <HoverContainer
              style={{
                cursor: !canRedo ? "not-allowed" : "pointer",
                opacity: !canRedo ? 0.3 : 1,
              }}
              onClick={() => actions.history.redo()}
            >
              <ArrowUturnRightIcon width={14} />
            </HoverContainer>
          </Tooltip>
        </Flex>
      ) : (
        <Box w={"200px"} />
      )}
      <Flex
        columnGap={"sm"}
        justify={"center"}
        align={"center"}
        style={{ flex: 1 }}
      >
        <HoverContainer onClick={() => handleSwitch(1)}>
          <ComputerDesktopIcon width={16} />
        </HoverContainer>
        <HoverContainer onClick={() => handleSwitch(2)}>
          <DeviceTabletIcon width={16} />
        </HoverContainer>
        <HoverContainer onClick={() => handleSwitch(3)}>
          <DevicePhoneMobileIcon width={16} />
        </HoverContainer>
      </Flex>
      <Flex w={"200px"} justify={"flex-end"}>
        <Button
          size="xs"
          onClick={() => {
            actions.setOptions((options) => (options.enabled = !enabled));
          }}
          variant="filled"
          color={enabled ? "green" : undefined}
        >
          {enabled ? <CheckIcon width={16} /> : <PencilIcon width={16} />}
          {enabled ? "View Current" : "Edit"}
        </Button>
      </Flex>
    </Flex>
  );
};
