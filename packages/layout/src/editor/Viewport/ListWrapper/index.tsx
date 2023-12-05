import { useEditor } from "@craftjs/core";
import { Tabs } from "@mantine/core";
import classes from "../../styles.module.scss";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { ComponentList } from "./ComponentList";
import { TreeLayer } from "./TreeLayer";
import { WrapperContainer } from "../WrapperContainer";

export const ListWrapper = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <WrapperContainer $enabled={enabled} width="250px">
      <Tabs
        variant="unstyled"
        defaultValue="tabComponent"
        classNames={classes}
        w={"250px"}
      >
        <Tabs.List grow>
          <Tabs.Tab value="tabTree">
            <ListBulletIcon width={14} />
          </Tabs.Tab>
          <Tabs.Tab value="tabComponent">
            <Squares2X2Icon width={14} />
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tabTree">
          <TreeLayer />
        </Tabs.Panel>
        <Tabs.Panel value="tabComponent">
          <ComponentList />
        </Tabs.Panel>
      </Tabs>
    </WrapperContainer>
  );
};
