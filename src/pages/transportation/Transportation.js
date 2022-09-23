import React from "react";
import Cards from "../../components/Cards/Cards";
import DetailCard from "../../components/DetailCard";
import Footer from "../../components/Footer";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Style from "./Transportation.module.css";

function Transportation() {
  return (
    <div className={Style.CardContainer}>
      <ResponsiveAppBar />
      <h1>Transportation</h1>
      <p>
        KPMG's multi-disciplinary approach and deep, practical industry
        knowledge help clients meet challenges and respond to opportunities.
      </p>
      <div className={Style.Cards}>
        <Cards />
        <Cards />
      </div>
      <DetailCard />
      <Footer />
    </div>
  );
}

export default Transportation;
