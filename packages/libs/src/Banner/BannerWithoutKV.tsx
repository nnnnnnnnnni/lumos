import { forwardRef } from "react";

export const BannerWithoutKV = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      BannerWithoutKV
    </div>
  );
});
