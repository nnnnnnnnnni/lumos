import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { ArrowUpIcon, ArrowsPointingInIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef, useCallback } from 'react';
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
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector('.craftjs-renderer')
      .addEventListener('scroll', scroll);

    return () => {
      document
        .querySelector('.craftjs-renderer')
        .removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
                padding: '4px 4px',
                color: '#fff',
                background: '#000',
                position: 'absolute',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable ? (
                <Btn className="mr-2 cursor-move" style={{cursor: 'move', marginRight: '8px'}} ref={drag}>
                  <ArrowsPointingInIcon width={16} />
                </Btn>
              ) : null}
              {id !== ROOT_NODE && (
                <Btn
                  style={{cursor: 'pointer', marginRight: '4px'}}
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <ArrowUpIcon width={16} />
                </Btn>
              )}
              {deletable ? (
                <Btn
                  style={{cursor: 'pointer'}}
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <TrashIcon width={16} />
                </Btn>
              ) : null}
            </IndicatorDiv>,
            document.querySelector('.page-container')
          )
        : null}
      {render}
    </>
  );
};
