import { forwardRef } from "react";

export const Box = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Box
    </div>
  );
});
