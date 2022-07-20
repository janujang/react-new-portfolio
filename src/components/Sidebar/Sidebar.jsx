import React from "react";
import "./Sidebar.scss";
import SidebarItem from "../SidebarItem";
import variables from "../../global.module.scss";

const Sidebar = (props) => {
  const onListItemClickedHandler = () => {
    props.onMenuOpen(!props.menuOpen);
  };
  //   console.log(variables);
  return (
    <div className={`sidebar ${props.menuOpen && "active"}`}>
      <ul>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#home"
          hoverColor={variables.homeBgColor}
        >
          Home
        </SidebarItem>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#about"
          hoverColor={variables.aboutBgColor}
        >
          About
        </SidebarItem>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#portfolio"
          hoverColor={variables.portfolioBgColor}
        >
          Portfolio
        </SidebarItem>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#experience"
          hoverColor={variables.experienceBgColor}
        >
          Experience
        </SidebarItem>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#skills"
          hoverColor={variables.skillsBgColor}
        >
          Skills
        </SidebarItem>
        <SidebarItem
          onListItemClicked={onListItemClickedHandler}
          href="#contact"
          hoverColor={variables.contactBgColor}
        >
          Contact
        </SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
