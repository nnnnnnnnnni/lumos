import { PropsWithChildren, forwardRef } from "react";
import { Box } from ".";

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  containerWidth?: string | number;
}

export const Section = forwardRef<HTMLDivElement, PropsWithChildren>(
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        <Box className="section-container">{props.children}</Box>
      </div>
    );
  }
);
