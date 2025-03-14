import React from "react";
import Header from "../../../components/molecules/headers";
import { Footer } from "antd/es/layout/layout";
import { Image } from "antd";
import { ProductAPDS } from "../../../assets";

const ProductDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
      <div
        style={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "1%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "green",
            }}
          >
            <Image src={ProductAPDS} />
          </div>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            Anal Plug Diamond Aluminium Safe for Play
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
