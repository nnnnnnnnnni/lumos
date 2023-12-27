import { ApplyButton } from "@libs/Button/ApplyButton";
import { HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

export interface CommonBannerProps extends HTMLAttributes<HTMLSpanElement> {}

const CommonBannerDom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 150%;
  gap: 20px;
  max-width: 1200px;
  width: 100%;

  & > .banner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > .banner-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > .banner-desc {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CommonBanner = forwardRef<HTMLDivElement, CommonBannerProps>(
  (props, ref) => {
    return (
      <CommonBannerDom {...props} ref={ref}>
        <div className="banner-content">
          <div className="banner-duration">Jan 1 2024 - Jan 22 2024, midnight</div>
          <div className="banner-title">title</div>
          <div className="banner-desc">desc</div>
          <ApplyButton />
        </div>
        <img src="https://placehold.co/500x500?text=Preview" alt="banner" />
      </CommonBannerDom>
    );
  }
);
