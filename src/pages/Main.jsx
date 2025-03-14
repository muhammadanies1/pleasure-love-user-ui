import React from "react";
import Header from "../components/molecules/headers";
import Footer from "../components/molecules/footer";
import CustomCarousel from "../components/molecules/carousel";

const Main = () => {
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
        }}
      >
        <div
          style={{
            height: "40vh",
            backgroundColor: "#f3f3f3",
            paddingLeft: "20%",
            paddingRight: "20%",
            paddingTop: "2%",
          }}
        >
          <CustomCarousel />
        </div>
        Content
      </div>
      <Footer />
    </div>
  );
};

export default Main;
