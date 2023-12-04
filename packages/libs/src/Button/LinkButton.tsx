import { forwardRef } from "react";

export const LinkButton = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      LinkButton
    </div>
  );
});
