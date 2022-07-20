import React, { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

// import placeholder from "../../../public/assets/Placeholder.jpg";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  // const list = [
  //   { id: "featured", title: "Featured" },
  //   { id: "webapp", title: "Web App" },
  //   { id: "mobileapp", title: "Mobile App" },
  //   { id: "designs", title: "Designs" },
  // ];

  // useEffect(() => {
  //   switch (selected) {
  //     case "featured":
  //       setData(featuredPortfolio);
  //       break;
  //     case "webapp":
  //       setData(webPortfolio);
  //       break;
  //     case "mobileapp":
  //       setData(mobilePortfolio);
  //       break;
  //     case "designs":
  //       setData(designPortfolio);
  //       break;

  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item) => (
          // portfolio headings
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            onSelect={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="projectsContainer">
        {/* {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))} */}
        <PortfolioCard />

        {/* artsy portfolio */}

        {/* software portfolio */}
      </div>
    </div>
  );
};

export default Portfolio;
