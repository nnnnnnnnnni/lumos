import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Text, Box, Section, Video, Image, CommonBanner, ApplyButton } from "../components/injects";
import { ReactNode } from "react";
import { Options, UserComponent } from "@craftjs/core";

export const componentList: Options['resolver'] = {
  Section,
  Box,
  Text,
  Video,
  Image,
  CommonBanner,
  ApplyButton
};

export type componentGroupProps = {
  name: string;
  group: {
    name: string;
    icon?: ReactNode;
    component: UserComponent;
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
    name: "Banners",
    group: [
      {
        name: "Common Banner",
        icon: <RectangleGroupIcon width={20} />,
        component: CommonBanner,
      },
    ],
  },
  {
    name: "Button",
    group: [
      {
        name: "Apply Banner",
        icon: <RectangleGroupIcon width={20} />,
        component: ApplyButton,
      },
    ],
  },
];
