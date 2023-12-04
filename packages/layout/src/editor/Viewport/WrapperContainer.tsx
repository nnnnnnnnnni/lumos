import styled from "styled-components";

export const WrapperContainer = styled.div<{ $enabled?: boolean; width?: string }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.$enabled ? `width: 0;` : props.width ? `width: ${props.width};` : `width: 300px;`)}
  ${(props) => (!props.$enabled ? `opacity: 0;` : "")}
`;
