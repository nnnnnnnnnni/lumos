import { PropsWithChildren, forwardRef } from "react";
import { campaignIdProps } from "../type";
import cs from "classnames";
import { Section, SectionProps } from "..";
import { BannerProps } from "./meta";

export const Banner = forwardRef<
  HTMLDivElement,
  PropsWithChildren<BannerProps & campaignIdProps & SectionProps>
>((props, ref) => {
  return (
    // <div {...props} className={cs(props.className)} ref={ref}>
    //   <div className="section-container">
    //     <div className="banner-content">
    //       <div className="banner-tip">
    //         {props.bannerTip?.text || "banner tip"}
    //       </div>
    //       <div className="banner-duration">
    //         {props.bannerDuration?.text || "banner duration"}
    //       </div>
    //       <div className="banner-title">
    //         {props.bannerTitle?.text || "banner title"}
    //       </div>
    //       <div className="banner-description">
    //         {props.bannerDescription?.text || "banner description"}
    //       </div>
    //       <div className="banner-description">
    //         {/* <Section /> */}
    //       </div>
    //     </div>
    //     <div className="banner-kv">
    //       <img
    //         src={
    //           props.kv?.src ||
    //           "https://cdn.builder.io/api/v1/image/assets%2Ffddee401a9284ab792b271538c28932d%2F7759a21e0b484757b2eb48363f40a072"
    //         }
    //       />
    //     </div>
    //   </div>
    // </div>
    'banner'
  );
});