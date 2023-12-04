import { forwardRef } from "react";

export const ShareCard = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      ShareCard
    </div>
  );
});
