import { forwardRef } from "react";

export const ApplyButton = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      ApplyButton
    </div>
  );
});
