import { useEditor } from "@craftjs/core";
import { Text, Flex, Box } from "@mantine/core";
import { FC, PropsWithChildren, createElement } from "react";
import { ComponentSettings } from "../ComponentSettings";

const Tip: FC<PropsWithChildren<{ text?: string }>> = ({ text, children }) => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"100%"}
      direction={"column"}
      ta={"center"}
      p={"lg"}
      gap={"md"}
    >
      <Text fw={"bold"}>
        {text}
        {children}
      </Text>
    </Flex>
  );
};

export const StyleSettings = () => {
  const { active, related, custom, state } = useEditor((state, query) => {
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId &&
        state.nodes[currentlySelectedNodeId]?.related,
      custom:
        currentlySelectedNodeId &&
        state.nodes[currentlySelectedNodeId]?.data?.custom,
      state: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId],
    };
  });

  return (
    <Box>
      {active ? (
        <>
          {related?.settings ? (
            // createElement(related.setting, {settings: custom.settings})
            <related.settings custom={custom} />
          ) : (
            <Tip>This Component can't custom setting</Tip>
          )}
        </>
      ) : (
        <Tip>Click on a component to start editing.</Tip>
      )}
      
    </Box>
  );
};
