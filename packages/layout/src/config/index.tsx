import {
  RectangleGroupIcon,
  StopIcon,
  ViewColumnsIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import {
  Text,
  Box,
  Section,
  Video,
  Image,
} from "../components/injects";
import { ReactNode } from "react";

export const componentList = {
  Section,
  Box,
  Text,
  Video,
  Image,
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
];
