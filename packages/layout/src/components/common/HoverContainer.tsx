import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";
import styled from "styled-components";

export const HoverContainer = styled(({ children, ...props }: PropsWithChildren<any>) => {
  return <Box {...props}>{children}</Box>;
})`
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