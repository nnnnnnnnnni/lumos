import { forwardRef } from "react";

export const Text = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Text
    </div>
  );
});
