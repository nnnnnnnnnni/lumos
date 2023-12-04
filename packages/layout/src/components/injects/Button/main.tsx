import { useNode } from "@craftjs/core";
import {
  LinkButton as _LinkButton,
  ApplyButton as _ApplyButton,
} from "../../../../../libs/src/Button";

export const ApplyButton = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_ApplyButton ref={(ref) => ref && connect(drag(ref))} />;
};

export const LinkButton = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_LinkButton ref={(ref) => ref && connect(drag(ref))} />;
};
