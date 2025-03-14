import React from "react";
import Header from "../components/molecules/headers";
import Footer from "../components/molecules/footer";

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
        }}
      >
        Content
      </div>
      <Footer />
    </div>
  );
};

export default Main;
