import React from "react";
import Header from "../../../molecules/headers";
import Footer from "../../../molecules/footer";

const MainLayouts = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayouts;
