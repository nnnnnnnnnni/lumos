import { campaignIdProps, textProps } from "../type";
import { SectionProps } from "..";
import { DEFAULT_SCREEN_DESKTOP } from "../config";

export interface BannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  direction?: "left-to-right" | "right-to-left";
  bannerTitle?: textProps;
  bannerDescription?: textProps;
  bannerTip?: textProps;
  bannerDuration?: textProps;
  kv?: {
    src: string;
    width?: string;
    height?: string;
  };
}

export type _BannerProps = BannerProps & campaignIdProps & SectionProps;

export const defaultProps: _BannerProps = {
  containerWidth: DEFAULT_SCREEN_DESKTOP,
  direction: "left-to-right",
  bannerTitle: {
    text: "banner title",
    key: "bannerTitle",
    style: {
      desktop: {
        color: "#000000",
        fontSize: "56px",
        lineHeight: "64px",
        fontWeight: 700,
        margin: ["0px", "0px", "24px", "0px"],
      },
      tablet: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 500,
        margin: ["0px", "0px", "12px", "0px"],
      },
      mobile: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 500,
        margin: ["0px", "0px", "12px", "0px"],
      },
    },
  },
  bannerDescription: {
    text: "banner description",
    key: "bannerDescription",
    style: {
      desktop: {
        color: "#000000",
        fontSize: "56px",
        lineHeight: "64px",
        fontWeight: 700,
        margin: ["0px", "0px", "24px", "0px"],
      },
      tablet: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 500,
        margin: ["0px", "0px", "12px", "0px"],
      },
      mobile: {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 500,
        margin: ["0px", "0px", "12px", "0px"],
      },
    },
  },
};
