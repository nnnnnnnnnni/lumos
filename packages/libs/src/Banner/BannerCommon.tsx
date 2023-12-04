import { forwardRef } from "react";

export const BannerCommon = forwardRef<HTMLDivElement, {}>(
  (props, ref) => {
    return <div {...props} ref={ref}>BannerCommon</div>;
  }
);
