import { useNode } from "@craftjs/core";
import {
  InfoCard as _InfoCard,
  ShareCard as _ShareCard,
  StepsCard as _StepsCard,
} from "../../../../../libs/src/Card";

export const InfoCard = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_InfoCard ref={(ref) => ref && connect(drag(ref))} />;
};

export const ShareCard = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_ShareCard ref={(ref) => ref && connect(drag(ref))} />;
};

export const StepsCard = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_StepsCard ref={(ref) => ref && connect(drag(ref))} />;
};
