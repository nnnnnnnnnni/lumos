import { ApplyButton } from "@libs/Button/ApplyButton";
import { HTMLAttributes, forwardRef } from "react";

export interface CommonBannerProps extends HTMLAttributes<HTMLSpanElement>  {
  
}

export const CommonBanner = forwardRef<HTMLDivElement, CommonBannerProps>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      CommonBanner
      <ApplyButton />
    </div>
  );
});
