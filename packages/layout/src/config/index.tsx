import {
  RectangleGroupIcon,
  StopIcon,
  ViewColumnsIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import {
  BannerCommon,
  BannerWithVideoBg,
  BannerWithoutKV,
} from "../components/injects/Banner";
import { LinkButton, ApplyButton } from "../components/injects/Button";
import { InfoCard, ShareCard, StepsCard } from "../components/injects/Card";
import { Text, Box, Section, Video, Image } from "../components/injects/Basic";
import { ReactNode } from "react";

export const componentList = {
  BannerCommon,
  BannerWithVideoBg,
  BannerWithoutKV,
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
};

export type ComponentGroupProps = {
  name: string;
  group: {
    name: string;
    icon?: ReactNode;
    component: any;
  }[];
};

export const componentGroup = [
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
        name: "Common",
        icon: <ViewColumnsIcon width={20} />,
        component: BannerCommon,
      },
      {
        name: "with Video Background",
        icon: <ViewColumnsIcon width={20} />,
        component: BannerWithVideoBg,
      },
      {
        name: "without KV",
        icon: <ViewColumnsIcon width={20} />,
        component: BannerWithoutKV,
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
