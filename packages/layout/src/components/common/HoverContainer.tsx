import { Box } from "@mantine/core";
import styled from "styled-components";

export const HoverContainer = styled<any>(Box)`
  padding: 6px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;

import { forwardRef } from "react";

export const Test1 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Test1
    </div>
  );
});


export const Test2 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div {...props} ref={ref}>
      Test2
    </div>
  );
});
