import { PropsWithChildren, forwardRef } from "react";
import styled from "styled-components";
import { DEFAULT_SCREEN_DESKTOP } from "../config";
import { getPX } from "../config/utils";

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  containerWidth?: string | number;
}

const SectionDom = styled.div<SectionProps>`
  margin: 0 auto;
  width: 100%;

  .section-container {
    width: ${(props) => props.containerWidth || getPX(DEFAULT_SCREEN_DESKTOP)};
    margin: 0 auto;
  }
`;

export const Section = forwardRef<HTMLDivElement, PropsWithChildren>(
  (props, ref) => {
    return (
      <SectionDom {...props} ref={ref}>
        <div className="section-container">{props.children}</div>
      </SectionDom>
    );
  }
);
