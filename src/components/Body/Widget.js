import "./Widget.css";

import React from "react";
import { Info, FiberManualRecord } from "@mui/icons-material";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("bossFelfo is Tech award", "Top news - 3542 readers")}
      {newsArticle("Bitcoin price is dipping", "Finance news - 596 readers")}
      {newsArticle("Demand for developers rising", "Tech news - 1239 readers")}
      {newsArticle("Decline in covid-19 case", "Health news - 349 readers")}
      {newsArticle("Felix  donates $20 million ", "General news - 351 readers")}
      {newsArticle("Erosion hit city of Kituteku", "General news - 42 readers")}
    </div>
  );
}

export default Widget;
