import { HTMLAttributes, forwardRef } from "react";

export interface ApplyButtonProps extends HTMLAttributes<HTMLSpanElement>  {
  
}

export const ApplyButton = forwardRef<HTMLDivElement, ApplyButtonProps>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      <button>ApplyButton</button>
      
    </div>
  );
});
