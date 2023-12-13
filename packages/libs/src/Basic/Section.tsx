import { PropsWithChildren, forwardRef } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { convertAnyToPx, DEFAULT_SCREEN_DESKTOP } from "@utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  containerWidth?: string | number;
}

const SectionDom = styled.div<SectionProps>`
  width: 100%;
  box-sizing: border-box;

  .lumos-section-container {
    width: ${(props) =>
      convertAnyToPx(props?.containerWidth || DEFAULT_SCREEN_DESKTOP)};
    height: 100%;
    margin: 0 auto;
  }
`;

export const Section = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SectionProps>
>(({ children, className, containerWidth, ...props }, ref) => {
  return (
    <SectionDom
      {...props}
      className={classNames("lumos-section", className)}
      ref={ref}
    >
      <div className="lumos-section-container">{children}</div>
    </SectionDom>
  );
});
