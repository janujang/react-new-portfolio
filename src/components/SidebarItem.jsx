import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  &:hover {
    color: ${(props) => props.hoverColor || "white"};
  }
`;

const SidebarItem = (props) => {
  return (
    <li onClick={props.onListItemClicked}>
      <Anchor href={props.href} hoverColor={props.hoverColor}>
        {props.children}
      </Anchor>
    </li>
  );
};

export default SidebarItem;
