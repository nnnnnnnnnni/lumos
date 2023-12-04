import { forwardRef } from "react";

export const Image = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Image
    </div>
  );
});
