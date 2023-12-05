import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

export const Box = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});
