import { useEditor } from "@craftjs/core";
import { Accordion, Badge, Box, Flex, Grid, Text } from "@mantine/core";
import { componentGroupProps, componentGroup } from "../../config";
import { FC } from "react";
import { HoverContainer } from "../../components/common";

const ComponentGroup: FC<{ group: componentGroupProps["group"] }> = ({
  group,
}) => {
  const {
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <Grid gutter={'xs'}>
      {group.map((Cmp) => {
        return (
          <Grid.Col span={{ base: 6 }} key={Cmp.name}>
            <HoverContainer bg="#fafafa" p={'sm'} h={'100%'}  ref={(ref: any) => ref && create(ref, <Cmp.component />)}>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ cursor: "pointer" }}
                w={"100%"}
                h={"100%"}
              >
                <Box>{Cmp.icon}</Box>
                <Flex fz={"xs"} ta={"center"} justify={'center'} align={'center'} style={{flex: 1}}>
                  {Cmp.name}
                </Flex>
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
    <Accordion defaultValue="Basic">
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
