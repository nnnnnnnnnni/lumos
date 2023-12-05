import {
  RectangleGroupIcon,
  StopIcon,
  ViewColumnsIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import {
  Banner,
  LinkButton,
  ApplyButton,
  InfoCard,
  ShareCard,
  StepsCard,
  Text,
  Box,
  Section,
  Video,
  Image,
} from "../components/injects";
import { ReactNode } from "react";

export const componentList = {
  ShareCard,
  Section,
  Banner,
  Box,
  Text,
  Video,
  Image,
  InfoCard,
  StepsCard,
  LinkButton,
  ApplyButton,
};

export type componentGroupProps = {
  name: string;
  group: {
    name: string;
    icon?: ReactNode;
    component: any;
  }[];
};

export const componentGroup: componentGroupProps[] = [
  {
    name: "Basic",
    group: [
      {
        name: "Text",
        icon: <RectangleGroupIcon width={20} />,
        component: Text,
      },
      {
        name: "Box",
        icon: <RectangleGroupIcon width={20} />,
        component: Box,
      },
      {
        name: "Section",
        icon: <RectangleGroupIcon width={20} />,
        component: Section,
      },
      {
        name: "Video",
        icon: <RectangleGroupIcon width={20} />,
        component: Video,
      },
      {
        name: "Image",
        icon: <RectangleGroupIcon width={20} />,
        component: Image,
      },
    ],
  },
  {
    name: "Banner",
    group: [
      {
        name: "Banner",
        icon: <ViewColumnsIcon width={20} />,
        component: Banner,
      },
    ],
  },
  {
    name: "Button",
    group: [
      {
        name: "Link Button",
        icon: <StopIcon width={20} />,
        component: LinkButton,
      },
      {
        name: "Apply Button",
        icon: <StopIcon width={20} />,
        component: ApplyButton,
      },
    ],
  },
  {
    name: "Card",
    group: [
      {
        name: "Info Card",
        icon: <WindowIcon width={20} />,
        component: InfoCard,
      },
      {
        name: "Share Card",
        icon: <WindowIcon width={20} />,
        component: ShareCard,
      },
      {
        name: "Steps Card",
        icon: <WindowIcon width={20} />,
        component: StepsCard,
      },
    ],
  },
];
