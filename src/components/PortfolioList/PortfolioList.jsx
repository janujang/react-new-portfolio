import React from "react";
import "./PortfolioList.scss";

//portfolio headings
const PortfolioList = (props) => {
  return (
    <li
      className={`portfolioList ${props.active ? "active" : ""}`}
      onClick={() => props.onSelect(props.id)}
    >
      {props.title}
    </li>
  );
};

export default PortfolioList;
