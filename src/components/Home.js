import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Cards from "./Cards/Cards.js";
import Style from "./Home.module.css";
import Background from "./Background";
import ClientStories from "./ClientStories";
import Footer from "./Footer";
import MediaCard from "./Cards/MediaCard";

function Home() {
  return (
    <div>
      <ResponsiveAppBar />

      <div className={Style.Container}>
        <Background />
      </div>

      <div className={Style.Container}>
        <Cards />
      </div>
      <ClientStories />
      <Footer />
    </div>
  );
}

export default Home;
