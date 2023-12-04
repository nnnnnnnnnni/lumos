import { useEditor } from "@craftjs/core";
import styled from "styled-components";
import { Box, Button, Flex, Tooltip } from "@mantine/core";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { HoverContainer } from "../../components/common";

export const Header = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

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
        <Flex gap={'sm'}>
          <Tooltip label="Undo" position="bottom">
            <HoverContainer
              style={{
                cursor: !canUndo ? "not-allowed" : "pointer",
                opacity: !canUndo ? 0.3 : 1,
              }}
              onClick={() => actions.history.undo()}
            >
              <ArrowUturnLeftIcon width={14}  />
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
              <ArrowUturnRightIcon width={14}  />
            </HoverContainer>
          </Tooltip>
        </Flex>
      ) : (
        <div />
      )}
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
  );
};
