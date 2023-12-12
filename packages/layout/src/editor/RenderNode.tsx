import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { ArrowUpIcon, ArrowsPointingInIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef, useCallback, createElement } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

const Btn = styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export const RenderNode = ({ render }: any) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));

  const {
    data
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    data: node.data
  }));

  return (
    <>
      {render}
    </>
  );
};
