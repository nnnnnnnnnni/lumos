import { useNode } from "@craftjs/core";
import {
  Text as _Text,
  Image as _Image,
  Section as _Section,
  Box as _Box,
  Video as _Video,
} from "../../../../../libs/src/Basic";

export const Text = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Text ref={(ref) => ref && connect(drag(ref))} />;
};

export const Image = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Image ref={(ref) => ref && connect(drag(ref))} />;
};
export const Section = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Section ref={(ref) => ref && connect(drag(ref))} />;
};
export const Box = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Box ref={(ref) => ref && connect(drag(ref))} />;
};
export const Video = () => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <_Video ref={(ref) => ref && connect(drag(ref))} />;
};
