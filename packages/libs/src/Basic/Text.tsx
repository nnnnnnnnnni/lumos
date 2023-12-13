import { CSSProperties, HTMLAttributes, forwardRef } from "react";

export interface TextProps extends HTMLAttributes<HTMLSpanElement>  {
  
}

export const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Text
    </div>
  );
});
