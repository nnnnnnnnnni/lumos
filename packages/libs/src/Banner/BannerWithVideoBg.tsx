import { forwardRef } from "react";

export const BannerWithVideoBg = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      BannerWithVideoBg
    </div>
  );
});
