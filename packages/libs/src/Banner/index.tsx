import { PropsWithChildren, forwardRef } from "react";
import { campaignIdProps, textProps } from "../type";
import cs from "classnames";
import styled from "styled-components";
import { Section, SectionProps } from "..";
import { getPX } from "../config/utils";
import { DEFAULT_SCREEN_DESKTOP } from "../config";
import { BannerProps } from "./meta";


const BannerDom = styled.div<BannerProps & SectionProps>`
  display: flex;
  margin: 0 auto;
  width: 100%;

  .section-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) =>
      props.containerWidth || `${getPX(DEFAULT_SCREEN_DESKTOP)}`};
    height: 100%;

    .banner-content {
    }

    .banner-kv {
      max-width: ${(props) => props?.kv?.width || "50%"};
      max-height: ${(props) => props?.kv?.height};
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const Banner = forwardRef<
  HTMLDivElement,
  PropsWithChildren<BannerProps & campaignIdProps & SectionProps>
>((props, ref) => {
  return (
    <BannerDom {...props} className={cs(props.className)} ref={ref}>
      <div className="section-container">
        <div className="banner-content">
          <div className="banner-tip">
            {props.bannerTip?.text || "banner tip"}
          </div>
          <div className="banner-duration">
            {props.bannerDuration?.text || "banner duration"}
          </div>
          <div className="banner-title">
            {props.bannerTitle?.text || "banner title"}
          </div>
          <div className="banner-description">
            {props.bannerDescription?.text || "banner description"}
          </div>
          <div className="banner-description">
            apply button
          </div>
        </div>
        <div className="banner-kv">
          <img
            src={
              props.kv?.src ||
              "https://cdn.builder.io/api/v1/image/assets%2Ffddee401a9284ab792b271538c28932d%2F7759a21e0b484757b2eb48363f40a072"
            }
          />
        </div>
      </div>
    </BannerDom>
  );
});