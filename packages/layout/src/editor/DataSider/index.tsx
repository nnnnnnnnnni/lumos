import { useEditor } from "@craftjs/core";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import classes from "../styles.module.scss";
import {
  Bars4Icon,
  BeakerIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { WrapperContainer } from "../Viewport/WrapperContainer";
import { StyleSettings } from "./StyleSettings";
import { DataSettings } from "./DataSettings";
import { HistoryList } from "./HistoryList";

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <WrapperContainer $enabled={enabled} width="300px">
      <Tabs
        variant="unstyled"
        defaultValue="tabStyle"
        classNames={classes}
        w={"300px"}
      >
        <Tabs.List grow>
          <Tabs.Tab value="tabStyle">
            <BeakerIcon width={14} />
          </Tabs.Tab>
          <Tabs.Tab value="tabData">
            <CircleStackIcon width={14} />
          </Tabs.Tab>
          <Tabs.Tab value="tabHistory">
            <Bars4Icon width={14} />
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tabStyle">
          <StyleSettings />
        </Tabs.Panel>
        <Tabs.Panel value="tabData">
          <DataSettings />
        </Tabs.Panel>
        <Tabs.Panel value="tabHistory">
          <HistoryList />
        </Tabs.Panel>
      </Tabs>
    </WrapperContainer>
  );
};
