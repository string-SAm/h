import React from "react";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";

function Warehouse() {
  return (
    <div>
      <h1>Warehouse</h1>
      <ResponsiveAppBar />
      <p>
        Helping clients meet their business challenges begins with an in-depth
        understanding of the Warehose Sevices in which they work. That’s why
        KPMG LLP established its industry-driven structure. In fact, KPMG LLP
        was the first of the Big Four firms to organize itself along the same
        industry lines as clients.
      </p>
      <Cards />
      <Footer />
    </div>
  );
}

export default Warehouse;
