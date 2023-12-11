import { Box } from "@mantine/core";
import styled from "styled-components";

export const HoverContainer = styled<any>(Box)`
  padding: 6px;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;