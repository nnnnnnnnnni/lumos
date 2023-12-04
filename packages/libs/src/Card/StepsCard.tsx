import { forwardRef } from "react";

export const StepsCard = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      StepsCard
    </div>
  );
});
