import { PropsWithChildren, forwardRef } from "react";

export const Box = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  );
});
