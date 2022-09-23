import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards/Cards";
import CardContainer from "./CardContainer";

function Inventory() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Inventory & audit</h1>
      <p>
        Helping clients meet their business challenges begins with an in-depth
        understanding of the industries in which they work. That’s why KPMG LLP
        established its industry-driven structure. In fact, KPMG LLP was the
        first of the Big Four firms to organize itself along the same industry
        lines as clients.
      </p>
      <CardContainer />
      <div>
        <p>
          Some or all of the services described herein may not be permissible
          for KPMG audit clients and their affiliates or related entities.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Inventory;
