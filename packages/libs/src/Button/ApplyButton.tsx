import { forwardRef } from "react";

export interface ApplyButtonProps {}

export const ApplyButton = forwardRef<HTMLDivElement, ApplyButtonProps>(
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        ApplyButton
      </div>
    );
  }
);
