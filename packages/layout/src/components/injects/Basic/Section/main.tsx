import { UserComponent, useNode, Element } from "@craftjs/core";
import { SectionProps, Section as _Section } from "../../../../../../libs/src/Basic";
import { craftProps } from "./setting";
import { Fragment } from "react";

export const Section: UserComponent<SectionProps> = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
    haveNodes: node
  }));
  
  return <_Section ref={(ref) => ref && connect(drag(ref))} {...props}> 
    <Element is={'div'} style={{width: '100%', height: '100%'}} canvas id="Section-Container"> 
      {props.children}
    </Element>
  </_Section>;
};


Section.craft = craftProps