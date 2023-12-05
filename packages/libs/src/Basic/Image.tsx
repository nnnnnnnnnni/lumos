import { forwardRef } from "react";
import { Box } from ".";

export const Img = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Img
    </div>
  );
});
