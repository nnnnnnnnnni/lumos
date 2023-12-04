import { forwardRef } from "react";

export const Video = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Video
    </div>
  );
});
