import { forwardRef } from "react";

export const Img = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Img
    </div>
  );
});
