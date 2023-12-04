import { forwardRef } from "react";

export const Section = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Section
    </div>
  );
});
