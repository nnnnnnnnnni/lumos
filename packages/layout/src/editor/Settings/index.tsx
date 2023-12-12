import { FC } from "react";
import { componentSettingProps } from "./type";
import { Stack, Accordion, Text } from "@mantine/core";
import { ComponentBasicSettings } from "./BasicSettings";

export const ComponentSettings: FC<componentSettingProps> = ({
  needBasicStyles = true,
  fields,
}) => {
  return (
    <Accordion defaultValue="CommonStyles" variant="subtle">
      {needBasicStyles && (
        <Accordion.Item value={"CommonStyles"} bg={'var(--mantine-color-default-hover)'}>
          <Accordion.Control style={{borderBottom: '1px solid var(--mantine-color-default-border)'}}>
            <Text fz={"sm"}>CommonStyles</Text>
          </Accordion.Control>
          <Accordion.Panel bg={'transparent'}>
            <ComponentBasicSettings />
          </Accordion.Panel>
        </Accordion.Item>
      )}
    </Accordion>
  );
};
