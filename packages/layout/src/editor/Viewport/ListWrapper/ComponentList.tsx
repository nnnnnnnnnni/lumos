import { useEditor } from "@craftjs/core";
import { Accordion, Badge, Box, Flex, Grid, Text } from "@mantine/core";
import { ComponentGroupProps, componentGroup } from "../../../config";
import { FC } from "react";
import { HoverContainer } from "../../../components/common";

const ComponentGroup: FC<{ group: ComponentGroupProps["group"] }> = ({
  group,
}) => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Grid gutter={'xs'}>
      {group.map((Cmp) => {
        return (
          <Grid.Col span={{ base: 6 }} key={Cmp.name}>
            <HoverContainer bg="#fafafa" p={'sm'}  ref={(ref: any) => ref && create(ref, <Cmp.component />)}>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ cursor: "pointer" }}
              >
                <Box>{Cmp.icon}</Box>
                <Text fz={"xs"} ta={"center"}>
                  {Cmp.name}
                </Text>
              </Flex>
            </HoverContainer>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export const ComponentList = () => {
  return (
    <Accordion defaultValue="Banner">
      {componentGroup.map((component) => {
        return (
          <Accordion.Item key={component.name} value={component.name}>
            <Accordion.Control>
              <Flex justify={"flex-start"} align={"center"} gap={'xs'}>
                <Text fz={"sm"}>{component.name}</Text>
                <Badge size="xs">{component.group.length}</Badge>
              </Flex>
            </Accordion.Control>
            <Accordion.Panel>
              <ComponentGroup group={component.group} />
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
