import { useEditor } from "@craftjs/core";
import { Box, Button, Flex, Tooltip, Text } from "@mantine/core";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CheckIcon,
  PencilIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/20/solid";
import {
  HoverContainer,
  HoverContainerWithActiveBackground,
} from "../../components/common";
import { useCallback } from "react";
import { useEditorContainer } from "../WidthContext";
import { mediaKeys } from "../Settings/type";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const { isMobile, isDesktop, isTablet, setCurrentScreen } =
    useEditorContainer();
  const { enabled, canUndo, canRedo, actions, query } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const handleSwitch = useCallback((mode: mediaKeys) => {
    setCurrentScreen(mode);
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
        <HoverContainerWithActiveBackground
          onClick={() => handleSwitch(mediaKeys.desktop)}
          $isActive={isDesktop}
        >
          <ComputerDesktopIcon width={16} />
        </HoverContainerWithActiveBackground>
        <HoverContainerWithActiveBackground
          onClick={() => handleSwitch(mediaKeys.tablet)}
          $isActive={isTablet}
        >
          <DeviceTabletIcon width={16} />
        </HoverContainerWithActiveBackground>
        <HoverContainerWithActiveBackground
          onClick={() => handleSwitch(mediaKeys.mobile)}
          $isActive={isMobile}
        >
          <DevicePhoneMobileIcon width={16} />
        </HoverContainerWithActiveBackground>
      </Flex>
      <Flex justify={"flex-end"} gap={"sm"}>
        <Button
          size="xs"
          onClick={() => {
            console.log(query.getNodes())
          }}
          variant="filled"
        >
          <ArchiveBoxArrowDownIcon width={16} />
          <Text fz={"xs"} fw={"bold"} pl={"sm"}>
            Export Json
          </Text>
        </Button>
        <Button
          size="xs"
          onClick={() => {
            actions.setOptions((options) => (options.enabled = !enabled));
          }}
          variant="filled"
          color={enabled ? "green" : undefined}
        >
          {enabled ? <CheckIcon width={16} /> : <PencilIcon width={16} />}
          <Text fz={"xs"} fw={"bold"} pl={"sm"}>
            {enabled ? "View Current" : "Edit"}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
