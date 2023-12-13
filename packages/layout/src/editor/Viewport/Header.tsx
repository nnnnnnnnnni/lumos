import { useEditor, useNode } from "@craftjs/core";
import { Box, Button, Flex, Tooltip } from "@mantine/core";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CheckIcon,
  PencilIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/20/solid";
import { HoverContainer, HoverContainerWithActiveBackground } from "../../components/common";
import { useCallback } from "react";
import { DEFAULT_SCREEN_MOBILE, DEFAULT_SCREEN_TABLET } from "@utils"
import { useEditorContainer } from "../WidthContext";

export const Header = () => {
  const { width, setWidth } = useEditorContainer();
  const { enabled, canUndo, canRedo, actions } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  const handleSwitch = useCallback((mode: number) => {
    if(mode === 1) {
      setWidth("100%");
    } else if(mode === 2) {
      setWidth(DEFAULT_SCREEN_TABLET);
    } else {
      setWidth(DEFAULT_SCREEN_MOBILE);
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
        <HoverContainerWithActiveBackground onClick={() => handleSwitch(1)} $isActive={width === '100%'}>
          <ComputerDesktopIcon width={16} />
        </HoverContainerWithActiveBackground>
        <HoverContainerWithActiveBackground onClick={() => handleSwitch(2)} $isActive={width === DEFAULT_SCREEN_TABLET}>
          <DeviceTabletIcon width={16} />
        </HoverContainerWithActiveBackground>
        <HoverContainerWithActiveBackground onClick={() => handleSwitch(3)} $isActive={width === DEFAULT_SCREEN_MOBILE}>
          <DevicePhoneMobileIcon width={16} />
        </HoverContainerWithActiveBackground>
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
