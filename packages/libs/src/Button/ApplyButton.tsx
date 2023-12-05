import { forwardRef } from "react";
import { Banner, InfoCard, Section } from "..";

export interface ApplyButtonProps {

}

export const ApplyButton = forwardRef<HTMLDivElement, ApplyButtonProps>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      ApplyButton
    </div>
  );
});
