import React from "react";
import "./Products.css";
import Iphone from "../../../Assets/Product_Imgs/juri.png";
import Client from "../../../Assets/Product_Imgs/client.png";
import Login from "../../../Assets/Product_Imgs/login.png";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - Valsco</title>
        <meta
          name="description"
          content="Discover our range of innovative products designed to enhance your experience. For all your software solutions, explore the future with Valsco."
        />
        <link rel="canonical" href="/products" />
      </Helmet>
      <section id="products" className="hero_products">
        <div className="iphone1">
          <img className="mock1" src={Iphone} alt="" />
        </div>
        <div className="iphone2">
          <img className="mock1" src={Client} alt="" />
        </div>
        <div className="iphone3">
          <img className="mock1" src={Login} alt="" />
        </div>
      </section>
    </>
  );
};

export default Products;
