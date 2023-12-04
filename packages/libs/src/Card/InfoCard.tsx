import { forwardRef } from "react";

export const InfoCard = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      InfoCard
    </div>
  );
});
