import React from "react";
import MediaCard from "./MediaCard";
import Style from "./Cards.module.css";

function Cards() {
  return (
    (
      <div className={Style.cardContainer}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    ),
    (
      <div className={Style.cardContainer}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    )
  );
}

export default Cards;
