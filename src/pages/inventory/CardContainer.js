import React from "react";
import MediaCard from "../../components/Cards/MediaCard";
import Style from "./CardContainer.module.css";

function CardContainer() {
  return (
    <div className={Style.CardContainer}>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
}

export default CardContainer;
